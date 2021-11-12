// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

function solution(n) {
    let result = 0; 
    let index = n.toString()
    for (let i=0; i < index.length; i++){
        result += Number(index[i])
    }
    return result
}

//break down  
// We need to change it into String first 
// console.log(typeof n)   number 


n= String(n) OR n = n.string()
.toString()
123.toString () -> syntax error

for (let i=0; i < n.length; i++){
    console.log(n[i])
    result += n[i]   -> this will give out the String of n 
    문자열 타입의 n 값을 숫자 타입으로 변환 
    result += Number(n[i])
}

function solution(n) {
    var answer = 0;

    console.log(String(n).split("").forEach(num => { answer += Number(num)}))

    return answer;
}