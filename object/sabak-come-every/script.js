// Задание 1    
// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

// `function task(str){
//    let res = ''
//    for(let i of str){
//       if(i !== 'e' && i !== 'o'){
//          res += i.toUpperCase()
//       }
//    }
//    console.log(res);
// }
// task('hello')`






// Задание 2
// Напишите стрелочную функцию checkTask(), принимающую в качестве аргументов, строку и символ.
// Функция должна выводить в консоль количество символов в строке.
// Например, если мы передаем функции "JavaScript" и "a", то должны получить:
// 2 
// в строке "JavaScript" две буквы "a"

//!maga kerekty
// const arrow = (str,a) => {
//     let sum = 0
// for(let i of str){
//    if(i == a){
//    sum+= 1
//    }
// }
// console.log(sum);

// }
// arrow("JavaScript","a")








// Задание 3
// let lengthName = ['Patricia','William','Barbara','James','Chloe','Elizabeth'];
//  Преобразуйте каждый элемент в его длину и выведите в console. 
// Используйте метод map().





// Задание 4
//  С помощью цикла foreach и оператора if выведите в console элементы массива,
//  которые больше 20-ти, но меньше 30-ти.
// let arrNums = [12, 21, 27, 31, 45, 50 ];











// Задание 5
// Дан массив let total = [ 1, 5, 0, 3, 6, 2 ];
// Суммируйте все четные значения в данном массиве и выведите результат в alert().
//  Используйте метод reduce().



// `let total = [ 1, 5, 0, 3, 6, 2 ];
// let arr = 0
// let res = total.reduce((acc,el)=>{
//    if(el % 2 === 0){
//       arr += el
//    }else{
//       return acc + el
//    }

// },0)


// console.log(arr);`


//todo ZADACHA

// Нам дана функция checkTask(arr) которая принимает массив с объектами с ключами name.
//  Нужно перебрать этот массив так, чтобы функция нам вернула просто 
//  массив с именами в виде строк.





// ? zadacha
// checkTask([{name: 'Askat',},{name: 'Begimay',},{name: 'Mirdin',},{name: 'Aiday',},]);
// function checkTask(a){

// }
// checkTask (["Askat", 'Begimay', 'Mirdin', 'Aiday']);



//? zadach
// вывести длину каждого слова
// let str = "I am a Megalodon, oceans feeling like a pond"
// str = str.split(' ')
// let res = str.map((el)=> el.length)

// console.log(res);


// При помощи метода reduce, вывести средний возраст всех юзеров.

// let users = [
//   {
//     name: 'Askat',
//     age: 21,
//   },
//   {
//     name: 'Mirdin',
//     age: 20,
//   },
//   {
//     name: 'Begimay',
//     age: 24,
//   },
//   {
//     name: 'Mikhail',
//     age: 27,
//   },
//   {
//     name: 'Almas',
//     age: 38,
//   },
// ];

// let  res = users.map((el)=> console.log(el.name))

// let  res = users.map((el)=> el.age).reduce((acc,el)=> acc + el)/5
// console.log(res);
