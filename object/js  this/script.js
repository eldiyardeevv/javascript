//! this

//! every()

// let arr = ["2", "2", "2", "2", "2", "2", "2", 2];

// let newArr = arr.every((el, index, array) => {
//   return typeof el === "number";
// });

// console.log(newArr);

//! some()
// let arr = ["2", "2", "2", "2", "2", "2", "2", 2];

// let newArr = arr.some((el, index, array) => {
//   return typeof el === "number";
// });

// console.log(newArr);

// Создайте объект в переменной checkTask со свойствами language: 'JS' и framework:
//  'React'.
// Затем, внутри объекта создайте функцию describe(), которая возвращает
// значения свойств объектa в виде строки.
// Примените метод describe()
// Вывод должен быть:
// JSReact
// Используйте ключевое слово this.

// let checkTask = {
//     language: 'JS',
//     framework:'React',
//     describe(){

//     let res = this.language + this.framework
//     console.log(res);
//     }
// }

// Напишите стрелочную функцию getAge, которая будет вычислять возраст. Первым
// параметром функция принимает имя, а вторым - год рождения. Функция возвращает
//  строку в таком формате "(имя): (возраст)".Например:
// console.log(getAge('Санжар', 2002))
// Вывод:
// 'Санжар: 20'

// let getAge = (name,age) => {
// let res = `${name}:${2022 - age}`
// console.log(res);

// }
// console.log(getAge('Санжар', 2002))

// Напишите стрелочную функцию func, которая отнимает от первого числа
//  второе и делит на третье.Например:
// console.log(func(40, 15, 5))
// Вывод:
// 5

// let func = (a,b,c)=> {
// return (a - b) / c
// }
// console.log(func(40, 15, 5))

// Напишите стрелочную функцию weekDay, которая принимает параметром число
// от 1 до 7, а возвращает день недели на русском языке. Если число не верное
//  'Число не верное'Например:
// console.log(weekDay(2))
// Вывод:
// 'Вторник'
// Например:
// console.log(weekDay(9))
// Вывод:
// 'Число не верное'
// let weekDay = (a)=>{
//     if(a === 1){
//         return 'Понидельник'
//     }else if (a === 2){
//         return 'Вторник'
//     }else if (a === 3){
//         return 'Среда'
//     }else if (a === 4){
//         return 'Четверг'
//     }else if (a === 5){
//         return 'Пятница'
//     }else if (a === 6){
//         return 'Суббота'
//     }else if (a === 7){
//         return 'Воскресенья'
//     }else{
//         return 'Число не верное'
//     }

// }
// console.log(weekDay(+prompt()))

// Напишите стрелочную функцию cube, которая возвращает куб числа. Число передается параметром.Например:
// console.log(cube(3))
// Вывод:
// 27

// let cube = (num)=> {
//    return num ** 3

// }
// console.log(cube(3))

// Напишите стрелочную функцию arrayFill, которая будет заполнять массив заданными
//  значениями. Первым параметром функция принимает значение, которым заполнять массив,
//  а вторым - сколько элементов должно быть в массиве.Например:
// console.log(arrayFill('x', 5))
// Вывод:
// ['x', 'x', 'x', 'x', 'x']

// let arrayFill = (str, num) => {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     arr += str;
//   }
//   return arr
// };
// console.log(arrayFill("x", 5));
