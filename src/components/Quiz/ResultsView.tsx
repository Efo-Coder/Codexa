import { useQuizStore } from '@/store/quizStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/UI';

interface ResultsViewProps {
  onRetry: () => void;
  onBackToModules: () => void;
}

export function ResultsView({ onRetry, onBackToModules }: ResultsViewProps) {
  const { language, score, questions, isExamMode, currentQuiz } = useQuizStore();
  const t = translations[language];

  const percentage = Math.round((score / questions.length) * 100);
  const passThreshold = currentQuiz?.examConfig.passThreshold || 70;
  const passed = percentage >= passThreshold;

  // Icons
  const icons = {
    checkmark: (
      <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    xmark: (
      <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    trophy: (
      <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    star: (
      <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    thumbsUp: (
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    book: (
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    arrowUp: (
      <svg className="w-16 h-16 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  };

  const getResultContent = () => {
    if (isExamMode) {
      if (passed) {
        return {
          icon: icons.checkmark,
          message: (
            <>
              <div className="text-green-600 font-bold text-2xl mb-2">{t.passed}</div>
              <div>{t.passedMsg}</div>
            </>
          ),
        };
      } else {
        return {
          icon: icons.xmark,
          message: (
            <>
              <div className="text-red-600 font-bold text-2xl mb-2">{t.failed}</div>
              <div>{t.failedMsg}</div>
            </>
          ),
        };
      }
    } else {
      if (percentage >= 90) {
        return { icon: icons.trophy, message: t.excellent };
      } else if (percentage >= 75) {
        return { icon: icons.star, message: t.veryGood };
      } else if (percentage >= 60) {
        return { icon: icons.thumbsUp, message: t.good };
      } else if (percentage >= 50) {
        return { icon: icons.book, message: t.notBad };
      } else {
        return { icon: icons.arrowUp, message: t.practiceMore };
      }
    }
  };

  const result = getResultContent();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="surface-card rounded-2xl p-8 max-w-md w-full text-center fade-in">
        {/* Icon */}
        <div className="flex justify-center mb-6">{result.icon}</div>

        {/* Title */}
        <h2 className="text-3xl font-display font-semibold text-slate-800 dark:text-white mb-6">
          {t.quizFinished}
        </h2>

        {/* Score Display */}
        <div className="mb-6">
          <div className="text-6xl font-extrabold gradient-text-blue mb-2">{percentage}%</div>
          <div className="text-lg text-slate-600 dark:text-slate-400">
            {score} {t.of} {questions.length} {t.points}
          </div>
        </div>

        {/* Score Progress Ring */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-slate-200 dark:text-slate-700"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 70}`}
              strokeDashoffset={`${2 * Math.PI * 70 * (1 - percentage / 100)}`}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--theme-primary)" />
                <stop offset="100%" stopColor="var(--theme-secondary)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800 dark:text-white">{score}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">/ {questions.length}</div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="text-lg text-slate-600 dark:text-slate-300 mb-8">{result.message}</div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button onClick={onRetry} className="w-full">
            {t.retryQuiz}
          </Button>
          <Button variant="secondary" onClick={onBackToModules} className="w-full">
            {t.backToModules}
          </Button>
        </div>
      </div>
    </div>
  );
}
