const classmates = [
    {name: "철수", age: 10, school:"토끼초등학교"},
    {name: "영희", age: 13, school: "다람쥐초등학교"},
    {name: "훈이", age: 11, school: "토끼초등학교"}
]


//토끼초등학교만 골라낸 후, candy: 10 개씩 추가 
classmates.filter((el) => (el.school === "토끼초등학교"))
          .map((el) => ({name: el.name, age: el.age, school: el.school, candy: 10}))




//다람쥐초등학교만 골라낸 후, name 뒤에 "어린이" 붙이기 
classmates.filter((el) => (el.school === "다람쥐초등학교"))
           .map((el) => ({name: el.name + "어린이", age: el.age, school: el.school}))



const fruits = [
{ number: 1, title: "레드향" }, // <div>1 레드향</div>
{ number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
{ number: 3, title: "산청딸기" }, // <div>3 산청딸기</div>
{ number: 4, title: "한라봉" },
{ number: 5, title: "사과" },
{ number: 6, title: "애플망고" },
{ number: 7, title: "딸기" },
{ number: 8, title: "천혜향" },
{ number: 9, title: "과일선물세트" },
{ number: 10, title: "귤" },
];

// fruits.filter((el) => (number: el.number / 2, title: el.title))