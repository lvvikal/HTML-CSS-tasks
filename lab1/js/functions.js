
//1. Напишите функцию для проверки, является ли строка палиндромом
function myResult(str) {
    return str.toLowerCase().replaceAll(' ', '') == str.split('').reverse().join('').toLowerCase().replaceAll(' ', '');
}
var str = prompt('Введите строку:');
alert(myResult(str));

//2.Напишите функцию, которая принимает строку, извлекается в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
let str = 'skdj34lsg4  4te'
let numbers = str.replace(/\D/g, '');
if (numbers!="")
{
console.log(Number(numbers));
}
else {console.log(NaN)}

//3.Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — 
//и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. 
//Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
function myResult(str, len, symbol) {
    if (str.length >= len) {
      return str;
    } else {
      const lenSymbol = len - str.length;
      const dopSymbol = symbol.repeat(Math.ceil(lenSymbol / symbol.length)).slice(0, lenSymbol);
      return dopSymbol + str;
    }
  }
  console.log(myResult('qwerty',6,'fdg'));

//4.Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, 
//если строка меньше или равна указанной длине, и false, если строка длиннее
function myResult(str,len) {
    if (str.length>len){
      return false
    }
  else {return true}
}
console.log('проверяемая строка', 20)
console.log('проверяемая строка', 18)
console.log('проверяемая строка', 10) 
