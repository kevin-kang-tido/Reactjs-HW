
import axios from "axios"
import { base_URL } from "../../utils/constant"
import { actionTypes } from "./actionTypes"
import secureLocalStorage from "react-secure-storage"


export const loginUser = (user) =>{
    return(dispatch) => {
        axios(`${base_URL}auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            // axios use data not body
            data : JSON.stringify(user)
        })
        .then(resp =>{
            if(resp.status == 201){
                secureLocalStorage.setItem("auth", resp.data)
                dispatch({
                    type: actionTypes.LOGIN_SUCESS,
                    payload: resp.data
                })
                return Promise.resolve()
            }
        })
        return Promise.resolve()
    }
}


export const logout = () =>{
    return(dispatch) =>{
        secureLocalStorage.removeItem("auth")
        dispatch({
            type: actionTypes.LOGOUT,
            payload: null
        })
        return Promise.resolve()

    }
}