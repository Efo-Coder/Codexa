import type { Quiz } from '@/types/quiz';
import { module1Questions } from './module1';
import { module2Questions } from './module2';
import { module3Questions } from './module3';
import { module4Questions } from './module4';
import { module5Questions } from './module5';

export const lpiWebQuiz: Quiz = {
  id: 'lpi-web',
  name: 'Linux Professional Institute',
  shortName: 'Web Dev Essentials',
  description: {
    de: 'Bereite dich optimal auf die Web Development Essentials Zertifizierung vor. Unsere Übungsfragen basieren auf dem offiziellen LPI Web Development Essentials Prüfungslehrplan.',
    en: 'Prepare optimally for the Web Development Essentials certification. Our practice questions are based on the official LPI Web Development Essentials exam curriculum.',
  },
  heroBadge: {
    de: 'Offizielle LPI Web Development Essentials Prüfungsvorbereitung',
    en: 'Official LPI Web Development Essentials Exam Preparation',
  },
  logo: '/linux-professional-institute-small.png',
  primaryColor: 'supernova',
  themeColors: {
    primary: '#fec827',
    secondary: '#a17b00',
    background: '#fffefb',
  },
  examConfig: {
    questionCount: 40,
    timeLimit: 60, // minutes
    passThreshold: 500, // points (scale 200-800)
    passThresholdDisplay: {
      de: '500/800 Punkte',
      en: '500/800 Points',
    },
  },
  modules: [
    {
      id: 1,
      title: {
        de: 'Softwareentwicklung & Webtechnologien',
        en: 'Software Development & Web Technologies',
      },
      description: {
        de: 'Grundlagen der Softwareentwicklung, Architektur von Webanwendungen und HTTP',
        en: 'Basics of Software Development, Web Application Architecture and HTTP',
      },
      icon: 'GlobeIcon',
      color: 'supernova',
      questionCount: 40,
      estimatedTime: '40 Min',
      questions: module1Questions,
    },
    {
      id: 2,
      title: {
        de: 'HTML-Dokument-Markup',
        en: 'HTML Document Markup',
      },
      description: {
        de: 'HTML-Dokumentstruktur, Semantik, eingebettete Ressourcen und Formulare',
        en: 'HTML Document Structure, Semantics, Embedded Resources and Forms',
      },
      icon: 'HtmlIcon',
      color: 'supernova',
      questionCount: 45,
      estimatedTime: '45 Min',
      questions: module2Questions,
    },
    {
      id: 3,
      title: {
        de: 'Gestaltung von Inhalten mit CSS',
        en: 'Styling Content with CSS',
      },
      description: {
        de: 'CSS-Grundlagen, Selektoren, Eigenschaften, Box-Modell und Layout',
        en: 'CSS Basics, Selectors, Properties, Box Model and Layout',
      },
      icon: 'CssIcon',
      color: 'supernova',
      questionCount: 45,
      estimatedTime: '45 Min',
      questions: module3Questions,
    },
    {
      id: 4,
      title: {
        de: 'JavaScript-Programmierung',
        en: 'JavaScript Programming',
      },
      description: {
        de: 'JavaScript-Syntax, Datenstrukturen, Kontrollstrukturen, Funktionen und DOM-Manipulation',
        en: 'JavaScript Syntax, Data Structures, Control Structures, Functions and DOM Manipulation',
      },
      icon: 'JavaScriptIcon',
      color: 'supernova',
      questionCount: 48,
      estimatedTime: '50 Min',
      questions: module4Questions,
    },
    {
      id: 5,
      title: {
        de: 'Node.js Server-Programmierung',
        en: 'Node.js Server Programming',
      },
      description: {
        de: 'Node.js Grundlagen, Express, Templates und SQL/SQLite-Integration',
        en: 'Node.js basics, Express, templating, and SQL/SQLite integration',
      },
      icon: 'NodejsIcon',
      color: 'supernova',
      questionCount: 45,
      estimatedTime: '45 Min',
      questions: module5Questions,
    },
  ],
};
