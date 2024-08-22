import React, { SetStateAction } from "react";
import { marriageDataType } from "../../types/typesData";

export const fetchMarriageData = async (setData: React.Dispatch<SetStateAction<marriageDataType[]>>) => {
    try {
        const response = await fetch('https://json-server-jade-two.vercel.app/marriage');

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: marriageDataType[] = await response.json();
        setData(data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};