import { ServiceDataType } from "../../../types/typesData";

export type FooterServicesDetailsProps = {
  data: ServiceDataType
};
export default function FooterServicesDetails({ data }: FooterServicesDetailsProps,) {
  const { Researcher, ResearcherSaw } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p>
        راي الباحث : {ResearcherSaw}
      </p>
      <div className="grid grid-cols-3 gap-3 font-medium">
        <div>
          <p>الباحث</p>
          <p>{Researcher}</p>
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
