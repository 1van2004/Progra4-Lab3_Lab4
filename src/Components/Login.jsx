import {useState, useRef} from 'react'
import {useLogin}  from '../Hooks/useLogin'
import { AuthContext } from '../Constext/AuthContext'
import { useContext } from 'react'

export default function Login(){


  const {setUser} = useContext(AuthContext)

const EmailRef = useRef()
  const passwordRef = useRef()
  const [error, SetError] = useState('')

  const { login } = useLogin()

  const handleLogin = () => {
    const email = EmailRef.current.value
    const password = passwordRef.current.value
    const isSuccess = login(email, password);
    if (!isSuccess)
    {
        SetError("Credenciales incorrecta")
    }else{
        alert("Bienvenido " + email)
        setUser(email)
    }


    
}

  return (
    <>
    <h2>Login</h2>
    <input

    type="email"
    placeholder='Correo'
    ref={EmailRef}
    
    />

    <br/>
    <input
    type="password"
    placeholder='Contraseña'
    ref={passwordRef}
    />
<br/>
<button onClick={handleLogin}>Insertar</button>
{error && <p style={{color: "red"}}>{error}</p>}
    
    
    

    </>
  )
}