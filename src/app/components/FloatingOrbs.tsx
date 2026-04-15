export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large hero radial glow */}
      <div
        className="absolute top-[-14rem] left-1/2 -translate-x-1/2 w-[110rem] h-[70rem] rounded-full opacity-90"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(109, 76, 255, 0.30) 0%, rgba(91, 60, 201, 0.24) 22%, rgba(59, 42, 122, 0.16) 42%, rgba(14, 10, 28, 0.04) 68%, transparent 82%)',
          filter: 'blur(72px)',
        }}
      />

      {/* Inner concentrated purple bloom */}
      <div
        className="absolute top-[2rem] left-1/2 -translate-x-1/2 w-[62rem] h-[30rem] rounded-full opacity-75"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(128, 97, 255, 0.34) 0%, rgba(139, 92, 246, 0.22) 30%, rgba(124, 58, 237, 0.10) 55%, transparent 76%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Left side softness */}
      <div
        className="absolute top-[8%] left-[-18rem] w-[42rem] h-[42rem] rounded-full opacity-34"
        style={{
          background:
            'radial-gradient(circle, rgba(167, 139, 250, 0.20) 0%, rgba(128, 97, 255, 0.08) 40%, transparent 74%)',
          filter: 'blur(96px)',
        }}
      />

      {/* Right side softness */}
      <div
        className="absolute top-[10%] right-[-16rem] w-[40rem] h-[40rem] rounded-full opacity-28"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(109, 76, 255, 0.08) 38%, transparent 74%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Subtle lower falloff so the glow fades into the page */}
      <div
        className="absolute top-[18rem] left-1/2 -translate-x-1/2 w-[90rem] h-[36rem] rounded-full opacity-34"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(44, 31, 92, 0.16) 0%, rgba(22, 16, 42, 0.10) 42%, transparent 78%)',
          filter: 'blur(88px)',
        }}
      />
    </div>
  );
}
