import React, { useState } from 'react';
import { Bot, Send, Sparkles, Shield, User, CornerDownLeft } from 'lucide-react';
import { KINGS } from '../data/kings';
import { EVENTS } from '../data/events';
import { SALAIS } from '../data/salais';
import { LOCATIONS } from '../data/locations';
import { SOURCES } from '../data/sources';
import { TRANSLATIONS } from '../data/translations';

export default function AIAssistant({ lang }) {
  const t = TRANSLATIONS[lang];

  const suggestedQuestions = [
    'Who was Nongda Lairen Pakhangba?',
    'What happened during Puya Meithaba in 1729?',
    'Explain the 1891 Anglo-Manipur War & Khongjom',
    'How was Maha Raas Leela created by King Bhagyachandra?',
    'What was the 1949 Manipur Merger Agreement?'
  ];

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'meetei'
        ? '<ctrl42> ꯑꯩꯉꯣꯟꯗ ꯃꯅꯤꯄꯨꯔꯒꯤ ꯄꯨꯋꯥꯔꯤ, ꯅꯤꯡꯊꯧꯁꯤꯡ, ꯂꯥꯟ, ꯌꯥꯅꯆꯦ ꯑꯃꯁꯨꯡ ꯆꯠꯅꯕꯤꯒꯤ ꯃꯇꯥꯡꯗ (꯳꯳ CE – ꯱꯹꯴꯹) ꯍꯪꯕꯤꯌꯨ꯫'
        : 'Greetings! I am the Puya Guardian. Ask me anything about the 2,000-year history of Manipur (33 CE – 1949 CE).'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Smart Context RAG Matcher
  const generateAnswer = (query) => {
    const q = query.toLowerCase();

    // Check Kings
    const matchedKing = KINGS.find((k) => 
      q.includes(k.name.toLowerCase()) || 
      q.includes(k.meiteiName) || 
      q.includes(k.transliteration.toLowerCase()) ||
      (k.title && q.includes(k.title.toLowerCase()))
    );

    if (matchedKing) {
      return `**${matchedKing.name} (${matchedKing.meiteiName})**\n\n* **Reign:** ${matchedKing.reign}\n* **Yek Salai:** ${matchedKing.salai}\n* **Predecessor:** ${matchedKing.predecessor} | **Successor:** ${matchedKing.successor}\n\n**Historical Significance:**\n${matchedKing.significance}\n\n**Major Achievements:**\n${matchedKing.achievements.map(a => `• ${a}`).join('\n')}`;
    }

    // Check Events
    const matchedEvent = EVENTS.find((e) =>
      q.includes(e.title.toLowerCase()) ||
      q.includes(e.meiteiTitle) ||
      (e.summary && q.includes(e.summary.toLowerCase()))
    );

    if (matchedEvent) {
      return `**${matchedEvent.title} (${matchedEvent.meiteiTitle})**\n\n* **Date:** ${matchedEvent.dateStr}\n* **Category:** ${matchedEvent.category}\n\n**Summary:**\n${matchedEvent.summary}\n\n**Detailed Record:**\n${matchedEvent.details}\n\n**Historical Impact:**\n${matchedEvent.impact}`;
    }

    // Specific Keyword Matchers
    if (q.includes('pakhangba') || q.includes('33') || q.includes('coronation')) {
      return `**Nongda Lairen Pakhangba (33 CE – 154 CE)**\n\nNongda Lairen Pakhangba ascended the throne at Kangla in 33 CE along with Queen Laisna. He unified the seven autonomous Yek Salais into a sovereign confederated kingdom under the Ningthouja clan and instituted the divine chronicle record *Cheitharol Kumbaba*.`;
    }

    if (q.includes('puya') || q.includes('meithaba') || q.includes('1729') || q.includes('pamheiba')) {
      return `**Puya Meithaba (1729 CE)**\n\nUnder the influence of preacher Shantidas Goswami and King Pamheiba (Garib Niwaz), Ramanandi Vaishnavism was declared the state religion. On 1729 CE, 123 traditional Meitei sacred Puyas (manuscripts) written in Meitei Mayek script were collected and burned at Kangla Uttra, enforcing Bengali script for official writings.`;
    }

    if (q.includes('1891') || q.includes('khongjom') || q.includes('tikendrajit')) {
      return `**1891 Anglo-Manipur War & Battle of Khongjom**\n\nFought in March–April 1891, British forces launched a three-pronged invasion of Imphal. At the Battle of Khongjom (April 23, 1891), Major Paona Brajabashi and Manipuri patriots fought to the last man. Crown Prince Bir Tikendrajit and Thangal General were executed on August 13, 1891 (Patriot's Day).`;
    }

    if (q.includes('raas') || q.includes('bhagyachandra') || q.includes('dance') || q.includes('sankirtana')) {
      return `**Maha Raas Leela & Nat Sankirtana (1779 CE)**\n\nRajarshi Bhagyachandra envisioned Lord Govindajee in a divine vision and sculpted the idol at Kaina. In 1779 CE, he choreographed the classical Manipuri Maha Raas Leela dance and Nat Sankirtana at Langthabal Palace, with Princess Bimbavati portraying Srimati Radhika.`;
    }

    if (q.includes('1949') || q.includes('merger') || q.includes('bodhchandra')) {
      return `**Manipur Merger Agreement (September 21, 1949)**\n\nMaharaja Bodhchandra Singh signed the Merger Agreement at Shillong under intense diplomatic pressure. On October 15, 1949, Manipur was integrated into India, ending 1,916 years of recorded Ningthouja monarchical rule.`;
    }

    if (q.includes('salai') || q.includes('clan')) {
      return `**The 7 Yek Salais of Manipur:**\n1. **Ningthouja** (Royal Sovereign Lineage)\n2. **Luwang** (Wisdom & Canal Engineering)\n3. **Khuman** (Martial Tradition & Southern Lakes)\n4. **Angom** (First Noble Rank & Judicial Custodians)\n5. **Moirang** (Khamba-Thoibi Epic Realm)\n6. **Kha-Nganba** (Herbal Medicine & Sacred Chants)\n7. **Salai-Leishangthem** (Textiles & Agriculture)`;
    }

    // Default Fallback
    return `Based on the *Cheitharol Kumbaba* and academic chronicles by Prof. Gangmumei Kamei & R.K. Jhalajit Singh, Manipur's history spans from **33 CE** (Nongda Lairen Pakhangba) to **1949 CE** (Manipur Merger). You can query specific kings (e.g. *Khagemba, Kiyamba, Gambhir Singh*), events (*Puya Meithaba, 1891 War, Nupi Lan*), or cultural landmarks (*Kangla, Bishnupur, Moirang*).`;
  };

  const handleSend = (textToSend = inputQuery) => {
    if (!textToSend.trim()) return;

    const userMsg = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const botText = generateAnswer(textToSend);
      setMessages((prev) => [...prev, { sender: 'bot', text: botText }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500">
          {t.ai.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          {t.ai.subtitle}
        </p>
      </div>

      {/* Suggested Questions Pills */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-manipuri-gold block text-center">
          {t.ai.suggested}
        </label>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-200 hover:border-manipuri-gold hover:bg-manipuri-ruby/30 transition-all"
            >
              💡 {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Container */}
      <div className="p-6 rounded-3xl glass-panel gold-border-glow space-y-6 flex flex-col h-[500px]">
        
        {/* Messages List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`p-2 rounded-xl border text-xs shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-manipuri-ruby text-manipuri-gold border-manipuri-gold'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-lg ${
                  msg.sender === 'user'
                    ? 'bg-amber-500/20 text-amber-100 border border-amber-500/40 rounded-tr-none'
                    : 'bg-slate-950 text-slate-200 border border-slate-800 rounded-tl-none whitespace-pre-wrap'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-manipuri-gold font-medium">
              <Bot className="w-4 h-4 animate-spin" />
              <span>Consulting the Royal Chronicle (Cheitharol Kumbaba)...</span>
            </div>
          )}
        </div>

        {/* Input Controls */}
        <div className="flex items-center gap-2 border-t border-slate-800 pt-4">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.ai.placeholder}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-manipuri-borderGold text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-manipuri-gold transition-colors"
          />
          <button
            onClick={() => handleSend()}
            className="p-3 rounded-xl bg-gradient-to-r from-manipuri-gold to-amber-500 text-slate-950 font-bold hover:scale-105 transition-all shadow-gold-glow"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
