
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import InputComponent from "./InputComponent";

interface IProp {
    register:UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const PersonalInfo = ({register,errors}:IProp) => {
    return (
        <div className="mt-5">
            <h1 className="font-semibold">بيانات شخصية خاصة بمقدمه الطلب: </h1>
            <div className="flex flex-wrap gap-2 md:gap-6 mt-3">
                <div>
                    <InputComponent register={register} type="text"  regName="QuadNameProvided" nameInput="الاسم الرباعي" contact="name"/>
                    {errors.QuadNameProvided?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الاسم الرباعي</p>}
                </div>
                <div>
                    <InputComponent register={register} type="number"  regName="NationalNumberProvided" nameInput="الرقم القومي" minLength={14} maxLength={14} contact="id"/>
                    {errors.NationalNumberProvided?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الرقم القومي</p>}
                    {errors.NationalNumberProvided?.type==="minLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                    {errors.NationalNumberProvided?.type==="maxLength" && <p className="text-sm text-red-500">الرقم القومي يجب ان يكون 14 رقم</p>}
                </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 md:gap-6">
                <div>
                    <InputComponent register={register} type="date"  regName="SubmissionDate" nameInput="تاريخ تقديم الطلب" contact="date"/>
                    {errors.SubmissionDate?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل تاريخ تقديم الطلب</p>}
                </div>
                <div>
                    <InputComponent register={register} type="text"  regName="AdressProvided" nameInput="العنوان بالتفصيل" contact="address"/>
                    {errors.AdressProvided?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل العنوان بالتفصيل</p>}
                </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 md:gap-6">
                <div>
                    <InputComponent register={register} type="number"  regName="phoneNumberProvided" nameInput="رقم الموبايل" minLength={11} maxLength={11} contact="phoneNumber"/>
                    {errors.phoneNumberProvided?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل رقم الموبايل</p>}
                    {errors.phoneNumberProvided?.type==="minLength" && <p className="text-sm text-red-500">رقم الموبايل يجب ان يكون 11 رقم</p>}
                    {errors.phoneNumberProvided?.type==="maxLength" && <p className="text-sm text-red-500">رقم الموبايل يجب ان يكون 11 رقم</p>}
                </div>
                <div>
                    <InputComponent register={register} type="text"  regName="BreadwinnerNameProvided" nameInput="اسم عائل الاسره" contact="familyName"/>
                    {errors.BreadwinnerNameProvided?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل اسم عائل الاسره</p>}
                </div>
            </div>
            <div className="mt-2">
                <InputComponent register={register} type="text"  regName="WorkProvided" nameInput="الوظيفة" contact="jop"/>
                {errors.WorkProvided?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الوظيفة</p>}
            </div>
        </div>
    );
}

export default PersonalInfo;
