import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import InputComponent from "./InputComponent";

interface IProp {
    register:UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const FamilyInfo = ({register,errors}:IProp) => {
    return (
        <div className="mt-5">
            <h1 className="font-semibold">بيانات الاسره (بيانات من يسكن داخل المنزل محل الدراسه):</h1>
            <div className="flex flex-wrap gap-2 md:gap-6 mt-3">
                <div>
                    <InputComponent register={register} type="text"  regName="wifeName" nameInput="اسم الزوجه/الزوج" contact="wifeName"/>
                    {errors.wifeName?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل اسم الزوجه/الزوج</p>}
                </div>
                <div>
                    <InputComponent register={register} type="number"  regName="wifeNationalID" nameInput="الرقم القومي" minLength={14} maxLength={14} contact="wifeNationalID"/>
                    {errors.wifeNationalID?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الرقم القومي</p>}
                    {errors.wifeNationalID?.type==="minLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                    {errors.wifeNationalID?.type==="maxLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                </div>
            </div>
            <div className="mt-2">
                <InputComponent register={register} type="number"  regName="numberChildren" nameInput="عدد الابناء" contact="numberChildren"/>
                {errors.numberChildren?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل عدد الابناء</p>}
            </div>
        </div>
    );
}

export default FamilyInfo;
