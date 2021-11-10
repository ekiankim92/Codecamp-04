import {useMutation, useQuery, gql} from "@apollo/client"
import QuizMapUI from './QuizMap.presenter'
import {DELETE_PRODUCT, FETCH_PRODUCTS} from './QuizMap.queries'

export default function QuizMap () {
    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const {data} = useQuery(FETCH_PRODUCTS)

    async function onClickDelete (event){
        try {
            await deleteProduct({
                variables: {productId: event.target.id},
                refetchQueries: [{ query: FETCH_PRODUCTS}]
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <QuizMapUI
            fetchData = {data}
            onClickDelete = {onClickDelete}
        />
    )

}