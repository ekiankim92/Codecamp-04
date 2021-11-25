import axios from 'axios'
import { useState } from 'react'

export default function RestApiGetPage() {
    
    const [users, setUsers] = useState("Comment Here")

    async function RestApiButton(){
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
        // console.log(result.users)
        // setUsers(result.users)
    }

    return (
        <>  
            <div>{users}</div>
            <button onClick={RestApiButton}>REST-API 요청하기</button>
        </>
    )

}