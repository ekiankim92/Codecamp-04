import { useRouter } from 'next/router'
import QuizWriteUI from './QuizWrite.presenter'

export default function QuizWrite() {
    const router = useRouter()

    console.log(router)
    console.log(router.query.aaa)


    return (
        <QuizWriteUI>
            router = {router}
        </QuizWriteUI>
    )
}