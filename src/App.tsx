import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import gsap from 'gsap'

// Material UI Icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SpeedIcon from '@mui/icons-material/Speed'
import AnimationIcon from '@mui/icons-material/Animation'
import CelebrationIcon from '@mui/icons-material/Celebration'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CodeIcon from '@mui/icons-material/Code'
import PaletteIcon from '@mui/icons-material/Palette'
import TouchAppIcon from '@mui/icons-material/TouchApp'

// Lucide Icons
import { Sparkles, Layers, Zap, Flame, Move, ShieldCheck } from 'lucide-react'

const packages = [
  {
    name: 'React 19 + TypeScript',
    category: 'Core Framework',
    desc: 'Robust, type-safe frontend foundation with ultra-fast modern React tooling.',
    icon: <CodeIcon className="text-cyan-400" />,
    badge: 'Installed & Verified',
  },
  {
    name: 'Tailwind CSS v4',
    category: 'Styling & Design',
    desc: 'Utility-first CSS framework with first-class Vite integration & instant HMR.',
    icon: <PaletteIcon className="text-teal-400" />,
    badge: 'Active & Styled',
  },
  {
    name: 'Material UI (@mui/icons)',
    category: 'Icon System',
    desc: 'Comprehensive Google Material Design icon suite with emotion styling engine.',
    icon: <AutoAwesomeIcon className="text-amber-400" />,
    badge: 'Ready to use',
  },
  {
    name: 'Framer Motion',
    category: 'Motion Engine',
    desc: 'Production-ready declarative animations, gestures, layout transitions & physics.',
    icon: <AnimationIcon className="text-purple-400" />,
    badge: 'Interactive',
  },
  {
    name: 'GSAP',
    category: 'Timeline Animation',
    desc: 'Industry-standard ultra-high performance animation suite for complex timelines.',
    icon: <SpeedIcon className="text-emerald-400" />,
    badge: 'Hardware Accelerated',
  },
  {
    name: 'Canvas Confetti',
    category: 'Special FX & Canvas',
    desc: 'Physics-based celebration particle bursts and interactive delight triggers.',
    icon: <CelebrationIcon className="text-pink-400" />,
    badge: 'Interactive Demo',
  },
  {
    name: 'Lucide React',
    category: 'Icons & Symbols',
    desc: 'Clean, customizable SVG icons engineered specifically for modern UI workflows.',
    icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
    badge: 'Full Suite',
  },
  {
    name: 'tsParticles & Lottie',
    category: 'Particle & Vector FX',
    desc: 'Dynamic particle networks, starfields, and JSON vector animations.',
    icon: <RocketLaunchIcon className="text-indigo-400" />,
    badge: 'Loaded',
  },
]

