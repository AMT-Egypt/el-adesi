/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.jpg"
import { useEffect, useState } from "react"
import Cookie from "cookie-universal"
import { useDispatch, useSelector } from "react-redux"
import { addUser, deleteUser } from "../store/user/userInfo"

const Header = () => {
    const userInfo = useSelector((state:any)=>state.userInfo)
    const dispatch = useDispatch()
    const [display,setDisplay] = useState("hidden")
    const myUrl = useNavigate()
    const cook = Cookie()
    const logout = () => {
        cook.remove("user")
        cook.remove("token")
        dispatch(deleteUser())
        myUrl("/login")
    }
    console.log("user => ",userInfo)
    useEffect(()=>{
        dispatch(addUser(cook.get("user")))
    },[])
    return (
        <div className="flex justify-center w-full py-3 bg-primary">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                        <h1 className="text-fives">العديسي</h1>
                    </div>
                    <div onClick={()=>setDisplay(display==="flex" ? "hidden" : "flex")} className="flex flex-col gap-1 cursor-pointer sm:hidden">
                        <span className="block w-6 h-[2px] rounded bg-fives"></span>
                        <span className="block w-6 h-[2px] rounded bg-fives"></span>
                        <span className="block w-6 h-[2px] rounded bg-fives"></span>
                    </div>
                    <div className={`absolute ${display} flex-col items-start gap-3 left-2 top-20 z-10 bg-primary p-3 rounded-md sm:p-0 sm:relative sm:left-0 sm:top-0 sm:flex sm:flex-row sm:items-center sm:gap-10`}>
                        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6 list-none text-fives">
                            <li>
                                <Link to="/main">
                                    الصفحه الرئيسيه
                                </Link>
                            </li>
                            <li>
                                <Link to="/main/services">
                                    الخدمات
                                </Link>
                            </li>
                        </ul>
                        <button onClick={() => logout()} className="text-fives">تسجيل خروج</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;