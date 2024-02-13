// let arr = [0,-11,121,3,18];
// arr = arr.reduce((acc,el)=>)




// let arr = ['life','is','hard']

// arr.splice(2,1,'good')
// console.log(arr);



// todo

//? Напишите функцию checkTask(fullName), принимающую в аргументы массив вида:
//? ["Julius", "Caesar", "Consul", "of the Roman Republic"]
//? Вам надо поместить в переменную firstName первый элемент массива,
//?  а в переменную titul последний элемент.
//? Выведите в консоль эти две переменные через запятую - console.log(firstName, titul):

// function  checkTask (fullName){
//     let [firstName,,,titul] = fullName
//     console.log(firstName, titul);
// }
    
// checkTask( ["Julius", "Caesar", "Consul", "of the Roman Republic"])








//? Напишите функцию checkTask(fullName), принимающую в аргументы строку:
//? Albert Einstein
//? Поместите в переменную firstName первое слово, в переменную lastName
//?  второе слово через деструктуризацию.
//? Выведите в консоль эти две переменные через запятую: console.log
//? (firstName, lastName)

// function checkTask(fullName) {
// let [firstName, lastName] = fullName

// console.log(firstName, lastName);
// }
// checkTask(['Albert','Einstein'])








//? Напишите функцию checkTask(fullName), принимающую в аргументы строку:
//? Albert Einstein
//? Используя деструктуризацию, функция должна создать объект в переменной obj,
//?  в котором есть свойство firstName с первым словом строки,
//?  и свойство lastName со вторым словом строки.
//? Выведите в консоль этот объект:
//? { firstName: 'Albert', lastName: 'Einstein' 


// function check(fullName){
//     let [lastName,firstName] = fullName

// obj{


// }


// }
// check(["Albert", "Einstein"])







//? Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
//? {name: 'Петр', surname: 'Петров', age: '20 лет'}
//? Функция должна записать соответствующие значения в переменные name,
//?  surname и age и вывести их в одном вызове консоли через запятую в таком виде:
// //? console.log(name, surname, age)

// const checkTask = (obj) => {
//     let {name,surname,age} = obj


// console.log('name','surname','age');

// }
// checkTask({name: 'Петр', surname: 'Петров', age: '20 лет'})




