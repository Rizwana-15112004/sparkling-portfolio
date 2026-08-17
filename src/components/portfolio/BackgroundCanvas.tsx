import { useEffect, useRef } from "react";

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

interface StarParticle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
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

    let time = 0;
    const sparks: SparkParticle[] = [];
    const sparkColors = [
      "rgba(0, 242, 254, ",   // Cyber Cyan
      "rgba(168, 85, 247, ",  // Ultraviolet
      "rgba(244, 63, 94, ",   // Laser Pink
      "rgba(0, 230, 118, ",   // Emerald
      "rgba(251, 191, 36, ",  // Amber Gold
    ];

    // Starfield galaxy particles
    const starCount = Math.min(Math.floor((width * height) / 15000), 70);
    const stars: StarParticle[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.25 + 0.05,
    }));

    const mouse = { x: width / 2, y: height / 2, px: width / 2, py: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dist = Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py);
      if (dist > 3) {
        // Spawn 2-4 interactive laser sparks on mouse move
        const sparkCount = Math.min(Math.floor(dist / 4), 4);
        for (let i = 0; i < sparkCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 3 + 1;
          sparks.push({
            x: mouse.x,
            y: mouse.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: Math.random() * 3 + 1.5,
            alpha: 0.9,
            color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
          });
        }
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const render = () => {
      time += 0.015;

      // Base Deep Space Midnight Navy Fill (#040615)
      ctx.fillStyle = "#040615";
      ctx.fillRect(0, 0, width, height);

      // 1. Render Plasma Aurora Waves
      ctx.save();
      for (let w = 0; w < 2; w++) {
        ctx.beginPath();
        const waveYOffset = height * (0.3 + w * 0.35);
        ctx.moveTo(0, waveYOffset);

        for (let x = 0; x <= width; x += 20) {
          const y =
            waveYOffset +
            Math.sin(x * 0.004 + time * (1 + w * 0.3)) * 45 +
            Math.cos(x * 0.008 - time * 0.8) * 35;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, waveYOffset - 100, width, waveYOffset + 200);
        if (w === 0) {
          grad.addColorStop(0, "rgba(168, 85, 247, 0.16)");  // Ultraviolet
          grad.addColorStop(0.5, "rgba(0, 242, 254, 0.12)"); // Cyan
          grad.addColorStop(1, "rgba(4, 6, 21, 0)");
        } else {
          grad.addColorStop(0, "rgba(244, 63, 94, 0.14)");   // Laser Pink
          grad.addColorStop(0.5, "rgba(0, 230, 118, 0.08)"); // Emerald
          grad.addColorStop(1, "rgba(4, 6, 21, 0)");
        }
        ctx.fillStyle = grad;
        ctx.fill();
      }
      ctx.restore();

      // 2. Render Starfield Galaxy
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        const pulseAlpha = star.alpha * (0.6 + Math.sin(time * 2 + i) * 0.4);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(0, 242, 254, 0.8)";
        ctx.fill();
      }

      // 3. Render Mouse Laser Spark Burst Particles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.96;
        s.vy *= 0.96;
        s.alpha -= 0.025;
        s.radius *= 0.96;

        ctx.beginPath();
        ctx.arc(s.x, s.y, Math.max(0.5, s.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${s.alpha})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `${s.color}1)`;
        ctx.fill();

        if (s.alpha <= 0 || s.radius <= 0.2) {
          sparks.splice(i, 1);
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
