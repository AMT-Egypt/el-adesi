/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookie from "cookie-universal";

export const addItem = (data:any) => {
    const token = Cookie().get("token");
    axios.post(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/services`,{...data},{
        headers:{
            "Authorization": `Bearer ${token}`,
            "Content-Type":'multipart/form-data',
        }
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
