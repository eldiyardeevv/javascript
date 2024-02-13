//todo 1. Вам дана переменная а .Если переменная а больше одного и меньше 9-ти,
//todo то выведите "Верно", иначе выведите "Неверно".

// let a = 10

// if(a > 1 && a < 9){
//     console.log("Верно");
// }else{
//     console.log("Неверно");
// }


//todo2. Вам дана переменная а .Если переменная а равно трем или равна семи ,
//todo то прибавьте к ней 7,иначе поделите ее на 10.Выведите новое значение 
//todo переменной в консоль.

// let a = 7

// if(a ===3 || a ===7){
//     console.log(a + 7);
// }else{
//     console.log(a / 10);
// }

//todo3. Вам дана переменная а , b. Если  переменная а больше 4-х и меньше 10-ти
//todoили переменная и больше или равно 7-ми и меьше 17-ти,то выведите 'верно',
//todoв противном случае 'неверно'.

// let a =8
// let b =4
// if(a > 4 && a < 10 || b >= 7 && b < 17){
//     console.log( 'верно');
// }else{
//     console.log('неверно');
// }


//todo5. Вама дана переменная а = "12345".ПРоверьте,что первым символом этой
//todo переменной явлеятся цифра 1, 2 или 3.Если это так - выведите `да`, в
//todo противном случае выведите `нет`

// let a ="12345"
// if(a[0] === '1'|| a[0] ==='2'|| a[0] ==='3') {
//     console.log('da');
// }else{
//     console.log('net');
// }

//todo 6.Вама дана переменная age=*любое двузначное число*ю Составьте условие ,
//todo по которому ,в консоль будет выводиться "Мне год","Мне лет" в зависимости
//todo от возраста. Например мне 21 год,мне 20 лет

// let age =17

// if(age <= 20){
//     console.log(`Мне ${age} лет`);
// }else if(age >= 21){
//     console.log(`Мне ${age} год`);
// }



//! Array
// let arr =[1,2,3,4,5]
    
// console.log( typeof arr);

//! pop()

// let arr =[1,2,3,4,5]
// arr.pop()//? удаляем 1 елемент с конса
// console.log(arr);

//! push()

// let arr =[1,2,3,4,5]
// arr.push(6) //? добровляет 1 елемент в конец
// console.log(arr);

//! shift

// let arr =[1,2,3,4,5]
// arr.shift() //? удаляем 1 елемент с начало
//     console.log(arr);

//! unshift()
// let arr =[1,2,3,4,5]
// arr.unshift(0) //? добровляет 1 елемент в начало
// console.log();

//! slice (start,end)
// let arr =[1,2,3,4,5]
// console.log(arr.slice(2,4));


//! splice(start,seleteCount,items)

// let arr = [1,2,3,4,5,6,7,8,10,11,12,13,14,15]

// arr.splice(8,0,9)
// console.log(arr);

//! reverse()

// let arr = [5,4,3,2,1]
// arr.reverse() //? тескеруу кылуу
// console.log(arr);


//! split()
// let arr ="1,2,3,4,5"
// arr = arr.split('')
// arr.push(6)
// console.log(arr);

// let arr = [34,66,7,90,10,0,5]
// console.log(arr.pop());


// let arr = [34,66,7,90,10,0,5]
// arr.unshift(0)
// console.log(arr);


// let arr = [34,66,7,90,10,0,5]
// arr.push(9)
// console.log(arr);


// const arr = [34,66,7,90,10,0,5]
// arr.shift()
// console.log(arr);

// let arr = [1,2,3,4,4,5,6,7,8,8]
// arr.splice(4,1)
// arr.splice(8,1,9)
// arr.reverse()
// arr = arr.join('')
// arr = arr.split ('')
// console.log(arr);




