import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Crown, Shield, ExternalLink, Info } from 'lucide-react';
import { LOCATIONS } from '../data/locations';
import { KINGS } from '../data/kings';
import { TRANSLATIONS } from '../data/translations';

export default function HistoricalMap({ lang, onSelectKing }) {
  const t = TRANSLATIONS[lang];
  const [selectedLoc, setSelectedLoc] = useState(LOCATIONS[0]);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500">
          {t.map.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          {t.map.subtitle}
        </p>
      </div>

      {/* Map + Location Details Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Map Canvas */}
        <div className="lg:col-span-7 p-6 rounded-3xl glass-panel gold-border-glow space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-manipuri-gold flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-manipuri-gold" />
              <span>Interactive Geo-Landmark Map</span>
            </span>
            <span className="text-xs text-slate-400">
              {t.map.clickPin}
            </span>
          </div>

          {/* SVG Map Container */}
          <div className="relative w-full h-[420px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center p-4">
            
            {/* Background Stylized Manipur Map Contour Paths */}
            <svg viewBox="0 0 500 500" className="w-full h-full opacity-60">
              {/* Outer boundary contour representation of Manipur state */}
              <path
                d="M 220 40 C 300 50, 380 90, 420 160 C 440 220, 430 310, 380 390 C 320 460, 240 480, 160 450 C 90 420, 50 330, 60 250 C 70 170, 140 60, 220 40 Z"
                fill="#121826"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              {/* Central Imphal Valley region highlight */}
              <ellipse cx="250" cy="260" rx="90" ry="110" fill="#1A2234" stroke="#99001C" strokeWidth="1.5" />
              <text x="220" y="265" fill="#D4AF37" opacity="0.4" fontSize="14" fontFamily="serif" fontWeight="bold">
                IMPHAL VALLEY
              </text>
              <text x="170" y="380" fill="#38BDF8" opacity="0.3" fontSize="12" fontFamily="serif">
                Loktak Lake
              </text>
            </svg>

            {/* Location Pin Hotspots */}
            {LOCATIONS.map((loc) => {
              const isSelected = selectedLoc.id === loc.id;
              // Map percentage coordinates to SVG canvas
              const leftPercent = `${loc.coordinates.x}%`;
              const topPercent = `${loc.coordinates.y}%`;

              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
                  style={{ left: leftPercent, top: topPercent }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none"
                  title={loc.name}
                >
                  <div className="relative">
                    {/* Animated Pulse Ring */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-manipuri-gold/40 animate-ping" />
                    )}
                    {/* Pin Marker */}
                    <div
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-manipuri-ruby text-manipuri-gold scale-125 shadow-gold-glow border-2 border-manipuri-gold'
                          : 'bg-slate-900 text-amber-400 hover:scale-110 border border-slate-700'
                      }`}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Hover Tag */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 whitespace-nowrap px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-[10px] text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {loc.name}
                  </span>
                </button>
              );
            })}

          </div>

          {/* Quick Location Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLoc(loc)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedLoc.id === loc.id
                    ? 'bg-manipuri-ruby text-manipuri-gold border border-manipuri-gold shadow-gold-glow'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-manipuri-borderGold'
                }`}
              >
                {loc.name.split(' ')[0]}
              </button>
            ))}
          </div>

        </div>

        {/* Right Column: Selected Location Detail Spotlight */}
        <div className="lg:col-span-5 p-6 rounded-3xl glass-panel gold-border-glow space-y-5">
          
          <div className="border-b border-manipuri-borderGold pb-4 space-y-1">
            <span className="px-3 py-0.5 rounded-full bg-manipuri-ruby text-manipuri-gold text-[10px] font-bold uppercase tracking-wider">
              {selectedLoc.district} District
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-100">
              {selectedLoc.name}
            </h3>
            <p className="text-sm text-amber-300 font-meitei font-semibold">
              {selectedLoc.meiteiName}
            </p>
            <p className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
              <MapPin className="w-3.5 h-3.5 text-manipuri-gold" />
              <span>Coordinates: {selectedLoc.latLng}</span>
            </p>
          </div>

          {/* Significance */}
          <div className="space-y-2 text-xs text-slate-200">
            <h4 className="font-semibold uppercase tracking-wider text-manipuri-gold">
              Historical Significance:
            </h4>
            <p className="text-amber-200 font-medium bg-slate-950 p-3 rounded-xl border border-amber-500/20">
              "{selectedLoc.significance}"
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <h4 className="font-semibold uppercase tracking-wider text-slate-400">
              Detailed History & Architecture:
            </h4>
            <p>{selectedLoc.description}</p>
          </div>

          {/* Key Events at this location */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Historic Events at Location:
            </h4>
            <div className="space-y-1.5">
              {selectedLoc.keyEvents.map((evt, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900 p-2 rounded-lg border border-slate-800">
                  <Shield className="w-3.5 h-3.5 text-manipuri-gold" />
                  <span>{evt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
