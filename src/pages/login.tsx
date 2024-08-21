/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputEmail from "../modules/form/InputEmail";
import InputPassword from "../modules/form/InputPassword";

const Login = () => {
    const myUrl = useNavigate()
    const [errorLog, setLog] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data: any) => {
        console.log(data)
        if (data.email === "admin@gmail.com" && data.password === "montaser2024") {
            localStorage.userToken = "true"
            myUrl("/main")
        }
        else {
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
                        <InputEmail errors={errors} register={register} />
                        <InputPassword errors={errors} register={register} />
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