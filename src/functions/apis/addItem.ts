/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

type Services = "illness" | "marriage"

export const addItem = (serviceType: Services,data:any) => {
    axios.post(`https://json-server-jade-two.vercel.app/${serviceType}`,{...data})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}
