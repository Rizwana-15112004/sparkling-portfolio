import { motion } from "framer-motion";

/**
 * Unique builder-machine animation:
 * Gears spin, a piston pumps, code blocks travel a conveyor and get stamped
 * into a glowing monitor that displays the developer's monogram.
 */
export const BuilderMachine = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      <svg
        viewBox="0 0 600 420"
        className="w-full h-auto drop-shadow-[0_20px_40px_hsl(265_92%_68%/0.25)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="violetCyan" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(265 92% 68%)" />
            <stop offset="50%" stopColor="hsl(330 90% 65%)" />
            <stop offset="100%" stopColor="hsl(190 95% 62%)" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(265 92% 68%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(190 95% 62%)" stopOpacity="0.3" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Reusable gear */}
          <g id="gear">
            <path
              d="M0,-34 L7,-32 L9,-40 L17,-38 L17,-30 L24,-26 L30,-32 L36,-26 L30,-20 L34,-13 L42,-13 L42,-5 L34,-3 L32,4 L38,10 L32,16 L26,10 L19,14 L19,22 L11,22 L9,14 L2,12 L-4,18 L-10,12 L-4,6 L-8,-1 L-16,-1 L-16,-9 L-8,-11 L-6,-18 L-12,-24 L-6,-30 L0,-24 Z"
              fill="hsl(240 25% 18%)"
              stroke="url(#violetCyan)"
              strokeWidth="1.5"
            />
            <circle r="8" fill="hsl(240 35% 6%)" stroke="hsl(265 92% 68%)" strokeWidth="1.5" />
          </g>
        </defs>

        {/* Background frame */}
        <rect
          x="20"
          y="20"
          width="560"
          height="380"
          rx="20"
          fill="hsl(240 32% 9%)"
          stroke="hsl(240 25% 18%)"
          strokeWidth="2"
        />
        <rect
          x="20"
          y="20"
          width="560"
          height="380"
          rx="20"
          fill="none"
          stroke="url(#violetCyan)"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Title bar */}
        <g>
          <circle cx="42" cy="42" r="5" fill="hsl(0 84% 60%)" opacity="0.7" />
          <circle cx="58" cy="42" r="5" fill="hsl(45 100% 60%)" opacity="0.7" />
          <circle cx="74" cy="42" r="5" fill="hsl(140 70% 55%)" opacity="0.7" />
          <text x="100" y="46" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="hsl(230 12% 65%)">
            rn-build-machine.exe
          </text>
        </g>
        <line x1="20" y1="62" x2="580" y2="62" stroke="hsl(240 25% 18%)" />

        {/* Big spinning gear (left) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "120px 200px", transformBox: "fill-box" }}
        >
          <g transform="translate(120 200) scale(1.6)">
            <use href="#gear" />
          </g>
        </motion.g>

        {/* Medium gear (top) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 130px", transformBox: "fill-box" }}
        >
          <g transform="translate(200 130) scale(1.1)">
            <use href="#gear" />
          </g>
        </motion.g>

        {/* Small gear */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "70px 290px", transformBox: "fill-box" }}
        >
          <g transform="translate(70 290) scale(0.8)">
            <use href="#gear" />
          </g>
        </motion.g>

        {/* Conveyor belt */}
        <g>
          <rect x="160" y="305" width="320" height="22" rx="3" fill="hsl(240 25% 14%)" stroke="hsl(240 25% 18%)" />
          {/* belt segments */}
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.rect
              key={i}
              x={165 + i * 20}
              y="310"
              width="14"
              height="12"
              rx="2"
              fill="hsl(240 25% 18%)"
              animate={{ x: [165 + i * 20, 145 + i * 20] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </g>

        {/* Code blocks moving on conveyor */}
        {[
          { label: "<jsx/>", color: "hsl(190 95% 62%)", delay: 0 },
          { label: "py.def", color: "hsl(265 92% 68%)", delay: 1.2 },
          { label: "{api}", color: "hsl(330 90% 65%)", delay: 2.4 },
          { label: "SQL", color: "hsl(190 95% 62%)", delay: 3.6 },
        ].map((b, i) => (
          <motion.g
            key={i}
            animate={{ x: [0, 320] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "linear",
              delay: b.delay,
            }}
          >
            <rect
              x="160"
              y="278"
              width="46"
              height="24"
              rx="4"
              fill="hsl(240 32% 9%)"
              stroke={b.color}
              strokeWidth="1.5"
            />
            <text
              x="183"
              y="294"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fill={b.color}
              fontWeight="600"
            >
              {b.label}
            </text>
          </motion.g>
        ))}

        {/* Piston / hammer pumping above conveyor */}
        <g>
          <rect x="295" y="100" width="40" height="60" rx="4" fill="hsl(240 25% 14%)" stroke="url(#violetCyan)" />
          <motion.g
            animate={{ y: [0, 40, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="305" y="155" width="20" height="80" fill="hsl(240 25% 18%)" stroke="hsl(265 92% 68%)" />
            <rect x="295" y="230" width="40" height="14" rx="2" fill="url(#violetCyan)" />
          </motion.g>
        </g>

        {/* Sparks at hammer impact */}
        <motion.g
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
        >
          {[-12, -4, 4, 12].map((x, i) => (
            <circle key={i} cx={315 + x} cy={258} r={1.5 + (i % 2)} fill="hsl(45 100% 65%)" />
          ))}
        </motion.g>

        {/* Output: glowing monitor */}
        <g filter="url(#softGlow)">
          <rect
            x="430"
            y="120"
            width="140"
            height="120"
            rx="10"
            fill="hsl(240 32% 9%)"
            stroke="url(#violetCyan)"
            strokeWidth="2"
          />
          <rect x="438" y="128" width="124" height="104" rx="6" fill="url(#screenGrad)" opacity="0.3" />
          <motion.text
            x="500"
            y="195"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="48"
            fontWeight="700"
            fill="url(#violetCyan)"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            RN
          </motion.text>
          {/* Monitor stand */}
          <rect x="490" y="240" width="20" height="20" fill="hsl(240 25% 18%)" />
          <rect x="470" y="258" width="60" height="6" rx="2" fill="hsl(240 25% 18%)" />
        </g>

        {/* Scanlines on screen */}
        <motion.line
          x1="438"
          x2="562"
          stroke="hsl(190 95% 62%)"
          strokeWidth="1"
          opacity="0.6"
          animate={{ y1: [128, 232], y2: [128, 232] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Bottom data ticker */}
        <g>
          <rect x="40" y="350" width="520" height="34" rx="6" fill="hsl(240 25% 14%)" stroke="hsl(240 25% 18%)" />
          <motion.circle
            cx="58"
            cy="367"
            r="4"
            fill="hsl(140 70% 55%)"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <text x="74" y="372" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="hsl(230 12% 65%)">
            BUILD_STATUS: BCA graduate · vibe coder · shipping production-grade software · paid client delivered ✓
          </text>
        </g>
      </svg>
    </motion.div>
  );
};
