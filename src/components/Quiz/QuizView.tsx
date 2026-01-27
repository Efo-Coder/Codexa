import { useState, useEffect } from 'react';
import { useQuizStore } from '@/store/quizStore';
import { translations } from '@/i18n/translations';
import { Button, ProgressBar, ConfirmModal } from '@/components/UI';

interface QuizViewProps {
  onQuit: () => void;
  onFinish: () => void;
}

const moduleColors: Record<number, { gradient: string; text: string }> = {
  1: { gradient: 'gradient-bg-blue', text: 'gradient-text-blue' },
  2: { gradient: 'gradient-bg-blue', text: 'gradient-text-blue' },
  3: { gradient: 'gradient-bg-blue', text: 'gradient-text-blue' },
  4: { gradient: 'gradient-bg-blue', text: 'gradient-text-blue' },
};

export function QuizView({ onQuit, onFinish }: QuizViewProps) {
  const {
    language,
    setLanguage,
    darkMode,
    toggleDarkMode,
    questions,
    currentQuestionIndex,
    selectedAnswers,
    answered,
    answerMapping,
    score,
    timeLeft,
    isExamMode,
    currentModule,
    selectAnswer,
    checkAnswer,
    nextQuestion,
    goToPreviousQuestion,
    goToNextQuestion,
    decrementTimer,
    getAnsweredCount,
  } = useQuizStore();

  const t = translations[language];
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!isExamMode) return;

    const interval = setInterval(() => {
      decrementTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamMode, decrementTimer]);

  // Check time up
  useEffect(() => {
    if (isExamMode && timeLeft <= 0) {
      setShowTimeUpModal(true);
    }
  }, [timeLeft, isExamMode]);

  if (questions.length === 0) return null;

  const bilingualQuestion = questions[currentQuestionIndex];
  const question = bilingualQuestion[language];
  const moduleNum = currentModule === 0 ? bilingualQuestion.module : currentModule;
  const colors = moduleColors[moduleNum] || moduleColors[1];
  const answeredCount = getAnsweredCount();
  const progress = (answeredCount / questions.length) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isLastQuestion = currentQuestionIndex >= questions.length - 1;

  const handleCheckAnswer = () => {
    checkAnswer();
    if (isLastQuestion && answered) {
      // Will show results after this
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      onFinish();
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="app-topbar sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3 relative">
            <div className="flex items-center gap-4">
              <span className={`${colors.gradient} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                {t.module} {moduleNum}
              </span>
              {question.multiSelect && (
                <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                  {t.selectAnswers}
                </span>
              )}
            </div>
            {/* Centered Score */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-slate-600 dark:text-slate-300">
              <svg className="w-5 h-5 text-yellow-500 absolute -left-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{score}</span>
            </div>

            <div className="flex items-center gap-3">
              {isExamMode && (
                <div className={`flex items-center gap-2 ${timeLeft < 300 ? 'text-red-600 animate-pulse font-bold' : 'text-slate-600 dark:text-slate-300'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{formatTime(timeLeft)}</span>
                </div>
              )}

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                className="group header-toggle"
              >
                <svg
                  className="w-5 h-5 text-slate-500 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-white transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </button>

              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="group header-toggle">
                {darkMode ? (
                  <svg
                    className="w-5 h-5 text-slate-300 group-hover:text-white transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Quit Button */}
              <button
                onClick={() => setShowQuitModal(true)}
                className="text-slate-500 hover:text-red-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <ProgressBar progress={progress} />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              {answeredCount}/{questions.length}
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="surface-card rounded-2xl p-8 fade-in">
          {/* Question Counter and Navigation */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {t.questionLabel} {currentQuestionIndex + 1}/{questions.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="nav-arrow-btn"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex >= questions.length - 1}
                className="nav-arrow-btn"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Question Text */}
          <h2
            className="question-text text-2xl font-semibold text-slate-800 dark:text-white mb-6"
            dangerouslySetInnerHTML={{ __html: question.question }}
          />

          {/* Expected Output */}
          {question.expectedOutput && (
            <div className="mb-4">
              <div className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-2">
                Expected Output:
              </div>
              <div className="code-block">
                <pre>
                  <code>{question.expectedOutput}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Code Block */}
          {question.code && (
            <div className="mb-6">
              {question.showCodeLabel && (
                <div className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  Code:
                </div>
              )}
              <div className="code-block">
                <pre>
                  <code>{question.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Answers */}
          <div className="space-y-3">
            {answerMapping.map((originalIndex, shuffledIndex) => {
              const answer = question.answers[originalIndex];
              const isSelected = selectedAnswers.includes(shuffledIndex);
              const isCorrect = answered && question.correct.includes(originalIndex);
              const isIncorrect = answered && isSelected && !question.correct.includes(originalIndex);

              let className = 'answer-option';

              if (isSelected && !answered) {
                className += ' selected';
              } else if (isCorrect) {
                className += ' correct';
              } else if (isIncorrect) {
                className += ' incorrect';
              }

              if (answered) {
                className += ' answered';
              }

              return (
                <button
                  key={shuffledIndex}
                  onClick={() => !answered && selectAnswer(shuffledIndex)}
                  disabled={answered}
                  className={className}
                >
                  <div className="radio-outer flex-shrink-0 w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-500 flex items-center justify-center transition-all duration-300">
                    <div className="radio-inner w-3 h-3 rounded-full bg-transparent transition-all duration-300" />
                  </div>
                  <div
                    className="flex-1 font-medium text-slate-700 dark:text-slate-200"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            {!answered ? (
              <Button
                onClick={handleCheckAnswer}
                disabled={selectedAnswers.length === 0}
                className="px-8"
              >
                {t.checkAnswer}
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="px-8"
              >
                {isLastQuestion ? t.showResults : t.nextQuestion}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Quit Modal */}
      <ConfirmModal
        isOpen={showQuitModal}
        title={t.quitConfirm}
        message={t.quitMessage}
        confirmText={t.quit}
        cancelText={t.cancel}
        onConfirm={() => {
          setShowQuitModal(false);
          onQuit();
        }}
        onCancel={() => setShowQuitModal(false)}
      />

      {/* Time Up Modal */}
      {showTimeUpModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="surface-card rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-center mb-4">
              <svg className="w-14 h-14 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-semibold text-center mb-4 text-slate-800 dark:text-white">
              {t.timeExpired}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-center mb-6">
              {t.timeExpiredMsg}
            </p>
            <Button onClick={onFinish} className="w-full">
              {t.ok}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
