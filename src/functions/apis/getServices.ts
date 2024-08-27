import React, { SetStateAction } from "react";
import { ServiceDataType } from "../../types/typesData";

export const GetServiceData = async (setData: React.Dispatch<SetStateAction<ServiceDataType[]>>) => {
    try {
        const response = await fetch("https://grotesque-gerianna-msafa-9bf726f7.koyeb.app/api/services?populate=*&filters[users][username][$eq]=admin");

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data: ServiceDataType[] = await response.json();
        setData(data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};