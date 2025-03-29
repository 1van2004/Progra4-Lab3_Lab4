import { useRef, useState } from "react";


export function useLogin(){

    const login = (email, password) => {

    if(email === "admin" && password == "1234"){
      
        return true;
    }
      return false;
    };

    const logout = () => {
      setUser(null)
    }

    return {login};
}
