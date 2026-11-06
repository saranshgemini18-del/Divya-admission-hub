import React, { useState } from 'react';

export default function DirectorPhoto({ className = '' }: { className?: string }) {
  const [imgSrc, setImgSrc] = useState('/director-divya.jpg');
  const [loadError, setLoadError] = useState(false);

  return (
    <div className={`relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-blue-600/40 shadow-2xl bg-gradient-to-br from-[#0F172A] via-[#1E3A6E] to-[#0A1128] group ${className}`}>
      {!loadError ? (
        <picture className="w-full h-full block">
          <source srcSet="/director-divya.webp" type="image/webp" />
          <img
            src="/director-divya.jpg"
            alt="Divya Dhariwal - Founder & Director, Divya Admission Hub"
            width="288"
            height="384"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: 'center 12%' }}
            loading="lazy"
            onError={() => {
              if (imgSrc !== '/director-divya.jpg') {
                setImgSrc('/director-divya.jpg');
              } else {
                setLoadError(true);
              }
            }}
          />
        </picture>
      ) : (
        <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center text-white relative bg-gradient-to-br from-[#0B132B] via-[#1E3A6E] to-[#1C2541]">
          <div className="w-20 h-20 rounded-full bg-blue-600/30 border-2 border-blue-400 flex items-center justify-center shadow-lg mt-4">
            <span className="material-symbols-outlined text-4xl text-blue-300">account_circle</span>
          </div>

          <div className="space-y-1">
            <span className="font-label-mono text-[10px] text-blue-300 uppercase tracking-widest block font-bold">
              Founder &bull; Director
            </span>
            <h3 className="font-display-xl text-xl font-extrabold text-white">
              Divya Dhariwal
            </h3>
            <p className="text-xs text-blue-200">
              Principal Counselor &bull; 12+ Yrs Exp
            </p>
          </div>

          <div className="w-full pt-2">
            <span className="text-[11px] font-label-mono text-blue-300 bg-blue-900/60 px-3 py-1.5 rounded-full border border-blue-500/30 inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs">verified</span>
              <span>Divya Admission Hub</span>
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E3A6E]/90 border border-blue-400/40 text-blue-200 font-label-mono text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
          <span className="material-symbols-outlined text-xs text-blue-400">verified</span>
          <span>Divya Dhariwal &bull; Director</span>
        </div>
      </div>
    </div>
  );
}
