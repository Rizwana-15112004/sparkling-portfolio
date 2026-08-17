import { useEffect, useRef } from "react";

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  colorType: "primary" | "accent";
}

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let lastTime = performance.now();
    const fpsInterval = 1000 / 60; // 60 FPS cap

    // 40-60 nodes for subtle low-density neural field
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 55);
    const nodes: NodeParticle[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.2,
      baseAlpha: Math.random() * 0.12 + 0.08, // 8-20% opacity
      colorType: Math.random() > 0.4 ? "primary" : "accent",
    }));

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);

      // Tab visibility check — pause rendering when hidden
      if (document.visibilityState === "hidden") return;

      const elapsed = now - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = now - (elapsed % fpsInterval);

      // Clear Canvas to transparent dark background
      ctx.clearRect(0, 0, width, height);

      // Render Nodes & Connecting Neural Lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Motion physics
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Wrap around screen boundaries
        if (n1.x < 0) n1.x = width;
        if (n1.x > width) n1.x = 0;
        if (n1.y < 0) n1.y = height;
        if (n1.y > height) n1.y = 0;

        // Mouse Repel Physics
        const mdx = n1.x - mouse.x;
        const mdy = n1.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 140 && mdist > 0) {
          const force = (140 - mdist) / 140 * 1.2;
          n1.x += (mdx / mdist) * force;
          n1.y += (mdy / mdist) * force;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 180) {
            const lineAlpha = (1 - dist / 180) * 0.15; // Max 15% opacity
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);

            // Use strictly purple (--primary) or cyan (--accent)
            const lineColor = n1.colorType === "primary" ? `rgba(168, 85, 247, ${lineAlpha})` : `rgba(0, 242, 254, ${lineAlpha})`;
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Render Node Point
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        const nodeColor = n1.colorType === "primary" ? `rgba(168, 85, 247, ${n1.baseAlpha})` : `rgba(0, 242, 254, ${n1.baseAlpha})`;
        ctx.fillStyle = nodeColor;
        ctx.fill();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-500"
    />
  );
};
