import { useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.jpg"

const Header = () => {
    const myUrl = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("userToken")
        myUrl("/login")
    }
    return (
        <div className="flex justify-center w-full py-3 bg-primary">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                        <h1 className="text-fives">العديسي</h1>
                    </div>
                    <div className="flex items-center gap-10">
                        <ul className="flex gap-6 list-none text-fives">
                            <li><a href="#/">الصفحة الرئيسية</a></li>
                            <li><a href="#/">الخدمات</a></li>
                        </ul>
                        <button onClick={()=>logout()} className="text-fives">تسجيل خروج</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;