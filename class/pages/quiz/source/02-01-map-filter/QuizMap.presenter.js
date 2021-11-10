import * as S from './QuizMap.styles'

export default function QuizMapUI (props) {

    return (
        <S.Wrapper>
            {props.fetchData?.fetchProducts.map((el, index) => (
            <S.Row key={el._id}>
                <S.Column><input type='checkbox'/></S.Column>
                <S.Column>{index + 1}</S.Column>
                <S.Column>{el._id}</S.Column>
                <S.Column>{el.seller}</S.Column>
                <S.Column>{el.name}</S.Column>
                <S.Column>{el.detail}</S.Column>
                <S.Column>{el.price}</S.Column>
                <S.Column>{el.createdAt.replaceAll("-", ".").split("T")[0]}</S.Column>
                <button id={el._id} onClick={props.onClickDelete}>클릭하기</button>
            </S.Row>
            ))}
        </S.Wrapper>
    )

}