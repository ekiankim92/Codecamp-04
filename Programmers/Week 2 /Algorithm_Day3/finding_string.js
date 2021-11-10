// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

function solution(s) {
    let result = '';
    for (let i=0; i < s.length; i++){
        if (s.length === 4 && s.length === 6 && typeof s[i] === "number") {
            return true
        } else if (s[i].includes("a") === true) {
            return false
        }
    }
    return result
}

//break down 
function solution(s) {
    if (s.length !== 4 || s.length !== 6){
        return false 
    }

    let answer = true;
    for (i=0; i < s.length; i++){
        if (isNaN(s[i] === true))  
        answer = false
        break;                              
    }
    return answer 
}

const answer = s.split("")
                .filter (num => {
                    // 데이터가 아닌 문자타입만 남긴다 
                    // NaN 값인 데이터만 남긴다 
                    return isNaN(num)
                })
    return answer.length 


 //Number 타입으로 반환했을때 문자열안 경구 true  겂을 판단 // 숫자가 아니다 
// isNaN 문자열이 숫자가 아닌게 맞다 true 값 숫자일때는 문자값 false 
