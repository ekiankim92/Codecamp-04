import * as S from './BoardList.style'

export default function BoardListUI (props) {

    return (
        <S.Outer_Wrapper>
            <S.Inner_Wrapper>
                <S.Header>
                    <div>번호</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>날짜</div>
                </S.Header>
                <S.Best_List>
                    <div>
                        {props.data2?.fetchBoardsOfTheBest.map((el , index) => (
                            <S.Row>
                                <S.Column><input type= "checkbox"/></S.Column>
                                <S.Column>{index + 1}</S.Column>
                                <S.Column>{el.title}</S.Column>
                                <S.Column>{el.writer}</S.Column>
                                <S.Column>{el.createdAt.replaceAll('-','.').split("T")[0]}</S.Column>
                            </S.Row>
                        ))}
                    </div>
                </S.Best_List>
                <S.Header>
                    <div>번호</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>날짜</div>
                </S.Header>
                    <S.Lists>
                        {props.data1?.fetchBoards.map((el, index) => (
                        <S.Row key={el._id}>
                            <S.Column><input type="checkbox"/></S.Column>
                            <S.Column>{index + 1}</S.Column>
                            <S.Column>{el.title}</S.Column>
                            <S.Column>{el.writer}</S.Column>
                            <S.Column>{el.createdAt.split("T")[0]}</S.Column>
                            <S.Column><button id={el._id} onClick={props.onClickDate}>Delete Button</button></S.Column>
                        </S.Row>
                        ))}
                    </S.Lists>
            </S.Inner_Wrapper>
        </S.Outer_Wrapper>
    ) 
}