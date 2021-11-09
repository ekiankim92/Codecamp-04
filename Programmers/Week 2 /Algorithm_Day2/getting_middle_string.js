// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
    let result = ''
    let mid = Math.floor(s.length / 2)
    for (let i=0; i < s.length; i++) {
        if (s.length % 2 === 0) {
            result = s.slice(mid - 1, mid + 1)
        }else {
            result = s[mid]
        }
    }
    return result
}

//break down 

function solution(s) {
    let result = ''
    let center = Math.floor(s.length / 2)
    //소수점을 내려서 없어줘야함 (문자열에 중간을 접근할수있음)
    console.log(center)
    let answer = s[center]
    
    if (s.length % 2 === 0) {
        // 짝수일 경우 가운데 2글자를 가져온다 
        result = s[center -1 ] + answer 
    }
    
    result = s[center]
    console.log(result)
}