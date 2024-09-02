import { ServiceDataType } from "../../../types/typesData";

export type FamilyDataProps = {
  data: ServiceDataType
};
export default function FamilyData({ data }: FamilyDataProps) {
  const { husbandFamily, NationalNumberFamily, NumberOfChildren } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="title-data font-semibold">بيانات الاسرة</p>
      <div className="personalData grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          اسم الزوجه : {husbandFamily}
        </p>
        <p>
          رقم القومي الخاص بالزوجه : {NationalNumberFamily}
        </p>
        <p>
          عدد الابناء : {NumberOfChildren}
        </p>
      </div>
    </div>
  );
}
