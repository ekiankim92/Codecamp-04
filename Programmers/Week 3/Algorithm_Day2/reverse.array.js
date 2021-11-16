// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

function solution(n) {
  var answer = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    // console.log(n[i])
    answer.push(Number(n[i]));
    // console.log(answer)
  }
  answer.reverse();
  return answer;
}

function solution(n) {
  var answer = [];
  n = String(n);
  //최소식: n의 길이 값이 5를 가지면, 최초식의 인덱스 값은 4부터
  //조건식: 인덱스의 0번쨰 까지 (0번째를 포함)
  for (let i = n.length - 1; i >= 0; i--) {
    // answer.push(Number(n[i]))
    answer.push(Number(n[i]));
  }
  return answer;
}

function solution(n) {
  const answer = String(n)
    .split("")
    .reverse()
    .map((el) => {
      return Number(el);
    });
  return answer;
}
