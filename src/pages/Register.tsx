/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import logo from "../assets/images/logo.jpg";
import { fetchRegister } from "../functions/apis/register";

const Register = () => {
    const myUrl = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data: any) => {
        // console.log(data)
        fetchRegister(data,myUrl)
    }
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full min-h-screen bg-fives">
            <img className="w-40 rounded-xl border border-solid border-primary" src={logo} alt="العديسي" />
            <div className="container flex justify-center">
                <div className="p-4 px-5 rounded-md bg-primary w-[500px]">
                    <h1 className="mb-3 text-xl text-center text-secondary">انشاء حساب</h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="username" className="text-secondary">اسم المستخدم</label>
                            <input type="text" {...register("username", { required: true })} id="username" name="username" className="w-full p-2 mt-2 border rounded-md outline-none" />
                            {errors.username?.type === "required" && <p className="text-sm text-red-500">من فضلك اسم المستخدم</p>}
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="text-secondary">الايميل</label>
                            <input type="email" {...register("email", { required: true })} id="email" name="email" className="w-full p-2 mt-2 border rounded-md outline-none" />
                            {errors.email?.type === "required" && <p className="text-sm text-red-500">من فضلك ادخل الايميل</p>}
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password" className="text-secondary">كلمة المرور</label>
                            <input type="password" {...register("password", { required: true,minLength:6})} id="password" name="password" className="w-full p-2 mt-2 border rounded-md outline-none" />
                            {errors.password?.type === "required" && <p className="text-sm text-red-500">من فضلك كلمة المرور</p>}
                            {errors.password?.type === "minLength" && <p className="text-sm text-red-500">كلمة المرور يجب ان لا تقل عن 6 حروف</p>}
                        </div>
                        <div className="flex justify-center mt-3">
                            <button className="p-2 rounded-md bg-secondary text-primary">انشاء</button>
                        </div>
                    </form>
                    <div className="flex justify-center mt-4 text-secondary">
                        لديك حساب؟ <Link to={"/login"} className="mr-2 text-green-500 underline">سجل دخول</Link>
                    </div>
                </div>
            </div>
            <p className="text-primary">
                تم تصميمه بواسطة <a href="https://amt-egypt.vercel.app/" target="_blank" className="underline">AMT</a>
            </p>
        </div>
    );
}

export default Register;
