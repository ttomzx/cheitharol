import React, { useState } from 'react';
import { Crown, Calendar, Users, Award, Shield, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { KINGS } from '../data/kings';
import { ERAS } from '../data/eras';
import { SALAIS } from '../data/salais';
import { SOURCES } from '../data/sources';
import { TRANSLATIONS } from '../data/translations';

export default function KingProfiles({ lang, selectedKingId, onSelectKing }) {
  const t = TRANSLATIONS[lang];
  const [selectedEra, setSelectedEra] = useState('all');
  const [modalKing, setModalKing] = useState(() => {
    if (selectedKingId) {
      return KINGS.find(k => k.id === selectedKingId) || null;
    }
    return null;
  });

  const filteredKings = KINGS.filter((king) => {
    if (selectedEra !== 'all' && king.eraId !== selectedEra) return false;
    return true;
  });

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500">
          {t.kings.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          {t.kings.subtitle}
        </p>
      </div>

      {/* Era Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setSelectedEra('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            selectedEra === 'all'
              ? 'bg-manipuri-ruby text-manipuri-gold border border-manipuri-gold shadow-gold-glow'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-manipuri-borderGold'
          }`}
        >
          All Rulers (33–1949)
        </button>
        {ERAS.map((era) => (
          <button
            key={era.id}
            onClick={() => setSelectedEra(era.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedEra === era.id
                ? 'bg-manipuri-ruby text-manipuri-gold border border-manipuri-gold shadow-gold-glow'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-manipuri-borderGold'
            }`}
          >
            {era.name}
          </button>
        ))}
      </div>

      {/* Kings Catalog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredKings.map((king) => {
          const era = ERAS.find(e => e.id === king.eraId);
          const salai = SALAIS.find(s => s.id === king.salai?.toLowerCase());

          return (
            <div
              key={king.id}
              onClick={() => setModalKing(king)}
              className="group cursor-pointer p-6 rounded-2xl glass-panel gold-border-glow space-y-4 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Header: Reign Pill & Clan */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="px-3 py-1 rounded-full bg-manipuri-ruby/60 border border-manipuri-gold/40 text-manipuri-gold text-xs font-bold font-serif">
                    {king.reign}
                  </span>

                  {salai && (
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${salai.badgeBg}`}>
                      {king.salai}
                    </span>
                  )}
                </div>

                {/* Title & Meitei Script */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-100 group-hover:text-manipuri-gold transition-colors flex items-center gap-2">
                    <Crown className="w-5 h-5 text-manipuri-gold" />
                    <span>{king.name}</span>
                  </h3>
                  <p className="text-sm text-amber-400 font-meitei mt-1 font-medium">
                    {king.meiteiName}
                  </p>
                  {king.title && (
                    <p className="text-xs text-slate-400 italic mt-1">
                      "{king.title}"
                    </p>
                  )}
                </div>

                {/* Significance Summary */}
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {king.significance}
                </p>

              </div>

              {/* Achievements Preview */}
              <div className="pt-4 border-t border-slate-800/60 space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-manipuri-gold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-manipuri-gold" />
                  <span>Key Achievement:</span>
                </p>
                <p className="text-xs text-slate-300 font-medium line-clamp-2">
                  • {king.achievements[0]}
                </p>

                <div className="pt-2 flex items-center justify-end text-xs text-manipuri-gold font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View Full Profile</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* King Profile Detail Modal */}
      {modalKing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl glass-panel gold-border-glow space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setModalKing(null)}
              className="absolute right-6 top-6 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-slate-100"
            >
              ✕
            </button>

            {/* Modal Title Block */}
            <div className="border-b border-manipuri-borderGold pb-4 space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-manipuri-ruby border border-manipuri-gold text-manipuri-gold text-xs font-bold font-serif">
                <Crown className="w-3.5 h-3.5" />
                <span>Reign: {modalKing.reign}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                {modalKing.name}
              </h3>
              <p className="text-base text-amber-300 font-meitei font-semibold">
                {modalKing.meiteiName} ({modalKing.transliteration})
              </p>
              {modalKing.title && (
                <p className="text-xs text-amber-200/90 font-medium italic">
                  Royal Honorific: "{modalKing.title}"
                </p>
              )}
            </div>

            {/* Lineage & Clan Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-amber-500/20 text-xs">
              <div>
                <span className="text-slate-400 block">Yek Salai (Clan):</span>
                <span className="text-manipuri-gold font-bold">{modalKing.salai}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Predecessor:</span>
                <span className="text-slate-200 font-semibold">{modalKing.predecessor}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Successor:</span>
                <span className="text-slate-200 font-semibold">{modalKing.successor}</span>
              </div>
            </div>

            {/* Significance & Biography */}
            <div className="space-y-4 text-sm text-slate-200 leading-relaxed">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-manipuri-gold mb-1">
                  Historical Chronicle Overview:
                </h4>
                <p>{modalKing.significance}</p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-manipuri-gold mb-2">
                  Major Historical Accomplishments:
                </h4>
                <ul className="space-y-2">
                  {modalKing.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <Sparkles className="w-4 h-4 text-manipuri-gold shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reign Events */}
              {modalKing.majorEvents && modalKing.majorEvents.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Key Historical Reign Milestones:
                  </h4>
                  <div className="space-y-2">
                    {modalKing.majorEvents.map((evt, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-manipuri-ruby/15 border border-manipuri-gold/30 text-xs space-y-1">
                        <div className="flex items-center justify-between font-bold text-amber-300">
                          <span>{evt.title}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-amber-400">{evt.year} CE</span>
                        </div>
                        <p className="text-slate-300">{evt.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Citations */}
              {modalKing.sources && modalKing.sources.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Academic & Primary References:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {modalKing.sources.map((srcId) => {
                      const src = SOURCES.find(s => s.id === srcId);
                      return src ? (
                        <span key={srcId} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-[11px] text-amber-300">
                          📖 {src.title}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setModalKing(null)}
                className="px-5 py-2 rounded-xl bg-manipuri-gold text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
