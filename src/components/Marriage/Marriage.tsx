/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import PersonalInfo from "./PersonalInfo";
import MonthlyIcome from "./MonthlyIcome";
import FamilyInfo from "./FamilyInfo";
import LandInfo from "./LandInfo";
import HouseAndNeeds from "./HouseAndNeeds";
import EstimatedBudget from "./EstimatedBudget";
import Research from "./Research";

interface IProp {
    display: string;
    register:UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
    setNeeds:any
}

const Marriage = ({display,register,errors,setNeeds}:IProp) => {
    return (
        <div className={`${display==="marriage"? "block" : "hidden"}`}>
            <PersonalInfo register={register} errors={errors}/>
            <MonthlyIcome register={register} errors={errors}/>
            <FamilyInfo register={register} errors={errors}/>
            <LandInfo register={register} errors={errors}/>
            <HouseAndNeeds register={register} errors={errors}/>
            <EstimatedBudget setNeeds={setNeeds}/>
            <Research register={register} errors={errors}/>
        </div>
    );
}

export default Marriage;
