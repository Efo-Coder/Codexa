import type { Module } from '@/types/quiz';
import { useQuizStore } from '@/store/quizStore';
import { translations } from '@/i18n/translations';

interface ModuleCardProps {
  module: Module;
  onStart: () => void;
}


const moduleIcons: Record<string, JSX.Element> = {
  PythonIcon: (
    <svg className="w-8 h-8" viewBox="0 0 90 90" fill="currentColor" stroke="currentColor" strokeWidth={2}>
      <path d="M86.646 33.854c-2.006-8.077-6.231-12.173-12.557-12.173h-5.127V13.86c0-6.352-5.14-11.818-12.222-12.998C53.203.273 49.507-.013 45.752 0c-3.51.016-7.008.316-10.115.866C25.48 2.66 23.44 7.168 23.44 13.86v7.821h-5.126c-7.508 0-13.29 4.672-15.091 12.189-1.988 8.245-1.988 13.539 0 21.781 1.86 7.748 6.671 12.191 13.2 12.191h4.488v7.821c0 5.837 4.347 10.464 11.928 12.694C36.561 89.453 40.092 90 43.636 90c3.54 0 7.092-.546 10.858-1.639 7.699-2.229 11.939-6.738 11.939-12.697v-7.821h7.656c7.862 0 10.577-6.188 12.503-11.986 2.217-6.656 2.234-13.237.054-22.003zM20.91 56.347v6.522h-4.488c-4.214 0-7.028-2.819-8.364-8.381-1.818-7.544-1.818-11.907 0-19.455 1.257-5.246 5.09-8.377 10.254-8.377h27.899v-4.974H28.414V13.86c0-4.381.36-6.73 8.089-8.096 2.834-.502 6.041-.775 9.272-.79 3.411-.028 6.932.259 10.148.794 4.008.668 8.065 3.662 8.065 8.092v7.821v2.487v9.008c0 5.527-4.76 10.375-10.186 10.375H33.54c-6.846 0-12.63 5.86-12.63 12.796zm60.962-2.061c-2.212 6.658-3.958 8.582-7.784 8.582H43.683v4.974h17.775v7.821c0 3.651-2.809 6.316-8.35 7.919-6.659 1.933-12.301 1.934-18.867.003-3.121-.918-8.358-3.169-8.358-7.922V56.347c0-4.24 3.506-7.821 7.656-7.821h20.262c8.218 0 15.16-7.029 15.16-15.349v-6.521h5.127c2.628 0 5.881.955 7.73 8.399 1.962 7.886 1.978 13.458.054 19.231z"/>
      <path d="M53.168 78.907c2.103 0 3.807-1.739 3.807-3.878 0-2.131-1.704-3.854-3.807-3.854-2.095 0-3.807 1.723-3.807 3.854 0 2.139 1.711 3.878 3.807 3.878z"/>
      <path d="M35.759 9.672c-2.103 0-3.807 1.739-3.807 3.878 0 2.131 1.704 3.854 3.807 3.854 2.095 0 3.807-1.723 3.807-3.854 0-2.139-1.711-3.878-3.807-3.878z"/>
    </svg>
  ),
  AcademicCapIcon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
  ),
  CalculatorIcon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  ),
  ArrowPathIcon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  CodeBracketIcon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  HtmlIcon: (
    <svg className="w-8 h-8" viewBox="0 0 90 90" fill="currentColor" stroke="currentColor" strokeWidth={0}>
      <path d="M44.955 90.085l-33.227-9.224L4.526 0.085h80.949l-7.21 80.765L44.955 90.085zM19.361 74.503l25.596 7.106l25.675-7.118l5.912-66.238h-63.09L19.361 74.503z"/>
      <polygon points="45,19.2 44.97,19.2 22.39,19.2 22.61,21.61 24.82,46.46 44.97,46.46 45,46.46 56.07,46.46 55.02,58.15 44.97,60.87 44.97,60.87 44.96,60.87 34.92,58.16 34.28,50.97 29.4,50.97 25.23,50.97 26.49,65.13 44.96,70.25 45,70.24 45,70.24 63.45,65.13 63.59,63.6 65.71,39.87 65.93,37.45 63.5,37.45 45,37.45 44.97,37.45 33.07,37.45 32.24,28.21 44.97,28.21 45,28.21 66.72,28.21 66.75,28.21 66.93,26.18 67.34,21.61 67.55,19.2"/>
    </svg>
  ),
  GlobeIcon: (
    <svg className="w-8 h-8" viewBox="0 0 90 90" fill="currentColor" stroke="currentColor" strokeWidth={0}>
      <path d="M45 0C20.187 0 0 20.187 0 45c0 24.813 20.187 45 45 45c24.813 0 45-20.187 45-45C90 20.187 69.813 0 45 0zM48 31.559c4.885-.239 9.636-1.059 14.088-2.403C62.971 33.151 63.535 37.48 63.71 42H48V31.559zM48 25.551V6.53c5.139 1.8 9.651 8.111 12.517 16.84C56.579 24.572 52.358 25.316 48 25.551zM42 6.53v19.021c-4.358-.235-8.579-.978-12.517-2.18C32.349 14.641 36.861 8.33 42 6.53zM42 31.559V42H26.29c.175-4.52.739-8.849 1.622-12.843C32.364 30.5 37.115 31.32 42 31.559zM20.284 42H6.127c.565-7.39 3.195-14.208 7.318-19.879c2.652 1.924 5.591 3.59 8.758 4.959C21.131 31.684 20.468 36.704 20.284 42zM20.284 48c.184 5.296.847 10.317 1.919 14.921c-3.167 1.369-6.106 3.035-8.758 4.959C9.322 62.208 6.692 55.39 6.127 48H20.284zM26.29 48H42v10.441c-4.885.239-9.636 1.059-14.087 2.403C27.029 56.85 26.465 52.52 26.29 48zM42 64.45v19.02c-5.139-1.8-9.65-8.111-12.517-16.84C33.421 65.428 37.642 64.685 42 64.45zM48 83.47V64.45c4.358.235 8.579.978 12.517 2.18C57.651 75.359 53.139 81.67 48 83.47zM48 58.441V48h15.71c-.175 4.52-.739 8.85-1.623 12.844C57.636 59.5 52.886 58.68 48 58.441zM69.716 48h14.157c-.565 7.39-3.195 14.208-7.318 19.879c-2.652-1.924-5.591-3.589-8.758-4.959C68.87 58.317 69.533 53.296 69.716 48zM69.716 42c-.184-5.296-.847-10.316-1.919-14.921c3.167-1.369 6.106-3.035 8.758-4.959C80.679 27.792 83.308 34.61 83.873 42H69.716zM72.66 17.536c-1.993 1.409-4.176 2.65-6.51 3.712c-1.596-4.749-3.665-8.889-6.098-12.223C64.804 11.02 69.08 13.931 72.66 17.536zM29.949 9.024c-2.433 3.334-4.502 7.475-6.098 12.224c-2.335-1.062-4.518-2.302-6.511-3.712C20.92 13.931 25.196 11.02 29.949 9.024zM17.34 72.464c1.993-1.409 4.176-2.65 6.511-3.712c1.596 4.749 3.666 8.889 6.098 12.224C25.196 78.98 20.92 76.069 17.34 72.464zM60.051 80.976c2.433-3.334 4.502-7.474 6.098-12.223c2.334 1.062 4.517 2.302 6.51 3.712C69.08 76.069 64.804 78.98 60.051 80.976z"/>
    </svg>
  ),
};

