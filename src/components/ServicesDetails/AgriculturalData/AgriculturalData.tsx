import { illnessDataType, marriageDataType } from "../../../types/typesData";

export type AgriculturalDataProps = {
  data: illnessDataType & marriageDataType
};
export default function AgriculturalData({ data }: AgriculturalDataProps) {
  const { agriculturalHolding, landArea, landCultivation, areaCultivation, landDescription } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">بيانات الاراضي الزراعية</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        {
          agriculturalHolding &&
          <p>
            مساحه الارض: {landArea}
          </p>
        }
        {
          landCultivation &&
          <p>
            مساحه الزرع: {areaCultivation}
          </p>
        }
        <p>
          وصف الزرع : {landDescription}
        </p>
      </div>
    </div>
  );
}
