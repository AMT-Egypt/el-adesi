/* eslint-disable @typescript-eslint/no-explicit-any */

interface IProp {
    register:any;
    errors: any;
}

const PersonalInfo = ({register,errors}:IProp) => {
    return (
        <div className="mt-5">
            <h1 className="font-semibold mb-3">بيانات شخصية خاصة بمقدمه الطلب: </h1>
            <div className="flex gap-6">
                <div>
                    <label htmlFor="name" className="text-primary">الاسم الرباعي</label><br />
                    <input type="text" {...register("name", { required: true })} id="name" className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                    {errors.name?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الاسم الرباعي</p>}
                </div>
                <div>
                    <label htmlFor="id" className="text-primary">الرقم القومي</label><br />
                    <input type="number" {...register("number", { required: true, minLength:14, maxLength: 14 })} id="id" className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                    {errors.number?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الرقم القومي</p>}
                    {errors.number?.type==="minLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                    {errors.number?.type==="maxLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
