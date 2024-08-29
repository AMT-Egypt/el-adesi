/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookie from "cookie-universal";
import { alert } from "./Alert";

export const addItem = (data:any,id:number,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    const token = Cookie().get("token");
    axios.post(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/services`,
    {
        data: {
            ...data,
            users: [
                {
                    id,
                }
            ]
        },
    },
    {
        headers:{
            "Authorization": `Bearer ${token}`,
            "Content-Type" : "application/json",
        }
    })
    .then(()=>{
        alert("نجاح","تم اضافة خدماتك بنجاح","success")
        window.location.reload()
    })
    .catch((err)=>{
        console.log(err)
        alert("خطأ","حدث خطأ اثناء اضافة الخدمة","error")
    })
    .finally(()=>setLoading(false))
}
