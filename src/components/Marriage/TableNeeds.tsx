/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMemo } from "react";

const TableNeeds = ({needs}:{needs:any[]}) => {
    
    const sum = useMemo(()=>{
        let total = 0
        needs.forEach(need => {
            total += +need.total
        })
        return total
    },[needs])
    
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
                                </tr>
                            </thead>
                            <tbody>
                                {needs.map((need, index) => (
                                    <tr className="odd:bg-third even:bg-fourth text-fives" key={index}>
                                        <td className="border text-center border-primary p-2">{index + 1}</td>
                                        <td className="border text-center border-primary p-2">{need.item}</td>
                                        <td className="border text-center border-primary p-2">بالعدد</td>
                                        <td className="border text-center border-primary p-2">{need.number}</td>
                                        <td className="border text-center border-primary p-2">{need.unitPrice}</td>
                                        <td className="border text-center border-primary p-2">{need.total}</td>
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
