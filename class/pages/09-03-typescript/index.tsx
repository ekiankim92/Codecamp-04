export default function TypeScriptPage () {

    // 문자타입 = 타입추론
    let aaa = "안녕하세요"
    aaa = 3 

    // 문자타입 
    let bbb: string;
    bbb = "반갑습니다"
    bbb = 123 

    // 숫자 타입
    let ccc: number = 5
    ccc = 'abcdef'

    // 배우기 전 
    let ccc: any = 5
    ccc = 'abcdef'

    // 배열 타입 
    let ddd: number[] = [1, 2, 3, 4, 5]
    // ddd = ["asdasd", "asdasd", "asdassdsd"]
    let eee: string[] = ['a', 'b', 'c']
    let fff: number[] | string[] = [1,2,3,4,5,6]   //왼쪽 아니면 오른쪽
    // union type 집합 
    fff = ['a', 'b', 'c']
    let ggg: (number | string)[] = [1,2,'c','d']  
    // number 도 되고 스트링도 되고 

    // 객체 타입
    interface IProfile {     //개발자들 안에서도 관례 
        name: string
        age: number | string 
        school: string
    }
    
    let profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile.age = "8살"
    profile.school = 3  //school 이 숫자가 아니기 때문에 에러가 뜸 스쿨은 반드시 문자열로 되어야함 



    return <div>타입스크립트 연습</div>

}