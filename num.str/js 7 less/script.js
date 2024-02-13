//! sort() ==>орун алмаштыруу<>a-b .чон или кичине
//! filter()==>как тараза el ><5 чон болсо копту корсотот
//! map()
//! reduce()


//! sort
// let num = [1,2,3,4,5,6,7,8,9,10]
// num.sort((a,b)=>  a - b)
// console.log(num);


// let str = ['aa','fff','bbbb','dddd']
// str.sort((a,b)=> a.length - b.length)
// console.log(str);

//! map(el,index,array)
// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.map((el,index,array)=>{
// console.log(index);
// })

//! filter(el,index,array)
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.filter((el)=> el >5));

//! reduce(acc,el,index,array)

// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr = arr.reduce((acc,el)=> acc + el)
// console.log(arr);



// let arr = [3,13,54,15,335,39]

// let res = arr.filter((el)=> el > 10)

// console.log(arr);

// let arr = ['Acкар','Баяман','Калмамат']

// let res = arr.map((el)=> el.length).reduce((acc,el)=> acc+el)
// console.log(res);


// let arr = ['Acкар','Баяман','Калмамат']
// arr = arr.map((el)=> el.toUpperCase())
// console.log(arr);



//todo homework

//todo Вам дана функция checkTask, принимающая массив arr с числами, выведите в консоль массив,
//todo в котором будут только положительные числа из массива arr.
//todo Например:

//todo checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17])
//todo Вывод:
//todo  [2, 3, 5, 9, 8, 6, 7, 47, 53, 17] 

//  checkTask = [2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17]

// let res = checkTask.filter((el,index,array)=> el > 0)

//     console.log(res);
// checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17])








//todo Вам дана функция checkTask, принимающая массив arr с числами. Используя метод reduce(), 
//todoвычтите числа в массиве начиная с начала и выведите в консоль результат.
//todo Например:
//todo checkTask( [175, 50, 25])
//todo Вывод:
//todo 100

// checkTask = [175, 50, 25],
// console.log(checkTask.reduce((acc,el)=> acc - el ));





//todo Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена,
//todo где есть буква к и выведите в консоль.

// let arr = ['Аскар', 'Баяман', 'Калмамат']

// arr.



//todo Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а
//todo в каждом имени на я и выведите в консоль.
