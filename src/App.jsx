import  Login  from './Components/Login'
import './App.css'
import Welcome from './Components/Welcome'
import { useLogin } from './Hooks/useLogin'
import { AuthContext } from './Constext/AuthContext'
import { useContext } from 'react'


function App() {

  const {user} = useContext(AuthContext)
  
  return (
    <>
    {user ? <Welcome userName={user}/> : <Login/> }
    
    </>
      )

}
export default App
