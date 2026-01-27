import type { Question } from '@/types/quiz';

export const module1Questions: { de: Question[]; en: Question[] } = {
  en: [
    // 031.1 - Software Development Basics (Questions 1-13)
    {
      question: "What is the primary purpose of source code?",
      answers: [
        "A human-readable description of tasks that will be translated into machine language",
        "A binary file that the processor can execute directly",
        "A graphical representation of program flow",
        "A compressed archive of executable files"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which statement about source code organization in professional applications is correct?",
      answers: [
        "Code is typically organized in multiple directories, each assigned to specific tasks within the application",
        "All source code should be contained in a single file for better maintainability",
        "Directory structures are only used for applications with graphical interfaces",
        "Professional applications avoid using subdirectories to reduce complexity"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What distinguishes an Integrated Development Environment (IDE) from a simple text editor?",
      answers: [
        "IDEs provide tools for syntax checking, autocompletion, and real-time debugging",
        "IDEs can only edit one file at a time while text editors support multiple files",
        "Text editors are specifically designed for programming while IDEs are for general text",
        "IDEs require an internet connection to function properly"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which version control systems allow decentralized management where multiple independent copies of a repository can be maintained by different people? (Select two)",
      answers: [
        "Git",
        "Mercurial",
        "Centralized-only VCS systems",
        "File-based backup systems"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "In procedural programming, how is the program state typically managed?",
      answers: [
        "Instructions are executed sequentially, with a main routine calling functions in order",
        "State is divided into independent objects that communicate through messages",
        "Functions receive copies of all necessary data and produce results independent of external state",
        "The system determines how to reach specified states automatically"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the main characteristic of the Object-Oriented Programming (OOP) paradigm?",
      answers: [
        "Division of program state into independent sub-states called objects with associated operations",
        "Sequential execution of instructions from top to bottom",
        "Functions that always return the same result for the same parameters",
        "Automatic state management by the runtime environment"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "In OOP terminology, what are 'attributes' and 'methods'?",
      answers: [
        "Variables and subroutines that belong to a class",
        "Input and output parameters of a function",
        "Header and body sections of source code",
        "Compiler and interpreter components"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What characterizes the functional programming paradigm?",
      answers: [
        "Functions receive copies of all necessary information and always return the same result for the same parameters",
        "Code is organized into classes that inherit from each other",
        "Instructions modify global variables to track program state",
        "The program specifies desired states and the system determines how to reach them"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which programming language is commonly used for web browser client-side development and supports multiple paradigms?",
      answers: [
        "JavaScript",
        "PHP",
        "Python",
        "C++"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the difference between compiled and interpreted languages regarding program distribution?",
      answers: [
        "Compiled programs are converted to machine code beforehand; interpreted programs use source code as the program itself",
        "Compiled programs require the compiler on end-user machines; interpreted programs do not need any additional software",
        "Interpreted programs run faster because they skip the compilation step",
        "There is no practical difference in how programs are distributed"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is bytecode in the context of programming languages like Java?",
      answers: [
        "An intermediate format that is closer to machine language than source code but requires a runtime for execution",
        "The binary machine code produced by traditional compilers",
        "Source code that has been compressed for faster loading",
        "A format specifically designed for web browsers"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which statements about the JavaScript interpreter are correct? (Select two)",
      answers: [
        "Web browsers contain a JavaScript interpreter",
        "Node.js can execute JavaScript scripts outside of a browser",
        "JavaScript can only be executed within a web browser environment",
        "JavaScript must be compiled before it can be executed"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "How can components written in different programming languages communicate within an application?",
      answers: [
        "Through a mutually understood Application Programming Interface (API) or by exchanging files in compatible formats",
        "Different programming languages cannot be used in the same application",
        "Only through direct memory sharing which all languages support",
        "By converting all code to the same language before execution"
      ],
      correct: [0],
      multiSelect: false
    },

    // 031.2 - Web Application Architecture (Questions 14-27)
    {
      question: "In the Client/Server model for web applications, what is the primary responsibility of the client?",
      answers: [
        "Providing the user interface and presenting content in an appealing way",
        "Processing business logic and managing database transactions",
        "Storing all application data permanently",
        "Managing user authentication for all connected clients"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What does an HTTP server's API define in the context of web applications?",
      answers: [
        "The available requests and the manner in which those requests should be made",
        "The visual design and layout of the client interface",
        "The database schema used for storing application data",
        "The programming language that must be used for client development"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which browser rendering engines are correctly matched with their browsers? (Select two)",
      answers: [
        "Blink - Chrome and Edge",
        "WebKit - Safari and iOS browsers",
        "Gecko - Internet Explorer",
        "Trident - Firefox"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "What is a Progressive Web App (PWA)?",
      answers: [
        "A mechanism for packaging web application clients for offline use, limited to features not requiring immediate server communication",
        "A web application that can only run on mobile devices",
        "A browser extension that enhances web page functionality",
        "A server-side technology for generating dynamic HTML content"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How do web applications running in a browser access sensitive resources like camera or microphone?",
      answers: [
        "Through explicit user authorization before the application can use these resources",
        "Automatically without any restrictions for better user experience",
        "Only through server-side requests that bypass browser security",
        "By installing additional browser plugins that grant access"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the primary purpose of CSS in a web application client?",
      answers: [
        "Customizing the appearance and layout of HTML interface elements",
        "Handling user interactions and server communication",
        "Defining the data structure for form submissions",
        "Managing session state between page requests"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "In JavaScript, what does the 'document' object represent?",
      answers: [
        "A global object providing access to the HTML document's elements, properties, and methods",
        "A server-side configuration file for the web application",
        "The user's session data stored in the browser",
        "The network connection between client and server"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is WebAssembly and what problem does it solve?",
      answers: [
        "A compiled format of JavaScript that improves performance for CPU-intensive activities",
        "A new programming language designed to replace JavaScript",
        "A protocol for real-time communication between browser and server",
        "A framework for building mobile applications using web technologies"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How does a web application client differ from a traditional web page in terms of navigation?",
      answers: [
        "Web applications can respond to user events without loading new pages in the browser window",
        "Web applications always require page reloads for any user interaction",
        "Traditional web pages cannot contain any interactive elements",
        "There is no functional difference between web applications and traditional web pages"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which methods can a web application server use to determine which procedure a client request refers to? (Select two)",
      answers: [
        "URL addresses (Uniform Resource Locator)",
        "HTTP header fields and GET/POST methods",
        "The client's operating system version",
        "The time of day when the request was made"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "What is the REST (Representational State Transfer) paradigm based on?",
      answers: [
        "Basic HTTP methods like GET, POST, PUT, DELETE combined with corresponding URLs",
        "A proprietary binary protocol developed specifically for web applications",
        "Direct database queries embedded in URL parameters",
        "WebSocket connections for all client-server communication"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "When might GraphQL be a better choice than REST for a web application?",
      answers: [
        "When the application requires more specific operations with detailed descriptions of requested actions",
        "When only simple CRUD operations are needed",
        "When the application must work without JavaScript",
        "When real-time audio and video streaming is required"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What distinguishes a relational database (SQL) from a non-relational database (NoSQL)?",
      answers: [
        "Relational databases require predefined table structures; NoSQL databases allow flexible data formats",
        "NoSQL databases are always faster than relational databases",
        "Relational databases cannot handle relationships between data",
        "NoSQL databases require more rigid schemas than SQL databases"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which are examples of open-source relational database systems? (Select two)",
      answers: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis"
      ],
      correct: [0, 1],
      multiSelect: true
    },

    // 031.3 - HTTP Basics (Questions 28-40)
    {
      question: "What are the two main parts of an HTTP message structure?",
      answers: [
        "Header (containing resource details and context information) and Payload (containing the resource content)",
        "Request (sent by client) and Response (sent by server)",
        "URL (resource address) and Method (operation type)",
        "Protocol version and Status code"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Before establishing an HTTP connection, what must the client do with a hostname like 'learning.lpi.org'?",
      answers: [
        "Convert it to an IP address using the Domain Name System (DNS)",
        "Verify it against a local hosts file exclusively",
        "Send the hostname directly to the HTTP server for resolution",
        "Compress the hostname for faster transmission"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the default TCP port for HTTPS connections?",
      answers: [
        "443",
        "80",
        "8080",
        "22"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How does HTTPS differ from HTTP in terms of message format?",
      answers: [
        "The message format is identical; HTTPS encrypts the entire communication using TLS",
        "HTTPS uses a completely different message structure than HTTP",
        "HTTPS messages are shorter because encryption compresses the data",
        "HTTP and HTTPS cannot communicate with the same servers"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the purpose of the 'Host' header field in an HTTP request?",
      answers: [
        "To identify which website the request is for when multiple virtual hosts share the same server",
        "To specify the client's hostname for logging purposes",
        "To indicate the preferred response format",
        "To authenticate the client with the server"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "In an HTTP GET request, how are parameters typically transmitted to the server?",
      answers: [
        "Embedded in the URL path after a question mark, with parameters separated by ampersands",
        "In the request body as JSON data",
        "In a separate file uploaded with the request",
        "Through HTTP headers exclusively"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "When should the HTTP POST method be used instead of GET?",
      answers: [
        "When sending data that consists of more than short text fields or when performing write operations",
        "When requesting static resources like images",
        "When the response should be cached by the browser",
        "When the client does not need to send any data"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What does the HTTP status code range 4xx indicate?",
      answers: [
        "Client errors - the request contains bad syntax or cannot be fulfilled",
        "Successful responses - the request was received and processed correctly",
        "Server errors - the server failed to fulfill a valid request",
        "Redirection - further action needs to be taken to complete the request"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the meaning of HTTP status code 301?",
      answers: [
        "Moved Permanently - the resource has a new permanent URL provided in the Location header",
        "OK - the request was successful",
        "Not Found - the server cannot find the requested resource",
        "Internal Server Error - the server encountered an unexpected condition"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which HTTP status codes indicate problems that require action by the application developer on the server side? (Select two)",
      answers: [
        "500 Internal Server Error",
        "502 Bad Gateway",
        "404 Not Found",
        "401 Unauthorized"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "What is the difference between a shared cache and a private cache in HTTP?",
      answers: [
        "Shared caches serve multiple clients (e.g., CDN); private caches are used by a single client (e.g., browser cache)",
        "Shared caches store only static content; private caches store dynamic content",
        "Private caches are located on servers; shared caches are on client devices",
        "There is no functional difference between the two cache types"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which types of HTTP requests are typically NOT suitable for caching?",
      answers: [
        "POST requests, as they imply write operations with responses specific to that request",
        "GET requests for static images",
        "Requests that return status code 200 OK",
        "Requests for CSS and JavaScript files"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the purpose of the ETag header field in HTTP responses?",
      answers: [
        "To identify the version of a resource so clients can determine if their cached copy is still valid",
        "To specify the content type of the response",
        "To indicate the total size of the response in bytes",
        "To authenticate the server to the client"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How do HTTP cookies enable session management?",
      answers: [
        "The server sets identification tags via Set-Cookie headers that the client includes in subsequent requests",
        "Cookies store complete session data directly in the URL",
        "Cookies automatically sync data between client and server databases",
        "Cookies replace the need for HTTPS encryption"
      ],
      correct: [0],
      multiSelect: false
    }
  ],
  de: [
    // 031.1 - Grundlagen der Softwareentwicklung (Fragen 1-13)
    {
      question: "Was ist der Hauptzweck von Quellcode?",
      answers: [
        "Eine menschenlesbare Beschreibung von Aufgaben, die in Maschinensprache übersetzt wird",
        "Eine Binärdatei, die der Prozessor direkt ausführen kann",
        "Eine grafische Darstellung des Programmablaufs",
        "Ein komprimiertes Archiv ausführbarer Dateien"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche Aussage über die Organisation von Quellcode in professionellen Anwendungen ist korrekt?",
      answers: [
        "Code wird typischerweise in mehreren Verzeichnissen organisiert, die jeweils bestimmten Aufgaben innerhalb der Anwendung zugeordnet sind",
        "Der gesamte Quellcode sollte zur besseren Wartbarkeit in einer einzigen Datei enthalten sein",
        "Verzeichnisstrukturen werden nur für Anwendungen mit grafischen Oberflächen verwendet",
        "Professionelle Anwendungen vermeiden Unterverzeichnisse, um die Komplexität zu reduzieren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was unterscheidet eine integrierte Entwicklungsumgebung (IDE) von einem einfachen Texteditor?",
      answers: [
        "IDEs bieten Werkzeuge für Syntaxprüfung, Autovervollständigung und Echtzeit-Debugging",
        "IDEs können nur eine Datei gleichzeitig bearbeiten, während Texteditoren mehrere Dateien unterstützen",
        "Texteditoren sind speziell für die Programmierung konzipiert, während IDEs für allgemeinen Text gedacht sind",
        "IDEs benötigen eine Internetverbindung, um ordnungsgemäß zu funktionieren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche Versionskontrollsysteme ermöglichen dezentrales Management, bei dem mehrere unabhängige Kopien eines Repositories von verschiedenen Personen verwaltet werden können? (Wähle zwei)",
      answers: [
        "Git",
        "Mercurial",
        "Rein zentralisierte VCS-Systeme",
        "Dateibasierte Backup-Systeme"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Wie wird der Programmzustand in der prozeduralen Programmierung typischerweise verwaltet?",
      answers: [
        "Anweisungen werden sequenziell ausgeführt, wobei eine Hauptroutine Funktionen der Reihe nach aufruft",
        "Der Zustand wird in unabhängige Objekte aufgeteilt, die über Nachrichten kommunizieren",
        "Funktionen erhalten Kopien aller notwendigen Daten und erzeugen Ergebnisse unabhängig vom externen Zustand",
        "Das System bestimmt automatisch, wie angegebene Zustände erreicht werden"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist das Hauptmerkmal des objektorientierten Programmierparadigmas (OOP)?",
      answers: [
        "Aufteilung des Programmzustands in unabhängige Unterzustände, genannt Objekte, mit zugehörigen Operationen",
        "Sequentielle Ausführung von Anweisungen von oben nach unten",
        "Funktionen, die für dieselben Parameter immer dasselbe Ergebnis liefern",
        "Automatische Zustandsverwaltung durch die Laufzeitumgebung"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was sind 'Attribute' und 'Methoden' in der OOP-Terminologie?",
      answers: [
        "Variablen und Unterprogramme, die zu einer Klasse gehören",
        "Ein- und Ausgabeparameter einer Funktion",
        "Header- und Body-Abschnitte des Quellcodes",
        "Compiler- und Interpreter-Komponenten"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was charakterisiert das funktionale Programmierparadigma?",
      answers: [
        "Funktionen erhalten Kopien aller notwendigen Informationen und liefern für dieselben Parameter immer dasselbe Ergebnis",
        "Code ist in Klassen organisiert, die voneinander erben",
        "Anweisungen modifizieren globale Variablen, um den Programmzustand zu verfolgen",
        "Das Programm spezifiziert gewünschte Zustände und das System bestimmt, wie diese erreicht werden"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche Programmiersprache wird häufig für die clientseitige Webentwicklung im Browser verwendet und unterstützt mehrere Paradigmen?",
      answers: [
        "JavaScript",
        "PHP",
        "Python",
        "C++"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist der Unterschied zwischen kompilierten und interpretierten Sprachen bezüglich der Programmverteilung?",
      answers: [
        "Kompilierte Programme werden vorab in Maschinencode umgewandelt; bei interpretierten Sprachen wird der Quellcode selbst als Programm behandelt",
        "Kompilierte Programme erfordern den Compiler auf Endbenutzer-Rechnern; interpretierte Programme benötigen keine zusätzliche Software",
        "Interpretierte Programme laufen schneller, weil sie den Kompilierungsschritt überspringen",
        "Es gibt keinen praktischen Unterschied in der Verteilung von Programmen"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist Bytecode im Kontext von Programmiersprachen wie Java?",
      answers: [
        "Ein Zwischenformat, das näher an der Maschinensprache ist als Quellcode, aber eine Laufzeitumgebung zur Ausführung benötigt",
        "Der binäre Maschinencode, der von traditionellen Compilern erzeugt wird",
        "Quellcode, der für schnelleres Laden komprimiert wurde",
        "Ein Format, das speziell für Webbrowser entwickelt wurde"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche Aussagen über den JavaScript-Interpreter sind korrekt? (Wähle zwei)",
      answers: [
        "Webbrowser enthalten einen JavaScript-Interpreter",
        "Node.js kann JavaScript-Skripte außerhalb eines Browsers ausführen",
        "JavaScript kann nur innerhalb einer Webbrowser-Umgebung ausgeführt werden",
        "JavaScript muss kompiliert werden, bevor es ausgeführt werden kann"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Wie können Komponenten, die in verschiedenen Programmiersprachen geschrieben sind, innerhalb einer Anwendung kommunizieren?",
      answers: [
        "Durch eine gemeinsam verstandene Programmierschnittstelle (API) oder durch Austausch von Dateien in kompatiblen Formaten",
        "Verschiedene Programmiersprachen können nicht in derselben Anwendung verwendet werden",
        "Nur durch direktes Speicher-Sharing, das alle Sprachen unterstützen",
        "Durch Konvertierung des gesamten Codes in dieselbe Sprache vor der Ausführung"
      ],
      correct: [0],
      multiSelect: false
    },

    // 031.2 - Architektur von Webanwendungen (Fragen 14-27)
    {
      question: "Was ist im Client/Server-Modell für Webanwendungen die Hauptaufgabe des Clients?",
      answers: [
        "Bereitstellung der Benutzeroberfläche und ansprechende Präsentation der Inhalte",
        "Verarbeitung der Geschäftslogik und Verwaltung von Datenbanktransaktionen",
        "Permanente Speicherung aller Anwendungsdaten",
        "Verwaltung der Benutzerauthentifizierung für alle verbundenen Clients"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was definiert die API eines HTTP-Servers im Kontext von Webanwendungen?",
      answers: [
        "Die verfügbaren Anfragen und die Art und Weise, wie diese Anfragen gestellt werden sollen",
        "Das visuelle Design und Layout der Client-Oberfläche",
        "Das Datenbankschema zur Speicherung von Anwendungsdaten",
        "Die Programmiersprache, die für die Client-Entwicklung verwendet werden muss"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche Browser-Rendering-Engines sind korrekt ihren Browsern zugeordnet? (Wähle zwei)",
      answers: [
        "Blink - Chrome und Edge",
        "WebKit - Safari und iOS-Browser",
        "Gecko - Internet Explorer",
        "Trident - Firefox"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Was ist eine Progressive Web App (PWA)?",
      answers: [
        "Ein Mechanismus zur Paketierung von Webanwendungs-Clients für die Offline-Nutzung, beschränkt auf Funktionen ohne unmittelbare Server-Kommunikation",
        "Eine Webanwendung, die nur auf mobilen Geräten laufen kann",
        "Eine Browser-Erweiterung, die die Funktionalität von Webseiten erweitert",
        "Eine serverseitige Technologie zur Generierung dynamischer HTML-Inhalte"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie greifen Webanwendungen im Browser auf sensible Ressourcen wie Kamera oder Mikrofon zu?",
      answers: [
        "Durch ausdrückliche Benutzerautorisierung, bevor die Anwendung diese Ressourcen nutzen kann",
        "Automatisch ohne Einschränkungen für bessere Benutzererfahrung",
        "Nur durch serverseitige Anfragen, die die Browser-Sicherheit umgehen",
        "Durch Installation zusätzlicher Browser-Plugins, die Zugriff gewähren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist der Hauptzweck von CSS in einem Webanwendungs-Client?",
      answers: [
        "Anpassung des Aussehens und Layouts von HTML-Oberflächenelementen",
        "Handhabung von Benutzerinteraktionen und Server-Kommunikation",
        "Definition der Datenstruktur für Formularübermittlungen",
        "Verwaltung des Sitzungszustands zwischen Seitenanfragen"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was repräsentiert das 'document'-Objekt in JavaScript?",
      answers: [
        "Ein globales Objekt, das Zugriff auf die Elemente, Eigenschaften und Methoden des HTML-Dokuments bietet",
        "Eine serverseitige Konfigurationsdatei für die Webanwendung",
        "Die im Browser gespeicherten Sitzungsdaten des Benutzers",
        "Die Netzwerkverbindung zwischen Client und Server"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist WebAssembly und welches Problem löst es?",
      answers: [
        "Ein kompiliertes Format von JavaScript, das die Leistung bei CPU-intensiven Aktivitäten verbessert",
        "Eine neue Programmiersprache, die JavaScript ersetzen soll",
        "Ein Protokoll für Echtzeit-Kommunikation zwischen Browser und Server",
        "Ein Framework zum Erstellen mobiler Anwendungen mit Webtechnologien"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie unterscheidet sich ein Webanwendungs-Client von einer traditionellen Webseite bezüglich der Navigation?",
      answers: [
        "Webanwendungen können auf Benutzerereignisse reagieren, ohne neue Seiten im Browserfenster zu laden",
        "Webanwendungen erfordern immer Seitenneuladungen für jede Benutzerinteraktion",
        "Traditionelle Webseiten können keine interaktiven Elemente enthalten",
        "Es gibt keinen funktionalen Unterschied zwischen Webanwendungen und traditionellen Webseiten"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche Methoden kann ein Webanwendungsserver verwenden, um festzustellen, auf welche Prozedur sich eine Client-Anfrage bezieht? (Wähle zwei)",
      answers: [
        "URL-Adressen (Uniform Resource Locator)",
        "HTTP-Header-Felder und GET/POST-Methoden",
        "Die Betriebssystemversion des Clients",
        "Die Tageszeit, zu der die Anfrage gestellt wurde"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Worauf basiert das REST (Representational State Transfer) Paradigma?",
      answers: [
        "Grundlegenden HTTP-Methoden wie GET, POST, PUT, DELETE kombiniert mit entsprechenden URLs",
        "Einem proprietären Binärprotokoll, das speziell für Webanwendungen entwickelt wurde",
        "Direkten Datenbankabfragen, die in URL-Parameter eingebettet sind",
        "WebSocket-Verbindungen für die gesamte Client-Server-Kommunikation"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wann könnte GraphQL für eine Webanwendung eine bessere Wahl als REST sein?",
      answers: [
        "Wenn die Anwendung spezifischere Operationen mit detaillierten Beschreibungen der angeforderten Aktionen erfordert",
        "Wenn nur einfache CRUD-Operationen benötigt werden",
        "Wenn die Anwendung ohne JavaScript funktionieren muss",
        "Wenn Echtzeit-Audio- und Video-Streaming erforderlich ist"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was unterscheidet eine relationale Datenbank (SQL) von einer nicht-relationalen Datenbank (NoSQL)?",
      answers: [
        "Relationale Datenbanken erfordern vordefinierte Tabellenstrukturen; NoSQL-Datenbanken erlauben flexible Datenformate",
        "NoSQL-Datenbanken sind immer schneller als relationale Datenbanken",
        "Relationale Datenbanken können keine Beziehungen zwischen Daten verarbeiten",
        "NoSQL-Datenbanken erfordern starrere Schemata als SQL-Datenbanken"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche sind Beispiele für Open-Source relationale Datenbanksysteme? (Wähle zwei)",
      answers: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis"
      ],
      correct: [0, 1],
      multiSelect: true
    },

    // 031.3 - HTTP Grundlagen (Fragen 28-40)
    {
      question: "Was sind die zwei Hauptteile der HTTP-Nachrichtenstruktur?",
      answers: [
        "Header (enthält Ressourcendetails und Kontextinformationen) und Payload (enthält den Ressourceninhalt)",
        "Request (vom Client gesendet) und Response (vom Server gesendet)",
        "URL (Ressourcenadresse) und Methode (Operationstyp)",
        "Protokollversion und Statuscode"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was muss der Client vor dem Aufbau einer HTTP-Verbindung mit einem Hostnamen wie 'learning.lpi.org' tun?",
      answers: [
        "Ihn mithilfe des Domain Name System (DNS) in eine IP-Adresse umwandeln",
        "Ihn ausschließlich gegen eine lokale Hosts-Datei verifizieren",
        "Den Hostnamen direkt zur Auflösung an den HTTP-Server senden",
        "Den Hostnamen für schnellere Übertragung komprimieren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist der Standard-TCP-Port für HTTPS-Verbindungen?",
      answers: [
        "443",
        "80",
        "8080",
        "22"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie unterscheidet sich HTTPS von HTTP bezüglich des Nachrichtenformats?",
      answers: [
        "Das Nachrichtenformat ist identisch; HTTPS verschlüsselt die gesamte Kommunikation mit TLS",
        "HTTPS verwendet eine völlig andere Nachrichtenstruktur als HTTP",
        "HTTPS-Nachrichten sind kürzer, weil die Verschlüsselung die Daten komprimiert",
        "HTTP und HTTPS können nicht mit denselben Servern kommunizieren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist der Zweck des 'Host'-Header-Felds in einer HTTP-Anfrage?",
      answers: [
        "Zu identifizieren, für welche Website die Anfrage bestimmt ist, wenn mehrere virtuelle Hosts denselben Server teilen",
        "Den Hostnamen des Clients für Logging-Zwecke anzugeben",
        "Das bevorzugte Antwortformat anzuzeigen",
        "Den Client beim Server zu authentifizieren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie werden Parameter in einer HTTP-GET-Anfrage typischerweise an den Server übertragen?",
      answers: [
        "Eingebettet im URL-Pfad nach einem Fragezeichen, mit Parametern getrennt durch kaufmännische Und-Zeichen",
        "Im Request-Body als JSON-Daten",
        "In einer separaten Datei, die mit der Anfrage hochgeladen wird",
        "Ausschließlich durch HTTP-Header"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wann sollte die HTTP-POST-Methode anstelle von GET verwendet werden?",
      answers: [
        "Beim Senden von Daten, die aus mehr als kurzen Textfeldern bestehen, oder bei Schreiboperationen",
        "Beim Anfordern statischer Ressourcen wie Bilder",
        "Wenn die Antwort vom Browser zwischengespeichert werden soll",
        "Wenn der Client keine Daten senden muss"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was zeigt der HTTP-Statuscode-Bereich 4xx an?",
      answers: [
        "Client-Fehler - die Anfrage enthält fehlerhafte Syntax oder kann nicht erfüllt werden",
        "Erfolgreiche Antworten - die Anfrage wurde empfangen und korrekt verarbeitet",
        "Server-Fehler - der Server konnte eine gültige Anfrage nicht erfüllen",
        "Weiterleitung - weitere Maßnahmen sind erforderlich, um die Anfrage abzuschließen"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was bedeutet der HTTP-Statuscode 301?",
      answers: [
        "Moved Permanently - die Ressource hat eine neue permanente URL, die im Location-Header angegeben ist",
        "OK - die Anfrage war erfolgreich",
        "Not Found - der Server kann die angeforderte Ressource nicht finden",
        "Internal Server Error - der Server ist auf eine unerwartete Bedingung gestoßen"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche HTTP-Statuscodes weisen auf Probleme hin, die Maßnahmen des Anwendungsentwicklers auf der Serverseite erfordern? (Wähle zwei)",
      answers: [
        "500 Internal Server Error",
        "502 Bad Gateway",
        "404 Not Found",
        "401 Unauthorized"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Was ist der Unterschied zwischen einem Shared Cache und einem Private Cache in HTTP?",
      answers: [
        "Shared Caches bedienen mehrere Clients (z.B. CDN); Private Caches werden von einem einzelnen Client verwendet (z.B. Browser-Cache)",
        "Shared Caches speichern nur statische Inhalte; Private Caches speichern dynamische Inhalte",
        "Private Caches befinden sich auf Servern; Shared Caches auf Client-Geräten",
        "Es gibt keinen funktionalen Unterschied zwischen den beiden Cache-Typen"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche Arten von HTTP-Anfragen sind typischerweise NICHT für das Caching geeignet?",
      answers: [
        "POST-Anfragen, da sie Schreiboperationen implizieren und Antworten spezifisch für diese Anfrage sind",
        "GET-Anfragen für statische Bilder",
        "Anfragen, die den Statuscode 200 OK zurückgeben",
        "Anfragen für CSS- und JavaScript-Dateien"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist der Zweck des ETag-Header-Felds in HTTP-Antworten?",
      answers: [
        "Die Version einer Ressource zu identifizieren, damit Clients feststellen können, ob ihre zwischengespeicherte Kopie noch gültig ist",
        "Den Inhaltstyp der Antwort anzugeben",
        "Die Gesamtgröße der Antwort in Bytes anzuzeigen",
        "Den Server beim Client zu authentifizieren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie ermöglichen HTTP-Cookies die Sitzungsverwaltung?",
      answers: [
        "Der Server setzt Identifikations-Tags über Set-Cookie-Header, die der Client in nachfolgenden Anfragen einschließt",
        "Cookies speichern vollständige Sitzungsdaten direkt in der URL",
        "Cookies synchronisieren automatisch Daten zwischen Client- und Server-Datenbanken",
        "Cookies ersetzen die Notwendigkeit der HTTPS-Verschlüsselung"
      ],
      correct: [0],
      multiSelect: false
    }
  ]
};
