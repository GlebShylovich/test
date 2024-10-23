function normalizeCode(code) {
  return code.replace(/\s+/g, "");
}

export const tasks = [
  {
    id: 1,
    title: "Задание 1",
    description:
      "Создайте массив myFirstArray, содержащий строки, числа, булевы значения. Выведите его в консоль.",
    code: "const myFirstArray = // объявите переменную здесь\nconsole.log(myFirstArray);",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage;
      const originalLog = console.log;
      console.log = (message) => {
        loggedMessage = message;
      };
      try {
        if (
          normalizedCode.includes("constmyFirstArray=[") &&
          normalizedCode.includes("console.log(myFirstArray)")
        ) {
          eval(code);
          isCorrect =
            Array.isArray(loggedMessage) &&
            loggedMessage.some((item) => typeof item === "string") &&
            loggedMessage.some((item) => typeof item === "number") &&
            loggedMessage.some((item) => typeof item === "boolean") &&
            loggedMessage.length > 2;
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
  {
    id: 2,
    title: "Задание 2",
    description:
      "Создайте массив mySecondArray, заполните его любыми значениями. Выведите длину массива.",
    code: "const mySecondArray = // объявите переменную здесь",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage;
      const originalLog = console.log;
      console.log = (message) => {
        loggedMessage = message;
      };
      try {
        if (
          normalizedCode.includes("constmySecondArray=[") &&
          normalizedCode.includes("console.log(mySecondArray.length)")
        ) {
          eval(code);
          isCorrect = loggedMessage > 0;
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
  {
    id: 3,
    title: "Задание 3",
    description:
      "Создайте массив myInformation, который содержит ваше имя, день рождения(указать цифрой), месяц рождения(указать словом) и знак зодиака. Выведите в консоль строку этих элементов, разделяя элементы пробелами. Вам понадобится метод join().",
    code: "const myInformation = // объявите переменную здесь",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage;
      const originalLog = console.log;
      console.log = (message) => {
        loggedMessage = message;
      };
      try {
        if (
          normalizedCode.includes("constmyInformation=[") &&
          normalizedCode.includes('console.log(myInformation.join(""))')
        ) {
          eval(code);
          isCorrect =
            typeof loggedMessage === "string" &&
            loggedMessage.includes(" ") &&
            normalizedCode.indexOf("join") !== -1;
          // loggedMessage.split(" ").length === 4;
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
  {
    id: 4,
    title: "Задание 4",
    description:
      "Добавьте в массив countries значения 'Italy' с индексом 5, 'Spain' с индексом 6 и 'France' с индексом 7 и выведите массив в консоль. Добавление элементов произведите с помощью метода push().",
    code: 'const countries = ["Austria", "Belgium", "Netherlands", "Czechia", "Croatia"];',
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = "";
      const originalLog = console.log;

      console.log = (message) => {
        loggedMessage = message;
      };

      try {
        if (
          (normalizedCode.includes('countries.push("Italy")') ||
            normalizedCode.includes("countries.push('Italy')")) &&
          (normalizedCode.includes('countries.push("Spain")') ||
            normalizedCode.includes("countries.push('Spain')")) &&
          (normalizedCode.includes('countries.push("France")') ||
            normalizedCode.includes("countries.push('France')")) &&
          normalizedCode.includes("console.log(countries)")
        ) {
          eval(code);
          isCorrect =
            Array.isArray(loggedMessage) &&
            loggedMessage.length === 8 &&
            loggedMessage[5] === "Italy" &&
            loggedMessage[6] === "Spain" &&
            loggedMessage[7] === "France";
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }

      return isCorrect;
    },
  },
  {
    id: 5,
    title: "Задание 5",
    description:
      "У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива, выведите в консоль последний элемент массива. Для этого можно использовать свойство length и индексацию элементов. Обратите внимание, в JavaScript индексация элементов в массиве начинается с 0.",
    code: 'const countries = ["Austria", "Belgium", "Netherlands", "Czechia", "Croatia"];\nconsole.log();',
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = "";
      const originalLog = console.log;
      console.log = (message) => {
        loggedMessage = message;
      };

      try {
        if (
          normalizedCode.includes("console.log(countries[countries.length-1])")
        ) {
          eval(code);
          isCorrect = loggedMessage === "Croatia";
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
  {
    id: 6,
    title: "Задание 6",
    description:
      "У вас есть массив countries, содержащий названия нескольких стран. Используя метод массива shift, извлеките первый элемент массива и выведите этот элемент в консоль. Обратите внимание, чтобы все получилось результат нужно сохранять в переменной.",
    code: 'const countries = ["Austria", "Belgium", "Netherlands", "Czechia", "Croatia"];',
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = "";
      const originalLog = console.log;
      console.log = (message) => {
        loggedMessage = message;
      };

      try {
        if (
          normalizedCode.includes("const") &&
          normalizedCode.includes("console.log(")
        ) {
          eval(code);
          isCorrect =
            normalizedCode.indexOf("shift") !== -1 &&
            loggedMessage === "Austria";
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
  {
    id: 7,
    title: "Задание 7",
    description:
      "У вас есть массив numbers, содержащий несколько чисел. Используя метод массива map, создайте новый массив squaredNumbers, возведите каждый элемент массива numbers в квадрат и положите результат в новый массив, массив squaredNumbers выведите консоль.",
    code: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = "";
      const originalLog = console.log;

      console.log = (message) => {
        loggedMessage = message;
      };

      try {
        if (
          (normalizedCode.includes("constsquaredNumbers") ||
            normalizedCode.includes("letsquaredNumbers")) &&
          normalizedCode.includes("numbers.map") &&
          normalizedCode.includes("console.log(squaredNumbers)")
        ) {
          eval(code);
          const expectedArray = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
          isCorrect =
            Array.isArray(loggedMessage) &&
            loggedMessage.length === expectedArray.length &&
            loggedMessage.every((item, index) => item === expectedArray[index]);
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }

      return isCorrect;
    },
  },
  {
    id: 8,
    title: "Задание 8",
    description:
      "У вас есть массив colors, содержащий названия различных цветов и переменная str, в которой лежит еще один цвет. Используя метод массива forEach, добавьте в эту переменную остальные цвета из массива, чтобы получилось 'black red green blue yellow orange'. Результат вывести в консоль",
    code: 'const colors = ["red", "green", "blue", "yellow", "orange"];\nlet str = "black";\n//ваш код\nconsole.log(str);',
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = "";
      const originalLog = console.log;

      console.log = (message) => {
        loggedMessage = message;
      };

      try {
        if (
          normalizedCode.includes("console.log(str)") &&
          (normalizedCode.includes('str+=""+') ||
            normalizedCode.includes("str+=''+"))
        ) {
          eval(code);
          const expectedString = "black red green blue yellow orange";
          isCorrect =
            normalizedCode.indexOf("forEach") !== -1 &&
            loggedMessage === expectedString;
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }

      return isCorrect;
    },
  },
  {
    id: 9,
    title: "Задание 9",
    description:
      "Запишите в массив newRussianCities, 'Санкт-Петербург' с индексом 0, 'Москва' с индексом 1 и 'Екатеринбург' с индексом 2, а дальше идут элементы массива russianCities. \n Обязательно используйте spread оператор для того, чтобы получить: \n ['Санкт-Петербург', 'Москва', 'Екатеринбург', 'Казань', 'Нижний Новгород']",
    code: 'const russianCities = ["Казань", "Нижний Новгород"];\nconst newRussianCities = []; // ваш код\nconsole.log(newRussianCities);',
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = "";
      const originalLog = console.log;

      console.log = (message) => {
        loggedMessage = message;
      };

      try {
        if (
          (normalizedCode.includes(
            'newRussianCities=["Санкт-Петербург","Москва","Екатеринбург",...russianCities]'
          ) ||
            normalizedCode.includes(
              "newRussianCities=['Санкт-Петербург','Москва','Екатеринбург',...russianCities]"
            )) &&
          normalizedCode.includes("console.log(newRussianCities)")
        ) {
          eval(code);
          const expectedArray = [
            "Санкт-Петербург",
            "Москва",
            "Екатеринбург",
            "Казань",
            "Нижний Новгород",
          ];
          isCorrect =
            Array.isArray(loggedMessage) &&
            loggedMessage.length === expectedArray.length &&
            loggedMessage.every((item, index) => item === expectedArray[index]);
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }

      return isCorrect;
    },
  },
  {
    id: 10,
    title: "Задание 10",
    description:
      "Напишите функцию, которая вычисляет сумму первого (индекс 0) и последнего элемента массива numbers и выводит результат в консоль. При вычислении индекса последнего элемента используйте свойство length массива.",
    code: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst result = //ваш код\nconsole.log(result);",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = "";
      const originalLog = console.log;

      console.log = (message) => {
        loggedMessage = message;
      };

      try {
        if (
          normalizedCode.includes("numbers[0]") &&
          normalizedCode.includes("numbers[numbers.length-1]") &&
          normalizedCode.includes("console.log(result)")
        ) {
          eval(code);
          isCorrect = loggedMessage === 11;
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }

      return isCorrect;
    },
  },
  // {
  //   id: 11,
  //   title: "Задание 11",
  //   description:
  //     "У вас есть массив numbers, содержащий числа от 1 до 10 и функция filterEvenNumbers, которая принимает в качестве аргумента массив. Вам нужно перебрать массив, который приходит аргументом через метод filter, чтобы там остались только четные числа, и вывести новый массив с четными числами в консоль. Не забываем в конце вызвать функцию и передать ей нужный аргумент.",
  //   code: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nfunction filterEvenNumbers(arr) {\n  ///ваш код\n}\nfilterEvenNumbers(numbers);",
  //   validation: (code) => {
  //     let isCorrect = false;
  //     const normalizedCode = normalizeCode(code);
  //     let loggedMessage = "";
  //     const originalLog = console.log;
  
  //     console.log = (message) => {
  //       loggedMessage = message;
  //     };
  
  //     try {
  //       if (
  //         normalizedCode.includes("filterEvenNumbers") &&
  //         normalizedCode.includes("arr.filter") &&
  //         normalizedCode.includes("console.log")
  //       ) {
  //         eval(code);
  //         const expectedArray = [ 2, 4, 6, 8, 10 ];
  //         isCorrect =
  //           Array.isArray(loggedMessage) &&
  //           loggedMessage.length === expectedArray.length &&
  //           loggedMessage.every((item, index) => item === expectedArray[index]);
  //       }
  //     } catch (error) {
  //       isCorrect = false;
  //     } finally {
  //       console.log = originalLog;
  //     }
  
  //     return isCorrect;
  //   },
  // },
  {
    id: 12,
    title: "Задание 12",
    description:
      "Напишите функцию sortAndPrint, которая принимает копию массива randomNumbers с помощью оператора spread и сортирует его в порядке возрастания с использованием метода sort(). Затем выведите отсортированный массив чисел в консоль.",
    code: "const randomNumber = [72, 45, 19, 84, 37, 56, 91, 23, 68, 10, 98, 32];\n// ваш код\nsortAndPrint(copyRandom);",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      let loggedMessage = [];
      const originalLog = console.log;
  
      console.log = (...messages) => {
        loggedMessage.push(...messages);
      };
  
      try {
        if (
          (normalizedCode.includes("constcopyRandom=[...randomNumber]") ||
          normalizedCode.includes("letcopyRandom=[...randomNumber]")) &&
          normalizedCode.includes("arr.sort")
        ) {
          eval(code);
          const expectedArray = [10, 19, 23, 32, 37, 45, 56, 68, 72, 84, 91, 98];
          isCorrect =
            loggedMessage.length === 1 &&
            Array.isArray(loggedMessage[0]) &&
            loggedMessage[0].length === expectedArray.length &&
            loggedMessage[0].every((item, index) => item === expectedArray[index]);
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
  
      return isCorrect;
    },
  },  
  {
    id: 1,
    title: "Задание 1",
    description:
      "Напишите функцию firstFunction, которая выводит в консоль переменную first.",
    code: "let first = 8\nfunction firstFunction() {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);

      try {
        if (
          normalizedCode.includes("functionfirstFunction") &&
          normalizedCode.includes("returnfirst") &&
          normalizedCode.includes("console.log(firstFunction())")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === 8;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 2,
    title: "Задание 2",
    description:
      "Напишите функцию sum, которая принимает два параметра a и b, складывает их и возвращает результат сложения. Выведите в консоль результат выполнения функции.",
    code: "let a = 5\nlet b = 3\nfunction sum(a, b) {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);

      try {
        if (
          normalizedCode.includes("functionsum") &&
          normalizedCode.includes("returna+b") &&
          normalizedCode.includes("console.log(sum(a,b))")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === 8;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 3,
    title: "Задание 3",
    description:
      "Напишите функцию multiply, которая принимает два параметра x и y, перемножает их и возвращает результат умножения. Выведите в консоль результат выполнения функции.",
    code: "let x = 4\nlet y = 2\nfunction multiply(x, y) {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functionmultiply") &&
          normalizedCode.includes("returnx*y") &&
          normalizedCode.includes("console.log(multiply(x,y))")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === 8;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 4,
    title: "Задание 4",
    description:
      "Напишите функцию greet, которая принимает один параметр name и выводит в консоль приветствие с этим именем. Например: 'Привет, Алиса'",
    code: "let firstName = 'Alisa'\nfunction greet() {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functiongreet") &&
          normalizedCode.includes("return`Привет,${name}`") &&
          normalizedCode.includes("console.log(greet(firstName))")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === "Привет, Alisa";
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 5,
    title: "Задание 5",
    description:
      "Напишите функцию calculateArea, которая принимает два параметра width и height, вычисляет площадь прямоугольника и выводит его в консоль.",
    code: "let width = 6\nlet height = 4\nfunction calculateArea() {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functioncalculateArea") &&
          normalizedCode.includes("returnwidth*height") &&
          normalizedCode.includes("console.log(calculateArea(width,height))")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === 24;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 6,
    title: "Задание 6",
    description:
      'Напишите функцию printMessage(), которая принимает один параметр message и выводит его в консоль. Если параметр не передан, используйте значение по умолчанию: "Сообщение отсутствует". В консоли должно появиться дефолтное значение параметра.',
    code: "function printMessage() {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functionprintMessage") &&
          (normalizedCode.includes("message='Сообщениеотсутствует'") ||
            normalizedCode.includes('message="Сообщениеотсутствует"')) &&
          normalizedCode.includes("console.log(printMessage())")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === "Сообщение отсутствует";
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 7,
    title: "Задание 7",
    description:
      "Напишите функцию secondFunction, которая принимает два параметра: c и d, и выводит в консоль их сумму. Если значения параметров не переданы, используйте значения по умолчанию: c = 5 и d = 10.",
    code: "let c = 5\nlet d = 10\nfunction secondFunction() {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functionsecondFunction(c=5,d=10)") &&
          normalizedCode.includes("returnc+d") &&
          normalizedCode.includes("console.log(secondFunction(")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = typeof result === "number" || result === 15;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 8,
    title: "Задание 8",
    description:
      "Напишите функцию thirdFunction, которая принимает два параметра: f и g, и выводит в консоль их произведение. Если значения не переданы, используйте значения по умолчанию: f = 2 и g = 3.",
    code: "let f = 2\nlet g = 3\nfunction thirdFunction() {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functionthirdFunction(f=2,g=3)") &&
          normalizedCode.includes("returnf*g") &&
          normalizedCode.includes("console.log(thirdFunction(")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = typeof result === "number" || result === 6;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 9,
    title: "Задание 9",
    description:
      'Напишите функцию приветствия showWelcome, которая принимает один параметр guestName и возвращает приветствие в формате "Привет, {guestName}!". Если параметр не передан, используйте значение по умолчанию: "Гость". Чтобы увидеть результат в консоли, вызовите функцию внутри console.log.',
    code: "// ниже напиши свой код",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          (normalizedCode.includes("functionshowWelcome(guestName='Гость')") ||
            normalizedCode.includes(
              'functionshowWelcome(guestName="Гость")'
            )) &&
          normalizedCode.includes("return`Привет,${guestName}!`") &&
          normalizedCode.includes("console.log(showWelcome(")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === "Привет, Гость!" || typeof result === "string";
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 10,
    title: "Задание 10",
    description:
      "Создайте функцию calculateDifference с помощью Function Expression и правильно используйте её, чтобы вычесть два числа и вывести результат в консоль.",
    code: "// ниже напиши свой код\nconst result = calculateDifference(5, 3)",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functioncalculateDifference(") &&
          normalizedCode.includes("return") &&
          normalizedCode.includes("calculateDifference(5,3") &&
          normalizedCode.includes("console.log(result)")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === 2;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 11,
    title: "Задание 11",
    description:
      "Напишите функцию calculateProduct с помощью Function Expression, которая будет принимать два параметра. Функция должна перемножить значения и вывести результат в консоль.\n",
    code: "// ниже напиши свой код\nconst total = calculateProduct(5, 3)",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("functioncalculateProduct(") &&
          normalizedCode.includes("return") &&
          normalizedCode.includes("calculateProduct(5,3") &&
          normalizedCode.includes("console.log(total)")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === 15;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 12,
    title: "Задание 12",
    description:
      "Напишите стрелочную функцию calculateSquare, которая будет принимать один параметр num. Внутри функции объявите локальную переменную result и присвойте ей значение, равное квадрату числа num (с помощью оператора **). Затем верните значение переменной result из функции и выведите его в консоль.\n",
    code: "// ниже напиши свой код\nconst squaredNumber = calculateSquare(5)",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("constcalculateSquare=(num)") &&
          normalizedCode.includes("constresult=num**2") &&
          normalizedCode.includes("returnresult") &&
          normalizedCode.includes("calculateSquare(5)") &&
          normalizedCode.includes("console.log(squaredNumber)")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === 25;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 13,
    title: "Задание 13",
    description:
      'Напишите стрелочную функцию sayThree, которая будет выводить в консоль сообщение "Три!"',
    code: "// ниже напиши свой код",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      const originalLog = console.log;
      let loggedMessage = "";
      console.log = (message) => {
        loggedMessage = message;
      };
      try {
        if (
          normalizedCode.includes("constsayThree=") &&
          (normalizedCode.includes("sayThree('Три!')") ||
            normalizedCode.includes('sayThree("Три!")'))
        ) {
          eval(code);
          isCorrect = loggedMessage === "Три!";
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
  {
    id: 14,
    title: "Задание 14",
    description:
      "Создайте переменную rabbit, в которой будет лежать значение 'Кролик'.\n -Создайте функцию findAnimal, которая будет брать значение переменной rabbit и возвращать строку \"Привет, Кролик\"\n-Результат функции выведите в консоль.",
    code: "// ниже напиши свой код",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          (normalizedCode.includes("constrabbit='Кролик'") ||
            normalizedCode.includes('constrabbit="Кролик"')) &&
          normalizedCode.includes("functionfindAnimal(") &&
          normalizedCode.includes("return`Привет,${") &&
          normalizedCode.includes("console.log(findAnimal(")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = result === "Привет, Кролик";
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 15,
    title: "Задание 15",
    description:
      "Допишите программу, которая вычисляет сколько лет прошло с летней олимпиады в Токио, Япония.\nПодсказка: 1. нужно создать переменную с текущим годом. 2. при вызове функции в круглые скобки нужно передать два параметра: текущий год и год летней олимпиады в Токио.\nРезультат вычисления сохрани в переменную result и выведи её в консоль.",
    code: "// ниже напиши свой код\nconst lastOlympicsYear = 2020\nfunction calculateYearsSinceLastOlympics(a, b) {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      try {
        if (
          normalizedCode.includes("constlastOlympicsYear=2020") &&
          normalizedCode.includes(
            "functioncalculateYearsSinceLastOlympics(a,b)"
          ) &&
          normalizedCode.includes("returna-b") &&
          normalizedCode.includes(
            "constresult=calculateYearsSinceLastOlympics("
          ) &&
          normalizedCode.includes("console.log(result)")
        ) {
          const result = eval(code.replace("console.log", ""));
          isCorrect = typeof result === "number" && result > 0;
        }
      } catch (error) {
        isCorrect = false;
      }
      return isCorrect;
    },
  },
  {
    id: 16,
    title: "Задание 16",
    description:
      "Напишите программу, которая вычисляет возраст пользователя на основе его года рождения и будет выводить результат в консоль.",
    code: "// ниже напиши свой код\nconst friendYearOfBirth = 1985\nfunction calculateAge() {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      const originalLog = console.log;
      let loggedMessage = "";
      console.log = (message) => {
        loggedMessage = message;
      };
      try {
        if (
          normalizedCode.includes("constfriendYearOfBirth=1985") &&
          normalizedCode.includes("functioncalculateAge(") &&
          normalizedCode.includes("console.log(") &&
          normalizedCode.includes("calculateAge(")
        ) {
          eval(code);
          isCorrect = typeof loggedMessage === "number" && loggedMessage > 0;
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
  {
    id: 17,
    title: "Задание 17",
    description:
      "Напишите функцию calculateMyAge, которая принимает ваш год рождения и возвращает ваш возраст. Выведите результат в консоль.",
    code: "// ниже напиши свой код\nconst calculateMyAge = () => {}",
    validation: (code) => {
      let isCorrect = false;
      const normalizedCode = normalizeCode(code);
      const originalLog = console.log;
      let loggedMessage = "";
      console.log = (message) => {
        loggedMessage = message;
      };
      try {
        if (
          normalizedCode.includes("constcalculateMyAge=(") &&
          normalizedCode.includes("console.log(calculateMyAge(")
        ) {
          eval(code);
          isCorrect = typeof loggedMessage === "number" && loggedMessage > 0;
        }
      } catch (error) {
        isCorrect = false;
      } finally {
        console.log = originalLog;
      }
      return isCorrect;
    },
  },
];
