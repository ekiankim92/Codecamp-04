import { useRouter } from 'next/router'
import PresenterUI from './QuizWrite.presenter'

export default function QuizWrite() {

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
        <PresenterUI>
            clicker1 = {onClickMove1}
            clicker2 = {onClickMove2}
            clicker3 = {onClickMove3}
        </PresenterUI>
    )

}