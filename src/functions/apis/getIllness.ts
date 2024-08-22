import React, { SetStateAction } from "react";
import { illnessDataType } from "../../types/typesData";

export const fetchIllnessData = async (setData: React.Dispatch<SetStateAction<illnessDataType[]>>) => {
    try {
        const response = await fetch('https://json-server-jade-two.vercel.app/illness');

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: illnessDataType[] = await response.json();
        setData(data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};