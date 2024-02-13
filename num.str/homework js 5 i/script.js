//? Task 1
//? напишите цикл каторый выведет число от 1 - 10
// for(let i = 0;i<= 10; i++){
//     console.log('number' +i);
// }
//? Пример вывода:
//? number 0
//? number 1
//? number 2
//? number 3
//? number 4
//? number 5
//? number 6
//? number 7
//? number 8
//? number 9
//? number 10

//? number это текст

//? Task 2
//? Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

//? #
//? ##
//? ###
//? ####
//? #####
//? ######
//? #######

// let res = []
// for(let i = 1;i <= 7; i++){
//    res += '#'
//    console.log(res);
// }

// for(let i = 0; i <= 100; i++){
//    if(i %2 ===0){
//       console.log(i);
//    }
// }

// let arr = []
// for(let i = 1; i <= 10; i++){
//    arr.push('x')
// }
// console.log(arr);

// function task (a){
//    return a.length
// }console.log(task('     '));

// for( let i = '#'; i.length  <= 7; i += '#'){
//     console.log(i);
// }

//? Task 3
//? Создайте переменную num.Присвойте переменной числовое значение.
//? Напишите цикл, который выведет в консоль сумму всех чисел от 1 до num включительно.
//? Например, если в перемнной num хранится число 3
//? Выводом будет:

// let arr = 6

// for(let i = 1; i <= 6; i.length, i++){
//     console.log(arr);
// }
//? 6
//? т.к. 6 = 1 + 2 + 3

//? Task 4
//? Создайте переменную str со строковым значением, выведите в консоль каждый символ по-отдельности. Не выводите символы (' ', '!', ',')
//? Например:
//? Вывод:

//  let str = 'Hello, world!'

// for(let i of str){
//     if(i !== ' ' && i !== "!" && i !== ','){
//         console.log(i);
//     }
// }

//? H
//? e
//? l
//? l
//? o
//? w
//? o
//? r
//? l
//? d

//? Task 5
//?Создайте массив из чисел arr
//? Напишите цикл for of, который выведет в консоль произведение всех элементов массива.
//? Если в переменной arr хранится массив [2, 3, 4, 5]
//? Вывод должен быть:
//? 120
//? т.к. 120 = 2 x 3 x 4 x

// let arr = [2, 3, 4, 5]

// for(let i of arr){
//  let sum = 0
//     let res = arr.reduce((acc,el)=> acc * el)
//     sum+= i++
//     console.log(res);
// }

// let num = +prompt()

// if(num < 18){
//     console.log('podrostoc');
// } else if(num === 18){
//     console.log('jigin');
// }else {
//     console.log('kishi');
// }
