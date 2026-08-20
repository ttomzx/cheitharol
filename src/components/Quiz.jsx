import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, RefreshCw, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quiz';
import { TRANSLATIONS } from '../data/translations';

export default function Quiz({ lang }) {
  const t = TRANSLATIONS[lang];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-manipuri-gold via-amber-200 to-amber-500">
          {t.quiz.title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          {t.quiz.subtitle}
        </p>
      </div>

      {!isFinished ? (
        <div className="p-6 sm:p-8 rounded-3xl glass-panel gold-border-glow space-y-6">
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="text-manipuri-gold">Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
              <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-amber-300">
                Category: {currentQ.category}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-manipuri-ruby to-manipuri-gold transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-xl font-serif font-bold text-slate-100 leading-snug">
            {currentQ.question}
          </h3>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              let optionStyle = 'bg-slate-900/80 border-slate-800 text-slate-200 hover:border-manipuri-gold/50';

              if (isAnswered) {
                if (idx === currentQ.correctAnswer) {
                  optionStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                } else if (idx === selectedOption) {
                  optionStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl text-left text-sm border transition-all duration-200 flex items-center justify-between ${optionStyle}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-950 border border-slate-700 text-xs font-bold flex items-center justify-center text-manipuri-gold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>

                  {isAnswered && idx === currentQ.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswer && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Feedback Box */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 text-xs text-slate-200 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 font-bold text-manipuri-gold">
                <Sparkles className="w-4 h-4" />
                <span>Historical Context & Explanation:</span>
              </div>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-manipuri-gold via-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-gold-glow hover:scale-105 transition-all"
              >
                <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Results Screen */
        <div className="p-8 sm:p-12 rounded-3xl glass-panel gold-border-glow text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-b from-manipuri-ruby to-slate-950 p-1 border-2 border-manipuri-gold flex items-center justify-center shadow-gold-glow">
            <Trophy className="w-10 h-10 text-manipuri-gold animate-bounce" />
          </div>

          <div>
            <h3 className="text-3xl font-serif font-bold text-slate-100">
              Quiz Completed!
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              You scored <strong className="text-manipuri-gold text-xl">{score}</strong> out of {QUIZ_QUESTIONS.length}
            </p>
          </div>

          {/* Honorific Title Badge */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-manipuri-gold/40 max-w-sm mx-auto">
            <span className="text-xs text-slate-400 block">Awarded Historical Title:</span>
            <span className="text-lg font-serif font-bold text-amber-300">
              {score >= 9 ? '👑 Grand Royal Historian of Kangla' : score >= 6 ? '📜 Scholar of Cheitharol Kumbaba' : '📖 Student of Kanglei History'}
            </span>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-manipuri-ruby text-manipuri-gold border border-manipuri-gold font-bold text-xs shadow-crimson-glow hover:bg-manipuri-crimson transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      )}

    </section>
  );
}
