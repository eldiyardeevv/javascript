//! Деструктуризация.

//? Задание №1
// Дан массив [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ];
// Запишите первый элемент этого массива впеременную elem1,
// второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.

// let arr = [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ]

// let [elem1,elem2,elem3,...rest] = arr

// console.log(elem1,elem2,elem3,rest);

//? Задание №2
// Дан объект { name: "Петр", surname: "Петров", age: "20 лет" }.
// Запишите соответствующие значения в переменные name, surname и age.
// let obj = {
//   name: "Петр",
//   surname: "Петров",
//   age: "20 лет",
// };
// let {name, surname, age} = obj
// console.log(name,surname,age);

//? Задание №3
// Дан массив.
// let task3 = [
// "первый",
// "второй",
// "третий",
// "четвертый",
// "пятый",
// "шестой",
// "седьмой"
// ];

// let [,,,,,elem2,elem1] = task3
// console.log(elem2,elem1);

// Запишите последний элемент этого массива в переменную elem1,
// а предпоследний - в переменную elem2.

//? Задание №4
// Напишите функцию, которая принимает массив из чисел в качестве аргумента.
// Каждое число возвести в квадрат. Затем, функция должна вернуть измененный массив.
// Деструктурируйте полученный результат, т.е. первый элемент записать в переменную, а остальные элементы
// сохранить в новом массиве.

// function checkTask (arr){
//     let res = arr.map((i)=> i ** 2)
//     let [a,...rest] = res
//     console.log(a,rest);
// }

// checkTask([5,6,7,45,2654,29])