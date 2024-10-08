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
import { useSelector } from "react-redux"
import Spinner from "../Spinner"

const Illness = ({display}:{display:string}) => {
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
            Status:"المرض",
            areaCultivation:"",
            landArea:"",
            DescriptionOfAgriculturalLandInCaseOfCultivation:"اخري",
            DoesHeOwnAgriculturalProperty:false,
            IsAnyLandBeingCultivated:false,
            MonthlyIncome: +data.MonthlyIncome,
            OtherSources : +data.OtherSources,
            TotalIncome : +data.MonthlyIncome + +data.OtherSources,
            NumberOfChildren : +data.NumberOfChildren,
        }
        addItem(allData,userInfo,setLoading)
    }
    return (
        <div className={`${display==="illness"? "block" : "hidden"}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <PersonalInfo register={register} errors={errors}/>
                <MonthlyIcome register={register} errors={errors}/>
                <FamilyInfo register={register} errors={errors}/>
                <div className="mt-5">
                    <label htmlFor="caseData" className="font-semibold">بيانات الحاله المرضية</label><br />
                    <input type="text" {...register("caseData",{required:true})} id="caseData" className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10"/>
                    {errors.caseData?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل بيانات الحالة المرضية</p>}
                </div>
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

export default Illness;
