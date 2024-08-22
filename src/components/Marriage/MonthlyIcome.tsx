import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import InputComponent from "./InputComponent";

interface IProp {
    register:UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const MonthlyIcome = ({register,errors}:IProp) => {
    return (
        <div className="mt-5">
            <h1 className="font-semibold">بيانات الدخل الشهرى الخاصة باسرة العروسه:</h1>
            <div className="flex flex-wrap gap-2 md:gap-6 mt-3">
                <div>
                    <InputComponent register={register} type="number"  regName="monthlyIncome" nameInput="الدخل الشهرى للاسره" contact="monthlyIncome"/>
                    {errors.monthlyIncome?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الدخل الشهرى للاسره</p>}
                </div>
                <div>
                    <InputComponent register={register} type="text"  regName="anotherSource" nameInput="مصادر دخل اخرى" contact="anotherSource"/>
                    {errors.anotherSource?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل مصادر دخل اخرى</p>}
                </div>
            </div>
            <div className="mt-2">
                <InputComponent register={register} type="number"  regName="total" nameInput="إجمالي دخل الاسرة" contact="total"/>
                {errors.total?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل إجمالي دخل الاسرة</p>}
            </div>
        </div>
    );
}

export default MonthlyIcome;
