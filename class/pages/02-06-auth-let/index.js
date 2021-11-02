export default function AuthLetNumber () {

    function RandomNumber () {
        const token = String(Math.floor(Math.random()*1000000)).padStart(6,'0')
        document.getElementById('digits').innerText = token
    }


    return (
        <div>
            <div id ='digits'>000000</div>
            <button onClick={RandomNumber}>인증번호전송</button>
        </div>

    ) 

}