/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import NavBarService from "../components/NavBarService";
import Carts from "../modules/details/Carts";
import { GetServiceData } from "../functions/apis/getServices";
// import { ServiceDataType } from "../types/typesData";
import { useSelector } from "react-redux";

// interface DataService {
//   id: number,
//   attributes: ServiceDataType,
// }


export default function Services() {
  const [data, setData] = useState<any[]>([]);
  const [myData, setAllData] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("")

  const userInfo = useSelector((state:any)=>state.userInfo)
  useEffect(()=>{
    GetServiceData({setData,setAllData, userInfo})
  },[userInfo])

  useEffect(() => {
      // console.log(search)
      const filteredData = myData?.filter(person => person.attributes.QuadNameProvided.includes(search));
      // console.log(filteredData)
      setData([...filteredData])
  }, [search])

  return (
    <div className="flex justify-center min-h-[81.5vh] py-6 bg-secondary">
      <div className="container flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center text-primary">الخدمات</h1>
        <NavBarService setFilter={setFilter} setSearch={setSearch} />
        <Carts allData={data} filter={filter} />
      </div>
    </div>
  );
}
