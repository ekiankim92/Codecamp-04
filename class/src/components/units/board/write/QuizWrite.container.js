import QuizWriteUI from './QuizWrite.presenter'
import { useRouter } from 'next/router'

export default function QuizWrite (){

    const router = useRouter()
    
    function onClickMove1() {
        router.push('/05-06-dynamic-routed-number/1')
    }

    function onClickMove2() {
        router.push('/05-06-dynamic-routed-number/2')
    }

    function onClickMove3() {
        router.push('/05-06-dynamic-routed-number/3')
    }

    return (
        <QuizWriteUI
            clicker_1 = {onClickMove1}
            clicker_2 = {onClickMove2}
            clicker_3 = {onClickMove3}
        />
    )
}