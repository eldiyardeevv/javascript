//? Задание 1
//? Перепишите данную функцию в стрелочную функцию:
//? function checkTask() {
//? console.log("Hello World!");
//? }

// const checkTask = () => console.log("Hello World!");

// checkTask()







//? Задание 2
//? Напишите стрелочную функцию checkTask(), у которой есть параметры age(возраст, число) и name(имя, строка).
//? Функция должна выводить поздравление для указанного имени и возраста, в виде такой строки:
//? Happy Birthday 'name'! You are 'age'!
//? К примеру, если в аргументы передали 23 и Mike, функция должна вывести строку:
//? Happy Birthday Mike! You are 23!


// const arrow = (age,name) => {
// console.log(`Happy Birthday ${name} ! You are ${age}!`);
// }

// arrow(19,'Eldiyar')








//? Задание 3
//? Напишите стрелочную функцию checkTask(), которая принимает в аргументы массив со строками.
//? Добавьте к концу каждой строки массива строку 'is cool'.
//? Выведите массив в консоль.
//? К примеру при передачи в аргументы данного массива ['John', 'Mike', 'Rick', 'Drake'], вывод будет:
//? ['John is cool', 'Mike is cool', 'Rick is cool', 'Drake is cool']

// let arr = []
// const checkTask = (arr) => {
// for(let i of arr){
//     return i+= 'is cool'
    
// }
// console.log(arr);
// }
// checkTask(['John', 'Mike', 'Rick', 'Drake'])





//? Задание 4
//? Напишите стрелочную функцию checkTask(), принимающую в качестве аргумента строку.
//? Функция должна переворачивать строку и выводить ее в консоль.
//? Например, строку "JavaScript", функция выведет как:
//? tpircSavaJ








//? Задание 5
//? Напишите стрелочную функцию checkTask(), принимающую в качестве аргументов, строку и символ.
//? Функция должна выводить в консоль количество символов в строке.
//? Например, если мы передаем функции "JavaScript" и "a", то должны получить:
//? 2
//? в строке "JavaScript" две буквы "a"


//? Задание 6
//? Напишите стрелочную функцию checkTask(), которая принимает в аргументы массив.
//? * умножьте каждый элемент массива на 5
//? * оставьте в массиве только четные числа
//? * выведите новый массив в консоль
//? Например для массива [1,2,3,4,5,6], вывод будет:
//? [10, 20, 30]
//? т.к в начале умножили элементы на 5:
//? [5, 10, 15, 20, 25, 30]
//? затем из полученного списка отфильтровали четные числа:
//? [10, 20, 30].











//? Задание 7
//? Создайте стрелочную функцию checkTask() которая принимает один аргумент.
//? Если в аргумент передали строку "User", функция вернет:
//? "Hello User"
//? иначе вернет:
//? "Error"

// const checkTask = (a) => {
// if(){
//     console.log( "Hello User");
// }else{
//     console.log("Error");
// }

// }
// checkTask("User")

