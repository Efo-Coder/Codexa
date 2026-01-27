import { useEffect, useState } from 'react';
import { useQuizStore } from '@/store/quizStore';
import { pcepQuiz } from '@/data/quizzes/pcep';
import { Header, Footer } from '@/components/Layout';
import { ModuleSelection, QuizView, ResultsView } from '@/components/Quiz';

type Screen = 'selection' | 'quiz' | 'results';

export function App() {
  const [screen, setScreen] = useState<Screen>('selection');
  const {
    setQuiz,
    startModule,
    startExamMode,
    resetQuiz,
    darkMode,
    isExamMode,
    currentModule,
  } = useQuizStore();

  // Get current quiz from store
  const { currentQuiz } = useQuizStore();

  // Initialize quiz and theme
  useEffect(() => {
    setQuiz(pcepQuiz);

    // Initialize dark mode from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      document.documentElement.classList.add('dark');
    }

    // Initialize language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'de') {
      useQuizStore.getState().setLanguage(savedLanguage);
    }
  }, [setQuiz]);

  // Update theme colors when quiz changes
  useEffect(() => {
    if (currentQuiz?.themeColors) {
      const root = document.documentElement;
      root.style.setProperty('--theme-primary', currentQuiz.themeColors.primary);
      root.style.setProperty('--theme-secondary', currentQuiz.themeColors.secondary);
      root.style.setProperty('--theme-background', currentQuiz.themeColors.background);
    }
  }, [currentQuiz]);

  // Update dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleStartModule = (moduleId: number) => {
    startModule(moduleId);
    setScreen('quiz');
  };

  const handleStartExam = () => {
    startExamMode();
    setScreen('quiz');
  };

  const handleQuit = () => {
    resetQuiz();
    setScreen('selection');
  };

  const handleFinish = () => {
    setScreen('results');
  };

  const handleRetry = () => {
    if (isExamMode) {
      startExamMode();
    } else {
      startModule(currentModule);
    }
    setScreen('quiz');
  };

  const handleBackToModules = () => {
    resetQuiz();
    setScreen('selection');
  };

  return (
    <div className="min-h-screen app-shell flex flex-col">
      {screen === 'selection' && (
        <>
          <Header onStartModule={(_quizId, moduleId) => handleStartModule(moduleId)} />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
            <ModuleSelection
              onStartModule={handleStartModule}
              onStartExam={handleStartExam}
            />
          </main>
          <Footer />
        </>
      )}

      {screen === 'quiz' && (
        <QuizView onQuit={handleQuit} onFinish={handleFinish} />
      )}

      {screen === 'results' && (
        <ResultsView onRetry={handleRetry} onBackToModules={handleBackToModules} />
      )}
    </div>
  );
}
