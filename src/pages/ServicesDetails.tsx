import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AgriculturalData from "../components/ServicesDetails/AgriculturalData";
import DiseaseDetails from "../components/ServicesDetails/DiseaseDetails";
import FamilyData from "../components/ServicesDetails/FamilyData";
import FooterServicesDetails from "../components/ServicesDetails/FooterServicesDetails";
import HouseDescription from "../components/ServicesDetails/HouseDescription";
import IncomeData from "../components/ServicesDetails/IncomeData";
import PersonalData from "../components/ServicesDetails/PersonalData";
import RequiredNeeds from "../components/ServicesDetails/RequiredNeeds";
import { fetchOneData } from "../functions/apis/getOne";
import { typeState } from "../types/storeType";
import { illnessDataType, marriageDataType } from "../types/typesData";

const ServicesDetails = () => {
    const { id } = useParams()
    const typeService = useSelector((state: typeState) => state.user.typeService)
    const [data, setData] = useState<illnessDataType & marriageDataType>()

    useEffect(() => {
        if (id) {
            fetchOneData(setData, id, typeService)
        }
    }, [])

    return (
        <div className="flex justify-center min-h-[81.5vh] py-6 bg-secondary">
            <div className="container flex flex-col gap-8">
                <h1 className="text-2xl font-bold text-center text-primary">معلومات الحالة</h1>
                {data ?
                    <div className="w-full flex flex-col gap-8">
                        <PersonalData data={data} />
                        <IncomeData data={data} />
                        <FamilyData data={data} />
                        {data.serviceType == "illness" ? <DiseaseDetails data={data} /> : <AgriculturalData data={data} />}
                        <HouseDescription data={data} />
                        <RequiredNeeds data={data} />
                        <FooterServicesDetails data={data} />
                    </div>
                    : null}
            </div>
        </div>
    );
}

export default ServicesDetails;
