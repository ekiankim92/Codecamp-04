import { useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const create_product = gql`
    mutation createProduct($seller: String, $createProductInput:CreateProductInput!){

        createProduct(seller:$seller, createProductInput:$createProductInput){
            _id
            number
            message
        }
    }
`

export default function CreateProductPage () {
    const [createProduct] = useMutation(create_product)
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

    function onChangeSeller(event) {
        setSeller(event.target.value)
    }

    function onChangeName(event) {
        setName(event.target.value)
    }

    function onChangeDetail (event){
        setDetail(event.target.value)
    }

    function onChangePrice(event){
        setPrice(event.target.value)
    }

    async function SumbitButton () {
        const result = await createProduct ({
            variables: {
                seller: seller,
                createProductInput:{
                    name: name,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        console.log(result)
    }


    return (
        <div>
            Seller <input type='text' onChange={onChangeSeller}/><br/>
            Name <input type='text' onChange={onChangeName}/><br/>
            Detail <input type='text' onChange={onChangeDetail}/><br/>
            Price <input type='text' onChange={onChangePrice}/><br/>
            <button onClick = {SumbitButton}>Click</button>
        </div>
    )
}