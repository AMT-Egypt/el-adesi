import { useEffect, useState } from "react";
import NavBarService from "../components/NavBarService";
import Carts from "../modules/details/Carts";
import { GetServiceData } from "../functions/apis/getServices";
import { ServiceDataType } from "../types/typesData";

export default function Services() {
  const [data, setData] = useState<ServiceDataType[]>([])
  const setFilter = ()=>{}
  const setSearch = ()=>{}
  useEffect(()=>{
    GetServiceData(setData)
  })
  return (
    <div className="flex justify-center min-h-[81.5vh] py-6 bg-secondary">
      <div className="container flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center text-primary">الخدمات</h1>
        <NavBarService setFilter={setFilter} setSearch={setSearch} />
        <Carts allData={data} />
        Test
      </div>
    </div>
  );
}
