import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // 3D depth perspective
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
  alpha: number;
}

interface TrailPoint {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  color: string;
}

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      "rgba(139, 92, 246, ", // Violet
      "rgba(6, 182, 212, ",   // Cyan
      "rgba(236, 72, 153, ",  // Magenta
      "rgba(16, 185, 129, ",  // Emerald
      "rgba(255, 255, 255, ", // Star white
    ];

    const particleCount = Math.min(Math.floor((width * height) / 14000), 90);
    const particles: Particle[] = [];
    const trailPoints: TrailPoint[] = [];

    // Create 3D particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 1000 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.3,
      });
    }

    const mouse = { x: width / 2, y: height / 2, px: width / 2, py: height / 2, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Add mouse comet trail point
      if (Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py) > 4) {
        trailPoints.push({
          x: mouse.x,
          y: mouse.y,
          radius: Math.random() * 4 + 2,
          alpha: 0.8,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    const fov = 350;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render mouse comet trail
      for (let i = trailPoints.length - 1; i >= 0; i--) {
        const pt = trailPoints[i];
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${pt.color}${pt.alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `${pt.color}1)`;
        ctx.fill();

        pt.alpha -= 0.025;
        pt.radius *= 0.95;
        if (pt.alpha <= 0 || pt.radius <= 0.2) {
          trailPoints.splice(i, 1);
        }
      }

      // Render 3D particles & connections
      const screenCenterX = width / 2;
      const screenCenterY = height / 2;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // 3D Motion
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.z += p1.vz;

        if (p1.z <= 1) p1.z = 1000;
        if (p1.z > 1000) p1.z = 1;

        // 3D Perspective Projection
        const scale = fov / (fov + p1.z);
        const projX = p1.x * scale + screenCenterX;
        const projY = p1.y * scale + screenCenterY;

        // Screen boundary wrapping
        if (projX < 0 || projX > width) p1.vx *= -1;
        if (projY < 0 || projY > height) p1.vy *= -1;

        // Mouse magnetic repulsion
        const dxMouse = mouse.x - projX;
        const dyMouse = mouse.y - projY;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < mouse.radius) {
          const angle = Math.atan2(dyMouse, dxMouse);
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x -= Math.cos(angle) * force * 4;
          p1.y -= Math.sin(angle) * force * 4;
        }

        // Draw Projected 3D Particle
        const renderRadius = Math.max(0.5, p1.radius * scale * 1.5);
        ctx.beginPath();
        ctx.arc(projX, projY, renderRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${p1.alpha * scale})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `${p1.color}0.8)`;
        ctx.fill();

        // Connect nearby projected nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const scale2 = fov / (fov + p2.z);
          const projX2 = p2.x * scale2 + screenCenterX;
          const projY2 = p2.y * scale2 + screenCenterY;

          const dx = projX - projX2;
          const dy = projY - projY2;
          const dist = Math.hypot(dx, dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(projX2, projY2);
            const lineAlpha = (1 - dist / 120) * 0.25 * scale;
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.7 * scale;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-1000"
    />
  );
};
