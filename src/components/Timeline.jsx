import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Crown, Shield, MapPin, ExternalLink, ChevronRight, Info } from 'lucide-react';
import { ERAS } from '../data/eras';
import { EVENTS } from '../data/events';
import { KINGS } from '../data/kings';
import { SOURCES } from '../data/sources';
import { TRANSLATIONS } from '../data/translations';

export default function Timeline({ lang, onSelectKing, onSelectLocation }) {
  const t = TRANSLATIONS[lang];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  // Categories list
  const categories = [
    'all',
    'War & Defense',
    'Culture & Religion',
    'Governance',
    'Social Movement',
    'Monarchy'
  ];

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      // Era filter
      if (selectedEra !== 'all' && event.eraId !== selectedEra) return false;
      // Category filter
      if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const king = KINGS.find(k => k.id === event.kingId);
        const kingName = king ? (king.name + ' ' + king.meiteiName + ' ' + king.transliteration).toLowerCase() : '';

        const matchTitle = event.title.toLowerCase().includes(query);
        const matchMeitei = event.meiteiTitle.includes(query);
        const matchSummary = event.summary.toLowerCase().includes(query);
        const matchDetails = event.details.toLowerCase().includes(query);
        const matchYear = event.year.toString().includes(query) || event.dateStr.toLowerCase().includes(query);
        const matchKing = kingName.includes(query);

        return matchTitle || matchMeitei || matchSummary || matchDetails || matchYear || matchKing;
      }

      return true;
    }).sort((a, b) => a.year - b.year);
  }, [selectedEra, selectedCategory, searchQuery]);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header & Description */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500">
          {t.timeline.title || 'Interactive Chronological Timeline (33 CE – 1949)'}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Explore key historical milestones, monarchical accessions, wars, treaties, and socio-cultural revolutions in Manipur.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="p-6 rounded-2xl glass-panel gold-border-glow mb-10 space-y-6">
        
        {/* Search Bar & Stats */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-manipuri-gold" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.timeline.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-manipuri-borderGold text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-manipuri-gold transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
            <span>Showing <strong className="text-manipuri-gold">{filteredEvents.length}</strong> of {EVENTS.length} historical events</span>
          </div>
        </div>

        {/* Era Pills Filter */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-manipuri-gold block">
            Select Era / Period:
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedEra('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedEra === 'all'
                  ? 'bg-manipuri-ruby text-manipuri-gold border border-manipuri-gold shadow-gold-glow'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-manipuri-borderGold'
              }`}
            >
              All Eras (33–1949)
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
                <span>{era.name}</span>
                <span className="ml-1 text-[10px] text-amber-300 font-normal">({era.period})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
            Filter by Event Category:
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/60'
                    : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Main Chronological Timeline Line */}
      <div className="relative border-l-2 border-manipuri-gold/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {filteredEvents.length === 0 ? (
          <div className="p-8 text-center glass-panel rounded-2xl text-slate-400">
            <Info className="w-8 h-8 text-manipuri-gold mx-auto mb-2" />
            <p>No historical events matched your filter query.</p>
          </div>
        ) : (
          filteredEvents.map((event) => {
            const king = KINGS.find((k) => k.id === event.kingId);
            const era = ERAS.find((e) => e.id === event.eraId);

            return (
              <div key={event.id} className="relative group">
                
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-manipuri-slateDark border-2 border-manipuri-gold flex items-center justify-center shadow-gold-glow group-hover:scale-125 group-hover:bg-manipuri-ruby transition-all">
                  <div className="w-2 h-2 rounded-full bg-manipuri-gold" />
                </div>

                {/* Event Card */}
                <div className="p-6 rounded-2xl glass-panel gold-border-glow space-y-4 hover:border-manipuri-gold transition-all duration-300">
                  
                  {/* Top Meta Line: Year & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-manipuri-ruby/60 border border-manipuri-gold/50 text-manipuri-gold text-xs font-bold font-serif">
                        {event.dateStr}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
                        {event.category}
                      </span>
                    </div>

                    {era && (
                      <span className="text-[11px] text-amber-300 font-medium">
                        {era.name}
                      </span>
                    )}
                  </div>

                  {/* Event Titles */}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-100 group-hover:text-manipuri-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-amber-400 font-meitei mt-0.5">
                      {event.meiteiTitle}
                    </p>
                  </div>

                  {/* Event Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {event.summary}
                  </p>

                  {/* King & Location Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs border-t border-slate-800/60">
                    {king && (
                      <button
                        onClick={() => onSelectKing && onSelectKing(king.id)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-manipuri-ruby/30 text-amber-300 border border-amber-500/30 transition-colors"
                      >
                        <Crown className="w-3.5 h-3.5 text-manipuri-gold" />
                        <span>Reign: <strong>{king.name}</strong></span>
                      </button>
                    )}

                    <button
                      onClick={() => setActiveModalEvent(event)}
                      className="ml-auto flex items-center gap-1 text-manipuri-gold hover:underline font-semibold text-xs"
                    >
                      <span>Read Full Record & Sources</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Detail Modal for Selected Event */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl glass-panel gold-border-glow space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-manipuri-borderGold pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-manipuri-ruby text-manipuri-gold text-xs font-bold font-serif">
                  {activeModalEvent.dateStr}
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-100 mt-2">
                  {activeModalEvent.title}
                </h3>
                <p className="text-sm text-amber-300 font-meitei mt-1">
                  {activeModalEvent.meiteiTitle}
                </p>
              </div>

              <button
                onClick={() => setActiveModalEvent(null)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-slate-100"
              >
                ✕
              </button>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4 text-sm text-slate-200 leading-relaxed">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-manipuri-gold mb-1">
                  Historical Account & Context:
                </h4>
                <p>{activeModalEvent.details}</p>
              </div>

              {activeModalEvent.impact && (
                <div className="p-4 rounded-xl bg-manipuri-ruby/20 border border-manipuri-gold/30">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                    Historical Impact:
                  </h4>
                  <p className="text-slate-300">{activeModalEvent.impact}</p>
                </div>
              )}

              {/* Citations list */}
              {activeModalEvent.sources && activeModalEvent.sources.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Verified Bibliography Sources:
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalEvent.sources.map((srcId) => {
                      const src = SOURCES.find(s => s.id === srcId);
                      return src ? (
                        <li key={srcId} className="flex items-center gap-2 text-xs text-amber-300 bg-slate-900 p-2 rounded-lg border border-slate-800">
                          <Shield className="w-3.5 h-3.5 text-manipuri-gold" />
                          <span>{src.title} ({src.author})</span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveModalEvent(null)}
                className="px-5 py-2 rounded-xl bg-manipuri-gold text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all"
              >
                Close Record
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
