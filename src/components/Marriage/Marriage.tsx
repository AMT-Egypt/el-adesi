
interface IProp {
    display: string;
    // register:any;
    // errors: any;
}

const Marriage = ({display}:IProp) => {
    return (
        <div className={`${display==="Marriage"? "block" : "hidden"}`}>
            <h1>Marriage</h1>
        </div>
    );
}

export default Marriage;
