import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type InputPasswordProps = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
};

export default function InputPassword({ register, errors }: InputPasswordProps) {
  return (
    <div className="my-3">
      <label htmlFor="password" className="text-secondary">كلمة المرور</label>
      <input type="password" {...register("password", { required: true })} id="password" name="password" className="w-full p-2 mt-2 border rounded-md outline-none" />
      {errors.password?.type === "required" && <p className="text-sm text-red-500">من فضلك ادخل كلمة المرور</p>}
    </div>
  );
}
