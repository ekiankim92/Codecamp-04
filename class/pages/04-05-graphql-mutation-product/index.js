import { useMutation, gql } from '@apollo/client' 
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){

        createProduct(seller:$seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`
//$sign 은 내가 갖고오는 값 
// mutation createBoard in example graphql side 에서 갖고오는 값 
// 밑에 createBoard 도 example graphql side 에서 갖고오는 값

export default function GraphqlMutationProductPage(){
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [mySeller, setMySeller] = useState("")
    const [myProduct, setMyProduct] = useState("")
    const [myContent, setMyContent] = useState("")
    const [myPrice, setMyPrice] = useState(0)

    function onChangeMySeller(event) {
        setMySeller(event.target.value)
    }

    function onChangeMyProduct(event) {
        setMyProduct(event.target.value)
    }

    function onChangeMyContent(event){
        setMyContent(event.target.value)
    }

    function onChangeMyPrice(event){
        setMyPrice(event.target.value)
    }


    async function zzz() {
        const result = await createProduct({
            variables: {
                seller: mySeller,
                createProductInput: {
                    name: myProduct,
                    detail: myContent,
                    price: Number(myPrice)
                }
            }
        })
        console.log(result)

    }


    return (
        <>
            판매자: <input type='text' onChange={onChangeMySeller}/><br/><br/>
            상품명: <input type='text' onChange={onChangeMyProduct}/> <br/><br/>
            상품 내용: <input type='text' onChange={onChangeMyContent}/> <br/><br/>
            상품 가격: <input type='text' onChange={onChangeMyPrice}/> <br/><br/>
            <button onClick={zzz}>상품 등록하기</button>
        </>
    ) 

}