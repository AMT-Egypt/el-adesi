/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const myUrl = useNavigate()
    const [errorLog,setLog] = useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (data:any)=>{
        console.log(data)
        if(data.email === "admin@gmail.com" && data.password ==="montaser2024"){
            localStorage.userToken = "true"
            myUrl("/main")
        }
        else{
            setLog(true)
        }
    }
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-fives">
            <div className="container flex justify-center">
                <div className="p-4 px-5 rounded-md bg-primary w-[500px]">
                    <h1 className="mb-2 text-xl text-center text-secondary">تسجيل دخول</h1>
                    {errorLog && <p className="text-sm text-red-500">بيانات الدخول غير صحيحة</p>}
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="text-secondary">الايميل</label>
                            <input type="email" {...register("email", { required: true })} id="email" name="email" className="w-full p-2 mt-2 border rounded-md outline-none" />
                            {errors.email?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الايميل</p>}
                        </div>
                        <div className="my-3">
                            <label htmlFor="password" className="text-secondary">كلمة المرور</label>
                            <input type="password" {...register("password", { required: true })} id="password" name="password" className="w-full p-2 mt-2 border rounded-md outline-none" />
                            {errors.password?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل كلمة المرور</p>}
                        </div>
                        <div className="flex justify-center">
                            <button className="p-2 rounded-md bg-secondary text-primary">تسجيل</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;