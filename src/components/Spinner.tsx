const Spinner = ({color}:{color:string}) => {
    return (
        <span className={`w-5 h-5 inline-block border border-${color} border-l-gray-500 rounded-full animate-spin`}></span>
    );
}

export default Spinner;
