import type { Question } from '@/types/quiz';

export const module2Questions: { de: Question[]; en: Question[] } = {
  en: [
    {
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nx = x // y\ny = y // x\n\nprint(y)",
      answers: [
        "The code will cause a runtime error",
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>11</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nx = x % y\nx = x % y\ny = y % x\n\nprint(y)",
      answers: [
        "<code>1</code>",
        "<code>4</code>",
        "<code>3</code>",
        "<code>2</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The meaning of the keyword parameter is determined by:",
      answers: [
        "The argument's name specified along with its value",
        "Its Value",
        "Its Position within the argument list",
        "Its connection with existing variables"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The <code>**</code> operator:",
      answers: [
        "Performs exponentiation",
        "Does not exist",
        "Performs duplicated multiplication",
        "Performs floating-point multiplication"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "x = 1 / 2 + 3 // 3 + 4 ** 2\nprint(x)",
      answers: [
        "<code>17.5</code>",
        "<code>8.5</code>",
        "<code>17</code>",
        "<code>8</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "z = y = x = 1\nprint(x, y, z, sep='*')",
      answers: [
        "<code>1*1*1</code>",
        "<code>x*y*z</code>",
        "<code>1 1 1</code>",
        "<code>x y z</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Left-sided binding determines that the result of the following expression is equal to:",
      code: "1 // 2 * 3",
      answers: [
        "<code>0</code>",
        "<code>0.166666666666666</code>",
        "<code>4.5</code>",
        "<code>0.0</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The <code>\\n</code> digraph forces the <code>print()</code> function to:",
      answers: [
        "Break the output line",
        "Stop its execution",
        "Output exactly two characters: <code>\\</code> and <code>n</code>",
        "Duplicate the character next to the disgraph"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "x = 1\ny = 2\nz = x\nx = y\ny = z\nprint(x, y)",
      answers: [
        "<code>2 1</code>",
        "<code>2 2</code>",
        "<code>1 1</code>",
        "<code>1 2</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The 0o prefix means that the number after it is denoted as:",
      answers: [
        "Octal",
        "Binary",
        "Hexadecimal",
        "Decimal"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The result of the following division:",
      code: "1 / 1",
      answers: [
        "Is equal to <code>1.0</code>",
        "Is equal to <code>1</code>",
        "Cannot be evaluated",
        "Cannot be predicted"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The <code>print()</code> function can output values of:",
      answers: [
        "Any number of arguments (including zero)",
        "Not more than five arguments",
        "Just one argument",
        "Any number of arguments (excluding zero)"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nx = x / y\ny = y / x\n\nprint(y)",
      answers: [
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>",
        "The code will cause a runtime error"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which of the following sentences are true? (Select two answers)",
      answers: [
        "The right argument of the <code>%</code> operator cannot be zero",
        "The <code>**</code> operator uses right-sided binding",
        "Multiplication is left-sided binding",
        "The result of the <code>/</code> operator is always an integer value"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "The value twenty point twelve times ten raised to the power of eight should be written as:",
      answers: [
        "<code>20.12E8</code>",
        "<code>20E12.8</code>",
        "<code>20.12*10^8</code>",
        "<code>20.12*10**8</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which of the following variable names are illegal? (Select two answers)",
      answers: [
        "True",
        "and",
        "TRUE",
        "true"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = int(input())\ny = int(input())\n\nprint(x + y)",
      answers: [
        "<code>6</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>24</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>3</code> and <code>6</code> respectivly?",
      code: "x = input()\ny = int(input())\n\nprint(x * y)",
      answers: [
        "<code>333333</code>",
        "<code>18</code>",
        "<code>36</code>",
        "<code>666</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the folowing snippet if the user enters two lines containing <code>2</code> and <code>4</code> respectivly?",
      code: "x = input()\ny = input()\nprint(x + y)",
      answers: [
        "<code>24</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>6</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "y = 2 + 3 * 5.\nprint(Y)",
      answers: [
        "The snippet will cause an execution error",
        "<code>17.0</code>",
        "<code>17</code>",
        "<code>25.0</code>"
      ],
      correct: [0],
      multiSelect: false
    }
  ],
  de: [
    {
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nx = x // y\ny = y // x\n\nprint(y)",
      answers: [
        "Der Code wird einen Laufzeitfehler verursachen",
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>11</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nx = x % y\nx = x % y\ny = y % x\n\nprint(y)",
      answers: [
        "<code>1</code>",
        "<code>4</code>",
        "<code>3</code>",
        "<code>2</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Die Bedeutung des Schlüsselwortparameters wird bestimmt durch:",
      answers: [
        "Den Namen des Arguments, der zusammen mit seinem Wert angegeben wird",
        "Seinen Wert",
        "Seine Position innerhalb der Argumentliste",
        "Seine Verbindung mit existierenden Variablen"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Der <code>**</code>-Operator:",
      answers: [
        "Führt Potenzierung durch",
        "Existiert nicht",
        "Führt doppelte Multiplikation durch",
        "Führt Gleitkomma-Multiplikation durch"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "x = 1 / 2 + 3 // 3 + 4 ** 2\nprint(x)",
      answers: [
        "<code>17.5</code>",
        "<code>8.5</code>",
        "<code>17</code>",
        "<code>8</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "z = y = x = 1\nprint(x, y, z, sep='*')",
      answers: [
        "<code>1*1*1</code>",
        "<code>x*y*z</code>",
        "<code>1 1 1</code>",
        "<code>x y z</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Linksseitige Bindung bestimmt, dass das Ergebnis des folgenden Ausdrucks gleich ist:",
      code: "1 // 2 * 3",
      answers: [
        "<code>0</code>",
        "<code>0.166666666666666</code>",
        "<code>4.5</code>",
        "<code>0.0</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Der <code>\\n</code>-Digraph zwingt die <code>print()</code>-Funktion dazu:",
      answers: [
        "Die Ausgabezeile umzubrechen",
        "Ihre Ausführung zu beenden",
        "Genau zwei Zeichen auszugeben: <code>\\</code> und <code>n</code>",
        "Das Zeichen neben dem Digraph zu duplizieren"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "x = 1\ny = 2\nz = x\nx = y\ny = z\nprint(x, y)",
      answers: [
        "<code>2 1</code>",
        "<code>2 2</code>",
        "<code>1 1</code>",
        "<code>1 2</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Das Präfix 0o bedeutet, dass die Zahl danach dargestellt wird als:",
      answers: [
        "Oktal",
        "Binär",
        "Hexadezimal",
        "Dezimal"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Das Ergebnis der folgenden Division:",
      code: "1 / 1",
      answers: [
        "Ist gleich <code>1.0</code>",
        "Ist gleich <code>1</code>",
        "Kann nicht ausgewertet werden",
        "Kann nicht vorhergesagt werden"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Die <code>print()</code>-Funktion kann Werte ausgeben von:",
      answers: [
        "Beliebig vielen Argumenten (einschließlich null)",
        "Nicht mehr als fünf Argumenten",
        "Nur einem Argument",
        "Beliebig vielen Argumenten (ausschließlich null)"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nx = x / y\ny = y / x\n\nprint(y)",
      answers: [
        "<code>8.0</code>",
        "<code>4.0</code>",
        "<code>2.0</code>",
        "Der Code wird einen Laufzeitfehler verursachen"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche der folgenden Aussagen sind wahr? (Wähle zwei Antworten)",
      answers: [
        "Das rechte Argument des <code>%</code>-Operators darf nicht null sein",
        "Der <code>**</code>-Operator verwendet rechtsseitige Bindung",
        "Multiplikation ist linksseitig bindend",
        "Das Ergebnis des <code>/</code>-Operators ist immer ein ganzzahliger Wert"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Der Wert zwanzig Komma zwölf mal zehn hoch acht sollte geschrieben werden als:",
      answers: [
        "<code>20.12E8</code>",
        "<code>20E12.8</code>",
        "<code>20.12*10^8</code>",
        "<code>20.12*10**8</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche der folgenden Variablennamen sind ungültig? (Wähle zwei Antworten)",
      answers: [
        "True",
        "and",
        "TRUE",
        "true"
      ],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = int(input())\ny = int(input())\n\nprint(x + y)",
      answers: [
        "<code>6</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>24</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>3</code> und <code>6</code> eingibt?",
      code: "x = input()\ny = int(input())\n\nprint(x * y)",
      answers: [
        "<code>333333</code>",
        "<code>18</code>",
        "<code>36</code>",
        "<code>666</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets, wenn der Benutzer zwei Zeilen mit <code>2</code> und <code>4</code> eingibt?",
      code: "x = input()\ny = input()\nprint(x + y)",
      answers: [
        "<code>24</code>",
        "<code>2</code>",
        "<code>4</code>",
        "<code>6</code>"
      ],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "y = 2 + 3 * 5.\nprint(Y)",
      answers: [
        "Das Snippet wird einen Ausführungsfehler verursachen",
        "<code>17.0</code>",
        "<code>17</code>",
        "<code>25.0</code>"
      ],
      correct: [0],
      multiSelect: false
    }
  ]
};
