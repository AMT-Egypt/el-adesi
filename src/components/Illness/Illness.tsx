/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { addItem } from "../../functions/apis/addItem"
import EstimatedBudget from "../Marriage/EstimatedBudget"
import FamilyInfo from "../Marriage/FamilyInfo"
import HouseAndNeeds from "../Marriage/HouseAndNeeds"
import MonthlyIcome from "../Marriage/MonthlyIcome"
import PersonalInfo from "../Marriage/PersonalInfo"
import Research from "../Marriage/Research"
import { useState } from "react"

const Illness = ({display}:{display:string}) => {
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
            Status:"المرض",
            areaCultivation:"",
            landArea:"",
            DescriptionOfAgriculturalLandInCaseOfCultivation:"",
            DoesHeOwnAgriculturalProperty:false,
            IsAnyLandBeingCultivated:false,
            MonthlyIncome: +data.MonthlyIncome,
            OtherSources : +data.OtherSources,
            TotalIncome : +data.TotalIncome,
            NumberOfChildren : +data.NumberOfChildren,
            NationalNumberImage:image[0]
        }
        console.log(allData)
        addItem(allData)
    }
    return (
        <div className={`${display==="illness"? "block" : "hidden"}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <PersonalInfo register={register} errors={errors} errorImage={errorImage} setErrorImage={setErrorImage} image={image} setImage={setImage}/>
                <MonthlyIcome register={register} errors={errors}/>
                <FamilyInfo register={register} errors={errors}/>
                <div className="mt-5">
                    <label htmlFor="caseData" className="font-semibold">بيانات الحاله المرضية</label><br />
                    <input type="text" {...register("caseData",{required:true})} id="caseData" className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10"/>
                    {errors.caseData?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل بيانات الحالة المرضية</p>}
                </div>
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

export default Illness;
