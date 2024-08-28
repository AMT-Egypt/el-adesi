import { useEffect, useState } from "react";
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
import { ServiceDataType } from "../types/typesData";

const ServicesDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState<ServiceDataType>()

    useEffect(() => {
        if (id) {
            fetchOneData(setData, id)
        }
    }, [id])

    return (
        <div className="flex justify-center min-h-[81.5vh] py-6 bg-secondary">
            <div className="container flex flex-col gap-8">
                <h1 className="text-2xl font-bold text-center text-primary">معلومات الحالة</h1>
                {data ?
                    <div className="w-full flex flex-col gap-8">
                        <PersonalData data={data.attributes} />
                        <IncomeData data={data.attributes} />
                        <FamilyData data={data.attributes} />
                        {data.attributes.Status == "المرض" ? <DiseaseDetails data={data.attributes} /> : <AgriculturalData data={data.attributes} />}
                        <HouseDescription data={data.attributes} />
                        <RequiredNeeds data={data.attributes} />
                        <FooterServicesDetails data={data.attributes} />
                    </div>
                    : null}
            </div>
        </div>
    );
}

export default ServicesDetails;
