/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import PersonalInfo from "./PersonalInfo";
import MonthlyIcome from "./MonthlyIcome";
import FamilyInfo from "./FamilyInfo";
import LandInfo from "./LandInfo";
import HouseAndNeeds from "./HouseAndNeeds";
import EstimatedBudget from "./EstimatedBudget";
import Research from "./Research";
import { useState } from "react";
import { addItem } from "../../functions/apis/addItem";

interface IProp {
    display: string;
}

const Marriage = ({display}:IProp) => {
    const [allNeeds, setNeeds] = useState<any[]>([])
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (data:any)=>{
        console.log({...data,estimatedBudget:allNeeds,serviceType:"marriage"})
        const allData = {...data,estimatedBudget:allNeeds,serviceType:"marriage"}
        addItem("marriage",allData)
    }
    return (
        <div className={`${display==="marriage"? "block" : "hidden"}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <PersonalInfo register={register} errors={errors}/>
                <MonthlyIcome register={register} errors={errors}/>
                <FamilyInfo register={register} errors={errors}/>
                <LandInfo register={register} errors={errors}/>
                <HouseAndNeeds register={register} errors={errors}/>
                <EstimatedBudget setNeeds={setNeeds}/>
                <Research register={register} errors={errors}/>
                <div className={`w-[300px] flex justify-end mt-4`}>
                    <button className="p-1 px-3 rounded bg-primary text-fives">ارسل</button>
                </div>
            </form>
        </div>
    );
}

export default Marriage;
