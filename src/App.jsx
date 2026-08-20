import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import KingProfiles from './components/KingProfiles';
import SalaisFamilyTree from './components/SalaisFamilyTree';
import HistoricalMap from './components/HistoricalMap';
import SourcesHub from './components/SourcesHub';
import Quiz from './components/Quiz';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [lang, setLang] = useState('en');
  const [selectedKingId, setSelectedKingId] = useState(null);

  const handleSelectKing = (kingId) => {
    setSelectedKingId(kingId);
    setActiveTab('kings');
  };

  return (
    <div className="min-h-screen bg-manipuri-slateDark text-slate-100 font-sans selection:bg-manipuri-gold selection:text-slate-950 flex flex-col justify-between">
      
      <div>
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          lang={lang}
          setLang={setLang}
        />

        {/* Main Content Area */}
        <main>
          {/* Show Hero Banner on Timeline Tab */}
          {activeTab === 'timeline' && (
            <Hero setActiveTab={setActiveTab} lang={lang} />
          )}

          {/* Active Tab Component Render */}
          <div className="animate-fadeIn">
            {activeTab === 'timeline' && (
              <Timeline
                lang={lang}
                onSelectKing={handleSelectKing}
              />
            )}

            {activeTab === 'kings' && (
              <KingProfiles
                lang={lang}
                selectedKingId={selectedKingId}
                onSelectKing={handleSelectKing}
              />
            )}

            {activeTab === 'salais' && (
              <SalaisFamilyTree
                lang={lang}
                onSelectKing={handleSelectKing}
              />
            )}

            {activeTab === 'map' && (
              <HistoricalMap
                lang={lang}
                onSelectKing={handleSelectKing}
              />
            )}

            {activeTab === 'sources' && (
              <SourcesHub lang={lang} />
            )}

            {activeTab === 'quiz' && (
              <Quiz lang={lang} />
            )}

            {activeTab === 'ai' && (
              <AIAssistant lang={lang} />
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} lang={lang} />

    </div>
  );
}
