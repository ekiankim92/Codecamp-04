import {MyInput, MyButton} from './BoardWrite.styles'

export default function BoardWriteUI (props) {
    
    return (
        <>
        작성자: <MyInput type='text' onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer}/><br/>
        제목: <MyInput type='text' onChange={props.titleChange} defaultValue={props.data?.fetchBoard.title}/> <br/>
        내용: <MyInput type='text' onChange={props.contentChange} defaultValue={props.data?.fetchBoard.contents}/> <br/>
        {/* <MyButton myQqq={props.qqq} onClick={props.ggg ? props.xxx : props.zzz}>게시물 {props.ggg ? '수정' : '등록'}하기</MyButton> */}
        {!props.ggg && <MyButton myQqq={props.qqq} onClick={props.zzz}>게시물 등록하기</MyButton>}
        {props.ggg && <MyButton myQqq={props.qqq} onClick={props.xxx}>게시물 수정하기</MyButton>}
        </>
    )

}