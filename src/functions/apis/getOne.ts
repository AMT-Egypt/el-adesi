import React, { SetStateAction } from "react";
import { illnessDataType, marriageDataType } from "../../types/typesData";

export const fetchOneData = async (setData: React.Dispatch<SetStateAction<illnessDataType & marriageDataType | undefined>>, id: string, serviceType: string) => {
    try {
        const response = await fetch(`https://json-server-jade-two.vercel.app/${serviceType}/${id}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: illnessDataType & marriageDataType = await response.json();
        setData(data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};