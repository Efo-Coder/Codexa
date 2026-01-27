import type { Question } from '@/types/quiz';

export const module3Questions: { de: Question[]; en: Question[] } = {
  en: [
    {
      id: 'pcep-m3-1',
      question: "The value assigned to <code>x</code> is equal to:",
      code: "x = 1\nx = x == x",
      answers: ["<code>True</code>", "<code>0</code>", "<code>1</code>", "<code>False</code>"],
      correct: [0],

      explanation: 'x == x evaluates to True and that boolean is assigned back to x; it is not the integer 1 unless coerced.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-2',
      question: "What is the output of the following snippet?",
      code: "my_list = [3, 1, -2]\nprint(my_list[my_list[-1]])",
      answers: ["<code>1</code>", "<code>-1</code>", "<code>-2</code>", "<code>3</code>"],
      correct: [0],

      explanation: 'my_list[-1] is -2, so my_list[-2] is 1; negative indices count from the end.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-3',
      question: "What value will be assigned to the <code>x</code> variable?",
      code: "z = 10\ny = 0\nx = y < z and z > y or y > z and z < y",
      answers: ["<code>True</code>", "<code>1</code>", "<code>False</code>", "<code>0</code>"],
      correct: [0],

      explanation: 'and has higher precedence than or, so the first part is True and the second is False; overall True.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-4',
      question: "How many hashes (<code>#</code>) will the following snippet send to the console?",
      code: "var = 0\nwhile var < 6:\n    var += 1\n    if var % 2 == 0:\n        continue\n    print(\"#\")",
      answers: ["Three", "One", "Zero", "Two"],
      correct: [0],

      explanation: 'Only odd values 1, 3, 5 reach print, so three hashes.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-5',
      question: "How many stars (<code>*</code>) will the following snippet send to the console?",
      code: "i = 0\nwhile i <= 3:\n    i += 2\n    print(\"*\")",
      answers: ["Two", "Three", "One", "Zero"],
      correct: [0],

      explanation: 'i becomes 2 then 4 while i <= 3, so the loop prints twice.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-6',
      question: "How many hashes (<code>#</code>) will the following snippet send to the console?",
      code: "var = 1\nwhile var < 10:\n    print(\"#\")\n    var = var << 1",
      answers: ["Four", "One", "Eight", "Two"],
      correct: [0],

      explanation: 'var doubles 1, 2, 4, 8 and then stops, so four hashes.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-7',
      question: "The second assignment:",
      code: "vals = [0, 1, 2]\nvals[0], vals[2] = vals[2], vals[0]",
      answers: ["Reverses the list", "Doesn't change the list", "Shortens the list", "Extends the list"],
      correct: [0],

      explanation: 'Tuple assignment swaps first and last elements, yielding [2, 1, 0].',
      multiSelect: false
    },
    {
      id: 'pcep-m3-8',
      question: "What is the output of the following snippet?",
      code: "my_list = [1, 2, 3]\nfor v in range(len(my_list)):\n    my_list.insert(1, my_list[v])\nprint(my_list)",
      answers: ["<code>[1, 1, 1, 1, 2, 3]</code>", "<code>[3, 2, 1, 1, 2, 3]</code>", "<code>[1, 2, 3, 1, 2, 3]</code>", "<code>[1, 2, 3, 3, 2, 1]</code>"],
      correct: [0],

      explanation: 'Inserting at index 1 each iteration shifts elements and repeats the current item, giving [1, 1, 1, 1, 2, 3].',
      multiSelect: false
    },
    {
      id: 'pcep-m3-9',
      question: "What is the output of the following snippet?",
      code: "my_list = [1, 2, 3, 4]\nprint(my_list[-3:-2])",
      answers: ["<code>[2]</code>", "<code>[2, 3, 4]</code>", "<code>[2, 3]</code>", "<code>[]</code>"],
      correct: [0],

      explanation: 'Slice -3:-2 selects only the element 2; the end index is exclusive.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-10',
      question: "How many elements does the <code>my_list</code> list contain?",
      code: "my_list = [i for i in range(-1, 2)]",
      answers: ["Three", "One", "Four", "Two"],
      correct: [0],

      explanation: 'range(-1, 2) produces -1, 0, 1, so there are three elements.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-11',
      question: "An operator able to check whether two values are equal is coded as:",
      answers: ["==", "=", "!=", "==="],
      correct: [0],

      explanation: '== compares equality; = assigns and != means not equal.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-12',
      question: "What is the output of the following snippet?",
      code: "my_list = [[0, 1, 2, 3] for i in range(2)]\nprint(my_list[2][0])",
      answers: ["The snippet will cause a runtime error", "<code>1</code>", "<code>2</code>", "<code>0</code>"],
      correct: [0],

      explanation: 'There are only two rows (indices 0 and 1); index 2 raises an IndexError.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-13',
      question: "What is the output of the following snippet?",
      code: "t = [[3-i for i in range (3)] for j in range(3)]\ns = 0\nfor i in range(3):\n    s += t[i][i]\nprint(s)",
      answers: ["<code>6</code>", "<code>7</code>", "<code>02</code>", "<code>4</code>"],
      correct: [0],

      explanation: 'Each row is [3, 2, 1]; summing the diagonal gives 6.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-14',
      question: "How many stars (<code>*</code>) will the following snippet send to the console?",
      code: "i = 0\nwhile i <= 5:\n    i += 1\n    if i % 2 == 0:\n        break\n    print(\"*\")",
      answers: ["One", "Two", "Three", "Zero"],
      correct: [0],

      explanation: 'The loop prints once for i = 1 and breaks at i = 2.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-15',
      question: "What is the output of the following snippet?",
      code: "a = 1\nb = 0\nc = a & b\nd = a | b\ne = a ^ b\nprint(c + d + e)",
      answers: ["<code>2</code>", "<code>1</code>", "<code>3</code>", "<code>0</code>"],
      correct: [0],

      explanation: 'Bitwise results are 0, 1, 1; the sum is 2.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-16',
      question: "How many hashes (<code>#</code>) will the following snippet send to the console?",
      code: "for i in range(1):\n    print(\"#\")\nelse:\n    print(\"#\")",
      answers: ["Two", "Three", "Zero", "One"],
      correct: [0],

      explanation: 'The loop runs once and the else executes because there is no break, so two hashes.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-17',
      question: "Which of the following sentences are true? (Select two answers)",
      code: "nums = [1, 2, 3]\nvals = nums[-1:-2]",
      answers: ["<code>nums</code> and <code>vals</code> are two different lists", "<code>nums</code> is longer than <code>vals</code>", "<code>nums</code> and <code>vals</code> are of the same length", "<code>vals</code> is longer than <code>nums</code>"],
      correct: [0, 1],

      explanation: 'nums[-1:-2] is an empty list, so nums and vals differ and nums is longer.',
      multiSelect: true
    },
    {
      id: 'pcep-m3-18',
      question: "After execution of the following snippet, the sum of all <code>vals</code> elements will be equal to:",
      code: "vals = [0, 1, 2]\nvals.insert(0, 1)\ndel vals[1]",
      answers: ["<code>4</code>", "<code>5</code>", "<code>3</code>", "<code>2</code>"],
      correct: [0],

      explanation: 'After insert and delete the list is [1, 1, 2], so the sum is 4.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-19',
      question: "Take a look at the snippet, and choose the true statements. (Select two answers)",
      code: "nums = [1, 2, 3]\nvals = nums\ndel vals[1:2]",
      answers: ["<code>nums</code> and <code>vals</code> are of the same length", "<code>nums</code> and <code>vals</code> refer to the same list", "<code>nums</code> is replicated and assigned to <code>vals</code>", "<code>nums</code> is longer than <code>vals</code>"],
      correct: [0, 1],

      explanation: 'vals references nums; deleting a slice changes both, leaving the same length and the same list.',
      multiSelect: true
    },
    {
      id: 'pcep-m3-20',
      question: "What is the output of the following snippet?",
      code: "my_list_1 = [1, 2, 3]\nmy_list_2 = []\nfor v in my_list_1:\n    my_list_2.insert(0, v)\nprint(my_list_2)",
      answers: ["<code>[3, 2, 1]</code>", "<code>[1, 2, 3]</code>", "<code>[1, 1, 1]</code>", "<code>[3, 3, 3]</code>"],
      correct: [0],

      explanation: 'Inserting at position 0 reverses the order, producing [3, 2, 1].',
      multiSelect: false
    }
  ],
  de: [
    {
      id: 'pcep-m3-1',
      question: "Der Wert, der <code>x</code> zugewiesen wird, ist gleich:",
      code: "x = 1\nx = x == x",
      answers: ["<code>True</code>", "<code>0</code>", "<code>1</code>", "<code>False</code>"],
      correct: [0],

      explanation: 'x == x ergibt True und dieser Bool wird x zugewiesen; es ist kein Integer, au?er bei Umwandlung.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-2',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [3, 1, -2]\nprint(my_list[my_list[-1]])",
      answers: ["<code>1</code>", "<code>-1</code>", "<code>-2</code>", "<code>3</code>"],
      correct: [0],

      explanation: 'my_list[-1] ist -2, also ist my_list[-2] gleich 1; negative Indizes z?hlen vom Ende.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-3',
      question: "Welcher Wert wird der Variable <code>x</code> zugewiesen?",
      code: "z = 10\ny = 0\nx = y < z and z > y or y > z and z < y",
      answers: ["<code>True</code>", "<code>1</code>", "<code>False</code>", "<code>0</code>"],
      correct: [0],

      explanation: 'and hat h?here Priorit?t als or, daher ist der erste Teil True und der zweite False; insgesamt True.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-4',
      question: "Wie viele Rauten (<code>#</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "var = 0\nwhile var < 6:\n    var += 1\n    if var % 2 == 0:\n        continue\n    print(\"#\")",
      answers: ["Drei", "Eine", "Null", "Zwei"],
      correct: [0],

      explanation: 'Nur die ungeraden Werte 1, 3, 5 werden gedruckt, also drei Rauten.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-5',
      question: "Wie viele Sterne (<code>*</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "i = 0\nwhile i <= 3:\n    i += 2\n    print(\"*\")",
      answers: ["Zwei", "Drei", "Einen", "Null"],
      correct: [0],

      explanation: 'i wird 2 und dann 4, solange i <= 3 gilt; daher zwei Ausgaben.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-6',
      question: "Wie viele Rauten (<code>#</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "var = 1\nwhile var < 10:\n    print(\"#\")\n    var = var << 1",
      answers: ["Vier", "Eine", "Acht", "Zwei"],
      correct: [0],

      explanation: 'var verdoppelt sich zu 1, 2, 4, 8 und stoppt, also vier Rauten.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-7',
      question: "Die zweite Zuweisung:",
      code: "vals = [0, 1, 2]\nvals[0], vals[2] = vals[2], vals[0]",
      answers: ["Kehrt die Liste um", "Ändert die Liste nicht", "Verkürzt die Liste", "Erweitert die Liste"],
      correct: [0],

      explanation: 'Die Mehrfachzuweisung vertauscht erstes und letztes Element zu [2, 1, 0].',
      multiSelect: false
    },
    {
      id: 'pcep-m3-8',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [1, 2, 3]\nfor v in range(len(my_list)):\n    my_list.insert(1, my_list[v])\nprint(my_list)",
      answers: ["<code>[1, 1, 1, 1, 2, 3]</code>", "<code>[3, 2, 1, 1, 2, 3]</code>", "<code>[1, 2, 3, 1, 2, 3]</code>", "<code>[1, 2, 3, 3, 2, 1]</code>"],
      correct: [0],

      explanation: 'Einf?gen an Index 1 verschiebt die Liste und wiederholt das aktuelle Element; Ergebnis [1, 1, 1, 1, 2, 3].',
      multiSelect: false
    },
    {
      id: 'pcep-m3-9',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [1, 2, 3, 4]\nprint(my_list[-3:-2])",
      answers: ["<code>[2]</code>", "<code>[2, 3, 4]</code>", "<code>[2, 3]</code>", "<code>[]</code>"],
      correct: [0],

      explanation: 'Der Slice -3:-2 enth?lt nur das Element 2; das Ende ist exklusiv.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-10',
      question: "Wie viele Elemente enthält die Liste <code>my_list</code>?",
      code: "my_list = [i for i in range(-1, 2)]",
      answers: ["Drei", "Eines", "Vier", "Zwei"],
      correct: [0],

      explanation: 'range(-1, 2) liefert -1, 0, 1, also drei Elemente.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-11',
      question: "Ein Operator, der prüfen kann, ob zwei Werte gleich sind, wird geschrieben als:",
      answers: ["==", "=", "!=", "==="],
      correct: [0],

      explanation: '== vergleicht, = weist zu und != bedeutet ungleich.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-12',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list = [[0, 1, 2, 3] for i in range(2)]\nprint(my_list[2][0])",
      answers: ["Das Snippet wird einen Laufzeitfehler verursachen", "<code>1</code>", "<code>2</code>", "<code>0</code>"],
      correct: [0],

      explanation: 'Es gibt nur zwei Zeilen (Indizes 0 und 1); Index 2 erzeugt einen IndexError.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-13',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "t = [[3-i for i in range (3)] for j in range(3)]\ns = 0\nfor i in range(3):\n    s += t[i][i]\nprint(s)",
      answers: ["<code>6</code>", "<code>7</code>", "<code>02</code>", "<code>4</code>"],
      correct: [0],

      explanation: 'Jede Zeile ist [3, 2, 1]; die Diagonalsumme ist 6.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-14',
      question: "Wie viele Sterne (<code>*</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "i = 0\nwhile i <= 5:\n    i += 1\n    if i % 2 == 0:\n        break\n    print(\"*\")",
      answers: ["Einen", "Zwei", "Drei", "Null"],
      correct: [0],

      explanation: 'Es wird einmal bei i = 1 gedruckt und bei i = 2 abgebrochen.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-15',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "a = 1\nb = 0\nc = a & b\nd = a | b\ne = a ^ b\nprint(c + d + e)",
      answers: ["<code>2</code>", "<code>1</code>", "<code>3</code>", "<code>0</code>"],
      correct: [0],

      explanation: 'Bitweise ergeben sich 0, 1, 1; Summe 2.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-16',
      question: "Wie viele Rauten (<code>#</code>) wird das folgende Snippet auf die Konsole ausgeben?",
      code: "for i in range(1):\n    print(\"#\")\nelse:\n    print(\"#\")",
      answers: ["Zwei", "Drei", "Null", "Eine"],
      correct: [0],

      explanation: 'Die for-Schleife l?uft einmal und else wird ausgef?hrt, da kein break vorhanden ist; also zwei Rauten.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-17',
      question: "Welche der folgenden Aussagen sind wahr? (Wähle zwei Antworten)",
      code: "nums = [1, 2, 3]\nvals = nums[-1:-2]",
      answers: ["<code>nums</code> und <code>vals</code> sind zwei verschiedene Listen", "<code>nums</code> ist länger als <code>vals</code>", "<code>nums</code> und <code>vals</code> haben die gleiche Länge", "<code>vals</code> ist länger als <code>nums</code>"],
      correct: [0, 1],

      explanation: 'nums[-1:-2] ist eine leere Liste, daher sind nums und vals verschieden und nums ist l?nger.',
      multiSelect: true
    },
    {
      id: 'pcep-m3-18',
      question: "Nach der Ausführung des folgenden Snippets wird die Summe aller <code>vals</code>-Elemente gleich sein:",
      code: "vals = [0, 1, 2]\nvals.insert(0, 1)\ndel vals[1]",
      answers: ["<code>4</code>", "<code>5</code>", "<code>3</code>", "<code>2</code>"],
      correct: [0],

      explanation: 'Nach insert und del ist die Liste [1, 1, 2]; die Summe ist 4.',
      multiSelect: false
    },
    {
      id: 'pcep-m3-19',
      question: "Betrachte das Snippet und wähle die wahren Aussagen. (Wähle zwei Antworten)",
      code: "nums = [1, 2, 3]\nvals = nums\ndel vals[1:2]",
      answers: ["<code>nums</code> und <code>vals</code> haben die gleiche Länge", "<code>nums</code> und <code>vals</code> verweisen auf die gleiche Liste", "<code>nums</code> wird repliziert und <code>vals</code> zugewiesen", "<code>nums</code> ist länger als <code>vals</code>"],
      correct: [0, 1],

      explanation: 'vals verweist auf nums; der Slice-L?schvorgang ?ndert beide, L?nge bleibt gleich.',
      multiSelect: true
    },
    {
      id: 'pcep-m3-20',
      question: "Was ist die Ausgabe des folgenden Snippets?",
      code: "my_list_1 = [1, 2, 3]\nmy_list_2 = []\nfor v in my_list_1:\n    my_list_2.insert(0, v)\nprint(my_list_2)",
      answers: ["<code>[3, 2, 1]</code>", "<code>[1, 2, 3]</code>", "<code>[1, 1, 1]</code>", "<code>[3, 3, 3]</code>"],
      correct: [0],

      explanation: 'Einf?gen an Position 0 kehrt die Reihenfolge um: [3, 2, 1].',
      multiSelect: false
    }
  ]
};
