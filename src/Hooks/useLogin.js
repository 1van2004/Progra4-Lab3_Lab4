

export function useLogin(){


    const login = (email, password) => {

    if(email === "admin" && password == "1234"){
      
        return true;
    }
      return false;
    };

    return {login};
}