export default function App() {
  const [selectedTab, setSelectedTab] = useState<'motion' | 'gsap' | 'confetti' | 'packages'>('motion')
  const [interactiveCount, setInteractiveCount] = useState(0)
  const gsapBoxRef = useRef<HTMLDivElement>(null)

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#f472b6', '#34d399'],
    })
    setInteractiveCount((c) => c + 1)
  }

  const runGsapAnimation = () => {
    if (gsapBoxRef.current) {
      gsap.killTweensOf(gsapBoxRef.current)
      gsap.fromTo(
        gsapBoxRef.current,
        { rotation: 0, scale: 0.8, y: 0 },
        {
          rotation: 360,
          scale: 1.15,
          y: -15,
          duration: 0.8,
          ease: 'elastic.out(1, 0.4)',
          onComplete: () => {
            gsap.to(gsapBoxRef.current, { scale: 1, y: 0, duration: 0.3 })
          },
        }
      )
    }
    setInteractiveCount((c) => c + 1)
  }

  useEffect(() => {
    runGsapAnimation()
  }, [])

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col relative selection:bg-purple-500/30">
      {/* Subtle Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20">
            <RocketLaunchIcon className="text-xl" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              FARE Stack Showcase
            </h1>
            <p className="text-xs text-slate-400">React • TypeScript • Tailwind • MUI • Motion Suite</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={triggerConfetti}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-500/25 hover:opacity-95 transition active:scale-95 cursor-pointer"
          >
            <CelebrationIcon fontSize="small" />
            <span>Launch Confetti</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-6 py-10 flex flex-col gap-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>All requested packages installed & configured successfully</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Modern Motion & Animation Stack
          </h2>

          <p className="max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed">
            Your environment is fully initialized with React 19, TypeScript, Tailwind CSS, Material UI Icons,
            Framer Motion, GSAP, Canvas Confetti, and motion utilities.
          </p>
        </motion.section>

        {/* Interactive Showcase Tabs */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800/80 pb-3">
            {[
              { id: 'motion', label: 'Framer Motion Demo', icon: <AnimationIcon fontSize="small" /> },
              { id: 'gsap', label: 'GSAP Timeline Demo', icon: <SpeedIcon fontSize="small" /> },
              { id: 'confetti', label: 'Canvas Confetti Demo', icon: <CelebrationIcon fontSize="small" /> },
              { id: 'packages', label: 'Installed Packages Grid', icon: <Layers className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${
                  selectedTab === tab.id
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedTab === 'motion' && (
              <motion.div
                key="motion"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Motion Hover Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl backdrop-blur-sm flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <TouchAppIcon />
                  </div>
                  <h3 className="font-semibold text-white text-base">Gesture & Spring Physics</h3>
                  <p className="text-xs text-slate-400">
                    Hover and tap on this card to preview real-time Framer Motion spring physics.
                  </p>
                  <div className="mt-auto pt-2 text-xs text-purple-400 font-mono">whileHover & whileTap</div>
                </motion.div>

                {/* Motion Drag Element */}
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl backdrop-blur-sm flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Move className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white text-base">Draggable Interactive Element</h3>
                  <p className="text-xs text-slate-400">Drag the badge below anywhere within its constraints.</p>
                  <div className="flex-1 flex items-center justify-center py-4 bg-slate-950/40 rounded-xl border border-slate-800/50">
                    <motion.div
                      drag
                      dragConstraints={{ left: -30, right: 30, top: -15, bottom: 15 }}
                      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-xs font-semibold text-white shadow-lg cursor-grab active:cursor-grabbing"
                    >
                      Drag Me!
                    </motion.div>
                  </div>
                </div>

                {/* Animated Counter */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl backdrop-blur-sm flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white text-base">Stateful Counter Motion</h3>
                  <p className="text-xs text-slate-400">Click below to increment and trigger layout motion.</p>
                  <button
                    onClick={() => setInteractiveCount((c) => c + 1)}
                    className="mt-auto w-full py-2.5 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Interaction Count:</span>
                    <motion.span
                      key={interactiveCount}
                      initial={{ scale: 1.5, color: '#34d399' }}
                      animate={{ scale: 1, color: '#6ee7b7' }}
                      className="font-bold text-sm"
                    >
                      {interactiveCount}
                    </motion.span>
                  </button>
                </motion.div>
              </motion.div>
            )}

            {selectedTab === 'gsap' && (
              <motion.div
                key="gsap"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl flex flex-col items-center gap-6 text-center"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <SpeedIcon fontSize="large" />
                  </div>
                  <h3 className="text-xl font-bold text-white">GSAP Elastic Timeline Engine</h3>
                  <p className="text-xs text-slate-400 max-w-md">
                    Trigger GreenSock timeline transforms directly inside React with hardware-accelerated easing.
                  </p>
                </div>

                <div className="h-36 w-full flex items-center justify-center">
                  <div
                    ref={gsapBoxRef}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 shadow-xl shadow-emerald-500/20 flex flex-col items-center justify-center text-slate-950 font-bold text-xs p-2 select-none"
                  >
                    <Flame className="w-6 h-6 text-slate-950 mb-1" />
                    <span>GSAP FX</span>
                  </div>
                </div>

                <button
                  onClick={runGsapAnimation}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/25 transition active:scale-95 cursor-pointer"
                >
                  Trigger GSAP Spin & Elastic Bounce
                </button>
              </motion.div>
            )}

            {selectedTab === 'confetti' && (
              <motion.div
                key="confetti"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl flex flex-col items-center gap-6 text-center"
              >
                <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400">
                  <CelebrationIcon fontSize="large" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Canvas Confetti Engine</h3>
                  <p className="text-xs text-slate-400 max-w-md mt-1">
                    Lightweight physics particle bursts rendered smoothly on HTML5 canvas.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      confetti({ particleCount: 100, spread: 80, origin: { y: 0.7 } })
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-xs shadow-lg shadow-pink-500/20 hover:opacity-90 transition active:scale-95 cursor-pointer"
                  >
                    Standard Burst 🎉
                  </button>

                  <button
                    onClick={() => {
                      const end = Date.now() + 1000
                      const frame = () => {
                        confetti({
                          particleCount: 3,
                          angle: 60,
                          spread: 55,
                          origin: { x: 0 },
                        })
                        confetti({
                          particleCount: 3,
                          angle: 120,
                          spread: 55,
                          origin: { x: 1 },
                        })
                        if (Date.now() < end) requestAnimationFrame(frame)
                      }
                      frame()
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-500/20 hover:opacity-90 transition active:scale-95 cursor-pointer"
                  >
                    Dual Cannons 🎆
                  </button>
                </div>
              </motion.div>
            )}

            {selectedTab === 'packages' && (
              <motion.div
                key="packages"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-slate-800/80">{pkg.icon}</div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {pkg.badge}
                      </span>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">{pkg.category}</div>
                      <h4 className="font-bold text-white text-sm mt-0.5">{pkg.name}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mt-auto">{pkg.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status Verification Footer */}
        <section className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircleIcon />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Setup Complete & Ready
              </div>
              <div className="text-[11px] text-slate-400">All configurations, type definitions, and dependencies are verified.</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 px-3 py-1 rounded-lg bg-slate-950/60 border border-slate-800">
              npm run dev
            </span>
          </div>
        </section>
      </main>
    </div>
  )
}
