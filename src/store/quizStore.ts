import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Quiz, QuestionState, Language, BilingualQuestion } from '@/types/quiz';

interface QuizStore {
  // Current quiz
  currentQuiz: Quiz | null;
  currentModule: number;
  currentQuestionIndex: number;

  // Quiz mode
  isExamMode: boolean;

  // Questions for current session (bilingual)
  questions: BilingualQuestion[];

  // State for each question
  questionStates: QuestionState[];

  // Current question state
  selectedAnswers: number[];
  answered: boolean;
  answerMapping: number[];

  // Score and timer
  score: number;
  timeLeft: number;

  // Language and theme
  language: Language;
  darkMode: boolean;

  // Actions
  setQuiz: (quiz: Quiz) => void;
  setLanguage: (lang: Language) => void;
  toggleDarkMode: () => void;
  startModule: (moduleNum: number) => void;
  startExamMode: () => void;
  loadQuestion: () => void;
  selectAnswer: (index: number) => void;
  checkAnswer: () => void;
  nextQuestion: () => void;
  goToPreviousQuestion: () => void;
  goToNextQuestion: () => void;
  saveCurrentQuestionState: () => void;
  decrementTimer: () => void;
  resetQuiz: () => void;
  getAnsweredCount: () => number;
}

// Utility function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      // Initial state
      currentQuiz: null,
      currentModule: 1,
      currentQuestionIndex: 0,
      isExamMode: false,
      questions: [],
      questionStates: [],
      selectedAnswers: [],
      answered: false,
      answerMapping: [],
      score: 0,
      timeLeft: 0,
      language: 'de',
      darkMode: false,

      // Actions
      setQuiz: (quiz) => set({ currentQuiz: quiz }),

      setLanguage: (lang) => {
        set({ language: lang });
        localStorage.setItem('language', lang);
      },

      toggleDarkMode: () => {
        const newDarkMode = !get().darkMode;
        set({ darkMode: newDarkMode });
        localStorage.setItem('darkMode', newDarkMode ? 'enabled' : 'disabled');
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },

      startModule: (moduleNum) => {
        const { currentQuiz } = get();
        if (!currentQuiz) return;

        const module = currentQuiz.modules.find((m) => m.id === moduleNum);
        if (!module) return;

        // Create bilingual questions
        const questions: BilingualQuestion[] = module.questions.de.map((_, idx) => ({
          de: module.questions.de[idx],
          en: module.questions.en[idx],
          module: moduleNum,
          originalIndex: idx,
        }));

        const shuffledQuestions = shuffleArray(questions);

        set({
          currentModule: moduleNum,
          currentQuestionIndex: 0,
          isExamMode: false,
          questions: shuffledQuestions,
          questionStates: [],
          selectedAnswers: [],
          answered: false,
          answerMapping: [],
          score: 0,
          timeLeft: 0,
        });

        get().loadQuestion();
      },

      startExamMode: () => {
        const { currentQuiz } = get();
        if (!currentQuiz) return;

        // Collect all bilingual questions from all modules
        let allQuestions: BilingualQuestion[] = [];
        for (const module of currentQuiz.modules) {
          const moduleQuestions: BilingualQuestion[] = module.questions.de.map((_, idx) => ({
            de: module.questions.de[idx],
            en: module.questions.en[idx],
            module: module.id,
            originalIndex: idx,
          }));
          allQuestions = allQuestions.concat(moduleQuestions);
        }

        // Shuffle and select questions for exam
        const shuffled = shuffleArray(allQuestions);
        const examQuestions = shuffled.slice(0, currentQuiz.examConfig.questionCount);

        set({
          currentModule: 0,
          currentQuestionIndex: 0,
          isExamMode: true,
          questions: examQuestions,
          questionStates: [],
          selectedAnswers: [],
          answered: false,
          answerMapping: [],
          score: 0,
          timeLeft: currentQuiz.examConfig.timeLimit * 60, // Convert to seconds
        });

        get().loadQuestion();
      },

      loadQuestion: () => {
        const { currentQuestionIndex, questions, questionStates, language } = get();

        if (currentQuestionIndex >= questions.length) {
          return;
        }

        const bilingualQuestion = questions[currentQuestionIndex];
        const question = bilingualQuestion[language];
        const savedState = questionStates[currentQuestionIndex];

        if (savedState) {
          // Restore saved state
          set({
            selectedAnswers: [...savedState.selectedAnswers],
            answered: savedState.answered,
            answerMapping: savedState.answerMapping,
          });
        } else {
          // Initialize new state
          const indices = question.answers.map((_: string, idx: number) => idx);
          const answerMapping = shuffleArray<number>(indices);

          set({
            selectedAnswers: [],
            answered: false,
            answerMapping,
          });
        }
      },

      selectAnswer: (index) => {
        const { answered, questions, currentQuestionIndex, selectedAnswers, language } = get();
        if (answered) return;

        const bilingualQuestion = questions[currentQuestionIndex];
        const question = bilingualQuestion[language];

        if (question.multiSelect) {
          const answerIndex = selectedAnswers.indexOf(index);
          if (answerIndex > -1) {
            set({
              selectedAnswers: selectedAnswers.filter((i) => i !== index),
            });
          } else if (selectedAnswers.length < 2) {
            set({
              selectedAnswers: [...selectedAnswers, index],
            });
          }
        } else {
          set({
            selectedAnswers: [index],
          });
        }
      },

      checkAnswer: () => {
        const {
          answered,
          selectedAnswers,
          questions,
          currentQuestionIndex,
          answerMapping,
          score,
          language,
        } = get();
        if (answered || selectedAnswers.length === 0) return;

        const bilingualQuestion = questions[currentQuestionIndex];
        const question = bilingualQuestion[language];

        // Map selected shuffled indices back to original indices
        const originalSelectedAnswers = selectedAnswers.map(
          (shuffledIdx) => answerMapping[shuffledIdx]
        );

        // Check if answer is correct
        const isCorrect =
          originalSelectedAnswers.length === question.correct.length &&
          originalSelectedAnswers.every((ans) => question.correct.includes(ans));

        set({
          answered: true,
          score: isCorrect ? score + 1 : score,
        });

        get().saveCurrentQuestionState();
      },

      nextQuestion: () => {
        const { currentQuestionIndex, questions } = get();
        get().saveCurrentQuestionState();

        if (currentQuestionIndex + 1 < questions.length) {
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
          get().loadQuestion();
        }
      },

      goToPreviousQuestion: () => {
        const { currentQuestionIndex } = get();
        if (currentQuestionIndex > 0) {
          get().saveCurrentQuestionState();
          set({ currentQuestionIndex: currentQuestionIndex - 1 });
          get().loadQuestion();
        }
      },

      goToNextQuestion: () => {
        const { currentQuestionIndex, questions } = get();
        if (currentQuestionIndex < questions.length - 1) {
          get().saveCurrentQuestionState();
          set({ currentQuestionIndex: currentQuestionIndex + 1 });
          get().loadQuestion();
        }
      },

      saveCurrentQuestionState: () => {
        const { currentQuestionIndex, selectedAnswers, answered, answerMapping, questionStates } =
          get();

        const newStates = [...questionStates];
        newStates[currentQuestionIndex] = {
          selectedAnswers: [...selectedAnswers],
          answered,
          answerMapping: [...answerMapping],
        };

        set({ questionStates: newStates });
      },

      decrementTimer: () => {
        const { timeLeft } = get();
        if (timeLeft > 0) {
          set({ timeLeft: timeLeft - 1 });
        }
      },

      resetQuiz: () => {
        set({
          currentModule: 1,
          currentQuestionIndex: 0,
          isExamMode: false,
          questions: [],
          questionStates: [],
          selectedAnswers: [],
          answered: false,
          answerMapping: [],
          score: 0,
          timeLeft: 0,
        });
      },

      getAnsweredCount: () => {
        const { questionStates } = get();
        return questionStates.filter((state) => state && state.answered).length;
      },
    }),
    {
      name: 'quiz-storage',
      partialize: (state) => ({
        language: state.language,
        darkMode: state.darkMode,
      }),
    }
  )
);
