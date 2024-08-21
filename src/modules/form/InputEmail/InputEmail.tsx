import { InputPasswordProps } from "../InputPassword/InputPassword";

export default function InputEmail({ errors, register }: InputPasswordProps) {
  return (
    <div>
      <label htmlFor="email" className="text-secondary">الايميل</label>
      <input type="email" {...register("email", { required: true })} id="email" name="email" className="w-full p-2 mt-2 border rounded-md outline-none" />
      {errors.email?.type === "required" && <p className="text-sm text-red-500">من فضلك ادخل الايميل</p>}
    </div>
  );
}
