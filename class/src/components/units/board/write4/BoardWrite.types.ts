import { ChangeEvent } from 'react'

export interface IPropsBoardWrite {
    isEdit: boolean
    data?: any 
}

export interface IPropsBoardWriteUI {
    aaa:  (event: ChangeEvent<HTMLInputElement>) => void //함수이긴 함수인데 리턴이 없는 
    titleChange: (event: ChangeEvent<HTMLInputElement>) => void
    contentChange: (event: ChangeEvent<HTMLInputElement>) => void
    zzz: () => void
    qqq: boolean,
    ggg: boolean,
    xxx: () => void
    data: any
}

export interface IProps {
    myQqq: boolean
}

export interface IMyVariables {
    number: number, 
    writer?: string,
    title?: string | number,
    contents?: string | number
}