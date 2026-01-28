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
        de: 'Grundlagen der Softwareentwicklung, Architektur von Webanwendungen, HTTP Grundlagen',
        en: 'Basics of Software Development, Web Application Architecture, HTTP Basics',
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
        de: 'HTML: Dokumentstruktur, Semantik und Dokumenthierarchie, Referenzen und eingebettete Ressourcen, Formulare',
        en: 'HTML: Document Anatomy, Semantics and Document, References and Embedded, Forms',
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
        de: 'CSS: Grundlagen, Selektoren und Stilanwendung, Gestaltung, Box-Modell und Layout',
        en: 'CSS: Basics, Selectors and Style Application, Styling, Box Model and Layout',
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
        de: 'JavaScript: Ausführung und Syntax, Datenstrukturen, Kontrollstrukturen und Funktionen, DOM-Manipulation',
        en: 'JavaScript: Execution and Syntax, Data Structures, Control Structures and Functions, DOM Manipulation',
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
        de: 'Node.js Grundlagen, Node.js Express Grundlagen, SQL Grundlagen',
        en: 'NodeJS Basics, NodeJS Express Basics, SQL Basics',
      },
      icon: 'NodejsIcon',
      color: 'supernova',
      questionCount: 45,
      estimatedTime: '45 Min',
      questions: module5Questions,
    },
  ],
};
