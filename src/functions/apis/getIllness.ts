import { illnessDataType } from "../../types/typesData";

export const fetchIllnessData = async (userName: string, token: string) => {
    try {
        // setData: React.Dispatch<SetStateAction<illnessDataType[]>>,
        const response = await fetch(`https://grotesque-gerianna-msafa-9bf726f7.koyeb.app/api/services?populate=*&filters[users][username][$eq]=${userName}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: illnessDataType[] = await response.json();
        console.log(data);  // You can handle the data here
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};