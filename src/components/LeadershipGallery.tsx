import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';

interface LeadershipGalleryProps {
  limit?: number;
  showFilter?: boolean;
  title?: string;
  subtitle?: string;
}

interface GalleryPhotoCardProps {
  key?: string;
  item: GalleryItem;
  onSelect: () => void;
  getCategoryColor: (cat: string) => string;
}

function GalleryPhotoCard({ 
  item, 
  onSelect, 
  getCategoryColor 
}: GalleryPhotoCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      onClick={onSelect}
      className="group glass-panel rounded-3xl border border-glass-border dark:border-white/10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col bg-white/85 dark:bg-slate-850/90 cursor-pointer hover:-translate-y-1.5"
    >
      {/* Photo Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
        {!imgFailed ? (
          <img
            src={item.src}
            alt={`${item.title} - ${item.event}`}
            style={{ objectPosition: item.objectPosition || 'center 20%' }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#0F172A] via-[#1E3A6E] to-[#0A1128] text-white relative">
            <div className="flex items-center justify-between">
              <span className="font-label-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-bold">
                {item.event}
              </span>
              <span className="material-symbols-outlined text-blue-300 text-xl">verified</span>
            </div>
            <div>
              <span className="font-label-mono text-[10px] text-blue-300 uppercase block mb-1">
                Verified Photo &bull; {item.filename}
              </span>
              <h4 className="font-display-xl text-base md:text-lg font-bold text-white leading-tight">
                {item.title}
              </h4>
              <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                {item.location} &bull; {item.date}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-label-mono text-blue-300 font-semibold">
              <span className="material-symbols-outlined text-xs">zoom_in</span>
              <span>Click to view ceremony photo &amp; citation</span>
            </div>
          </div>
        )}

        {/* Category Badge overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-label-mono font-bold uppercase tracking-wider backdrop-blur-md border ${getCategoryColor(item.category)}`}>
            {item.category}
          </span>
        </div>

        {/* Date overlay */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-label-mono font-bold bg-black/60 text-white backdrop-blur-md">
            {item.date}
          </span>
        </div>

        {/* Subtle gradient hover scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-label-mono font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-blue-400">zoom_in</span>
            <span>Click to view citation &amp; photo</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="font-label-mono text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block mb-1">
            {item.event}
          </span>
          <h3 className="font-display-xl text-base md:text-lg text-navy-deep dark:text-white font-bold leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
            {item.title}
          </h3>
          <p className="text-xs text-on-surface-variant dark:text-slate-300 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="pt-4 mt-3 border-t border-glass-border dark:border-white/10 flex items-center justify-between text-xs text-on-surface-variant dark:text-slate-400">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs text-blue-600 dark:text-blue-400">pin_drop</span>
            <span className="truncate max-w-[150px]">{item.location}</span>
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-bold font-label-mono text-[11px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
            View <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LeadershipGallery({
  limit,
  showFilter = true,
  title = "Accreditations, Media & Leadership Gallery",
  subtitle = "Moments of recognition: Google for Education, The Economic Times Summit, Zee News, Constitution Club of India & University Convocations."
}: LeadershipGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Awards', 'Conferences', 'Media', 'Students'];

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Awards':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30';
      case 'Conferences':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30';
      case 'Media':
        return 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/30';
      case 'Students':
        return 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/30';
      default:
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30';
    }
  };

  return (
    <section className="mb-28 md:mb-36" id="leadership-gallery" aria-labelledby="gallery-heading">
      <div className="flex flex-col items-center mb-8 gap-2 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-950 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300/60 dark:border-blue-700/60 text-xs font-bold font-label-mono uppercase tracking-wider mb-2">
          <span className="material-symbols-outlined text-sm text-blue-600">verified</span>
          <span>Verified Leadership &amp; National Honors</span>
        </div>
        <h2 id="gallery-heading" className="font-display-xl text-3xl md:text-5xl text-navy-deep dark:text-white">
          Director <span className="text-blue-600 dark:text-blue-400">Divya Dhariwal</span> in Action
        </h2>
        <div className="h-1 w-24 bg-blue-600 rounded-full mb-3"></div>
        <p className="text-on-surface-variant dark:text-slate-300 text-sm md:text-base max-w-3xl">
          {subtitle}
        </p>
      </div>

      {/* Quick Category Filters */}
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? GALLERY_ITEMS.length 
              : GALLERY_ITEMS.filter(item => item.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-label-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-105'
                    : 'bg-white/80 dark:bg-slate-800/80 text-on-surface-variant dark:text-slate-300 border border-glass-border dark:border-white/10 hover:border-blue-500/40 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>{cat === 'All' ? 'All Highlights' : cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/10'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <GalleryPhotoCard
            key={item.id}
            item={item}
            onSelect={() => setSelectedPhoto(item)}
            getCategoryColor={getCategoryColor}
          />
        ))}
      </div>

      {/* When limited (e.g. on Home page), offer button to full gallery */}
      {limit && limit < GALLERY_ITEMS.length && (
        <div className="mt-12 flex justify-center">
          <Link
            to="/about#leadership-gallery"
            className="group px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-label-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
          >
            <span>Explore All 18 Leadership &amp; Convocation Photos</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      )}

      {/* Modal / Lightbox for Detailed View */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-navy-deep/80 dark:bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full glass-panel rounded-3xl border border-glass-border dark:border-white/20 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-glass-border dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-label-mono font-bold uppercase border ${getCategoryColor(selectedPhoto.category)}`}>
                  {selectedPhoto.category}
                </span>
                <span className="text-xs font-label-mono text-on-surface-variant dark:text-slate-400">
                  &bull; {selectedPhoto.date}
                </span>
                <span className="text-xs font-label-mono text-blue-600 dark:text-blue-400 font-semibold">
                  &bull; {selectedPhoto.filename}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center text-on-surface dark:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="overflow-y-auto p-6 space-y-4">
              {/* Photo Display */}
              <div className="w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center max-h-[460px]">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[460px] object-contain"
                />
              </div>

              <div>
                <span className="font-label-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold block mb-1">
                  {selectedPhoto.event}
                </span>
                <h3 className="font-display-xl text-2xl font-bold text-navy-deep dark:text-white">
                  {selectedPhoto.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant dark:text-slate-400 mt-1">
                  <span className="material-symbols-outlined text-sm text-blue-600 dark:text-blue-400">pin_drop</span>
                  <span>{selectedPhoto.location}</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-on-surface-variant dark:text-slate-300 leading-relaxed">
                {selectedPhoto.description}
              </p>

              {/* Highlights */}
              <div className="pt-2">
                <span className="font-label-mono text-xs uppercase font-bold text-navy-deep dark:text-white block mb-2">
                  Key Verification Highlights:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 text-xs font-semibold border border-blue-500/30"
                    >
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-glass-border dark:border-white/10 flex items-center justify-between">
              <span className="text-xs font-label-mono text-on-surface-variant dark:text-slate-400">
                Divya Admission Hub Verified Archive
              </span>
              <a
                href={`https://wa.me/918178056407?text=Hello%20Divya%20Admission%20Hub!%20I%20saw%20the%20${encodeURIComponent(selectedPhoto.event)}%20honor%20on%20your%20website%20and%20would%20like%20to%20consult%20regarding%20my%20admissions.`}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-xs font-label-mono transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Consult with Divya</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
