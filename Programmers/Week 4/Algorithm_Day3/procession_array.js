// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

function solution(arr1, arr2) {
  var answer = [[]]; //배열 안에 배열. 2중 배열. 2차원 배열
  // console.log(arr1,arr2)
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      // console.log(arr1[i][j], arr2[i][j])
      const sum = arr1[i][j] + arr2[i][j];
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      // console.log(sum)
      answer[i][j] = sum;
    }
    // console.log(arr1[i], arr2[i])
  }
  return answer;
}

function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    // console.log(num1, arr2[i])
    return num1.map((num2, l) => {
      // console.log(num2, arr2[i][l])
      return num2 + arr2[i][l];
    });
  });
  return answer;
}

//map 안에서 map 을 돌리면 같은 행과 같은 열에서 더해진 값이 이중배열에 인덱스 값으로 돌아오기 때문에 2중 배열 값을 받아올수있음
