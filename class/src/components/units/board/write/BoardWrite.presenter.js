import {MyInput, MyButton} from './BoardWrite.styles'

export default function BoardWriteUI (props) {
    
    return (
        <>
        작성자: <MyInput type='text' onChange={props.aaa}/><br/>
        제목: <MyInput type='text' onChange={props.titleChange}/> <br/>
        내용: <MyInput type='text' onChange={props.contentChange}/> <br/>
        <MyButton myQqq={props.qqq} onClick={props.zzz}>게시물 등록하기</MyButton>
        </>
    )

}