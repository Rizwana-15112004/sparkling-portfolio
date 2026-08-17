import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 1. Floating Glowing Light Orbs
    const orbs: Orb[] = [
      { x: width * 0.2, y: height * 0.25, vx: 0.3, vy: 0.2, radius: 320, color: "rgba(139, 92, 246, 0.22)" },   // Violet
      { x: width * 0.8, y: height * 0.35, vx: -0.25, vy: 0.3, radius: 280, color: "rgba(6, 182, 212, 0.20)" },  // Cyan
      { x: width * 0.4, y: height * 0.75, vx: 0.2, vy: -0.25, radius: 300, color: "rgba(236, 72, 153, 0.18)" }, // Pink
      { x: width * 0.7, y: height * 0.8, vx: -0.3, vy: -0.2, radius: 260, color: "rgba(16, 185, 129, 0.16)" },  // Emerald
    ];

    // 2. Interactive Constellation Nodes
    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
    const particles: Particle[] = [];
    const colors = [
      "139, 92, 246", // Violet
      "6, 182, 212",  // Cyan
      "236, 72, 153", // Pink
      "16, 185, 129", // Emerald
      "245, 158, 11", // Amber
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1,
        alpha: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // 3. Eased Lerp Mouse Tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 190,
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse Lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      // Base Rich Indigo Midnight Fill (#0b0d1b)
      ctx.fillStyle = "#0b0d1b";
      ctx.fillRect(0, 0, width, height);

      // Render Floating Light Orbs
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "rgba(11, 13, 27, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // Render Interactive Mouse Spotlight Halo
      const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 1.6);
      mouseGrad.addColorStop(0, "rgba(139, 92, 246, 0.22)");
      mouseGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.10)");
      mouseGrad.addColorStop(1, "rgba(11, 13, 27, 0)");
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Constellation Network
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse attraction physics
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < mouse.radius) {
          const angle = Math.atan2(dyMouse, dxMouse);
          const force = (mouse.radius - distMouse) / mouse.radius;
          p1.x += Math.cos(angle) * force * 0.8;
          p1.y += Math.sin(angle) * force * 0.8;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${p1.color}, 0.8)`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 135) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 135) * 0.22;
            ctx.strokeStyle = `rgba(${p1.color}, ${lineAlpha})`;
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
