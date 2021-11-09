const FRUITS = [
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
// 밖에서 안변하는 고정된 함수는 대문자로 많이 쓰임 


export default function MapFruitsPage () {

  // const fruitNames = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>]

  // const fruitsList = FRUITS.map((el) => (
  //   <div>{el.number}{el.title}</div>
  // ))

  
  return (
    <div>
      {FRUITS.map((el) => (<div>{el.number} {el.title}</div>))}
    </div>
  )
  
  {/* <div>{fruitNames}</div> */}

}