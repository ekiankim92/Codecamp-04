import styled from '@emotion/styled'
import {IProps} from './BoardWrite.types'

export const MyInput = styled.input`

`

export const MyButton = styled.button`
    background-color: ${ (props: IProps)=> props.myQqq === true ? "yellow" : "gray"};
    font-size: 30px;
`
