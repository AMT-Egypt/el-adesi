/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TableNeeds from "./TableNeeds";

const EstimatedBudget = ({setNeeds}:{setNeeds:any}) => {
    const [item,setItem] = useState("")
    const [number,setNumber] = useState("")
    const [unitPrice,setUnitPrice] = useState("")
    const [total,setTotal] = useState("")
    const [itemError,setItemError] = useState(false)
    const [numberError,setNumberError] = useState(false)
    const [unitError,setUnitError] = useState(false)
    const [totalError,setTatalError] = useState(false)
    const [AllData,setAll] = useState<any[]>([])

    const onsubmit = ()=>{
        if(item.length <= 0) {
            setItemError(true)
        }
        if(number.length <= 0) {
            setNumberError(true)
        }
        if(unitPrice.length <= 0) {
            setUnitError(true)
        }
        if(total.length <= 0) {
            setTatalError(true)
        }
        else{
            const data = {item,number,unitPrice,total}
            setAll(prev=>[...prev,data])
            const needsData = {
                item,
                number,
                PriceItem:unitPrice,
                Total:total
            }
            setNeeds((prev:any)=>[...prev,needsData])
        }
    }
    return (
        <div className="mt-5">
            <h1 className="font-semibold">الموازنه التقديرية للاحتياجات المطلوبة:</h1>
            <div className="mt-3">
                    <div className="flex flex-wrap gap-2 md:gap-6 mt-3">
                        <div>
                            <label htmlFor={"item"} className="text-primary">البند</label><br />
                            <input type={"text"} onChange={(e)=>
                                e.target.value.length > 0 ?
                                    (
                                        setItem(e.target.value),
                                        setItemError(false)
                                    )
                                    :setItemError(true)
                                
                                } id={"item"} className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                            {itemError && <p className="text-sm text-red-500">من فضلك ادخل البند</p>}
                        </div>
                        <div>
                            <label htmlFor={"number"} className="text-primary">العدد</label><br />
                            <input type={"number"} onChange={(e)=>
                                e.target.value.length > 0 ?
                                    (
                                        setNumber(e.target.value),
                                        setNumberError(false)
                                    )
                                    : setNumberError(true)
                                
                                } id={"number"} className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                            {numberError && <p className="text-sm text-red-500">من فضلك ادخل العدد</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-6 mt-3">
                        <div>
                            <label htmlFor={"unitPrice"} className="text-primary">سعر الوحدة</label><br />
                            <input type={"number"} onChange={(e)=>
                                e.target.value.length > 0 ?
                                    (
                                        setUnitPrice(e.target.value),
                                        setUnitError(false)
                                    )
                                    : setUnitError(true)
                                } id={"unitPrice"} className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                            {unitError && <p className="text-sm text-red-500">من فضلك ادخل سعر الوحدة</p>}
                        </div>
                        <div>
                            <label htmlFor={"totalA"} className="text-primary">الاجمالى</label><br />
                            <input type={"number"} onChange={(e)=>
                                e.target.value.length > 0?
                                    (
                                        setTotal(e.target.value),
                                        setTatalError(false)
                                    )
                                    : setTatalError(true)
                                } id={"totalA"} className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                            {totalError && <p className="text-sm text-red-500">من فضلك ادخل الاجمالى</p>}
                        </div>
                    </div>
                    <div className="flex justify-end w-[300px]">
                        <button type="button" onClick={()=>onsubmit()} className="px-3 mt-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600">حفظ</button>
                    </div>
            </div>
            <TableNeeds needs={AllData} />
        </div>
    );
}

export default EstimatedBudget;
