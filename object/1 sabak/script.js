// let names = [
//     {
//         id: 1,
//         age:20,
//         name: "Ronaldo",
//         team: "MU",
//         car: "Camry"
//     },
//     {
//         id: 2,
//         age:25,
//         name: "Messi",
//         team: "PSG",
//         house: "Nation"
//     },
//     {
//         id: 3,
//         age:30,
//         name: "lewondowsky",
//         team: "bavaria",
//         country: "Germany"
//     },
//     {
//         id: 4,
//         age:35,
//         name: "neymar",
//         team: "bavaria",
//         country: "Germany"
//     }
// ]
// console.log(names);



//! delete person.price 
//! Object.values(person) значение
//! Object.keys(person) ключ
//! Object.freeze(person) заморозка

//? 1. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'};
//?  Выведите на экран зарплату Атая и Ширин.

// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай: '200',
// }
//  delete obj. Айжан
// console.log(obj);

//?2. Создайте объект заработных плат obj = {Ширин: '1000',   Айжан:'500', Атай: '200'}.
//?  Добавьте к объекту ключ Медет со значением 1500.

// let obj = {
//     Ширин: '1000', 
//     Айжан:'500',
//     Атай: '200',
// }
// obj.Медет = 1500
// console.log(obj);





//?3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//?  Выведите значение ключа salary в консоль.

// let obj = {
//     Ширин: '1000', 
//     Айжан:'500', 
//     Атай: {
//         salary: '500'
//     }
// }
// Object.keys(obj)
// console.log(obj);




//? 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//?  Получите все ключи объекта.

// let obj = {
//     Ширин: '1000',
//     Айжан:'500',
//     Атай:{
//       salary: '500' 
//     }
// }
// console.log(obj);






//? 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//?  Получите все значения объекта.
// let obj = {
//   Ширин: '1000',
//    Айжан:'500',
//     Атай:{
//       salary: '500'
//     } 
// }
// console.log(obj);

//? 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//?  Измените зарплату Атая на 500.

// let obj = {
//     Ширин: '1000',
//      Айжан:'500',
//       Атай: '200'

// }
// obj.Атай ='500'
// console.log(obj);



//? 7. Создайте функцию, передайте в нее объект {name: 'Igor'}.
//?  Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.

// function chektask(obj){

// }
// chektask()




// let obj = [
//     {
//       age1: 24,
//       age2: 52,
//       age3: 21,
//       age4: 9,
//     },
//   ];

// obj = obj.map((el)=>{
//    return Object.values(el).reduce((acc,el)=> acc + el)

    
// })
// console.log(obj);




// TODO Используйте метод .map() для массива героев, 
// чтобы вернуть новый массив. Новый массив должен переименовать 
// ключ «name» в «hero». Ключ «name» не должен появляться в новом массиве. 
// В новый массив должен быть добавлен новый ключ с именем (id). 
// Ключ 'id' должен основываться на индексе.

// const heros = [
//   { name: 'Spider-Man' },
//   { name: 'Thor' },
//   { name: 'Black Panther' },
//   { name: 'Captain Marvel' },
//   { name: 'Silver Surfer' },
// ];

// //! OUTPUT

// [
//   { id: 0, hero: 'Spider-Man' },
//   { id: 1, hero: 'Thor' },
//   { id: 2, hero: 'Black Panther' },
//   { id: 3, hero: 'Captain Marvel' },
//   { id: 4, hero: 'Silver Surfer' },
// ];




//? Задача, создать функцию checkTask, которая будет в качестве
//? аргумента принимать массив такого вида как указан выше, и будет
//? возвращать отсортированный массив (сортировать по убыванию оценок,
//? используйте sort() )

// function checkTask(arr) {

// }
// checkTask([
//   { student: "Jack", marks: 43 },
//   { student: "Tom", marks: 92 },
//   { student: "Helen", marks: 85 },
//   { student: "Peter", marks: 58 },
//   { student: "Jessica", marks: 78 },
// ])



// Создайте массив arr с различными типами данных. Выведите только числа и строки.
// Например:
// let arr = [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}]
// 110
// 'hello'
// 'JS'
// 0



// Найдите самое длинное слово в строке и выведите его в консоли
// let str = "I am a Megalodon, oceans feeling like a pond"
// let arr = str.split(' ')
// let res = arr.sort((a, b)=> a.length - b.length)
// console.log(res.pop());

// function f19() {
//   for (let i = 0; i <d19.length;i++)
//   if(d19[i]> maxString){
//   maxString = d19[i] 
//   console.log(maxString)}
// }

//? Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество 
//? гласных, которые содержатся в строке. Гласными являются [а], [о], [и], [ы], [у] и [э]
//? К примеру:
//? vowel('достопримечательность') // --> 7
//? vowel('субстанционализирующийся') // --> 11
// 'а',
// 'о',
// 'и',
// 'ы',
// 'у',
// 'э',
// 'й',
// 'е',
// 'я',
// 'ю',
// 'ё',
// function task(str){
//   let sum = 0
// for(let i of str){
// if(i === 'а' || i === 'и' || i === 'у' || i === 'й'  ||i === 'я' || i === 'ё' ){
//   sum+= 1
// }


// }
// console.log(sum);
// }
// task('достопримечательность')



// function vowel(str) {
//   let sum = 0;
//   str = str.toLowerCase();
//   for (let i of str) {
//     if (
//       i == 'а' ||
//       i == 'о' ||
//       i == 'и' ||
//       i == 'ы' ||
//       i == 'у' ||
//       i == 'э' ||
//       i == 'й' ||
//       i == 'е' ||
//       i == 'я' ||
//       i == 'ю' ||
//       i == 'ё'
//     )
//       sum += 1;
//   }
//   console.log(sum);
// }
// vowel('достопримечательность');

