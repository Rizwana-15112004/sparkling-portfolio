import { useEffect, useRef } from "react";

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

    // Grid Mesh parameters
    const rows = 28;
    const cols = 42;
    let time = 0;

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 200,
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Particle Starfield background
    const starCount = 60;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.2 + 0.05,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      time += 0.015;

      // 1. Render Floating Starfield Nebula
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * (0.6 + Math.sin(time + i) * 0.4)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(139, 92, 246, 0.8)";
        ctx.fill();
      }

      // 2. Render 3D Fluid Wave Mesh
      const gridWidth = width * 1.4;
      const gridHeight = height * 1.2;
      const startX = (width - gridWidth) / 2;
      const startY = height * 0.2;

      const stepX = gridWidth / cols;
      const stepY = gridHeight / rows;

      const gridPoints: { x: number; y: number; z: number; color: string }[][] = [];

      for (let r = 0; r <= rows; r++) {
        const rowPoints = [];
        for (let c = 0; c <= cols; c++) {
          const baseX = startX + c * stepX;
          const baseY = startY + r * stepY;

          // 3D Undulating Sine Wave math
          const distFromCenter = Math.hypot(c - cols / 2, r - rows / 2);
          const wave1 = Math.sin(c * 0.25 + time) * 18;
          const wave2 = Math.cos(r * 0.25 + time * 1.2) * 18;
          const wave3 = Math.sin((c + r) * 0.15 + time) * 12;

          // Mouse Liquid Ripple displacement
          const dxMouse = mouse.x - baseX;
          const dyMouse = mouse.y - baseY;
          const distMouse = Math.hypot(dxMouse, dyMouse);
          let mouseFactor = 0;
          if (distMouse < mouse.radius) {
            mouseFactor = (1 - distMouse / mouse.radius) * 35;
          }

          const z = wave1 + wave2 + wave3 - mouseFactor;

          // Perspective tilt projection
          const perspectiveScale = 1 + (r / rows) * 0.3;
          const projX = (baseX - width / 2) * perspectiveScale + width / 2;
          const projY = baseY + z * 0.8;

          // Dynamic HSL Color based on height and position
          const hue = 260 + Math.sin(time + distFromCenter * 0.1) * 45; // Violet to Cyan
          const color = `hsl(${hue}, 95%, ${65 + Math.sin(z * 0.05) * 15}%)`;

          rowPoints.push({ x: projX, y: projY, z, color });
        }
        gridPoints.push(rowPoints);
      }

      // Draw Grid Connections (Lines)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p1 = gridPoints[r][c];
          const p2 = gridPoints[r][c + 1];
          const p3 = gridPoints[r + 1][c];

          // Horizontal line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          const alphaHoriz = Math.max(0.04, 0.25 - (r / rows) * 0.18);
          ctx.strokeStyle = `rgba(139, 92, 246, ${alphaHoriz})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();

          // Vertical line
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          const alphaVert = Math.max(0.04, 0.25 - (r / rows) * 0.18);
          ctx.strokeStyle = `rgba(6, 182, 212, ${alphaVert})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();

          // Draw glowing node particles at intersections
          if ((r + c) % 2 === 0) {
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, Math.max(1, 2 + p1.z * 0.05), 0, Math.PI * 2);
            ctx.fillStyle = p1.color;
            ctx.shadowBlur = 12;
            ctx.shadowColor = p1.color;
            ctx.fill();
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
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-1000"
    />
  );
};
