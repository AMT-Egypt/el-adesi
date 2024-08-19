/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProp {
    display: string;
    register:any;
    errors: any;
}

const Marriage = ({display,register,errors}:IProp) => {
    return (
        <div className={`${display==="Marriage"? "block" : "hidden"}`}>
            <h1>Marriage</h1>
        </div>
    );
}

export default Marriage;
