import { useQuizStore } from '@/store/quizStore';
import { translations } from '@/i18n/translations';

export function Footer() {
  const { language, currentQuiz } = useQuizStore();
  const t = translations[language];

  const totalQuestions = currentQuiz?.modules.reduce((sum, m) => sum + m.questionCount, 0) || 0;
  const totalModules = currentQuiz?.modules.length || 0;

  return (
    <footer className="app-footer backdrop-blur-md mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={currentQuiz?.logo || '/python-institute-small.png'}
                alt={currentQuiz?.shortName || 'Quiz'}
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                {t.footerTagline}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {currentQuiz?.description[language] || t.footerDesc}
            </p>
          </div>

          {/* Resources */}
          <div className="flex justify-center">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800 dark:text-white">{t.footerResources}</h4>
              <ul className="space-y-2 text-sm">
              {currentQuiz?.id === 'pcep' ? (
                <>
                  <li>
                    <a
                      href="https://docs.python.org/3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      Python Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pythoninstitute.org/pcep"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      Python Institute
                    </a>
                  </li>
                </>
              ) : currentQuiz?.id === 'lpi-web' ? (
                <>
                  <li>
                    <a
                      href="https://learning.lpi.org/en/learning-materials/learning-materials/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      LPI Learning Materials
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.lpi.org/our-certifications/web-development-essentials-overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      Linux Professional Institute
                    </a>
                  </li>
                </>
              ) : null}
              </ul>
            </div>
          </div>

          {/* Certification */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800 dark:text-white">{t.footerCertTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {totalQuestions} {t.footerQuestionCount}
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {totalModules} {totalModules === 1 ? t.footerModuleCountSingular : t.footerModuleCount}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200/70 dark:border-slate-700/70">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Codexa. {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
