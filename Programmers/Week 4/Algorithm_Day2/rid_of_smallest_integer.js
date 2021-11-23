// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

//배열이 똑같은 길이 이기 때문에 a. 나 b. 나 동일하게 사용할수있다

function solution(arr) {
  var answer = [];

  // 배열 안에서 제일 작은 값을 저장
  let min = arr[0];

  // i=1 부터 시작하는 이유는 이미 let min 에서 0번째 인덱스부터 잡아주기 때문에
  for (let i = 1; i < arr.length; i++) {
    // console.log(arr[i], min)
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], min)
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

Math.min(6,5,7,8,22,7,1) // 1 
Math.max(6,5,7,8,22,7,1) // 22

배열일 경우 
a = [1,2,3,4,5]
Math.min(...a) // 1 

function solution(arr) {
    const min = Math.min(...arr)
    // console.log(min)
    const answer = arr.filter( num => {
        return num !== min 
    })
    // console.log(answer, min)
    return answer.length === 0 ? [-1] : answer
}