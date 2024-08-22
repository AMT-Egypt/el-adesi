import { illnessDataType, marriageDataType } from "../../../types/typesData";

export type IncomeDataProps = {
  data: illnessDataType | marriageDataType
};
export default function IncomeData({ data }: IncomeDataProps) {
  const { monthlyIncome, anotherSource, total } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">بيانات الدخل</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          الدخل الشهري : {monthlyIncome}
        </p>
        <p>
          مصادر دخل اخري : {anotherSource}
        </p>
        <p>
          الاجمالي : {total}
        </p>
      </div>
    </div>
  );
}
