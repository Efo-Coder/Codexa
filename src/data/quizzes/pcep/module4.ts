import type { Question } from '@/types/quiz';

export const module4Questions: { de: Question[]; en: Question[] } = {
  en: [
    {
      question: "What is the output of the following snippet?",
      code: "def fun(x):\n    if x % 2 == 0:\n        return 1\n    else:\n        return\n\nprint(fun(fun(2)) + 1)",
      answers: ["The code will cause a runtime error", "<code>1</code>", "<code>None</code>", "<code>2</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "def f(x):\n    if x == 0:\n        return 0\n    return x + f(x - 1)\n\nprint(f(3))",
      answers: ["<code>6</code>", "<code>3</code>", "<code>1</code>", "The code is erroneous"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "def any():\n    print(var + 1, end='')\n\nvar = 1\nany()\nprint(var)",
      answers: ["<code>21</code>", "<code>11</code>", "<code>22</code>", "<code>12</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "A function defined in the following way: (Select two answers)",
      code: "def function(x=0):\n    return x",
      answers: ["may be invoked with exactly one argument", "may be invoked without any argument", "must be invoked without any argument", "must be invoked with exactly one argument"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Which one of the following lines properly starts a parameterless function definition?",
      answers: ["def fun():", "fun function():", "function fun():", "def fun:"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "def fun(x):\n    global y\n    y = x * x\n    return y\n\nfun(2)\nprint(y)",
      answers: ["<code>4</code>", "<code>2</code>", "The code will cause a runtime error", "<code>None</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "def fun(x):\n    x += 1\n    return x\nx = 2\nx = fun(x + 1)\nprint(x)",
      answers: ["<code>4</code>", "the code is erroneous", "<code>3</code>", "<code>5</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The following snippet:",
      code: "def func(a, b):\n    return a ** a\n\nprint(func(2))",
      answers: ["is erroneous", "will output <code>2</code>", "will output <code>4</code>", "will return <code>None</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "def fun(x, y, z):\n    return x + 2 * y + 3 * z\n\nprint(fun(0, z=1, y=3))",
      answers: ["<code>9</code>", "The snippet is erroneous", "<code>0</code>", "<code>3</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What code would you insert instead of the comment to obtain the expected output?",
      expectedOutput: "a\nb\nc",
      showCodeLabel: true,
      code: "dictionary = {}\nmy_list = ['a', 'b', 'c', 'd']\n\nfor i in range(len(my_list) - 1):\n    dictionary[my_list[i]] = (my_list[i], )\n\nfor i in sorted(dictionary.keys()):\n    k = dictionary[i]\n    # Insert your code here.",
      answers: ["<code>print(k[0])</code>", "<code>print(k['0'])</code>", "<code>print(k)</code>", "<code>print(k['0'])</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The following snippet:",
      code: "def func_1(a):\n    return a ** a\n\ndef func_2(a):\n    return func_1(a) * func_1(a)\n\nprint(func_2(2))",
      answers: ["will output <code>16</code>", "will output <code>2</code>", "is erroneous", "will output <code>4</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which of the following lines properly starts a function using two parameters, both with zeroed default values?",
      answers: ["<code>def fun(a=0, b=0):</code>", "<code>fun fun(a=0, b):</code>", "<code>fun fun(a, b=0):</code>", "<code>def fun(a=b=0):</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "def fun(inp=2, out=3):\n    return inp * out\n\nprint(fun(out=2))",
      answers: ["<code>4</code>", "The snippet is erroneous", "<code>6</code>", "<code>2</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "dictionary = {'one': 'two', 'three': 'one', 'two': 'three'}\nv = dictionary['one']\n\nfor k in range(len(dictionary)):\n    v = dictionary[v]\n\nprint(v)",
      answers: ["<code>two</code>", "<code>three</code>", "<code>one</code>", "<code>('one', 'two', 'three')</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "A built-in function is a function which:",
      answers: ["comes with Python, and is an integral part of Python", "is hidden from programmers", "has been placed within your code by another programmer", "has to be imported before use"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "tup = (1, 2, 4, 8)\ntup = tup[1:-1]\ntup = tup[0]\nprint(tup)",
      answers: ["<code>2</code>", "The snippet is erroneous", "<code>(2)</code>", "<code>(2, )</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which of the following statements are true? (Select two answers)",
      answers: ["The <code>None</code> value can be compared with variables", "The <code>None</code> value can be assigned to variables", "The <code>None</code> value can be used as an argument of arithmetic operators", "The <code>None</code> value cannot be used outside functions"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Assuming that <code>my_tuple</code> is a correctly created tuple, the fact that tuples are immutable means that the following instruction:",
      code: "my_tuple[1] = my_tuple[0] + my_tuple[0]",
      answers: ["is illegal", "can be executed if and only if the tuple contains at least two elements", "is fully correct", "may be illegal if the tuple contains strings"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The fact that tuples belong to sequence types means that:",
      answers: ["they can be indexed and sliced like lists", "they can be extended using the <code>.append()</code> method", "they can be modified using the <code>del</code> instruction", "they are actually lists"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "my_list = ['Mary', 'had', 'a', 'little', 'lamb']\n\ndef my_list(my_list):\n    del my_list[3]\n    my_list[3] = 'ram'\n\nprint(my_list(my_list))",
      answers: ["no output, the snippet is erroneous", "<code>['Mary', 'had', 'a', 'little', 'lamb']</code>", "<code>['Mary', 'had', 'a', 'lamb']</code>", "<code>['Mary', 'had', 'a', 'ram']</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following code?",
      code: "try:\n    value = input(\"Enter a value: \")\n    print(value/value)\nexcept ValueError:\n    print(\"Bad input...\")\nexcept ZeroDivisionError:\n    print(\"Very bad input...\")\nexcept TypeError:\n    print(\"Very very bad input...\")\nexcept:\n    print(\"Booo!\")",
      answers: ["<code>Very very bad input...</code>", "<code>Very bad input...</code>", "<code>Booo!</code>", "<code>Bad input...</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Select the true statements about the try-except block in relation to the following example. (Select two answers)",
      code: "try:\n    # Some code is here...\nexcept:\n    # Some code is here...",
      answers: ["If you suspect that a snippet may raise an exception, you should place it in the <code>try</code> block", "The code that follows the <code>except</code> statement will be executed if the code in the <code>try</code> clause runs into an error", "If there is a syntax error in code located in the <code>try</code> block, the except branch will not handle it, and a SyntaxError exception will be raised instead", "The code that follows the <code>try</code> statement will be executed if the code in the <code>except</code> clause runs into an error"],
      correct: [0, 1],
      multiSelect: true
    }
  ],
  de: [
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "def fun(x):\n    if x % 2 == 0:\n        return 1\n    else:\n        return\n\nprint(fun(fun(2)) + 1)",
      answers: ["Der Code wird einen Laufzeitfehler verursachen", "<code>1</code>", "<code>None</code>", "<code>2</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "def f(x):\n    if x == 0:\n        return 0\n    return x + f(x - 1)\n\nprint(f(3))",
      answers: ["<code>6</code>", "<code>3</code>", "<code>1</code>", "Der Code ist fehlerhaft"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "def any():\n    print(var + 1, end='')\n\nvar = 1\nany()\nprint(var)",
      answers: ["<code>21</code>", "<code>11</code>", "<code>22</code>", "<code>12</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Eine Funktion, die folgendermaßen definiert ist: (Wähle zwei Antworten)",
      code: "def function(x=0):\n    return x",
      answers: ["kann mit genau einem Argument aufgerufen werden", "kann ohne Argument aufgerufen werden", "muss ohne Argument aufgerufen werden", "muss mit genau einem Argument aufgerufen werden"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Welche der folgenden Zeilen startet korrekt eine parameterlose Funktionsdefinition?",
      answers: ["def fun():", "fun function():", "function fun():", "def fun:"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "def fun(x):\n    global y\n    y = x * x\n    return y\n\nfun(2)\nprint(y)",
      answers: ["<code>4</code>", "<code>2</code>", "Der Code wird einen Laufzeitfehler verursachen", "<code>None</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "def fun(x):\n    x += 1\n    return x\nx = 2\nx = fun(x + 1)\nprint(x)",
      answers: ["<code>4</code>", "Der Code ist fehlerhaft", "<code>3</code>", "<code>5</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Das folgende Snippet:",
      code: "def func(a, b):\n    return a ** a\n\nprint(func(2))",
      answers: ["ist fehlerhaft", "wird <code>2</code> ausgeben", "wird <code>4</code> ausgeben", "wird <code>None</code> zurückgeben"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "def fun(x, y, z):\n    return x + 2 * y + 3 * z\n\nprint(fun(0, z=1, y=3))",
      answers: ["<code>9</code>", "Das Snippet ist fehlerhaft", "<code>0</code>", "<code>3</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welchen Code würdest du anstelle des Kommentars einfügen, um die erwartete Ausgabe zu erhalten?",
      expectedOutput: "a\nb\nc",
      showCodeLabel: true,
      code: "dictionary = {}\nmy_list = ['a', 'b', 'c', 'd']\n\nfor i in range(len(my_list) - 1):\n    dictionary[my_list[i]] = (my_list[i], )\n\nfor i in sorted(dictionary.keys()):\n    k = dictionary[i]\n    # Insert your code here.",
      answers: ["<code>print(k[0])</code>", "<code>print(k['0'])</code>", "<code>print(k)</code>", "<code>print(k['0'])</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Das folgende Snippet:",
      code: "def func_1(a):\n    return a ** a\n\ndef func_2(a):\n    return func_1(a) * func_1(a)\n\nprint(func_2(2))",
      answers: ["wird <code>16</code> ausgeben", "wird <code>2</code> ausgeben", "ist fehlerhaft", "wird <code>4</code> ausgeben"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche der folgenden Zeilen startet korrekt eine Funktion mit zwei Parametern, beide mit Standardwert null?",
      answers: ["<code>def fun(a=0, b=0):</code>", "<code>fun fun(a=0, b):</code>", "<code>fun fun(a, b=0):</code>", "<code>def fun(a=b=0):</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "def fun(inp=2, out=3):\n    return inp * out\n\nprint(fun(out=2))",
      answers: ["<code>4</code>", "Das Snippet ist fehlerhaft", "<code>6</code>", "<code>2</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "dictionary = {'one': 'two', 'three': 'one', 'two': 'three'}\nv = dictionary['one']\n\nfor k in range(len(dictionary)):\n    v = dictionary[v]\n\nprint(v)",
      answers: ["<code>two</code>", "<code>three</code>", "<code>one</code>", "<code>('one', 'two', 'three')</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Eine eingebaute Funktion ist eine Funktion, die:",
      answers: ["mit Python geliefert wird und ein integraler Bestandteil von Python ist", "vor Programmierern verborgen ist", "von einem anderen Programmierer in Ihren Code eingefügt wurde", "vor der Verwendung importiert werden muss"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "tup = (1, 2, 4, 8)\ntup = tup[1:-1]\ntup = tup[0]\nprint(tup)",
      answers: ["<code>2</code>", "Das Snippet ist fehlerhaft", "<code>(2)</code>", "<code>(2, )</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche der folgenden Aussagen sind wahr? (Wähle zwei Antworten)",
      answers: ["Der <code>None</code>-Wert kann mit Variablen verglichen werden", "Der <code>None</code>-Wert kann Variablen zugewiesen werden", "Der <code>None</code>-Wert kann als Argument arithmetischer Operatoren verwendet werden", "Der <code>None</code>-Wert kann nicht außerhalb von Funktionen verwendet werden"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Angenommen, <code>my_tuple</code> ist ein korrekt erstelltes Tupel, bedeutet die Tatsache, dass Tupel unveränderlich sind, dass die folgende Anweisung:",
      code: "my_tuple[1] = my_tuple[0] + my_tuple[0]",
      answers: ["illegal ist", "nur ausgeführt werden kann, wenn das Tupel mindestens zwei Elemente enthält", "vollständig korrekt ist", "illegal sein kann, wenn das Tupel Strings enthält"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Die Tatsache, dass Tupel zu Sequenztypen gehören, bedeutet, dass:",
      answers: ["sie wie Listen indiziert und gesliced werden können", "sie mit der <code>.append()</code>-Methode erweitert werden können", "sie mit der <code>del</code>-Anweisung modifiziert werden können", "sie eigentlich Listen sind"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = ['Mary', 'had', 'a', 'little', 'lamb']\n\ndef my_list(my_list):\n    del my_list[3]\n    my_list[3] = 'ram'\n\nprint(my_list(my_list))",
      answers: ["keine Ausgabe, das Snippet ist fehlerhaft", "<code>['Mary', 'had', 'a', 'little', 'lamb']</code>", "<code>['Mary', 'had', 'a', 'lamb']</code>", "<code>['Mary', 'had', 'a', 'ram']</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Codes?",
      code: "try:\n    value = input(\"Enter a value: \")\n    print(value/value)\nexcept ValueError:\n    print(\"Bad input...\")\nexcept ZeroDivisionError:\n    print(\"Very bad input...\")\nexcept TypeError:\n    print(\"Very very bad input...\")\nexcept:\n    print(\"Booo!\")",
      answers: ["<code>Very very bad input...</code>", "<code>Very bad input...</code>", "<code>Booo!</code>", "<code>Bad input...</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wähle die wahren Aussagen über den try-except-Block in Bezug auf das folgende Beispiel. (Wähle zwei Antworten)",
      code: "try:\n    # Some code is here...\nexcept:\n    # Some code is here...",
      answers: ["Wenn Sie vermuten, dass ein Snippet eine Ausnahme auslösen könnte, sollten Sie es in den <code>try</code>-Block setzen", "Der Code nach der <code>except</code>-Anweisung wird ausgeführt, wenn der Code in der <code>try</code>-Klausel auf einen Fehler stößt", "Wenn es einen Syntaxfehler im Code im <code>try</code>-Block gibt, wird der except-Zweig ihn nicht behandeln, und stattdessen wird eine SyntaxError-Ausnahme ausgelöst", "Der Code nach der <code>try</code>-Anweisung wird ausgeführt, wenn der Code in der <code>except</code>-Klausel auf einen Fehler stößt"],
      correct: [0, 1],
      multiSelect: true
    }
  ]
};
