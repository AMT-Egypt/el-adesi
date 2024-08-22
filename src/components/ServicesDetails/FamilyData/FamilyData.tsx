import { illnessDataType, marriageDataType } from "../../../types/typesData";

export type FamilyDataProps = {
  data: illnessDataType | marriageDataType
};
export default function FamilyData({ data }: FamilyDataProps) {
  const { wifeName, wifeNationalID, numberChildren } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">بيانات الاسرة</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          اسم الزوجه : {wifeName}
        </p>
        <p>
          رقم القومي الخاص بالزوجه : {wifeNationalID}
        </p>
        <p>
          عدد الابناء : {numberChildren}
        </p>
      </div>
    </div>
  );
}
