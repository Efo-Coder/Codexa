import { useQuizStore } from '@/store/quizStore';
import { translations } from '@/i18n/translations';
import { ModuleCard } from './ModuleCard';

interface ModuleSelectionProps {
  onStartModule: (moduleId: number) => void;
  onStartExam: () => void;
}

export function ModuleSelection({ onStartModule, onStartExam }: ModuleSelectionProps) {
  const { language, currentQuiz } = useQuizStore();
  const t = translations[language];

  if (!currentQuiz) return null;

  const totalQuestions = currentQuiz.modules.reduce((acc, m) => acc + m.questionCount, 0);

  return (
    <div key={currentQuiz.id}>
      {/* Hero Section */}
      <div className="text-center mb-12 stagger stagger-1">
        <div
          className="hero-pill inline-flex items-center gap-2 mb-6"
          style={{
            backgroundColor: `${currentQuiz.themeColors.primary}1a`,
            color: currentQuiz.themeColors.primary,
            borderColor: `${currentQuiz.themeColors.primary}33`
          }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {currentQuiz.heroBadge[language]}
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-semibold hero-title tracking-tight mb-4">
          <span className="text-slate-900 dark:text-white">{t.selectModulePrefix}</span>
          <span className="gradient-text-blue">{t.selectModuleHighlight}</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t.heroDesc}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto stagger stagger-2">
        <div className="stat-card text-center">
          <div className="text-3xl font-bold gradient-text-stat stat-value">{totalQuestions}</div>
          <div className="text-sm stat-label">{t.statQuestionsLabel}</div>
        </div>
        <div className="stat-card text-center">
          <div className="text-3xl font-bold gradient-text-stat stat-value">
            {currentQuiz.modules.length}
          </div>
          <div className="text-sm stat-label">{t.statModulesLabel}</div>
        </div>
        <div className="stat-card text-center">
          <div className="text-3xl font-bold gradient-text-stat stat-value">
            {currentQuiz.examConfig.timeLimit}
          </div>
          <div className="text-sm stat-label">{t.statTimeLabel}</div>
        </div>
      </div>

      {/* Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {currentQuiz.modules.map((module, index) => (
          <div
            key={module.id}
            className="stagger"
            style={{ animationDelay: `${(index + 2) * 50}ms` }}
          >
            <ModuleCard
              module={module}
              onStart={() => onStartModule(module.id)}
            />
          </div>
        ))}
      </div>

      {/* Exam Mode Card */}
      <div
        className="exam-mode-card rounded-2xl p-8 text-white shadow-xl stagger"
        style={{ animationDelay: `${(currentQuiz.modules.length + 2) * 50}ms` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="icon-container bg-white/20 p-5 rounded-2xl">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-1">{t.examMode}</h3>
              <p className="text-white/80">
                {language === 'de'
                  ? `Simuliere die ${currentQuiz.shortName}-Prüfung`
                  : `Simulate the ${currentQuiz.shortName} exam`}
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-white/90">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {currentQuiz.examConfig.questionCount} {t.questions}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {currentQuiz.examConfig.timeLimit} Min
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {currentQuiz.examConfig.passThresholdDisplay[language]}
                </span>
              </div>
            </div>
          </div>
          <button onClick={onStartExam} className="exam-start-btn font-semibold px-8 py-4 rounded-xl">
            {t.examMode}
          </button>
        </div>
      </div>
    </div>
  );
}
