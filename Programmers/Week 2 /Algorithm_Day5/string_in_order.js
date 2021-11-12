// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"


function solution(s) {      
    return s.split("").sort().reverse().join("")
}

//break down 

"b" > "a"
true 
"z" > "A"
true
z 가 앞에있는 순서이기 때문에 "z" 가 "A" 보다 큼 
대문자는 소문자보다 작게 나옴 
sort 는 맨 앞에 숫자만 비교하기 때문에 
[1,4,14,3,2].sort() 
[1,14,2,3,4]

[1,4,14,3,2].sort((a,b) => {
    return (a - b)   
)}
오른차순위로 변경이됨 확실히 숫자에 크기 숫자만큼 나옴 [1,2,3,4,14]

["a","c","Z",'f']
문자열은 디폴트값으로 오른차순위임 

["a","c","Z",'f'].sort((a,b) =>{
    return a > b ? -1 : 1
    ['f', 'c', 'a', 'Z']
    
["a","c","Z",'f'].sort((a,b) =>{
    return a < b ? -1 : 1
    ['Z', 'a', 'c', 'f']


function solution(s) {      
let answer = []
    for (let i=0; i < s.length;i++){
    answer.push(s[i])
    }
    answer.sort((a,b) => {
    return a > b ? -1 : 1
    // ternary statement: a 가 크면 뒤로 보내고 작으면 앞으로 보내고
    })
    return answer.join("");
}

function solution (s){
    const result = s.split("")
                    .sort((a,b) => {
                        return a > b ? -1 : 1
                    })
                    .join("")
    return result
}