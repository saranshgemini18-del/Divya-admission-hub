export default function Footer() {
  return (
    <footer className="w-full bg-navy-deep py-16 px-6 md:px-16 border-t border-[rgba(255,255,255,0.08)] mt-24">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col gap-4 text-center">
          <div className="flex items-center gap-2 justify-center">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            <span className="font-display-xl text-2xl font-extrabold tracking-tighter uppercase">
              <span className="text-white">DIVYA</span> <span className="text-primary">ADMISSION HUB</span>
            </span>
          </div>
          <p className="font-label-mono text-label-mono text-white/60 font-medium">© 2024 DIVYA ADMISSION HUB. ELITE ACADEMIC PRESTIGE.</p>
        </div>
      </div>
    </footer>
  );
}
