/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookie from "cookie-universal";

export const addItem = (data:any) => {
    const token = Cookie().get("token");
    axios.post(`https://grotesque-gerianna-msafa-9bf726f7.koyeb.app/api/services`,{...data},{
        headers:{
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type" : "application/json",
        }
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
