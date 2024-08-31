import { useState } from "react";
import Marriage from "./Marriage/Marriage";
import Illness from "./Illness/Illness";

const Froms = () => {
    const [display,setDisplay] = useState("none")
    // const [allNeeds, setNeeds] = useState<any[]>([])
    // const {register,handleSubmit,formState:{errors}} = useForm()
    // const onSubmit = (data:any)=>{
    //     addItem(data.serveiceType,{...data,estimatedBudget:allNeeds})
    // }
    return (
        <div className="flex justify-center min-h-[81.5vh] py-6 bg-secondary">
            <div className="container">
                <h1 className="text-2xl font-bold text-center text-primary">اختار خدمة</h1>
                <form className="mt-3">
                    <div>
                        <label htmlFor="kind" className="text-primary">نوع الخدمة</label><br/>
                        <select name="serveiceType" onChange={(e)=>setDisplay(e.target.value)} className="w-[300px] border px-3 outline-none rounded h-10 mt-2" id="kind">
                            <option value="none">اختار خدمة</option>
                            <option value="marriage">الزواج</option>
                            <option value="illness">المرض</option>
                        </select>
                    </div>
                    <h1 className={`${display==='none' ? 'block' : 'hidden'} mt-10 text-xl font-semibold text-center text-primary`}>من فضلك اختار خدمة</h1>
                </form>
                <Marriage display={display}/>
                <Illness display={display}/>
            </div>
        </div>
    );
}

export default Froms;
