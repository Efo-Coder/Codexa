import type { Question } from '@/types/quiz';

export const module3Questions: { de: Question[]; en: Question[] } = {
  en: [
    {
      question: "The value assigned to <code>x</code> is equal to:",
      code: "x = 1\nx = x == x",
      answers: ["<code>True</code>", "<code>0</code>", "<code>1</code>", "<code>False</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "my_list = [3, 1, -2]\nprint(my_list[my_list[-1]])",
      answers: ["<code>1</code>", "<code>-1</code>", "<code>-2</code>", "<code>3</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What value will be assigned to the <code>x</code> variable?",
      code: "z = 10\ny = 0\nx = y < z and z > y or y > z and z < y",
      answers: ["<code>True</code>", "<code>1</code>", "<code>False</code>", "<code>0</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How many hashes (<code>#</code>) will the following snippet send to the console?",
      code: "var = 0\nwhile var < 6:\n    var += 1\n    if var % 2 == 0:\n        continue\n    print(\"#\")",
      answers: ["Three", "One", "Zero", "Two"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How many stars (<code>*</code>) will the following snippet send to the console?",
      code: "i = 0\nwhile i <= 3:\n    i += 2\n    print(\"*\")",
      answers: ["Two", "Three", "One", "Zero"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How many hashes (<code>#</code>) will the following snippet send to the console?",
      code: "var = 1\nwhile var < 10:\n    print(\"#\")\n    var = var << 1",
      answers: ["Four", "One", "Eight", "Two"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "The second assignment:",
      code: "vals = [0, 1, 2]\nvals[0], vals[2] = vals[2], vals[0]",
      answers: ["Reverses the list", "Doesn't change the list", "Shortens the list", "Extends the list"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "my_list = [1, 2, 3]\nfor v in range(len(my_list)):\n    my_list.insert(1, my_list[v])\nprint(my_list)",
      answers: ["<code>[1, 1, 1, 1, 2, 3]</code>", "<code>[3, 2, 1, 1, 2, 3]</code>", "<code>[1, 2, 3, 1, 2, 3]</code>", "<code>[1, 2, 3, 3, 2, 1]</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "my_list = [1, 2, 3, 4]\nprint(my_list[-3:-2])",
      answers: ["<code>[2]</code>", "<code>[2, 3, 4]</code>", "<code>[2, 3]</code>", "<code>[]</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How many elements does the <code>my_list</code> list contain?",
      code: "my_list = [i for i in range(-1, 2)]",
      answers: ["Three", "One", "Four", "Two"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "An operator able to check whether two values are equal is coded as:",
      answers: ["==", "=", "!=", "==="],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "my_list = [[0, 1, 2, 3] for i in range(2)]\nprint(my_list[2][0])",
      answers: ["The snippet will cause a runtime error", "<code>1</code>", "<code>2</code>", "<code>0</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "t = [[3-i for i in range (3)] for j in range(3)]\ns = 0\nfor i in range(3):\n    s += t[i][i]\nprint(s)",
      answers: ["<code>6</code>", "<code>7</code>", "<code>02</code>", "<code>4</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How many stars (<code>*</code>) will the following snippet send to the console?",
      code: "i = 0\nwhile i <= 5:\n    i += 1\n    if i % 2 == 0:\n        break\n    print(\"*\")",
      answers: ["One", "Two", "Three", "Zero"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "What is the output of the following snippet?",
      code: "a = 1\nb = 0\nc = a & b\nd = a | b\ne = a ^ b\nprint(c + d + e)",
      answers: ["<code>2</code>", "<code>1</code>", "<code>3</code>", "<code>0</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "How many hashes (<code>#</code>) will the following snippet send to the console?",
      code: "for i in range(1):\n    print(\"#\")\nelse:\n    print(\"#\")",
      answers: ["Two", "Three", "Zero", "One"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Which of the following sentences are true? (Select two answers)",
      code: "nums = [1, 2, 3]\nvals = nums[-1:-2]",
      answers: ["<code>nums</code> and <code>vals</code> are two different lists", "<code>nums</code> is longer than <code>vals</code>", "<code>nums</code> and <code>vals</code> are of the same length", "<code>vals</code> is longer than <code>nums</code>"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "After execution of the following snippet, the sum of all <code>vals</code> elements will be equal to:",
      code: "vals = [0, 1, 2]\nvals.insert(0, 1)\ndel vals[1]",
      answers: ["<code>4</code>", "<code>5</code>", "<code>3</code>", "<code>2</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Take a look at the snippet, and choose the true statements. (Select two answers)",
      code: "nums = [1, 2, 3]\nvals = nums\ndel vals[1:2]",
      answers: ["<code>nums</code> and <code>vals</code> are of the same length", "<code>nums</code> and <code>vals</code> refer to the same list", "<code>nums</code> is replicated and assigned to <code>vals</code>", "<code>nums</code> is longer than <code>vals</code>"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "What is the output of the following snippet?",
      code: "my_list_1 = [1, 2, 3]\nmy_list_2 = []\nfor v in my_list_1:\n    my_list_2.insert(0, v)\nprint(my_list_2)",
      answers: ["<code>[3, 2, 1]</code>", "<code>[1, 2, 3]</code>", "<code>[1, 1, 1]</code>", "<code>[3, 3, 3]</code>"],
      correct: [0],
      multiSelect: false
    }
  ],
  de: [
    {
      question: "Der Wert, der <code>x</code> zugewiesen wird, ist gleich:",
      code: "x = 1\nx = x == x",
      answers: ["<code>True</code>", "<code>0</code>", "<code>1</code>", "<code>False</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [3, 1, -2]\nprint(my_list[my_list[-1]])",
      answers: ["<code>1</code>", "<code>-1</code>", "<code>-2</code>", "<code>3</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welcher Wert wird der Variable <code>x</code> zugewiesen?",
      code: "z = 10\ny = 0\nx = y < z and z > y or y > z and z < y",
      answers: ["<code>True</code>", "<code>1</code>", "<code>False</code>", "<code>0</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie viele Rauten (<code>#</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "var = 0\nwhile var < 6:\n    var += 1\n    if var % 2 == 0:\n        continue\n    print(\"#\")",
      answers: ["Drei", "Eine", "Null", "Zwei"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie viele Sterne (<code>*</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "i = 0\nwhile i <= 3:\n    i += 2\n    print(\"*\")",
      answers: ["Zwei", "Drei", "Einen", "Null"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie viele Rauten (<code>#</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "var = 1\nwhile var < 10:\n    print(\"#\")\n    var = var << 1",
      answers: ["Vier", "Eine", "Acht", "Zwei"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Die zweite Zuweisung:",
      code: "vals = [0, 1, 2]\nvals[0], vals[2] = vals[2], vals[0]",
      answers: ["Kehrt die Liste um", "Ändert die Liste nicht", "Verkürzt die Liste", "Erweitert die Liste"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [1, 2, 3]\nfor v in range(len(my_list)):\n    my_list.insert(1, my_list[v])\nprint(my_list)",
      answers: ["<code>[1, 1, 1, 1, 2, 3]</code>", "<code>[3, 2, 1, 1, 2, 3]</code>", "<code>[1, 2, 3, 1, 2, 3]</code>", "<code>[1, 2, 3, 3, 2, 1]</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [1, 2, 3, 4]\nprint(my_list[-3:-2])",
      answers: ["<code>[2]</code>", "<code>[2, 3, 4]</code>", "<code>[2, 3]</code>", "<code>[]</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie viele Elemente enthält die Liste <code>my_list</code>?",
      code: "my_list = [i for i in range(-1, 2)]",
      answers: ["Drei", "Eines", "Vier", "Zwei"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Ein Operator, der prüfen kann, ob zwei Werte gleich sind, wird geschrieben als:",
      answers: ["==", "=", "!=", "==="],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [[0, 1, 2, 3] for i in range(2)]\nprint(my_list[2][0])",
      answers: ["Das Snippet wird einen Laufzeitfehler verursachen", "<code>1</code>", "<code>2</code>", "<code>0</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "t = [[3-i for i in range (3)] for j in range(3)]\ns = 0\nfor i in range(3):\n    s += t[i][i]\nprint(s)",
      answers: ["<code>6</code>", "<code>7</code>", "<code>02</code>", "<code>4</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie viele Sterne (<code>*</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "i = 0\nwhile i <= 5:\n    i += 1\n    if i % 2 == 0:\n        break\n    print(\"*\")",
      answers: ["Einen", "Zwei", "Drei", "Null"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "a = 1\nb = 0\nc = a & b\nd = a | b\ne = a ^ b\nprint(c + d + e)",
      answers: ["<code>2</code>", "<code>1</code>", "<code>3</code>", "<code>0</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Wie viele Rauten (<code>#</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "for i in range(1):\n    print(\"#\")\nelse:\n    print(\"#\")",
      answers: ["Zwei", "Drei", "Null", "Eine"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Welche der folgenden Aussagen sind wahr? (Wähle zwei Antworten)",
      code: "nums = [1, 2, 3]\nvals = nums[-1:-2]",
      answers: ["<code>nums</code> und <code>vals</code> sind zwei verschiedene Listen", "<code>nums</code> ist länger als <code>vals</code>", "<code>nums</code> und <code>vals</code> haben die gleiche Länge", "<code>vals</code> ist länger als <code>nums</code>"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Nach der Ausführung des folgenden Snippets wird die Summe aller <code>vals</code>-Elemente gleich sein:",
      code: "vals = [0, 1, 2]\nvals.insert(0, 1)\ndel vals[1]",
      answers: ["<code>4</code>", "<code>5</code>", "<code>3</code>", "<code>2</code>"],
      correct: [0],
      multiSelect: false
    },
    {
      question: "Betrachte das Snippet und wähle die wahren Aussagen. (Wähle zwei Antworten)",
      code: "nums = [1, 2, 3]\nvals = nums\ndel vals[1:2]",
      answers: ["<code>nums</code> und <code>vals</code> haben die gleiche Länge", "<code>nums</code> und <code>vals</code> verweisen auf die gleiche Liste", "<code>nums</code> wird repliziert und <code>vals</code> zugewiesen", "<code>nums</code> ist länger als <code>vals</code>"],
      correct: [0, 1],
      multiSelect: true
    },
    {
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list_1 = [1, 2, 3]\nmy_list_2 = []\nfor v in my_list_1:\n    my_list_2.insert(0, v)\nprint(my_list_2)",
      answers: ["<code>[3, 2, 1]</code>", "<code>[1, 2, 3]</code>", "<code>[1, 1, 1]</code>", "<code>[3, 3, 3]</code>"],
      correct: [0],
      multiSelect: false
    }
  ]
};
