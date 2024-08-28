import Cookie from 'cookie-universal';
import React, { SetStateAction } from "react";
import { ServiceDataType } from "../../types/typesData";
import { UserInfo } from "../../types/storeType";
import axios from 'axios';

interface propsInterface {
    setData: React.Dispatch<SetStateAction<ServiceDataType[]>>,
    userInfo: UserInfo
}

export const GetServiceData = async ({setData, userInfo}:propsInterface) => {
    const token = Cookie().get("token");
    try {
        const { data } = await axios.get(`https://simple-cyndi-ahmedmansour1234-967574d9.koyeb.app/api/services?populate=*&filters[users][username][$eq]=${userInfo.username}`,{
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        });
        
        setData(data.data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};