import { useEffect, useRef } from "react";

interface TechObject {
  label: string;
  subtext?: string;
  x: number;
  y: number;
  z: number; // Depth factor (0.3 foreground to 1.8 background)
  vx: number;
  vy: number;
  rot: number;
  rotSpeed: number;
  color: string;
  glowColor: string;
  size: number;
}

interface SparkParticle {
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

    let time = 0;
    const sparks: SparkParticle[] = [];

    // Tech objects related to Rizwana's Full Stack & AI portfolio
    const techItems = [
      { label: "<React />", subtext: "Frontend Core", color: "#00f2fe", glowColor: "rgba(0, 242, 254, 0.8)" },
      { label: "{ JSON }", subtext: "REST API Data", color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.8)" },
      { label: "⚡ Vertex AI", subtext: "Gemini 1.5", color: "#fbbf24", glowColor: "rgba(251, 191, 36, 0.8)" },
      { label: "( Python )", subtext: "ML & Backend", color: "#00e676", glowColor: "rgba(0, 230, 118, 0.8)" },
      { label: "01010101", subtext: "Binary Matrix", color: "#f43f5e", glowColor: "rgba(244, 63, 94, 0.8)" },
      { label: "SQL & DB", subtext: "PostgreSQL", color: "#00f2fe", glowColor: "rgba(0, 242, 254, 0.8)" },
      { label: ">_ terminal", subtext: "Node / Express", color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.8)" },
      { label: "⚡ Gemini API", subtext: "LLM Agent", color: "#fbbf24", glowColor: "rgba(251, 191, 36, 0.8)" },
      { label: "TypeScript", subtext: "Strict Types", color: "#00e676", glowColor: "rgba(0, 230, 118, 0.8)" },
      { label: "Tailwind", subtext: "Cyber UI", color: "#f43f5e", glowColor: "rgba(244, 63, 94, 0.8)" },
      { label: "{ ...Props }", subtext: "Component", color: "#00f2fe", glowColor: "rgba(0, 242, 254, 0.8)" },
      { label: "git commit", subtext: "Vercel / CI", color: "#a855f7", glowColor: "rgba(168, 85, 247, 0.8)" },
    ];

    // Instantiate 3D Floating Tech Objects
    const techObjects: TechObject[] = techItems.map((item, idx) => {
      const z = 0.4 + (idx % 4) * 0.35; // depth layer
      return {
        ...item,
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * (0.6 / z),
        vy: (Math.random() - 0.5) * (0.6 / z),
        rot: (Math.random() - 0.5) * 0.3,
        rotSpeed: (Math.random() - 0.5) * 0.005,
        size: (18 / z) + 6,
      };
    });

    const mouse = { x: width / 2, y: height / 2, px: width / 2, py: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.px = mouse.x;
      mouse.py = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dist = Math.hypot(mouse.x - mouse.px, mouse.y - mouse.py);
      if (dist > 3) {
        // Laser spark particles on mouse move
        for (let i = 0; i < 2; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2.5 + 1;
          sparks.push({
            x: mouse.x,
            y: mouse.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: Math.random() * 2.5 + 1,
            alpha: 0.95,
            color: itemColor(i),
          });
        }
      }
    };

    const itemColor = (i: number) => {
      const colors = ["rgba(0, 242, 254, ", "rgba(168, 85, 247, ", "rgba(244, 63, 94, ", "rgba(0, 230, 118, "];
      return colors[i % colors.length];
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

      // Base Midnight Deep Space Background
      ctx.fillStyle = "#040615";
      ctx.fillRect(0, 0, width, height);

      // 1. Cinematic Fluid Plasma Aurora Waves
      ctx.save();
      for (let w = 0; w < 2; w++) {
        ctx.beginPath();
        const waveYOffset = height * (0.28 + w * 0.38);
        ctx.moveTo(0, waveYOffset);

        for (let x = 0; x <= width; x += 25) {
          const y =
            waveYOffset +
            Math.sin(x * 0.0035 + time * (1 + w * 0.2)) * 40 +
            Math.cos(x * 0.007 - time * 0.7) * 30;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, waveYOffset - 80, width, waveYOffset + 180);
        if (w === 0) {
          grad.addColorStop(0, "rgba(168, 85, 247, 0.14)"); // Ultraviolet
          grad.addColorStop(0.5, "rgba(0, 242, 254, 0.1)"); // Cyan
          grad.addColorStop(1, "rgba(4, 6, 21, 0)");
        } else {
          grad.addColorStop(0, "rgba(244, 63, 94, 0.12)");  // Pink
          grad.addColorStop(0.5, "rgba(0, 230, 118, 0.08)");// Emerald
          grad.addColorStop(1, "rgba(4, 6, 21, 0)");
        }
        ctx.fillStyle = grad;
        ctx.fill();
      }
      ctx.restore();

      // 2. Draw Energy Beam Lines between nearby Tech Objects
      for (let i = 0; i < techObjects.length; i++) {
        for (let j = i + 1; j < techObjects.length; j++) {
          const o1 = techObjects[i];
          const o2 = techObjects[j];
          const dx = o2.x - o1.x;
          const dy = o2.y - o1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 220) {
            const lineAlpha = (1 - dist / 220) * 0.25;
            ctx.beginPath();
            ctx.moveTo(o1.x, o1.y);
            ctx.lineTo(o2.x, o2.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 3. Render 3D Floating Tech Objects Video Matrix
      techObjects.forEach((obj) => {
        // Continuous smooth drifting motion
        obj.x += obj.vx;
        obj.y += obj.vy + Math.sin(time + obj.x * 0.01) * 0.3;
        obj.rot += obj.rotSpeed;

        // Screen wrap-around bounce
        if (obj.x < -80) obj.x = width + 80;
        if (obj.x > width + 80) obj.x = -80;
        if (obj.y < -50) obj.y = height + 50;
        if (obj.y > height + 50) obj.y = -50;

        // Interactive mouse magnetic reaction
        const mdx = mouse.x - obj.x;
        const mdy = mouse.y - obj.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 180) {
          const pushForce = (1 - mdist / 180) * 1.5;
          obj.x -= (mdx / mdist) * pushForce;
          obj.y -= (mdy / mdist) * pushForce;
          obj.rot += 0.015;
        }

        // Render object with 2D transform
        ctx.save();
        ctx.translate(obj.x, obj.y);
        ctx.rotate(obj.rot);

        const scaleFactor = 1 / obj.z;
        ctx.scale(scaleFactor, scaleFactor);

        // Tech Tag Pill Container
        const paddingX = 14;
        const paddingY = 8;
        ctx.font = "bold 14px Inter, system-ui, sans-serif";
        const textMetrics = ctx.measureText(obj.label);
        const boxWidth = textMetrics.width + paddingX * 2;
        const boxHeight = 32;

        // Glowing border container
        ctx.beginPath();
        ctx.roundRect(-boxWidth / 2, -boxHeight / 2, boxWidth, boxHeight, 8);
        ctx.fillStyle = "rgba(10, 14, 32, 0.75)";
        ctx.fill();

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = obj.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = obj.glowColor;
        ctx.stroke();

        // Render Label Text
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowBlur = 10;
        ctx.shadowColor = obj.glowColor;
        ctx.fillText(obj.label, 0, 0);

        ctx.restore();
      });

      // 4. Render Mouse Spark Burst Particles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.alpha -= 0.03;

        ctx.beginPath();
        ctx.arc(s.x, s.y, Math.max(0.5, s.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${s.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `${s.color}1)`;
        ctx.fill();

        if (s.alpha <= 0) sparks.splice(i, 1);
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
