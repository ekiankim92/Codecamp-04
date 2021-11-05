import { useRouter } from 'next/router'
//  next 는 React 업그레이드 버전 


export default function StaticRoutingPage() {

    const router = useRouter()
    // Comes after localhost:3000/   after slash "/"
    

    function onClickMove() {
        router.push('/05-02-static-routed')
    }


    return (
        <>
        <button onClick={onClickMove}>페이지 이동하기</button>
        </>
    )


}