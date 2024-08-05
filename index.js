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

let result15 = ''
let space = ' '

for (let i = 10; i < 40; i += 10) {
	for (let j = 1; j < 4; j++) {
		result15 += i + j + space
	}
}

console.log(result15)

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

//Task 17

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Родители разрешили?');
	}
}
checkAge(20)

function checkAge2(age) {
	return (age > 18) ? true : confirm('Родители разрешили')
}
checkAge2(5)

//Task 18

function min(a, b) {
	return a > b ? b : a
}
min(2, 5)

//Task 19

function pow(x, n) {
	return x ** n
}
pow(3, 2)

//Task 20

function getSum(x) {
	let result = 0
	for (let i = 0; i <= x; i++) {
		result += i
	}
	return result
}
getSum(100)

//Task 21

function getloan(money) {

	const year = 5
	const condition = 0.17

	return money * condition * year + money

}
getloan(51000)

//Task 22

function trimString(word, start, end) {
	return word.slice(start, end)

}
trimString('Ashmankevich', 2, 4)

//Task 23

function getSumNumbers(number) {
	let result = 0
	let numberToWord = String(number)
	for (let i = 0; i < numberToWord.length; i++) {
		let transformToNumber = Number(numberToWord[i])
		result += transformToNumber
	}
	return result
}
getSumNumbers(2021)

//Task 24

function getSum24(a, b) {
	if (a === b) {
		return a
	} else if (a < b) {
		let sum = 0
		for (a; a <= b; a++) {
			sum += a
		}
		return sum

	} else if (a > b) {
		let sum = 0
		for (b; b <= a; b++) {
			sum += b
		}
		return sum
	}

}
getSum24(-1, 2)

//Task 25

function fooboo(logic, f1, f2) {
	logic ? f1() : f2();
}
fooboo(false, function () { console.log('foo') }, function () { console.log('boo') })

//Task 26

function triangle(a, b, c) {
	if (a === b && b === c && c === a) {
		return true
	} else if (a < b + c && b < a + c && c < a + b) {
		return true
	} else return false
}
triangle(5, 5, 5)

//Task 27

let chocolate = (m, n) => {
	if (m != 1 && n != 1) {
		return m - 1 + (n - 1);
	} else return 0;
};
chocolate(1, 1);

//Task 28

function buyIphone() {

	let askToBuy = confirm('Do you want to buy an Iphone?')
	if (askToBuy == false) {
		alert('Ok, see you later')
	} else {
		let askToMoney = prompt('Please, enter your budget', 5000)
		const iphoneAndTax = 1100
		if (askToMoney >= iphoneAndTax) {
			alert('Ok, you can buy some Iphone')
			alert('Iphone cost 1000$ and % tax, so 1100$')
			let ask = confirm('Are you buying?')
			let result = 0
			if (!ask == false) {
				let limit = askToMoney / iphoneAndTax
				for (let i = 0; i < limit; i++) {
					askToMoney -= iphoneAndTax
					result = i * iphoneAndTax
				}

			}
			return result

		} else alert('sorry, you have not enough money')
	}
	return null
}
buyIphone()

//Task 29

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

//Task 30

let obj = {}

function isEmpty(obj) {
	let key
	for (let prop in obj) {
		key = prop
	}
	return key ? false : true
}

isEmpty(obj)

//Task 31

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

function getSum(obj) {

	let isEmpty

	for (let prop in obj) {
		isEmpty = prop
	}

	if (isEmpty === undefined) {
		return 0
	} else {
		let sum30 = 0
		for (let key in salaries) {
			sum30 += salaries[key]
		}

		return sum30
	}

}
getSum(salaries)

//Task 32

let user = {
	name: Andrew,
	age: 31
}

delete user.name
delete user.age

//Task 33

let user = {
	name: 'Andrew',
	age: 31
}

"name" in user ? console.log(true) : console.log(false)

//Task 34

const student = {
	name: 'John',
	age: 19,
	isHappy: true
}

for (prop in student) {
	console.log(prop)
}
for (prop in student) {
	console.log(student[prop])
}

//Task 35

const colors = {
	'ru pum pu ru rum': {
		red: 'красный',
		green: 'зеленый',
		blue: 'синий'
	},
};

console.log(colors['ru pum pu ru rum'].red)
console.log(colors['ru pum pu ru rum'].blue)


//Task 36

let salaries36 = {
	andrey: 500,
	sveta: 413,
	anton: 987,
	andrey: 664,
	alexandra: 199
}

function salariesEmployers(obj) {

	let sum = 0

	for (let prop in salaries36) {
		sum += salaries36[prop]
	}

	let employers = 0

	for (let key in salaries36) {
		salaries36.hasOwnProperty(key) ? employers++ : null
	}

	return sum / employers

}
salariesEmployers(salaries36)

//Task 37

let calculator = {
	read() {
		let a = +prompt('Please, enter the number a', 0)
		let b = +prompt('Please, enter the number b', 0)

		this.a = a
		this.b = b
	},
	sum() {
		return this.a + this.b
	},
	mul() {
		return this.a * this.b
	}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//Task 38

function Calculator() {
	this.read = function () {
		let a = +prompt('Please, enter the number a', 0)
		let b = +prompt('Please, enter the number b', 0)

		this.a = a
		this.b = b
	}
	this.sum = function () {
		return this.a + this.b
	}
	this.mul = function () {
		return this.a * this.b
	}
}

let calculator38 = new Calculator();
calculator38.read();

alert("Sum=" + calculator38.sum());
alert("Mul=" + calculator38.mul());

//Task 39

function Accumulator(startingValue) {
	this.value = startingValue
	this.read = function () {
		let a = +prompt('Please, enter the number a', 0)
		this.value = a + this.value
	}

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);