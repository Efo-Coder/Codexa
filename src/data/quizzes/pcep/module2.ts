import type { Question } from '@/types/quiz';

export const module2Questions: { de: Question[]; en: Question[] } = {
  en: [
    {
      id: 'pcep-m2-1',
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nx = x // y\ny = y // x\n\nprint(y)",
      answers: [
        "The code will cause a runtime error",
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>"
      ],
      correct: [0],

      explanation: 'After x // y, x becomes 0; then y // x divides by zero, so execution stops with an error.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-2',
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>11</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nx = x % y\nx = x % y\ny = y % x\n\nprint(y)",
      answers: [
        "<code>1</code>",
        "<code>4</code>",
        "<code>3</code>",
        "<code>2</code>"
      ],
      correct: [0],

      explanation: '11 % 4 is 3, then 4 % 3 is 1; the other results ignore modulo.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-3',
      question: "The meaning of the keyword parameter is determined by:",
      answers: [
        "The argument's name specified along with its value",
        "Its Value",
        "Its Position within the argument list",
        "Its connection with existing variables"
      ],
      correct: [0],

      explanation: 'Keyword arguments are identified by the parameter name; position or value alone does not define them.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-4',
      question: "The <code>**</code> operator:",
      answers: [
        "Performs exponentiation",
        "Does not exist",
        "Performs duplicated multiplication",
        "Performs floating-point multiplication"
      ],
      correct: [0],

      explanation: '** is exponentiation; multiplication uses * and the operator does exist.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-5',
      question: "What is the output of the following snippet?",
      code: "x = 1 / 2 + 3 // 3 + 4 ** 2\nprint(x)",
      answers: [
        "<code>17.5</code>",
        "<code>8.5</code>",
        "<code>17</code>",
        "<code>8</code>"
      ],
      correct: [0],

      explanation: 'Using precedence: 1/2 = 0.5, 3//3 = 1, 4**2 = 16; sum is 17.5.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-6',
      question: "What is the output of the following snippet?",
      code: "z = y = x = 1\nprint(x, y, z, sep='*')",
      answers: [
        "<code>1*1*1</code>",
        "<code>x*y*z</code>",
        "<code>1 1 1</code>",
        "<code>x y z</code>"
      ],
      correct: [0],

      explanation: "Chained assignment sets x=y=z=1 and sep='*' joins with asterisks, not spaces or variable names.",
      multiSelect: false
    },
    {
      id: 'pcep-m2-7',
      question: "Left-sided binding determines that the result of the following expression is equal to:",
      code: "1 // 2 * 3",
      answers: [
        "<code>0</code>",
        "<code>0.166666666666666</code>",
        "<code>4.5</code>",
        "<code>0.0</code>"
      ],
      correct: [0],

      explanation: 'Left associativity gives (1 // 2) * 3 = 0; it is not a float or 0.1666.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-8',
      question: "The <code>\\n</code> digraph forces the <code>print()</code> function to:",
      answers: [
        "Break the output line",
        "Stop its execution",
        "Output exactly two characters: <code>\\</code> and <code>n</code>",
        "Duplicate the character next to the disgraph"
      ],
      correct: [0],

      explanation: '\\n is a newline escape, so it breaks the line; it does not print backslash+n or stop execution.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-9',
      question: "What is the output of the following snippet?",
      code: "x = 1\ny = 2\nz = x\nx = y\ny = z\nprint(x, y)",
      answers: [
        "<code>2 1</code>",
        "<code>2 2</code>",
        "<code>1 1</code>",
        "<code>1 2</code>"
      ],
      correct: [0],

      explanation: 'The code swaps x and y using z, so it prints 2 1; the other outputs assume no swap.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-10',
      question: "The 0o prefix means that the number after it is denoted as:",
      answers: [
        "Octal",
        "Binary",
        "Hexadecimal",
        "Decimal"
      ],
      correct: [0],

      explanation: '0o denotes an octal literal; binary is 0b and hex is 0x.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-11',
      question: "The result of the following division:",
      code: "1 / 1",
      answers: [
        "Is equal to <code>1.0</code>",
        "Is equal to <code>1</code>",
        "Cannot be evaluated",
        "Cannot be predicted"
      ],
      correct: [0],

      explanation: 'The / operator returns a float in Python 3, so 1 / 1 is 1.0.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-12',
      question: "The <code>print()</code> function can output values of:",
      answers: [
        "Any number of arguments (including zero)",
        "Not more than five arguments",
        "Just one argument",
        "Any number of arguments (excluding zero)"
      ],
      correct: [0],

      explanation: 'print accepts any number of arguments, including zero; it is not limited to one or five.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-13',
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nx = x / y\ny = y / x\n\nprint(y)",
      answers: [
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>",
        "The code will cause a runtime error"
      ],
      correct: [0],

      explanation: 'x / y becomes 0.5 and y / x becomes 4 / 0.5 = 8.0; no error occurs.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-14',
      question: "Which of the following sentences are true? (Select two answers)",
      answers: [
        "The right argument of the <code>%</code> operator cannot be zero",
        "The <code>**</code> operator uses right-sided binding",
        "Multiplication is left-sided binding",
        "The result of the <code>/</code> operator is always an integer value"
      ],
      correct: [0, 1],

      explanation: 'Modulo by zero is invalid and ** is right-associative; / does not always return an integer, and the multiplication binding wording is considered incorrect in this context.',
      multiSelect: true
    },
    {
      id: 'pcep-m2-15',
      question: "The value twenty point twelve times ten raised to the power of eight should be written as:",
      answers: [
        "<code>20.12E8</code>",
        "<code>20E12.8</code>",
        "<code>20.12*10^8</code>",
        "<code>20.12*10**8</code>"
      ],
      correct: [0],

      explanation: 'Scientific notation uses E or e, so 20.12E8 is valid; the others are not Python syntax.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-16',
      question: "Which of the following variable names are illegal? (Select two answers)",
      answers: [
        "True",
        "and",
        "TRUE",
        "true"
      ],
      correct: [0, 1],

      explanation: 'True and and are reserved keywords; TRUE and true are different identifiers because Python is case-sensitive.',
      multiSelect: true
    },
    {
      id: 'pcep-m2-17',
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nprint(x + y)",
      answers: [
        "<code>6</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>24</code>"
      ],
      correct: [0],

      explanation: 'Both inputs are converted to int, so the sum is 6; concatenation would require strings.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-18',
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>3</code> and <code>6</code> respectivly?",
      code: "x = input()\ny = int(input())\n\nprint(x * y)",
      answers: [
        "<code>333333</code>",
        "<code>18</code>",
        "<code>36</code>",
        "<code>666</code>"
      ],
      correct: [0],

      explanation: 'x is a string and y is an int, so x * y repeats the string six times.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-19',
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = input()\ny = input()\nprint(x + y)",
      answers: [
        "<code>24</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>6</code>"
      ],
      correct: [0],

      explanation: 'Both inputs are strings, so + concatenates to 24 rather than adding numerically.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-20',
      question: "What is the output of the following snippet?",
      code: "y = 2 + 3 * 5.\nprint(Y)",
      answers: [
        "The snippet will cause an execution error",
        "<code>17.0</code>",
        "<code>17</code>",
        "<code>25.0</code>"
      ],
      correct: [0],

      explanation: 'Y is undefined due to case sensitivity, so a NameError occurs before printing.',
      multiSelect: false
    }
  ],
  de: [
    {
      id: 'pcep-m2-1',
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nx = x // y\ny = y // x\n\nprint(y)",
      answers: [
        "Der Code wird einen Laufzeitfehler verursachen",
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>"
      ],
      correct: [0],

      explanation: 'Nach x // y wird x zu 0; y // x teilt dann durch 0, daher Laufzeitfehler.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-2',
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>11</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nx = x % y\nx = x % y\ny = y % x\n\nprint(y)",
      answers: [
        "<code>1</code>",
        "<code>4</code>",
        "<code>3</code>",
        "<code>2</code>"
      ],
      correct: [0],

      explanation: '11 % 4 ist 3, danach 4 % 3 ist 1; andere Ergebnisse ignorieren den Modulo.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-3',
      question: "Die Bedeutung des Schlüsselwortparameters wird bestimmt durch:",
      answers: [
        "Den Namen des Arguments, der zusammen mit seinem Wert angegeben wird",
        "Seinen Wert",
        "Seine Position innerhalb der Argumentliste",
        "Seine Verbindung mit existierenden Variablen"
      ],
      correct: [0],

      explanation: 'Schl?sselwortargumente werden durch den Parameternamen bestimmt; Position oder Wert allein reichen nicht.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-4',
      question: "Der <code>**</code>-Operator:",
      answers: [
        "Führt Potenzierung durch",
        "Existiert nicht",
        "Führt doppelte Multiplikation durch",
        "Führt Gleitkomma-Multiplikation durch"
      ],
      correct: [0],

      explanation: '** ist Potenzierung; Multiplikation ist * und der Operator existiert.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-5',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "x = 1 / 2 + 3 // 3 + 4 ** 2\nprint(x)",
      answers: [
        "<code>17.5</code>",
        "<code>8.5</code>",
        "<code>17</code>",
        "<code>8</code>"
      ],
      correct: [0],

      explanation: 'Mit Vorrangregeln: 1/2 = 0.5, 3//3 = 1, 4**2 = 16; Summe 17.5.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-6',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "z = y = x = 1\nprint(x, y, z, sep='*')",
      answers: [
        "<code>1*1*1</code>",
        "<code>x*y*z</code>",
        "<code>1 1 1</code>",
        "<code>x y z</code>"
      ],
      correct: [0],

      explanation: "Kettenzuweisung setzt x=y=z=1 und sep='*' verbindet mit Sternen, nicht mit Leerzeichen oder Variablennamen.",
      multiSelect: false
    },
    {
      id: 'pcep-m2-7',
      question: "Linksseitige Bindung bestimmt, dass das Ergebnis des folgenden Ausdrucks gleich ist:",
      code: "1 // 2 * 3",
      answers: [
        "<code>0</code>",
        "<code>0.166666666666666</code>",
        "<code>4.5</code>",
        "<code>0.0</code>"
      ],
      correct: [0],

      explanation: 'Linksassoziativ gilt (1 // 2) * 3 = 0; kein Float und nicht 0.1666.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-8',
      question: "Der <code>\\n</code>-Digraph zwingt die <code>print()</code>-Funktion dazu:",
      answers: [
        "Die Ausgabezeile umzubrechen",
        "Ihre Ausführung zu beenden",
        "Genau zwei Zeichen auszugeben: <code>\\</code> und <code>n</code>",
        "Das Zeichen neben dem Digraph zu duplizieren"
      ],
      correct: [0],

      explanation: '\\n ist ein Zeilenumbruch; es druckt nicht \\ und n und stoppt das Programm nicht.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-9',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "x = 1\ny = 2\nz = x\nx = y\ny = z\nprint(x, y)",
      answers: [
        "<code>2 1</code>",
        "<code>2 2</code>",
        "<code>1 1</code>",
        "<code>1 2</code>"
      ],
      correct: [0],

      explanation: 'Der Code tauscht x und y mit z, daher Ausgabe 2 1; die anderen Antworten setzen keinen Tausch voraus.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-10',
      question: "Das Präfix 0o bedeutet, dass die Zahl danach dargestellt wird als:",
      answers: [
        "Oktal",
        "Binär",
        "Hexadezimal",
        "Dezimal"
      ],
      correct: [0],

      explanation: '0o kennzeichnet Oktal; bin?r ist 0b und hex 0x.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-11',
      question: "Das Ergebnis der folgenden Division:",
      code: "1 / 1",
      answers: [
        "Ist gleich <code>1.0</code>",
        "Ist gleich <code>1</code>",
        "Kann nicht ausgewertet werden",
        "Kann nicht vorhergesagt werden"
      ],
      correct: [0],

      explanation: 'Der /-Operator liefert in Python 3 einen float, daher 1.0.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-12',
      question: "Die <code>print()</code>-Funktion kann Werte ausgeben von:",
      answers: [
        "Beliebig vielen Argumenten (einschließlich null)",
        "Nicht mehr als fünf Argumenten",
        "Nur einem Argument",
        "Beliebig vielen Argumenten (ausschließlich null)"
      ],
      correct: [0],

      explanation: 'print akzeptiert beliebig viele Argumente, auch null; es ist nicht auf eins oder f?nf begrenzt.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-13',
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nx = x / y\ny = y / x\n\nprint(y)",
      answers: [
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>",
        "Der Code wird einen Laufzeitfehler verursachen"
      ],
      correct: [0],

      explanation: 'x / y wird 0.5 und y / x ist 4 / 0.5 = 8.0; kein Fehler.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-14',
      question: "Welche der folgenden Aussagen sind wahr? (Wähle zwei Antworten)",
      answers: [
        "Das rechte Argument des <code>%</code>-Operators darf nicht null sein",
        "Der <code>**</code>-Operator verwendet rechtsseitige Bindung",
        "Multiplikation ist linksseitig bindend",
        "Das Ergebnis des <code>/</code>-Operators ist immer ein ganzzahliger Wert"
      ],
      correct: [0, 1],

      explanation: 'Modulo durch 0 ist ungültig und ** ist rechtsassoziativ; / liefert nicht immer einen Integer, und die Aussage zur Bindung der Multiplikation gilt hier als falsch formuliert.',
      multiSelect: true
    },
    {
      id: 'pcep-m2-15',
      question: "Der Wert zwanzig Komma zwölf mal zehn hoch acht sollte geschrieben werden als:",
      answers: [
        "<code>20.12E8</code>",
        "<code>20E12.8</code>",
        "<code>20.12*10^8</code>",
        "<code>20.12*10**8</code>"
      ],
      correct: [0],

      explanation: 'Wissenschaftliche Notation nutzt E oder e, daher 20.12E8; die anderen Formen sind kein Python.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-16',
      question: "Welche der folgenden Variablennamen sind ungültig? (Wähle zwei Antworten)",
      answers: [
        "True",
        "and",
        "TRUE",
        "true"
      ],
      correct: [0, 1],

      explanation: 'True und and sind Schl?sselw?rter; TRUE und true sind wegen Gro?-/Kleinschreibung andere Bezeichner.',
      multiSelect: true
    },
    {
      id: 'pcep-m2-17',
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nprint(x + y)",
      answers: [
        "<code>6</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>24</code>"
      ],
      correct: [0],

      explanation: 'Beide Eingaben werden zu int konvertiert, daher Summe 6; Verkettung ginge nur mit Strings.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-18',
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>3</code> und <code>6</code> eingibt?",
      code: "x = input()\ny = int(input())\n\nprint(x * y)",
      answers: [
        "<code>333333</code>",
        "<code>18</code>",
        "<code>36</code>",
        "<code>666</code>"
      ],
      correct: [0],

      explanation: 'x ist ein String und y eine Zahl, daher wiederholt x * y den String sechs Mal.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-19',
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = input()\ny = input()\nprint(x + y)",
      answers: [
        "<code>24</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>6</code>"
      ],
      correct: [0],

      explanation: 'Beide Eingaben sind Strings, daher liefert + die Verkettung 24 statt eine Addition.',
      multiSelect: false
    },
    {
      id: 'pcep-m2-20',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "y = 2 + 3 * 5.\nprint(Y)",
      answers: [
        "Das Snippet wird einen Ausführungsfehler verursachen",
        "<code>17.0</code>",
        "<code>17</code>",
        "<code>25.0</code>"
      ],
      correct: [0],

      explanation: 'Y ist wegen Gro?-/Kleinschreibung nicht definiert, daher NameError.',
      multiSelect: false
    }
  ]
};
