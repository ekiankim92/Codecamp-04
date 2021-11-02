import {useState} from 'react'

export default function AuthConstNumber(){
    
    const [RandomNumber, setRandomNumber] = useState('000000')

    function AuthRandomNumber (){
        setRandomNumber(String(Math.floor(Math.random()*1000000)).padStart(6,'0'))
    }

    return (
        <div>
            <div>{RandomNumber}</div>
            <button onClick={AuthRandomNumber}>인증번호전송</button>
        </div>
    )

}