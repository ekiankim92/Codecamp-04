// ## state를 활용한 회원가입 폼 만들기

// 1. 회원가입 화면을 다음의 조건에 맞게 만들어 주세요.
// (이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼 총 4개를 각각 만들어 주세요.)
//  각각의 입력값을 state 변수(state 이름은 스스로 결정해 주세요)에 저장해 주세요.
// 4-1) state를 사용해 주세요.
// 4-2) 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
//           ⇒ 조건1) 이메일에 @가 없으면 에러입니다.
//           ⇒ 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다.
//           ⇒ 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.
// 4-3) 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.




import {Container,Wrapper,Title,InnerWrapper,EmailAddress,
     EmailAddressButton,Password1,Password2,Password1Button,
     Password2Button,SubmitButton} from '../../styles/sign_up'

export default function SignUpPage () {
    

    return(
        <Container> 
            <Title>Sign-Up Sheet</Title>
                <Wrapper>
                    <InnerWrapper>
                        <div>
                            <EmailAddress>이메일</EmailAddress>
                            <EmailAddressButton type='text'/>
                        </div>
                            <Password1>비밀번호</Password1> 
                            <Password1Button type='password'/>
                       
                            <Password2>비밀번호확인</Password2>
                            <Password2Button type='password'/>
                      
                            <SubmitButton>가입하기</SubmitButton>
                        
                    </InnerWrapper>
                </Wrapper>
        </Container>
    )

}