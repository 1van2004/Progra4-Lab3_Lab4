import { useContext } from "react";
import Welcome from "./Welcome";
import { AuthContext } from "../Constext/AuthContext";

export default function Home(){

const {logout} = useContext(AuthContext)

    return (
    <>
    
    <h1>Your at Home!</h1>
    <Welcome/>
    <button onClick={logout}>Logout</button>
    </>
    );
}