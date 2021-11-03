let name = "Ian KIm";


let name = "영희";
name = "철수";


let fruits = []
let fruits = ["apple","banana","Pinapple"];
fruits.push = ['사과','바나나','파인애플']


let fruits = ["사과", "바나나", "파인애플"]
let newFruits = []
newFruits.push(fruits[2])


let students = ["철수", "영희", "훈이", "짱구", "유리"]
let result = students.slice(0,3)


let fruits = ["사과", "바나나"]
fruits[0] = "맛있는" + fruits[0]
fruits[1] = "맛있는" + fruits[1]
let front = '맛있는 ' + fruits[0]
let back = '맛있는 ' + fruits[1]
let result = `${front}, ${back}`


const number = "01012345678"
let arr = [];
number.slice(0,3)
number.slice(3,7)
number.slice(7,11)
let arr = [number.slice(0,3), number.slice(3,7), 
number.slice(7,11)]


let students = {name:"철수"}


const student = {
	name: "철수",
	age: 8,
};
const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}
student.school = school


let student = {
	name: "철수",
	drink: "사이다"
};
delete student.drink


const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];
classmates[1].school = "다람쥐초등학교"


let str = "3"
let number = 3
typeof "3" // str
typeof 3 // number


let array = []
let object = {}
console.log(typeof array) // object
console.log(typeof object) // object
console.log(Array.isArray(array)) // true
console.log(Array.isArray(object)) // false


let num = 24
let str 
str = String(num)


1 + "1" //11
1 - "1" //NAN
"1" + "1" //11
1 * "1" //NAN
3 * "A" //NAN
1 + 1 + '1' //21
'1' + 1 + 1 //12
"11" - 1 //NAN
"11" + 1 //111
"홍" + "길동" //홍길동
20 === "20" //false
20 == "20" //true
!true //false


(20 >= 10) && (20 === 10) //false
(20 === 10) || (10 === 10) //true