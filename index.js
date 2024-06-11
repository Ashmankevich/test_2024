'use strict'
// to remember how to make comments
alert('Hi, man, you said - started from the bottom, now we are here')

let firstName = 'Jhon'
let admin
admin = firstName
alert(admin)

let value = 10
value = String(value)
console.log(typeof (value))
console.log(value)

let ask = prompt("what is officail name of JS")
let answer
if (ask == 'ECMAScript') {
	answer = 'yes'
}
else { answer = 'no' }
console.log(answer)

//Task 1
let x = 20
let y = 58
let z = 42
let sum = x + y + z
console.log(sum)

//Task 2

let secInMin = 60
let minInHour = 60
let hourInDay = 24
let dayInYear = 365
let myAgeInYears = 31
let myAgeInSec = myAgeInYears * dayInYear * hourInDay * minInHour * secInMin
console.log(myAgeInSec)

//Task 3
let count = 42
let userName = '42'

let countString = String(count)
console.log(typeof countString)
console.log(countString)

let userNameNumber = Number(userName)
console.log(typeof userNameNumber)
console.log(userNameNumber)

//Task 4
let a = 1
let b = 2
let c = "белых медведей"

let aString = String(a)
let bString = String(b)
let result = aString + bString + ' ' + c
console.log(result)
console.log(typeof result)

//Task 5

let w1 = 'доступ'
let w2 = 'морпех'
let w3 = 'наледь'
let w4 = 'попрек'
let w5 = 'рубило'

let words = w1 + w2 + w3 + w4 + w5
console.log(words.length)

//Task 2*

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let resultWord = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]

console.log(resultWord)

//Task 6

let height = 15
let width = 20

height > width ? console.log(height) : console.log(width)


//Task 7

//Написать перебор от 1 до 20, где выведутся все числа кратные трём.

for (let i = 1; i < 20; i++) {
	i % 3 == 0 ? console.log(i) : null
}

//Task 8

//Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
//Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
//Для решения этой задачи нам помогут логические операторы || &&.
let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork

if (key == true && documents == true && apple == true || orange == true) {
	shouldGoToWork = 'yes'
} else shouldGoToWork = 'no'

console.log(shouldGoToWork)

//Task 9

//Запросить у пользователя число:
//1. Если число делится без остатка на 5 выводим сообщение Fiz
//2. Если число делится без остатка на 3 выводим сообшение Buz
//3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz


let askWord = +prompt('Please, enter the number', ['number'])

let message = askWord % 5 == 0 && askWord % 3 == 0 ? 'FizBuz' :
	askWord % 5 == 0 ? 'Fiz' :
		askWord % 3 == 0 ? 'Buz' :
			null


alert(message)

//Task 10

let askAge = +prompt('Please, enter your age', ['age'])

let messageTask10 = askAge > 18 ? 'Man, drink alco' :
	askAge > 16 && askAge < 18 ? 'You can weed but be carefull' :
		askAge < 18 ? 'Man, you should drink cola' : null

alert(messageTask10)

//Task 11

let askDirection = prompt('Man, tell me, what direction you will choose', ['south, north, west, east'])

let messageTask11

switch (askDirection) {
	case 'south':
		messageTask11 = 'If you go to South you will be happy person'
		break;
	case 'north':
		messageTask11 = 'If you go to North you will be rich person'
		break;
	case 'west':
		messageTask11 = 'If you go to West you will find best friend'
		break;
	case 'east':
		messageTask11 = 'If you go to East you will be FrontEnd developer'
		break;
	default:
		messageTask11 = 'Oops'
		break;
}

alert(messageTask11)

//Task 12

/*
Написать программу, которая будет выводить в консоль лесенку.
#
##
###
####
#####
######
*/

for (let i = 0; i < 6; i++) {
	let x = '#'
	for (let j = 0; j < i; j++) {
		x += '#'
	}
	console.log(x)
}

//Task 13
/*
Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/

const number = +prompt('Введите число между 0 и 3', '')

switch (number) {
	case 0:
		alert('Вы ввели число 0')
		break
	case 1:
		alert('Вы ввели число 1')
		break
	case 2:
	case 3:
		alert('Вы ввели число 2, а может и 3')
		break
	default: null
		break
}

//Task 14
/*
С помощью двух вложенных циклов выведите на экран следующую строку (или столбец):
111222333444555666777888999
*/

for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 3; j++) {
		console.log(i)
	}
}

//Task 15
/*
Use two nested loops to display the following string or column:
11 12 13 21 22 23 31 32 33
*/

//Task 16

/*
С помощью вложенных циклов, нарисуйте строку:

***_***_***_
*/

let result16 = ''
let t2 = '_'

for (let i = 0; i < 3; i++) {

	let t1 = '*'
	for (let j = 0; j < 2; j++) {
		t1 += '*'
	}

	result16 += t1 + t2

}
console.log(result16)