export function ModuleCard({ module, onStart }: ModuleCardProps) {
  const { language, currentQuiz } = useQuizStore();
  const t = translations[language];
  const icon = moduleIcons[module.icon] || moduleIcons.AcademicCapIcon;

  const badgeStyle = currentQuiz?.themeColors ? {
    background: `linear-gradient(135deg, ${currentQuiz.themeColors.primary} 0%, ${currentQuiz.themeColors.secondary} 100%)`
  } : undefined;

  const chipStyle = currentQuiz?.themeColors ? {
    backgroundColor: `${currentQuiz.themeColors.primary}1a`,
    color: currentQuiz.themeColors.primary,
    borderColor: `${currentQuiz.themeColors.primary}33`
  } : undefined;

  return (
    <button
      onClick={onStart}
      className="module-card surface-card w-full text-left rounded-2xl p-6"
    >
      <div className="flex items-start gap-4">
        <div
          className="module-badge text-white p-4 rounded-xl shadow-lg"
          style={badgeStyle}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full border"
              style={chipStyle}
            >
              {t.module} {module.id}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {module.estimatedTime}
            </span>
          </div>
          <h3 className="text-xl font-display font-semibold module-title mb-2">
            {module.title[language]}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            {module.description[language]}
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {module.questionCount} {t.questions}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
