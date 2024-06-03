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