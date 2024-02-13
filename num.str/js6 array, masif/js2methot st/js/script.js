// let num1 = 0
// console.log(num1);
// const num2 = 1
// console.log(num2);
// var num3 = 2 
// console.log(num3);

// Создайте несколько переменных с типом данный str,так,чтобы одна переменная 
// содержала одно слово , затем объедините их в предложение , так , чтобы слова были 
// записаны через пробел.
// Пример ввода:
//       'Hello'
//       'World'
// Пример вывода:
//       'Hello World'


// // ! тип данных
//  let str1= "Hello "
//  let str2= "World"
//  console.log(str1+str2);



//! length  [длина]
//  let str2 = "Hello World";
//  console.log(str2.lengh);

//  let num = 1547674
// console.log(num.lengh);



//!индекс это порядок строк начинается с 0
// let str3 = "Hello World";
// console.log(str3[0]);


//! Преобразует символы в строке в верхний регистр.
//  let a = "hello";
//  console.log(a.toUpperCase());  a=A


//!Преобразует символы в строке в нижний регистр,
//  let b = "WORLD";
//  console.log(b.toLowerCase()); A=a


//! Объединяет две или более строки и возвращает одну строкy  (cancat как+)
//  let concat1 = 'Hello '
//  let concat2 = "World"
//  console.log(concat1.concat(concat2));  




//!Разбивает строку в массив по указанному разделителю,
//!которым может быть родстрока или регуллярное выражение.
//!Вторым параметры можю указать ограничитель.
//  let split = "Hello World"
//  split = split.split('')
//  console.log(split);





//!Разбивает строку в массив по указанному разделителю,
//!которым может быть родстрока или регуллярное выражение.
//!Вторым параметры можю указать ограничитель.
// let repeat = "Repeat "
// console.log(repeat.repeat(5));  (повтор)




//! Возвращает символ по указаному индексу
// let charAt = "Hello World"
// console.log(charAt.charAt(1));


//! Проверят содержит ли строка указнную подстроку.
//! Возвращает true или false. Втором параметром
//! можно указать позицию в строке,с которым следует начать поиск.
//  let trUe = "Hello World"
//  let falSe = "Hello World"
//  console.log(trUe.includes(Hello));
//  console.log(falSe.includes(WWorld));




//! Возвращает индекс первого найденного вхождения указанного значения.
//! Поиск ведется от начала до канса строки. Если совпадений нет, возврашает -1
//! Втором парамнтром можно передать позицию, c которой следует начать (index астынан  издоо)
// let indexOf = "Hello World"
// console.log(indexOf.indexOf('o'));  //4
// console.log(indexOf.indexOf('o',5)); //7
// console.log(indexOf.indexOf('w'));  //7 





//! Возвращает индекс первого найденного вхождения указанного значения.
//! Поиск ведется от начала до канса строки. Если совпадений нет, возврашает -1
//! Втором парамнтром можно передать позицию, c которой следует начать   (lastindex артынан издоо)
// let lastIndexOf = "Hello World"
// console.log(lastIndexOf.lastIndexOf('l'));







//! TASK

//! Преобразуйте 'первую букву' строки в верхний регстр.
// let task1 = 'первую bукву'

// console.log(task1[7].toUpperCase());


// console.log(task1.indexOf('b'));



//! Преобразуйте первую букву 'каждого слова строки' в верхний регистр.
// let kask2 = 'каждого слова строки'


//! Даны две строки: "Hello"и"World".Объедините их вместе.
// let a ="Hello "
// let b ="World"

// console.log(a.concat(b));




// let str = "Hello "

// console.log(str.repeat(10));




//! 1 charAt
//! 2 repeat
//! 3 concat
//! 4 toUpperCase
//! 5 toLowerCase
//! 6 indexOf
//! 7 lastindex
//! 8 length
//! 9 includes