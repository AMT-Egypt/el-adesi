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
    const [image, setImage] = useState<any | null>("")
    const [errorImage, setErrorImage] = useState<boolean>(false)
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (data:any)=>{
        const Needs = allNeeds.map((ele)=>(
            {
                item : ele.item,
                number : +ele.number,
                PriceItem : +ele.PriceItem,
                Total : +ele.Total,
            }
        ))
        if(!image){
            setErrorImage(true)
            return
        }
        const allData = {
            ...data,
            Items:Needs,
            caseData : null,
            DoesHeOwnAgriculturalProperty:data.DoesHeOwnAgriculturalProperty==="true" ? true : false,
            IsAnyLandBeingCultivated:data.IsAnyLandBeingCultivated==="true" ? true : false,
            MonthlyIncome: +data.MonthlyIncome,
            OtherSources : +data.OtherSources,
            TotalIncome : +data.TotalIncome,
            NumberOfChildren : +data.NumberOfChildren,
            NationalNumberImage:image[0],
            Status:"الزواج",
        }
        console.log(allData)
        addItem(allData)
    }
    return (
        <div className={`${display==="marriage"? "block" : "hidden"}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInfo register={register} errors={errors} errorImage={errorImage} setErrorImage={setErrorImage} image={image} setImage={setImage}/>
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
