import { illnessDataType, marriageDataType } from "../../../types/typesData";

export type PersonalDataProps = {
  data: illnessDataType | marriageDataType
};
export default function PersonalData({ data }: PersonalDataProps) {
  const { fullName, nationalID, date, address, phoneNumber, familyName, jop } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">البيانات الشخصيه</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          الاسم : {fullName}
        </p>
        <p>
          الرقم القومي : {nationalID}
        </p>
        <p>
          تاريخ تقديم الطلب : {date}
        </p>
        <p>
          العنوان بالتفصيل : {address}
        </p>
        <p>
          رقم الموبايل : {phoneNumber}
        </p>
        <p>
          اسم عائل الاسره : {familyName}
        </p>
        <p>
          الوظيفة : {jop}
        </p>
      </div>
    </div>
  );
}
