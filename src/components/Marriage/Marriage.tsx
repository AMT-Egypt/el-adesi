/* eslint-disable @typescript-eslint/no-explicit-any */
import PersonalInfo from "./PersonalInfo";

interface IProp {
    display: string;
    register:any;
    errors: any;
}

const Marriage = ({display,register,errors}:IProp) => {
    return (
        <div className={`${display==="Marriage"? "block" : "hidden"}`}>
            <PersonalInfo register={register} errors={errors}/>
        </div>
    );
}

export default Marriage;
