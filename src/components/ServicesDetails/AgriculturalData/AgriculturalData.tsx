import { ServiceDataType } from "../../../types/typesData";

export type AgriculturalDataProps = {
  data: ServiceDataType
};
export default function AgriculturalData({ data }: AgriculturalDataProps) {
  const { DoesHeOwnAgriculturalProperty, landArea, IsAnyLandBeingCultivated, areaCultivation, DescriptionOfAgriculturalLandInCaseOfCultivation } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">بيانات الاراضي الزراعية</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        {
          DoesHeOwnAgriculturalProperty &&
          <p>
            مساحه الارض: {landArea}
          </p>
        }
        {
          IsAnyLandBeingCultivated &&
          <p>
            مساحه الزرع: {areaCultivation}
          </p>
        }
        <p>
          وصف الزرع : {DescriptionOfAgriculturalLandInCaseOfCultivation}
        </p>
      </div>
    </div>
  );
}
