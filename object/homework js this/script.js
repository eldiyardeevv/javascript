// let arr = []
// for(let i = 1;i <= 7;i++){
//     arr+= '#'
//     console.log(arr);
// }

//?Task 1
//todo Напишите стрелочную функцию convertStr, которая принимает строку вида
//todo 'var_text_hello'. Сделайте из него текст 'varTextHello'.
//todo Например:
//todo console.log(convertStr('hello_world'))
//todo Вывод:
//todo 'helloWorld'

//?Task 2
//todo Дана функция checkTask(arr), принимающая в аргументы массив с числами.
//todo Используя метод every(), проверьте то, что все элементы в массиве больше нуля.
//todo Например, если в arr будет хранится массив вида:
//todo [4, 5, 8, 9]
//todo то выводом в консоли будет:
//todo true

// function checkTask(arr){
// let res = arr.every((el)=> el >= 0)
// console.log(res);
// }
// checkTask([4, 5, 8, 9])

//?Task 3
//todo Напишите функцию checkTask(arr), принимающую в аргументы массив состояший из чисел.
//todo Функция должна сохранить в новый массив только нечетные числа.
//todo Результат выведите в консоль.
//todo Например, для массива:
//todo [11, 4, 8, 9, 5, 15, 6]
//todo Выводом будет строка:
// //todo [11, 9, 5, 15]

// function checkTask(arr){
// let result = arr.filter((el)=> el %2 !== 0)
// console.log(result);
// }

// checkTask([11, 4, 8, 9, 5, 15, 6])

//todo Напишите функцию checkTask(arr), принимающую в аргументы массив состояший из строк.
//todo Функция должна убрать из массива строки длина которых меньше пяти символов.
//todo Результат выведите в консоль.
//todo Например, для массива:
//todo ['Hello', 'World', 'C++', 'JavaScript', 'IT', 'Java']
//todo Выводом будет строка:
//todo ['Hello', 'World', 'JavaScript']

//! 1joly
// function checkTask(arr){
// let res = arr.filter((el)=> el.length >= 5)
// console.log(res);
// }
// checkTask(['Hello', 'World', 'C++', 'JavaScript', 'IT', 'Java'])

//! 2joly
// let arr = []
// function checkTask(arr){
//  return arr = arr.filter((el)=> el.length >= 5)
// }
// console.log(checkTask(['Hello', 'World', 'C++', 'JavaScript', 'IT', 'Java']));

//? Task 5
//todo Создайте функцию checkTask(arr), принимающую массив и элемент массива, и удаляет
//todo  переданный элемент из массива.
//todo Например для аргументов [2, 5, 9, 6] и 5, вывод будет:
//todo [2, 9, 6]

// function checkTask(arr,num){
// let res = arr.filter((el)=> el !== num)
// console.log(res);
// }
// checkTask([2, 5, 9, 6],5)

//todo Напишите функцию checkTask(arr), которая получает в качестве параметра массив.
//todo Функция должна перебрать все его элементы и вывести сам элемент, а также тип
//todo  данных  элемента - числовой, либо не числовой.
//todo К примеру, для массива:
//todo ['Молоко', -77, 11, 'Мед', -88]
//todo Вывод будет следующим:
//todo Молоко - не число  -77 - число
//todo 11 - число
//todo Мед - не число
//todo -88 - число

// function checkTask(arr){
// let res = arr.map((el)=>{
//     if(typeof el === 'number'){
//        return `${el} - число`
//     }else if (typeof el === 'string'){
//         return  `${el} - не число `
//     }
// })
// for(let i of res)

// console.log(i);
// }
// checkTask(['Молоко', -77, 11, 'Мед', -88])

// Напишите функцию checkTask(arr), которая будет принимать массив из чисел.
// Ваша функция должна находить сумму чисел методом forEach(), методом reduce() и map().
// Для массива [5, 6, 7, 8, 9] вывод будет:
// forEach: 35  reduce: 35
// map: 35
// function checkTask(arr) {
//   let sum1 = 0;
//   let result = arr.map((el) => {
//     sum1 += el;
//   });
//   console.log(sum1);

//   let sum = 0;
//   arr.forEach((el) => {
//     sum += el;
//   });

//   console.log(sum);
//   let res = arr.reduce((acc, el) => acc + el);
//   console.log(res);
// }
// checkTask([5, 6, 7, 8, 9]);

// Создайте функцию checkTask(arr), которая принимает в аргументы массив состоящий
// из строк и выводит в консоль новый массив состояший только из первых и
//  последних букв каждой строки.
// Например, для массива:
// ['hi', 'goodbye', 'smile']

// Вывод будет:
// ['hi', 'ge', 'se']
