import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IProp {
    register:UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const HouseAndNeeds = ({register,errors}:IProp) => {
    return (
        <div>
            <div className="mt-5">
                <h1 className="font-semibold">وصف السكن:</h1>
                <div className="mt-3">
                    <label htmlFor="house"  className="text-primary">وصف عام المنزل</label> <br />
                    <textarea {...register("descHouse",{required:true})} name="descHouse" id="house"  className="mt-1 outline-none w-[300px] border px-3 rounded-md h-16 resize-none" ></textarea>
                    {errors.descHouse?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل وصف عام المنزل؟</p>}
                </div>
            </div>
            <div className="mt-5">
                <h1 className="font-semibold">الاحتياجات المطلوبة:</h1>
                <div className="mt-1">
                    <textarea {...register("Requirements",{required:true})} name="Requirements"  className="mt-1 outline-none w-[300px] border px-3 rounded-md h-24 resize-none" ></textarea>
                    {errors.Requirements?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الاحتياجات المطلوبة؟</p>}
                </div>
            </div>
        </div>
    );
}

export default HouseAndNeeds;
