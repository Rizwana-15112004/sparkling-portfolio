import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle Array - lightweight for 60-120 FPS
    const particleCount = Math.min(Math.floor((width * height) / 22000), 50);
    const particles: Particle[] = [];

    const colors = [
      "99, 102, 241",  // Indigo (#6366f1)
      "139, 92, 246",  // Violet (#8b5cf6)
      "6, 182, 212",   // Cyan (#06b6d4)
      "16, 185, 129",  // Emerald (#10b981)
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Smooth Lerp Mouse Tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.008;

      // Mouse Lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Fill Obsidian Base Background (#09090b)
      ctx.fillStyle = "#080911";
      ctx.fillRect(0, 0, width, height);

      // 1. Render Soft Ambient Aurora Glowing Blobs
      const auroraX1 = width * 0.2 + Math.sin(time * 0.8) * 120;
      const auroraY1 = height * 0.3 + Math.cos(time * 0.6) * 90;
      const grad1 = ctx.createRadialGradient(auroraX1, auroraY1, 0, auroraX1, auroraY1, width * 0.45);
      grad1.addColorStop(0, "rgba(99, 102, 241, 0.14)");
      grad1.addColorStop(0.5, "rgba(139, 92, 246, 0.06)");
      grad1.addColorStop(1, "rgba(8, 9, 17, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const auroraX2 = width * 0.8 - Math.cos(time * 0.7) * 120;
      const auroraY2 = height * 0.7 + Math.sin(time * 0.9) * 90;
      const grad2 = ctx.createRadialGradient(auroraX2, auroraY2, 0, auroraX2, auroraY2, width * 0.4);
      grad2.addColorStop(0, "rgba(6, 182, 212, 0.12)");
      grad2.addColorStop(0.5, "rgba(16, 185, 129, 0.05)");
      grad2.addColorStop(1, "rgba(8, 9, 17, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Soft Interactive Cursor Glow Spotlight
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 1.8);
      mouseGrad.addColorStop(0, "rgba(139, 92, 246, 0.18)");
      mouseGrad.addColorStop(0.4, "rgba(99, 102, 241, 0.08)");
      mouseGrad.addColorStop(1, "rgba(8, 9, 17, 0)");
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Render 60 FPS Particle Stars & Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 130) * 0.16;
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-500"
    />
  );
};
