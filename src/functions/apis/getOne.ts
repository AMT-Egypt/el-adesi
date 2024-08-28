import Cookie from 'cookie-universal';
import React, { SetStateAction } from "react";
import { ServiceDataType } from "../../types/typesData";
import axios from "axios";

export const fetchOneData = async (setData: React.Dispatch<SetStateAction<ServiceDataType | undefined>>, id: string) => {
    const token = Cookie().get("token");
    try {
        const { data } = await axios.get(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/services/${id}?populate=*`,{
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        });

        setData(data.data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};