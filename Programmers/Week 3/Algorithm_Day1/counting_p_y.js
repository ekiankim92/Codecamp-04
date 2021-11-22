// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

function solution(s) {
  let p = 0; // counting p
  let y = 0; // counting y

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "y" || s[i] === "Y") {
      y++;
    } else if (s[i] === "p" || s[i] === "P") {
      p++;
    }
  }
  return p === y; //if they are same we would return true if not false
}

//for loop
function solution(s) {
  s = s.toLowerCase(); //문자열을 소문자로 변환
  let p = 0; // counting p
  let y = 0; // counting y

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "y") {
      y++;
    } else if (s[i] === "p") {
      p++;
    }
  }
  return p === y; //if they are same we would return true if not false
}

//Method
function solution(s) {
  const check = {}; // 알파벳의 개수를 정리하는 객체
  const answer = s
    .toLowerCase()
    .split("")
    .forEach((str) => {
      check[str] === undefined
        ? (check[str] = 1)
        : //기존에 알파벳이 없다면 1을 초기값으로 생성
          (check[str] += 1);
      //기존의 알파벳 개수를 1 증가
    });
  return check.p === check.y;
}