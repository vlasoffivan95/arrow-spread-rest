"use strict";


// const recursiveFunc = function(firstVar, twoVar) {
//     console.log(firstVar);
//     if (firstVar < twoVar) {
//     recursiveFunc (firstVar+1, twoVar);        
//     }

// };

// recursiveFunc(1, 10)

// //Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве.//
// //Решить с использованием стрелочных функций.//
// const calculateStr = (...num) => {
//     let result = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (typeof (num[i]) === 'string') {
//             result += 1;
//         };
//     };
//     return result;
// };

// //Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию.// 
// const calcVar = (operator, ...num) => {
//     let result;
//     if (operator === '+') {
//         result = num.reduce((res, currentNumber) => res + currentNumber);
//     }
//     else if (operator === '-') {
//         result = num.reduce((res, currentNumber) => res - currentNumber);
//     }
//     else if (operator === '*') {
//         result = num.reduce((res, currentNumber) => res * currentNumber);
//     }
//     else {
//         let zeroInArray = num.findIndex(num => num === 0);
//         if (zeroInArray > 0) {
//             result = 'На ноль делить нельзя!'
//         } else {
//             result = num.reduce((res, currentNumber) => res / currentNumber);
//         }
//     };
//     return result;
// };

// //Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.//
// const maxVarInArray = (...array) => {
//     return Math.max(...array);
// };




