import { ServiceDataType } from "../../../types/typesData";

export type DiseaseDetailsProps = {
  data: ServiceDataType
};
export default function DiseaseDetails({ data }: DiseaseDetailsProps) {
  const { caseData } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="title-data font-semibold">بيانات المرض</p>
      <div className="personalData grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          بيانات الحاله المرضيه : {caseData}
        </p>
      </div>
    </div>
  );
}
