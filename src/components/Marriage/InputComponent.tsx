import { FieldValues, UseFormRegister } from "react-hook-form";

interface IProps {
    register: UseFormRegister<FieldValues>
    nameInput: string;
    type:string;
    contact:string;
    regName:string;
    minLength?:number;
    maxLength?:number;
};

const InputComponent = ({register,nameInput,type,contact,regName,minLength,maxLength}:IProps) => {
    return (
        <div>
            <label htmlFor={contact} className="text-primary">{nameInput}</label><br />
            <input type={type} {...register(regName, { required: true ,minLength, maxLength })} id={contact} className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
        </div>
    );
}

export default InputComponent;
