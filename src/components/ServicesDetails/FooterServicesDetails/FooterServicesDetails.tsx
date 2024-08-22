import { illnessDataType, marriageDataType } from "../../../types/typesData";

export type FooterServicesDetailsProps = {
  data: illnessDataType | marriageDataType
};
export default function FooterServicesDetails({ data }: FooterServicesDetailsProps,) {
  const { researcher, researcherOpinion } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p>
        راي الباحث : {researcherOpinion}
      </p>
      <div className="grid grid-cols-3 gap-3 font-medium">
        <div>
          <p>الباحث</p>
          <p>{researcher}</p>
        </div>
        <div>
          <p>المدير التنفيذي</p>
          <p>أحمد منصور حميد</p>
        </div>
        <div>
          <p>يعتمد رئيس مجلس الادارة</p>
          <p>أحمد منصور حميد</p>
        </div>
      </div>
    </div>
  );
}
