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




import styled from '@emotion/styled'
import {Container,Wrapper,Title,InnerWrapper,EmailAddress,
     EmailAddressButton,Password1,Password2,Password1Button,
     Password2Button,SubmitButton, InnerWrapper_div,
     Label,TextArea} from '../../../../styles/sign_up'
import {useState} from 'react'
import React from "react";
// import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { faSquare } from "@fortawesome/free-regular-svg-icons";
// export default () => <FontAwesomeIcon icon={faCamera} />;

export default function SignUpPage () {
    
    const [email,setEmail] = useState("hello world")
    const [emailError, setEmailError] = useState()

    const [authen, setAuthen] = useState()
    const [authenError, setAuthenError] = useState()

    const [message, setMessage] = useState()
    const [messageError, setMessageError] = useState()


    function SetUpEmail (event) {
        setEmail(event.target.value)

        if (event.target.value !== '') {
            setEmailError("")
        }
    }

    function SetUpPassword (event) {
        setAuthen(event.target.value)
    }

    function MiddleComment (event) {
        setMessage(event.target.value)
    }

    function FormSubmit () {
        if (email.includes("@") === false || email.length === '') {
            setEmailError('@ 가 입력되지않았습니다')
        } else {
            setEmailError('')
        }

        if (message === '') {
            setMessageError('내용을 적어주세요')
        }

        if (authen === '') {
            setAuthenError('비밀번호를 길게 작성해주세요')
        } 

    }

    return(
        <Container> 
            <Title>Sign-Up Sheet</Title>
            {/* <FontAwesomeIcon icon={faCamera} size="2x" /> */}
                <Wrapper>
                    <InnerWrapper>
                            <InnerWrapper_div>
                                <EmailAddress>이메일</EmailAddress>
                                <EmailAddressButton type='text' onChange={SetUpEmail}/>
                                <div style = {{color: "black"}}>{emailError}</div>
                            </InnerWrapper_div>
                        <InnerWrapper_div>
                            <Password1>비밀번호</Password1> 
                            <Password1Button type='password' onChange={SetUpPassword}/>
                            <div>{authenError}</div>
                        </InnerWrapper_div>
                        <InnerWrapper_div>
                            <Password2>비밀번호확인</Password2>
                            <Password2Button type='password'/>
                        </InnerWrapper_div>
                        <InnerWrapper_div>
                            <Label>Comment</Label>
                            <TextArea rows='6' cols='15' onChange={MiddleComment}/>
                            <div style = {{color: "red"}}>{messageError}</div>
                        </InnerWrapper_div>
                            <SubmitButton onClick={FormSubmit}>가입하기</SubmitButton>                        
                    </InnerWrapper>
                </Wrapper>
        </Container>
    )

}
