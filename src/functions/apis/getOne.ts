import React, { SetStateAction } from "react";
import { ServiceDataType } from "../../types/typesData";

export const fetchOneData = async (setData: React.Dispatch<SetStateAction<ServiceDataType | undefined>>, id: string, serviceType: string) => {
    try {
        const response = await fetch(`https://json-server-jade-two.vercel.app/${serviceType}/${id}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: ServiceDataType = await response.json();
        setData(data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};