import { useEffect, useRef, useState } from "react";

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

interface NeuralNode {
  x: number;
  y: number;
  label: string;
  vx: number;
  vy: number;
  pulse: number;
  color: string;
}

const STORY_STAGES = [
  { id: 1, title: "Stage 1: Binary & Code Genesis", subtitle: "Algorithmic Foundations & 0101 Matrix Streams" },
  { id: 2, title: "Stage 2: AI Neural Constellation", subtitle: "Vertex AI, Gemini API & Neural Synaptic Network" },
  { id: 3, title: "Stage 3: Full-Stack Architecture", subtitle: "React, Django, Python & Database Pipeline Links" },
  { id: 4, title: "Stage 4: Production Deployment", subtitle: "5+ Deployed Apps, Paid Client & Rocket Launch Orbit" },
];

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let time = 0;
    let stage = 0;
    let stageTimer = 0;
    const sparks: SparkParticle[] = [];

    // Stage 1: Binary Columns
    const columns = Math.floor(width / 40);
    const rainDrops: number[] = Array.from({ length: columns }, () => Math.random() * -100);

    // Stage 2: Neural Nodes
    const neuralLabels = ["Vertex AI", "Gemini 1.5", "LLM Agent", "Prompt Eng", "Embeddings", "Neural Net", "NLP Matrix"];
    const neuralNodes: NeuralNode[] = neuralLabels.map((label, i) => ({
      x: Math.random() * (width - 200) + 100,
      y: Math.random() * (height - 200) + 100,
      label,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      pulse: Math.random() * Math.PI * 2,
      color: i % 2 === 0 ? "#00f2fe" : "#a855f7",
    }));

    // Stage 3: Architecture Blocks
    const archBlocks = [
      { name: "<React.js />", role: "Frontend UI", color: "#00f2fe" },
      { name: "Django API", role: "Backend Core", color: "#00e676" },
      { name: "Python ML", role: "AI Pipeline", color: "#a855f7" },
      { name: "PostgreSQL", role: "Database", color: "#fbbf24" },
      { name: "Vercel / CI", role: "DevOps", color: "#f43f5e" },
    ];
    const archNodes = archBlocks.map((b, i) => ({
      ...b,
      x: (width / 6) * (i + 1),
      y: height * 0.5 + Math.sin(i) * 60,
    }));

    const mouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        sparks.push({
          x: mouse.x,
          y: mouse.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2 + 1,
          alpha: 0.9,
          color: i % 2 === 0 ? "#00f2fe" : "#a855f7",
        });
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
      stageTimer += 0.015;

      // Cycle stage every 9 seconds
      if (stageTimer > 9) {
        stageTimer = 0;
        stage = (stage + 1) % 4;
        setCurrentStageIndex(stage);
      }

      // Base Deep Space Midnight Fill
      ctx.fillStyle = "#040615";
      ctx.fillRect(0, 0, width, height);

      // Background Fluid Aurora Fill
      ctx.save();
      const waveGrad = ctx.createLinearGradient(0, 0, width, height);
      waveGrad.addColorStop(0, "rgba(168, 85, 247, 0.08)");
      waveGrad.addColorStop(0.5, "rgba(0, 242, 254, 0.06)");
      waveGrad.addColorStop(1, "rgba(4, 6, 21, 0)");
      ctx.fillStyle = waveGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // ==========================================
      // RENDER CURRENT STORY STAGE ANIMATION
      // ==========================================

      if (stage === 0) {
        // Stage 1: Binary Matrix Rain & Code Genesis
        ctx.font = "14px 'JetBrains Mono', monospace";
        ctx.fillStyle = "rgba(0, 242, 254, 0.25)";
        for (let i = 0; i < rainDrops.length; i++) {
          const char = Math.random() > 0.5 ? "1" : "0";
          const x = i * 40;
          const y = rainDrops[i];

          ctx.fillText(char, x, y);

          if (y > height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i] += 2.5;
        }
      } else if (stage === 1) {
        // Stage 2: AI Neural Constellation (Vertex AI & Gemini)
        for (let i = 0; i < neuralNodes.length; i++) {
          const n1 = neuralNodes[i];
          n1.x += n1.vx;
          n1.y += n1.vy;
          n1.pulse += 0.03;

          if (n1.x < 50 || n1.x > width - 50) n1.vx *= -1;
          if (n1.y < 50 || n1.y > height - 50) n1.vy *= -1;

          for (let j = i + 1; j < neuralNodes.length; j++) {
            const n2 = neuralNodes[j];
            const dist = Math.hypot(n2.x - n1.x, n2.y - n1.y);
            if (dist < 280) {
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              const alpha = (1 - dist / 280) * 0.35;
              ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
              ctx.lineWidth = 1.5;
              ctx.stroke();

              // Synaptic energy pulse particle
              const pulsePos = (Math.sin(time * 2 + i) + 1) / 2;
              const px = n1.x + (n2.x - n1.x) * pulsePos;
              const py = n1.y + (n2.y - n1.y) * pulsePos;
              ctx.beginPath();
              ctx.arc(px, py, 3, 0, Math.PI * 2);
              ctx.fillStyle = "#00f2fe";
              ctx.fill();
            }
          }

          // Render Neural Node Badge
          ctx.save();
          ctx.beginPath();
          const nodeRadius = 8 + Math.sin(n1.pulse) * 3;
          ctx.arc(n1.x, n1.y, nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = n1.color;
          ctx.shadowBlur = 20;
          ctx.shadowColor = n1.color;
          ctx.fill();

          ctx.font = "bold 13px 'Space Grotesk', sans-serif";
          ctx.fillStyle = "#ffffff";
          ctx.fillText(n1.label, n1.x + 14, n1.y + 4);
          ctx.restore();
        }
      } else if (stage === 2) {
        // Stage 3: Full-Stack Architecture Pipeline Wires
        for (let i = 0; i < archNodes.length - 1; i++) {
          const a1 = archNodes[i];
          const a2 = archNodes[i + 1];

          // Connecting wire curve
          ctx.beginPath();
          ctx.moveTo(a1.x, a1.y);
          ctx.bezierCurveTo(a1.x + 50, a1.y - 40, a2.x - 50, a2.y + 40, a2.x, a2.y);
          ctx.strokeStyle = "rgba(0, 242, 254, 0.3)";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Packet particle along wire
          const tPacket = (time * 0.8 + i * 0.4) % 1;
          const px = Math.pow(1 - tPacket, 3) * a1.x + 3 * Math.pow(1 - tPacket, 2) * tPacket * (a1.x + 50) + 3 * (1 - tPacket) * Math.pow(tPacket, 2) * (a2.x - 50) + Math.pow(tPacket, 3) * a2.x;
          const py = Math.pow(1 - tPacket, 3) * a1.y + 3 * Math.pow(1 - tPacket, 2) * tPacket * (a1.y - 40) + 3 * (1 - tPacket) * Math.pow(tPacket, 2) * (a2.y + 40) + Math.pow(tPacket, 3) * a2.y;

          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#fbbf24";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#fbbf24";
          ctx.fill();
        }

        // Render Arch Cards
        archNodes.forEach((node) => {
          ctx.save();
          ctx.translate(node.x, node.y + Math.sin(time * 1.5 + node.x) * 10);
          ctx.beginPath();
          ctx.roundRect(-60, -22, 120, 44, 8);
          ctx.fillStyle = "rgba(10, 14, 32, 0.85)";
          ctx.fill();
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = node.color;
          ctx.shadowBlur = 15;
          ctx.shadowColor = node.color;
          ctx.stroke();

          ctx.font = "bold 13px 'Space Grotesk', sans-serif";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.fillText(node.name, 0, -2);
          ctx.font = "10px 'Outfit', sans-serif";
          ctx.fillStyle = "rgba(226, 232, 240, 0.75)";
          ctx.fillText(node.role, 0, 12);
          ctx.restore();
        });
      } else if (stage === 3) {
        // Stage 4: Production Deployment & Orbital Rocket Bursts
        const centerX = width / 2;
        const centerY = height / 2;

        // Rotating Orbital Rings
        for (let r = 1; r <= 3; r++) {
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(time * (r % 2 === 0 ? 0.3 : -0.3));
          ctx.beginPath();
          ctx.ellipse(0, 0, 150 * r, 60 * r, 0, 0, Math.PI * 2);
          ctx.strokeStyle = r === 1 ? "rgba(0, 242, 254, 0.3)" : r === 2 ? "rgba(168, 85, 247, 0.3)" : "rgba(244, 63, 94, 0.3)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Satellite beacon particle
          const bx = Math.cos(time * 2) * (150 * r);
          const by = Math.sin(time * 2) * (60 * r);
          ctx.beginPath();
          ctx.arc(bx, by, 5, 0, Math.PI * 2);
          ctx.fillStyle = "#00e676";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#00e676";
          ctx.fill();
          ctx.restore();
        }
      }

      // Spark trail
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.03;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}, ${s.alpha})`;
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

  const activeStage = STORY_STAGES[currentStageIndex];

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-100 transition-opacity duration-500"
      />

      {/* Floating Story Stage Indicator Badge */}
      <div className="fixed bottom-6 right-6 z-20 pointer-events-none hidden md:flex items-center gap-3 bg-[#0a0e20]/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-primary/40 shadow-[0_0_25px_rgba(168,85,247,0.3)] animate-pulse">
        <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
        <div>
          <p className="text-xs font-semibold text-white tracking-wide">
            {activeStage.title}
          </p>
          <p className="text-[10px] text-slate-400">
            {activeStage.subtitle}
          </p>
        </div>
      </div>
    </>
  );
};
