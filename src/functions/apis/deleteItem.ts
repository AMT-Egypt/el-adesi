import axios from "axios";
import Cookie from "cookie-universal";
import { alert } from "./Alert";

export const deleteItem = (id: number) => {
    const token = Cookie().get("token");
    axios.delete(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/services/${id}`,{
        headers:{
            "Authorization": `Bearer ${token}`,
        }
    }).then(()=>{
        alert("نجاح","تم حذف الخدمة بنجاح","success")
    })
    .catch(()=>{
        alert("خطأ","حدث خطأ اثناء حذف الخدمة","error")
    })
};
