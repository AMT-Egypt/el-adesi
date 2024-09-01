/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from "react";

const TableNeeds = ({needs,setAll}:{needs:any[],setAll:React.Dispatch<React.SetStateAction<any[]>>}) => {
    
    const sum = useMemo(()=>{
        let total = 0
        needs.forEach(need => {
            total += +need.Total
        })
        return total
    },[needs])
    
    const deleteItem = (id:number)=>{
        const data = needs.filter((_item,index)=>index!==+id )
        // console.log(data)
        setAll([...data])
    }
    return (
        <div>
            {
                needs.length > 0 ?
                <div className="mt-3">
                    <div className="overflow-x-scroll sm:overflow-auto">
                        <table className="w-[600px]">
                            <thead>
                                <tr className="bg-yellow-500 text-fives">
                                    <th className="border border-primary p-2">م</th>
                                    <th className="border border-primary p-2">البند</th>
                                    <th className="border border-primary p-2">الوحدة</th>
                                    <th className="border border-primary p-2">العدد</th>
                                    <th className="border border-primary p-2">سعر الوحدة</th>
                                    <th className="border border-primary p-2">الاجمالى</th>
                                    <th className="border border-primary p-2">الحدث</th>
                                </tr>
                            </thead>
                            <tbody>
                                {needs.map((need, index) => (
                                    <tr className="odd:bg-third even:bg-fourth text-fives" key={index}>
                                        <td className="border text-center border-primary p-2">{index + 1}</td>
                                        <td className="border text-center border-primary p-2">{need.item}</td>
                                        <td className="border text-center border-primary p-2">بالعدد</td>
                                        <td className="border text-center border-primary p-2">{need.number}</td>
                                        <td className="border text-center border-primary p-2">{need.PriceItem}</td>
                                        <td className="border text-center border-primary p-2">{need.Total}</td>
                                        <td className="border text-center border-primary p-2">
                                            <button type="button" onClick={()=>deleteItem(index)} className="p-1 px-2 bg-red-500 text-white rounded-md">حذف</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-3 text-end font-semibold w-[300px]">الاجمالى : {sum} جنيه</p>
                </div>
                :null
            }
        </div>
    );
}

export default TableNeeds;
