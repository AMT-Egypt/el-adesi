/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState } from "react";
import NavBarService from "../components/NavBarService";
import Carts from "../modules/details/Carts";
import { GetServiceData } from "../functions/apis/getServices";
import { ServiceDataType } from "../types/typesData";
import { useSelector } from "react-redux";

interface DataService {
  id: number,
  attributes: ServiceDataType,
}


export default function Services() {
  const [data, setData] = useState<ServiceDataType[]>([]);
  const [filter, setFilter] = useState<string>("الكل");
  const [search, setSearch] = useState<string>("")

  const userInfo = useSelector((state:any)=>state.userInfo)
  useEffect(()=>{
    GetServiceData({setData, userInfo, Status:filter})
  },[data, userInfo, filter])

  useEffect(() => {
    if (search !== "") {
      const filteredData = data.filter(person => person.QuadNameProvided.includes(search));
      setData(filteredData)
    }
  }, [search, data])

  return (
    <div className="flex justify-center min-h-[81.5vh] py-6 bg-secondary">
      <div className="container flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center text-primary">الخدمات</h1>
        <NavBarService setFilter={setFilter} setSearch={setSearch} />
        <Carts filter={filter} allData={data} />
      </div>
    </div>
  );
}
