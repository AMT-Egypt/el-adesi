import { illnessDataType, marriageDataType } from "../../../types/typesData";

export type DiseaseDetailsProps = {
  data: illnessDataType & marriageDataType
};
export default function DiseaseDetails({ data }: DiseaseDetailsProps) {
  const { caseData } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">بيانات المرض</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          بيانات الحاله المرضيه : {caseData}
        </p>
      </div>
    </div>
  );
}
