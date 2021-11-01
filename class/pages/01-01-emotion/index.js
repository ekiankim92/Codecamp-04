import {MyDiv, MyInput, Wrapper, Images} from '../../styles/emotion'


// export default function EmotionPage () {



   
//     //2줄 이상이면 () 필요 
//     //Fragment: div이 요소 없이 그냥 내보내는것 
//     return (
//         <> 
//             <MyDiv>안녕하세요</MyDiv> 
//             이메일: <MyInput type='text'/><br/>
//             비밀번호: <MyInput type='password'/>
//             나의 이미지: <img src= '/images/lotto.png'/>
//         </>
//     ) 

// }

export default function EmotionPage () {



    return (
        <> 
            <Wrapper>
            <MyDiv>로그인</MyDiv> 
            아이디 <br/> <MyInput type='text'/><br/>
            비밀번호 <br/> <MyInput type='password'/><br/>
            나의 이미지: <Images src= '/images/lotto.png'/>
            </Wrapper>
        </>
    ) 

}

