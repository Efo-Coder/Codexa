export interface Question {
  question: string;
  answers: string[];
  correct: number[];
  multiSelect: boolean;
  code?: string;
  expectedOutput?: string;
  showCodeLabel?: boolean;
}

export interface Module {
  id: number;
  title: { de: string; en: string };
  description: { de: string; en: string };
  icon: string;
  color: 'blue' | 'supernova' | 'emerald' | 'amber' | 'red';
  questionCount: number;
  estimatedTime: string;
  questions: {
    de: Question[];
    en: Question[];
  };
}

export interface ThemeColors {
  primary: string; // Main color (e.g., #2987f8)
  secondary: string; // Darker shade for gradients (e.g., #3730a3)
  background: string; // Light accent color for body background (e.g., #dbeafe)
}

export interface Quiz {
  id: string;
  name: string;
  shortName: string;
  description: { de: string; en: string };
  heroBadge: { de: string; en: string };
  logo: string;
  primaryColor: string;
  themeColors: ThemeColors;
  examConfig: {
    questionCount: number;
    timeLimit: number; // in minutes
    passThreshold: number; // percentage or points depending on exam
    passThresholdDisplay: { de: string; en: string }; // localized display text
  };
  modules: Module[];
}

export interface QuestionState {
  selectedAnswers: number[];
  answered: boolean;
  answerMapping: number[];
}

export type Language = 'de' | 'en';

export interface BilingualQuestion {
  de: Question;
  en: Question;
  module: number;
  originalIndex: number;
}

export interface QuizState {
  // Current quiz
  currentQuiz: Quiz | null;
  currentModule: number;
  currentQuestionIndex: number;

  // Quiz mode
  isExamMode: boolean;

  // Questions for current session
  questions: (Question & { module: number; originalIndex: number })[];

  // State for each question
  questionStates: QuestionState[];
  answerMappings: number[][];

  // Current question state
  selectedAnswers: number[];
  answered: boolean;
  answerMapping: number[];

  // Score and timer
  score: number;
  timeLeft: number;
  timerInterval: number | null;

  // Language and theme
  language: Language;
  darkMode: boolean;
}
