import styled from '@emotion/styled'

export const Container = styled.div`
    width: 450px;
    height: 450px;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;
    /* background-color: red; */
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 25px;
    padding-bottom: 20px;
    background-color: blue;
    margin-top: 65px;
`


export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: crimson;
`

export const EmailAddress = styled.label`
    color:white;
`

export const EmailAddressButton = styled.input`
    background-color: pink;
    margin: 12px;
`

export const Password1 = styled.label`
    color: white;
`

export const Password1Button = styled.input`
    background-color: pink;
    margin: 12px;
`

export const Password2 = styled.label`
    color: white; 
`

export const Password2Button = styled.input`
    background-color: pink;
    margin: 12px;
`

export const SubmitButton = styled.button`
    background-color: yellow;
    margin-top: 180px;
`