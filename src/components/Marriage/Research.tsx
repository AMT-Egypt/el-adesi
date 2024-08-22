import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import InputComponent from "./InputComponent";

interface IProp {
    register:UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const Research = ({register,errors}:IProp) => {
    return (
        <div className="mt-5">
            <div>
                <label htmlFor="opion" className="font-semibold text-primary">رأى الباحث: </label><br />
                <textarea {...register("researcherOpinion",{required:true})} name="researcherOpinion" id="opion" className="mt-1 outline-none w-[300px] border px-3 rounded-md h-24 resize-none"></textarea>
                {errors.researcherOpinion?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل راي الباحث؟</p>}
            </div>
            <div>
                <InputComponent register={register} type="text" regName="researcher" nameInput="الباحث" contact="researcher"/>
                {errors.researcher?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل الباحث</p>}
            </div>
        </div>
    );
}

export default Research;
