import { useState, useRef, useEffect } from 'react';
import { useQuizStore } from '@/store/quizStore';
import { quizzes } from '@/data/quizzes';
import { translations } from '@/i18n/translations';

interface HeaderProps {
  onStartModule?: (quizId: string, moduleId: number) => void;
}

export function Header({ onStartModule }: HeaderProps) {
  const { language, setLanguage, darkMode, toggleDarkMode, currentQuiz, setQuiz, resetQuiz } =
    useQuizStore();
  const [hoveredQuizId, setHoveredQuizId] = useState<string | null>(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleQuizSelect = (quizId: string) => {
    const quiz = quizzes.find((q) => q.id === quizId);
    if (quiz && quiz.id !== currentQuiz?.id) {
      resetQuiz();
      setQuiz(quiz);
    }
  };

  const handleModuleClick = (quizId: string, moduleId: number) => {
    // First select the quiz if it's different
    const quiz = quizzes.find((q) => q.id === quizId);
    if (quiz) {
      if (quiz.id !== currentQuiz?.id) {
        resetQuiz();
        setQuiz(quiz);
      }
      // Close dropdown and start module
      setHoveredQuizId(null);
      if (onStartModule) {
        onStartModule(quizId, moduleId);
      }
    }
  };

  const handleNavMouseEnter = (quizId: string) => setHoveredQuizId(quizId);
  const handleNavMouseLeave = () => setHoveredQuizId(null);

  const hoveredQuiz = quizzes.find((q) => q.id === hoveredQuizId);

  // Measure content height when hovered quiz changes
  useEffect(() => {
    if (contentRef.current && hoveredQuizId) {
      const height = contentRef.current.scrollHeight;
      setDropdownHeight(height);
    } else {
      setDropdownHeight(0);
    }
  }, [hoveredQuizId]);

  return (
    <>
      {/* Backdrop blur overlay */}
      <div
        className={`nav-hover-backdrop ${hoveredQuizId ? 'active' : ''}`}
        onMouseEnter={handleNavMouseLeave}
      />

      <header
        className="header header-wrapper"
        onMouseLeave={handleNavMouseLeave}
      >
        <nav className="nav">
          {/* Logo */}
          <a href="/" className="nav-link nav-logo">
            <img
              src="/codexa-logo.png"
              alt="Codexa"
              className="h-8 object-contain header-logo"
            />
          </a>

          {/* Quiz Navigation Links */}
          {quizzes.map((quiz) => (
            <button
              key={quiz.id}
              onClick={() => {
                handleQuizSelect(quiz.id);
                setHoveredQuizId(null);
              }}
              onMouseEnter={() => handleNavMouseEnter(quiz.id)}
              className={`nav-link ${currentQuiz?.id === quiz.id ? 'active' : ''}`}
            >
              {quiz.shortName}
            </button>
          ))}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right Controls */}
          <button
            onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
            className="nav-link"
            title={language === 'de' ? 'Auf English wechseln' : 'Switch to German'}
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={toggleDarkMode}
            className="nav-link"
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Dropdown box that slides down */}
        <div
          className={`nav-hover-dropdown ${hoveredQuizId ? 'active' : ''}`}
          style={{ height: dropdownHeight }}
        >
          <div className="nav-hover-dropdown-content" ref={contentRef}>
            {hoveredQuiz && (
              <div className="dropdown-column">
                <h3 className="dropdown-header dropdown-stagger" key={`header-${hoveredQuiz.id}`}>
                  {translations[language].headerBadgeModules}
                </h3>
                <ul className="dropdown-list" key={`list-${hoveredQuiz.id}`}>
                  {hoveredQuiz.modules.map((module, index) => (
                    <li
                      key={module.id}
                      className="dropdown-stagger"
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                    >
                      <button
                        className="dropdown-link"
                        onClick={() => handleModuleClick(hoveredQuiz.id, module.id)}
                      >
                        {module.title[language]}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
