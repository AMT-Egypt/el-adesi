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
import { useSelector } from "react-redux";
import Spinner from "../Spinner";

interface IProp {
    display: string;
}

const Marriage = ({display}:IProp) => {
    const [allNeeds, setNeeds] = useState<any[]>([])
    const userInfo = useSelector((state:any)=>state.userInfo)
    const [loading,setLoading] = useState<boolean>(false)
    const {register,handleSubmit,formState:{errors}} = useForm()
    const [cancel,setCancel] = useState<boolean>(false)
    // console.log(allNeeds)
    const onSubmit = (data:any)=>{
        setLoading(true)
        const allData = {
            ...data,
            Items:allNeeds,
            caseData : null,
            DoesHeOwnAgriculturalProperty:data.DoesHeOwnAgriculturalProperty==="true" ? true : false,
            IsAnyLandBeingCultivated:data.IsAnyLandBeingCultivated==="true" ? true : false,
            MonthlyIncome: +data.MonthlyIncome,
            OtherSources : +data.OtherSources,
            TotalIncome : +data.MonthlyIncome + +data.OtherSources,
            NumberOfChildren : +data.NumberOfChildren,
            Status:"الزواج",
        }
        addItem(allData,userInfo,setLoading)
    }

    return (
        <div className={`${display==="marriage"? "block" : "hidden"}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInfo register={register} errors={errors}/>
                <MonthlyIcome register={register} errors={errors}/>
                <FamilyInfo register={register} errors={errors}/>
                <LandInfo register={register} errors={errors}/>
                <HouseAndNeeds register={register} errors={errors}/>
                <EstimatedBudget setNeeds={setNeeds} cancel={cancel}/>
                <Research register={register} errors={errors}/>
                <div className={`w-[300px] flex justify-end mt-4 gap-5`}>
                    <button disabled={loading} className={`p-1 ${loading ? "pt-2" : "pt-1"} px-3 rounded bg-primary text-fives`}>
                        {
                            loading ? <Spinner color="secondary"/> : "ارسل"
                        }
                    </button>
                    <button onClick={()=>setCancel(true)} type={"reset"} className="px-3 py-1 text-white bg-red-500 rounded">الغاء</button>
                </div>
            </form>
        </div>
    );
}

export default Marriage;
