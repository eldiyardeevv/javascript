//? lev1
// Создайте обьект user с ключами name и age если возраст меньше 17,
// то выведите в консоль сообщение

// "Привет, меня зовут {имя} и я не совершеннолетний"
// если нет то выведите в консоль

// "Привет, меня зовут {имя} и это мой первый код"

// let user = {
//     name: "Azamat",
//     age: 10,
// }

// user.price = 300
// delete user.name
// console.log(user);

// if(user.age < 17){
//     console.log(Привет, меня зовут ${user.name} и я не совершеннолетний);
// }else{
//     console.log(Привет, меня зовут ${user.name} и это мой первый код);
// }

//? lev2
// Создайте переменную arr, в которой хранится массив:

// let arr = ["a", "aa","ddd","zzzz", "bbb", "cccc", ]

// arr = arr.sort((a,b)=> a.localeCompare(b))
// console.log(arr);
//? lev3
// Отсортируйте массив по возрастанию при помощи метода массива.

// Вывести результат в консоль.

// Вывод в консоль должен быть:

// [1, 2, 3, 4, 7]


//?lev4
// С помощью метода splice запишите в новый массив элементы,
// под первым, вторым и третьим индексом в массиве.
// let arr = [1, 2, 3, 4, 5]
// arr.splice(0,1)
// arr.splice(3,1)
// console.log(arr);
// Вывести результат в консоль.

// К примеру если в arr: [1, 2, 3, 4, 5], то в новом
//  массиве будут элементы:

// [2, 3, 4]


//?lev5
// Создайте массив в переменную arr, отсортируйте данный массив по
// убыванию.

// Вывести результат в консоль.
// let arr = [5, 2, 1, -10, 8]

// arr = arr.sort((a,b)=> b - a)
// console.log(arr);
// Если в arr передали массив - [5, 2, 1, -10, 8]

// то вывод должен быть:

// [8, 5, 2, 1, -10]


//?lev6
// Создайте массив из чисел arr. Вывести в консоль наибольшее число
// из массива.

// К примеру, если в arr попадет массив [0, -11, 121, 3, 18]

// const maxNum = (arr) => {
//     let res = arr.reduce((acc,el)=> acc > el ? acc : el)
//     console.log(res);
// }
// maxNum([5, -11, 121, 3, 18])

// Вывод должен быть:

// 121

//! reduce


//?lev7
// Создайте переменную arr, в которой хранится массив вида:

// ["Life", "is", "hard"]
// С помощью метода splice замените слово "hard" на "good".

// let arr = ["Life", "is", "hard","hjgfjgh", 'gfjhg']

// arr.splice(2,1,"good")

// arr.splice(3,2,"JavaScript")
// console.log(arr);




//?lev8
// Создайте переменную arr, в которой хранится массив вида:

//  ["один","два","три","четыре"]
// Используя методы splice и push, напишите код, который
// переставляет первый элемент массива в конец исходного массива.

// let arr = ["один","два","три","четыре"]

// arr.push(arr.splice(0,1))

// console.log(arr.flat());

// let ar = ['asfda',['asdsaad']]
// console.log(ar.flat());


//?lev9
// Создайте переменную arr, в которой хранится массив вида:

//  ["один","два","три","четыре"]
// Используя метод join, напишите код, который объединяет
// все элементы массива в строку. Между словами должен быть знак +.

// Вывести результат в консоль.

// Пример ввода:

// let arr =  ["один","два","три","четыре"].join('+')
// console.log(arr);

// Пример вывода:

//  "один+два+три+четыре"


//?lev10
// Создайте переменную arr, в которой хранится массив вида:

//  [11, 4, 6]
// Используя метод slice(), от первого элемента массива отнимите второй,
// результат занесите в конец исходного массива.

// Вывести результат в консоль.

// Пример ввода:

// let arr = [11, 4, 6]
// let num = +arr.slice(0,1) + +arr.slice(2)
// arr.push(num)
// console.log(arr);

// Пример вывода:

//  [11, 4, 6, 7]

// let a = [5]
// let b = [5]
// console.log(+a + +b);


//?lev11
// Создайте 2 массива arr1, arr2. Объедините их вместе.
// Выведите объедененный массив в консоль.
// Например:

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let res = arr1.concat(arr2)
// console.log(res);
// Вывод:

// [1,2,3,4,5,6]


//?lev12
// Создайте массив arr. Выведите в консоль массив, где элементы в
// обратном порядке
// Например:

// let arr = [1,2,3]
// arr.reverse()
// console.log(arr);
// Вывод:

// [3,2,1]


//?lev13
// Создайте переменную arr и присвойте массив со строками.
// Напишите код, который переписывает первые буквы строк
// массива верхним регистром. Вы должны вывести новый массив в
// переменной newArr в console.log()

// Пример ввода:

// let arr = ["programming", "code", "javascript", "react"







// let arr = []
// for(let i = 1;i <= 7;i++){
//     arr+= '#'
//     console.log(arr);
// }