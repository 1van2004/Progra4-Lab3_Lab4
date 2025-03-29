import {useState, useRef} from 'react'
import {useLogin}  from '../Hooks/useLogin'
import { AuthContext } from '../Constext/AuthContext'
import { useContext } from 'react'

export default function Login(){


  const {setUser} = useContext(AuthContext)

  const { login } = useLogin()
  const emailref = useRef()
  const passwordref = useRef()
  const [error, SetError] = useState('')

  const handleLogin = () => {
    const email = emailref.current.value
    const password = passwordref.current.value
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
    ref={emailref}
    
    />

    <br/>
    <input
    type="password"
    placeholder='Contraseña'
    ref={passwordref}
    />
<br/>
<button onClick={handleLogin}>Insertar</button>
{error && <p style={{color: "red"}}>{error}</p>}
    
    
    

    </>
  )
}