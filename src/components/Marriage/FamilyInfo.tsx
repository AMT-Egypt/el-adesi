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
                    <InputComponent register={register} type="text"  regName="husbandFamily" nameInput="اسم الزوجه/الزوج" contact="wifeName"/>
                    {errors.husbandFamily?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل اسم الزوجه/الزوج</p>}
                </div>
                <div>
                    <InputComponent register={register} type="number"  regName="NationalNumberFamily" nameInput="الرقم القومي" minLength={14} maxLength={14} contact="wifeNationalID"/>
                    {errors.NationalNumberFamily?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الرقم القومي</p>}
                    {errors.NationalNumberFamily?.type==="minLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                    {errors.NationalNumberFamily?.type==="maxLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                </div>
            </div>
            <div className="mt-2">
                <InputComponent register={register} type="number"  regName="NumberOfChildren" nameInput="عدد الابناء" contact="numberChildren"/>
                {errors.NumberOfChildren?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل عدد الابناء</p>}
            </div>
        </div>
    );
}

export default FamilyInfo;
