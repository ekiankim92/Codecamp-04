import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { IMutation, IMutationCreateProductArgs } from '../../src/commons/types/generated/types'


const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProductPage(){
    const [createProduct] = useMutation<Pick<IMutation, 'createProduct'>, IMutationCreateProductArgs>(CREATE_PRODUCT)
    const router = useRouter()
    const[mySeller, setMySeller] = useState("")
    const[myName, setMyName] = useState("")
    const[MyDetail, setMyDetail] = useState("")
    const[MyPrice, setMyPrice] = useState("")

    function onChangeMyWriter(event){
        setMySeller(event.target.value)
    }
    function onChangeMyTitle(event){
        setMyName(event.target.value)
    }
    function onChangeMyContents(event){
        setMyDetail(event.target.value)
    }
    function onChangeMyPrice(event){
        setMyPrice(event.target.value)
    }

    async function zzz(){
        try {
            const result = await createProduct({
                variables: {
                    seller: "chulsoo",
                    createProductInput: {
                        
                    }
                }
                // variables: {
                //     seller: mySeller,
                //     createProductInput: {
                //         name: myName,
                //         detail: MyDetail,
                //         price: Number(MyPrice)
                //     }
                }
            })
        
            router.push(`/05-08-dynamic-product-read/${result.data.createProduct._id}`) 

        } catch(error){
            console.log(error.message)
        }
    }

    return (
        <>
            ํ๋งค์: <input type="text" onChange={onChangeMyWriter}/><br />
            ์ํ๋ช: <input type="text" onChange={onChangeMyTitle}/><br />
            ์ํ๋ด์ฉ: <input type="text" onChange={onChangeMyContents}/><br />
            ์ํ๊ฐ๊ฒฉ: <input type="text" onChange={onChangeMyPrice}/><br />
            <button onClick={zzz}>์ํ ๋ฑ๋กํ๊ธฐ!!!</button>
        </>
    )


}