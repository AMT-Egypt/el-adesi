import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import { alert } from "./Alert";

interface IData {
    username:string;
    email:string;
    password:string;
}
export const fetchRegister = (data:IData,myUrl:NavigateFunction,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
    axios.post(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/auth/local/register`,{...data})
    .then(()=>{
        alert("نجاح","تم انشاء حسابك بنجاح","success")
        myUrl("/login")
    })
    .catch(()=>{
        alert("خطأ","حدث خطأ اثناء انشاء الحساب","error")
    })
    .finally(()=>setLoading(false))
}