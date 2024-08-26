import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IProp {
    register:UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const LandInfo = ({register,errors}:IProp) => {
    const [land,setLand] = useState("false")
    const [landClut,setLandClut] = useState("false")
    return (
        <div className="mt-5">
            <h1 className="font-semibold">بيانات الأراضي الزراعية</h1>
            <div className="flex flex-wrap gap-2 md:gap-6 mt-3">
                <div className="w-[300px]">
                    <h3 className="text-primary text-base">هل يمتلك حيازه زراعية؟</h3>
                    <div>
                        <div className="flex items-center gap-1">
                            <input value={"true"} onInput={()=>setLand("true")} {...register("DoesHeOwnAgriculturalProperty", { required: true })} type="radio" name="DoesHeOwnAgriculturalProperty" id="yes" />
                            <label htmlFor="yes">نعم</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input value={"false"}  onInput={()=>setLand("false")} {...register("DoesHeOwnAgriculturalProperty", { required: true })} type="radio" name="DoesHeOwnAgriculturalProperty" id="no" />
                            <label htmlFor="no">لا</label>
                        </div>
                    </div>
                    {errors.DoesHeOwnAgriculturalProperty?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل هل يمتلك حيازه زراعية؟</p>}
                </div>
                <div className={`${land==="true" ? "block" : "hidden"}`}>
                    <label htmlFor="landArea" className="text-primary">ما مساحه الارض ؟</label><br />
                    <input type="text" {...register("landArea", { required: land==="true" ? true : false})} id="landArea" className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                    {errors.landArea?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل ما مساحه الأرض؟</p>}
                </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-6 mt-3">
                <div className="w-[300px]">
                    <h3 className="text-primary text-base">هل يتم زراعة ايه اراضى؟</h3>
                    <div>
                        <div className="flex items-center gap-1">
                            <input value={"true"} onInput={()=>setLandClut("true")} {...register("IsAnyLandBeingCultivated", { required: true })} type="radio" name="IsAnyLandBeingCultivated" id="yesLand" />
                            <label htmlFor="yesLand">نعم</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input value={"false"}  onInput={()=>setLandClut("false")} {...register("IsAnyLandBeingCultivated", { required: true })} type="radio" name="IsAnyLandBeingCultivated" id="noLand" />
                            <label htmlFor="noLand">لا</label>
                        </div>
                    </div>
                    {errors.IsAnyLandBeingCultivated?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل هل يتم زراعة ايه اراضى؟</p>}
                </div>
                <div className={`${landClut==="true" ? "block" : "hidden"}`}>
                    <label htmlFor="areaCultivation" className="text-primary">ما مساحه الارض ؟</label><br />
                    <input type="text" {...register("areaCultivation", { required: landClut==="true" ? true : false})} id="areaCultivation" className="mt-1 outline-none w-[300px] border px-3 rounded-md h-10" />
                    {errors.areaCultivation?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل ما مساحه الأرض؟</p>}
                </div>
            </div>
            <div className="mt-3">
                <div className="w-[300px]">
                    <h3 className="text-primary text-base">وصف الأرض الزراعية في حال الزراعه</h3>
                    <div>
                        <div className="flex items-center gap-1">
                            <input value={"ايجار"} {...register("DescriptionOfAgriculturalLandInCaseOfCultivation", { required: true })} type="radio" name="DescriptionOfAgriculturalLandInCaseOfCultivation" id="yesDes" />
                            <label htmlFor="yesDes">ايجار</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input value={"رهن"} {...register("DescriptionOfAgriculturalLandInCaseOfCultivation", { required: true })} type="radio" name="DescriptionOfAgriculturalLandInCaseOfCultivation" id="noDes" />
                            <label htmlFor="noDes">رهن</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input value={"اخري"} {...register("DescriptionOfAgriculturalLandInCaseOfCultivation", { required: true })} type="radio" name="DescriptionOfAgriculturalLandInCaseOfCultivation" id="antDes" />
                            <label htmlFor="antDes">اخري</label>
                        </div>
                    </div>
                    {errors.DescriptionOfAgriculturalLandInCaseOfCultivation?.type==="required" && <p className="text-sm text-red-500">من فضلك ادخل وصف الأرض الزراعية في حال الزراعه</p>}
                </div>
            </div>
        </div>
    );
}

export default LandInfo;
