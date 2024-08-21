import { useParams } from "react-router-dom";

const ServicesDetails = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
}

export default ServicesDetails;
