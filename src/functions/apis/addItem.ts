/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookie from "cookie-universal";
import { alert } from "./Alert";

export const addItem = async (data:any,userInfo:any,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    
    const token = Cookie().get("token");
    console.log(userInfo);
    const res = await axios.get(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/services?populate=*&filters[users][username][$eq]=${userInfo.username}`,{
        headers:{
            "Authorization": `Bearer ${token}`,
        }
    });

    if (res.data.data.length === 10) {
        return alert("خطأ","لقد تم استنفاد جميع خدماتك المتاحة.","error",()=>{window.location.reload()});
    }
    else{
        axios.post(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/services`,
        {
            data: {
                ...data,
                users: [
                    {
                        id: userInfo.id,
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
}

