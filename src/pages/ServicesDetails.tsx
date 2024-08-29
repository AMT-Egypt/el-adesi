/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
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
// import { ServiceDataType } from "../types/typesData";

// interface DataService {
//     id: number,
//     attributes: ServiceDataType,
// }

const ServicesDetails = () => {
    const { id } = useParams()
    const [data, setData] = useState<any>();
    const printRef = useRef<any>();
    const handlePrint = () => {
        const printContent = printRef.current;
        const windowToPrint = window.open('', '_blank');
        windowToPrint?.document.write(`
            <html>
            <head>
                <title>Print</title>
                <style>
                .footerService{
                display: flex
                }
                </style>
            </head>
            <body dir="rtl">
                ${printContent?.innerHTML}
            </body>
            </html>
        `);
        windowToPrint?.document.close();
        windowToPrint?.focus();
        windowToPrint?.print();
        windowToPrint?.close();
    }

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
                    <div ref={printRef} className="w-full flex flex-col gap-8">
                        <PersonalData data={data.attributes} />
                        <IncomeData data={data.attributes} />
                        <FamilyData data={data.attributes} />
                        {data.attributes.Status == "المرض" ? <DiseaseDetails data={data.attributes} /> : <AgriculturalData data={data.attributes} />}
                        <HouseDescription data={data.attributes} />
                        <RequiredNeeds data={data.attributes} />
                        <FooterServicesDetails data={data.attributes} />
                    </div>
                    : null
                }

                {
                    data &&
                    <button onClick={handlePrint} className="bg-primary text-white py-2 rounded mt-5">اطبع الحالة</button>
                }
            </div>
        </div>
    );
}

export default ServicesDetails;
