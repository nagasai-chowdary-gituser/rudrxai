'use client'

import { useTheme } from './ThemeProvider'
import MotionBackground from './MotionBackground'

export default function PageBackground() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <>
    <MotionBackground />
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* ── Base background ── */}
      {isDark ? (
        <div className="absolute inset-0 bg-[#030014]" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5EE] via-[#FFE8F0] to-[#EDE4FF]" />
      )}

      {/* ── Aurora / gradient sweep at top ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[70vh] aurora-bg"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(79,70,229,0.4) 0%, rgba(59,130,246,0.3) 25%, rgba(6,182,212,0.25) 50%, rgba(139,92,246,0.3) 75%, rgba(79,70,229,0.2) 100%)'
            : 'linear-gradient(135deg, rgba(245,133,41,0.3) 0%, rgba(221,42,123,0.25) 30%, rgba(129,52,175,0.25) 60%, rgba(81,91,212,0.2) 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />

      {/* ── Large vivid gradient blobs ── */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[150px] animate-float"
        style={{
          top: '-15%',
          left: '-10%',
          background: isDark
            ? 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(79,70,229,0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(221,42,123,0.35) 0%, rgba(221,42,123,0.12) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[130px] animate-float"
        style={{
          top: '20%',
          right: '-5%',
          animationDelay: '-2s',
          background: isDark
            ? 'radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(81,91,212,0.35) 0%, rgba(81,91,212,0.12) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] animate-float"
        style={{
          bottom: '-10%',
          left: '20%',
          animationDelay: '-4s',
          background: isDark
            ? 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(245,133,41,0.35) 0%, rgba(254,218,119,0.15) 50%, transparent 70%)',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-float"
        style={{
          top: '50%',
          right: '15%',
          animationDelay: '-5s',
          background: isDark
            ? 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(129,52,175,0.3) 0%, rgba(245,133,41,0.1) 50%, transparent 70%)',
        }}
      />

      {/* ── Grid pattern ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px),
               linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)`
            : `linear-gradient(rgba(221,42,123,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(221,42,123,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle, rgba(148,163,184,0.15) 1px, transparent 1px)'
            : 'radial-gradient(circle, rgba(221,42,123,0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* ── Glowing accent lines ── */}
      <div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          top: '25%',
          background: isDark
            ? 'linear-gradient(to right, transparent 5%, rgba(99,102,241,0.5) 30%, rgba(6,182,212,0.4) 50%, rgba(139,92,246,0.5) 70%, transparent 95%)'
            : 'linear-gradient(to right, transparent 5%, rgba(245,133,41,0.35) 30%, rgba(221,42,123,0.3) 50%, rgba(81,91,212,0.35) 70%, transparent 95%)',
          filter: isDark ? 'blur(1px)' : 'blur(0.5px)',
        }}
      />
      <div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          top: '60%',
          background: isDark
            ? 'linear-gradient(to right, transparent 10%, rgba(59,130,246,0.35) 40%, rgba(99,102,241,0.3) 60%, transparent 90%)'
            : 'linear-gradient(to right, transparent 10%, rgba(221,42,123,0.25) 40%, rgba(245,133,41,0.2) 60%, transparent 90%)',
        }}
      />

      {/* ── Decorative ring shapes ── */}
      <div
        className="absolute animate-spin-slow"
        style={{
          width: '500px',
          height: '500px',
          top: '10%',
          right: '5%',
          border: isDark ? '1px solid rgba(99,102,241,0.15)' : '1px solid rgba(221,42,123,0.18)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute animate-spin-slow"
        style={{
          width: '350px',
          height: '350px',
          top: '14.5%',
          right: '9.8%',
          border: isDark ? '1px solid rgba(6,182,212,0.12)' : '1px solid rgba(245,133,41,0.18)',
          borderRadius: '50%',
          animationDirection: 'reverse',
        }}
      />
      <div
        className="absolute animate-spin-slow"
        style={{
          width: '400px',
          height: '400px',
          bottom: '15%',
          left: '3%',
          border: isDark ? '1px solid rgba(139,92,246,0.1)' : '1px solid rgba(81,91,212,0.18)',
          borderRadius: '50%',
          animationDuration: '30s',
        }}
      />

      {/* ── Floating gradient stars/particles via CSS ── */}
      <div className="absolute inset-0 page-bg-stars" />

      {/* ── Corner glow accents ── */}
      <div
        className="absolute top-0 left-0 w-[40vw] h-[40vh]"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at top left, rgba(79,70,229,0.25) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at top left, rgba(245,133,41,0.25) 0%, rgba(221,42,123,0.1) 40%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vh]"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at bottom right, rgba(6,182,212,0.2) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at bottom right, rgba(81,91,212,0.25) 0%, rgba(129,52,175,0.1) 40%, transparent 60%)',
        }}
      />

      {/* ── Noise texture ── */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* ── Soft vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at center, transparent 30%, rgba(3,0,20,0.5) 100%)'
            : 'radial-gradient(ellipse at center, transparent 40%, rgba(255,245,238,0.6) 100%)',
        }}
      />
    </div>
    </>
  )
}
