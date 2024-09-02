import { ServiceDataType } from "../../../types/typesData";

export type PersonalDataProps = {
  data: ServiceDataType
};
export default function PersonalData({ data }: PersonalDataProps) {
  const { QuadNameProvided, NationalNumberProvided, SubmissionDate, AdressProvided, phoneNumberProvided, BreadwinnerNameProvided, WorkProvided } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="title-data font-semibold">البيانات الشخصيه</p>
      <div className="personalData grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          الاسم : {QuadNameProvided}
        </p>
        <p>
          الرقم القومي : {NationalNumberProvided}
        </p>
        <p>
          تاريخ تقديم الطلب : {SubmissionDate}
        </p>
        <p>
          العنوان بالتفصيل : {AdressProvided}
        </p>
        <p>
          رقم الموبايل : {phoneNumberProvided}
        </p>
        <p>
          اسم عائل الاسره : {BreadwinnerNameProvided}
        </p>
        <p>
          الوظيفة : {WorkProvided}
        </p>
      </div>
    </div>
  );
}
