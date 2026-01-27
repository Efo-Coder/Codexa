import type { Quiz } from '@/types/quiz';
import { module1Questions } from './module1';
import { module2Questions } from './module2';
import { module3Questions } from './module3';
import { module4Questions } from './module4';

export const pcepQuiz: Quiz = {
  id: 'pcep',
  name: 'Python Institue',
  shortName: 'PCEP™',
  description: {
    de: 'Bereite dich optimal auf die PCEP™ - Certified Entry-Level Python Programmer Zertifizierung vor. Unsere Übungsfragen basieren auf dem offiziellen PCEP-30-02 Prüfungslehrplan.',
    en: 'Prepare optimally for the PCEP™ - Certified Entry-Level Python Programmer certification. Our practice questions are based on the official PCEP-30-02 exam curriculum.',
  },
  heroBadge: {
    de: 'Offizielle PCEP-30-02 Prüfungsvorbereitung',
    en: 'Official PCEP-30-02 Exam Preparation',
  },
  logo: '/python-institute-small.png',
  primaryColor: 'blue',
  themeColors: {
    primary: '#2987f8',
    secondary: '#3730a3',
    background: '#f0f7ff',
  },
  examConfig: {
    questionCount: 30,
    timeLimit: 40, // minutes
    passThreshold: 70, // percent
    passThresholdDisplay: {
      de: '70% zum Bestehen',
      en: '70% to Pass',
    },
  },
  modules: [
    {
      id: 1,
      title: {
        de: 'Python Grundlagen',
        en: 'Python Basics',
      },
      description: {
        de: 'Einführung in Python und Computerprogrammierung',
        en: 'Introduction to Python and Computer Programming',
      },
      icon: 'PythonIcon',
      color: 'blue',
      questionCount: 10,
      estimatedTime: '10 Min',
      questions: module1Questions,
    },
    {
      id: 2,
      title: {
        de: 'Operatoren & Datentypen',
        en: 'Operators & Data Types',
      },
      description: {
        de: 'Datentypen, Variablen und Operatoren',
        en: 'Data types, Variables and Operators',
      },
      icon: 'CalculatorIcon',
      color: 'blue',
      questionCount: 20,
      estimatedTime: '20 Min',
      questions: module2Questions,
    },
    {
      id: 3,
      title: {
        de: 'Kontrollstrukturen & Listen',
        en: 'Control Structures & Lists',
      },
      description: {
        de: 'Schleifen, Bedingungen, Listen und Iteration',
        en: 'Loops, Conditions, Lists and Iteration',
      },
      icon: 'ArrowPathIcon',
      color: 'blue',
      questionCount: 20,
      estimatedTime: '20 Min',
      questions: module3Questions,
    },
    {
      id: 4,
      title: {
        de: 'Funktionen & Exceptions',
        en: 'Functions & Exceptions',
      },
      description: {
        de: 'Funktionen, Tupel, Dictionaries und Fehlerbehandlung',
        en: 'Functions, Tuples, Dictionaries and Error Handling',
      },
      icon: 'CodeBracketIcon',
      color: 'blue',
      questionCount: 22,
      estimatedTime: '22 Min',
      questions: module4Questions,
    },
  ],
};
