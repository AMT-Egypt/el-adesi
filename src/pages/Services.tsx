import { useEffect, useState } from "react";
import NavBarService from "../components/NavBarService";
import { fetchIllnessData } from "../functions/apis/getIllness";
import { fetchMarriageData } from "../functions/apis/getMarriage";
import Carts from "../modules/details/Carts";
import { illnessDataType, marriageDataType } from "../types/typesData";

export default function Services() {
  const [dataIllness, setDataIllness] = useState<illnessDataType[]>([])
  const [dataMarriage, setDataMarriage] = useState<marriageDataType[]>([])
  const [allData, setAllData] = useState<(illnessDataType | marriageDataType)[]>([])
  const [filter, setFilter] = useState<string>("all")
  const [search, setSearch] = useState<string>("")
  useEffect(() => {
    fetchIllnessData(setDataIllness)
    fetchMarriageData(setDataMarriage)
  }, [])
  useEffect(() => {
    setAllData([...dataIllness, ...dataMarriage])
  }, [dataIllness, dataMarriage])
  useEffect(() => {
    if (filter == "all") {
      setAllData([...dataIllness, ...dataMarriage])
    } else if (filter == "illness") {
      setAllData([...dataIllness])
    } else if (filter == "marriage") {
      setAllData([...dataMarriage])
    }
  }, [filter])
  useEffect(() => {
    if (search !== "") {
      const filteredData = allData.filter(person => person.fullName.includes(search));
      setAllData(filteredData)
    } else {
      if (filter == "all") {
        setAllData([...dataIllness, ...dataMarriage])
      } else if (filter == "illness") {
        setAllData([...dataIllness])
      } else if (filter == "marriage") {
        setAllData([...dataMarriage])
      }
    }
  }, [search])

  return (
    <div className="flex justify-center min-h-[81.5vh] py-6 bg-secondary">
      <div className="container flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center text-primary">الخدمات</h1>
        <NavBarService setFilter={setFilter} setSearch={setSearch} />
        <Carts allData={allData} />
      </div>
    </div>
  );
}
