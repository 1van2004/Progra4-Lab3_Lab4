import { useContext } from "react"
import { AuthContext } from "../Constext/AuthContext"

export default function Welcome({userName}){
    const {user} = useContext(AuthContext)
    return(
    <div>

<h1>Welcome to React App {user.email}</h1>

    </div>
    )
}