import { ServiceDataType } from "../../../types/typesData";

export type FooterServicesDetailsProps = {
  data: ServiceDataType
};
export default function FooterServicesDetails({ data }: FooterServicesDetailsProps,) {
  const { Researcher, ResearcherSaw } = data
  return (
    <div className="w-full flex flex-col">
      <p className="w-full block">
        راي الباحث : {ResearcherSaw}
      </p>
      <div className="footerService grid grid-cols-1 lg:grid-cols-3 mt-5 bg-primary text-white rounded-md p-7 gap-3 font-medium">
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
