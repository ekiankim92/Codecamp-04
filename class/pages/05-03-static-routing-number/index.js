import { useRouter } from 'next/router'
//  next 는 React 업그레이드 버전 


export default function StaticRoutingNumberPage() {

    const router = useRouter()
    // Comes after localhost:3000/   after slash "/"
    

    function onClickMove1() {
        router.push('/05-04-static-routed-number/1')
    }

    function onClickMove2() {
        router.push('/05-04-static-routed-number/2')
    }

    function onClickMove3() {
        router.push('/05-04-static-routed-number/3')
    }


    return (
        <>
        <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
        <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
        <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
        </>
    )


}