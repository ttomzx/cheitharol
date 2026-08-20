import React, { useState } from 'react';
import { Shield, BookOpen, Search, ExternalLink, Award } from 'lucide-react';
import { SOURCES } from '../data/sources';
import { TRANSLATIONS } from '../data/translations';

export default function SourcesHub({ lang }) {
  const t = TRANSLATIONS[lang];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSources = SOURCES.filter((src) => {
    if (searchQuery.trim() === '') return true;
    const query = searchQuery.toLowerCase();
    return (
      src.title.toLowerCase().includes(query) ||
      src.author.toLowerCase().includes(query) ||
      src.type.toLowerCase().includes(query) ||
      src.description.toLowerCase().includes(query)
    );
  });

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500">
          {t.sources.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          {t.sources.subtitle}
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-md mx-auto relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-manipuri-gold" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search bibliography by author, title, manuscript..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-manipuri-borderGold text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-manipuri-gold transition-colors"
        />
      </div>

      {/* Bibliography Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredSources.map((src) => (
          <div
            key={src.id}
            className="p-6 rounded-2xl glass-panel gold-border-glow space-y-4 hover:border-manipuri-gold transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="px-3 py-1 rounded-full bg-manipuri-ruby/60 border border-manipuri-gold/40 text-manipuri-gold text-xs font-bold font-serif">
                  {src.type}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {src.year}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-manipuri-gold shrink-0" />
                  <span>{src.title}</span>
                </h3>
                {src.meiteiTitle && (
                  <p className="text-xs text-amber-300 font-meitei mt-1 font-semibold">
                    {src.meiteiTitle}
                  </p>
                )}
              </div>

              <div className="text-xs space-y-1">
                <p className="text-slate-400">
                  <strong className="text-slate-200">{t.sources.author}</strong> {src.author}
                </p>
                <p className="text-slate-400">
                  <strong className="text-slate-200">Publisher:</strong> {src.publisher}
                </p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed pt-2 border-t border-slate-800/60">
                {src.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-manipuri-gold font-semibold">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-manipuri-gold" />
                <span>Peer-Reviewed & Archived</span>
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
