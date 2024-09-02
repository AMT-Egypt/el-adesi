import { ServiceDataType } from "../../../types/typesData";

export type IncomeDataProps = {
  data: ServiceDataType
};
export default function IncomeData({ data }: IncomeDataProps) {
  const { MonthlyIncome, OtherSources, TotalIncome } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="title-data font-semibold">بيانات الدخل</p>
      <div className="personalData grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          الدخل الشهري : {MonthlyIncome}
        </p>
        <p>
          مصادر دخل اخري : {OtherSources}
        </p>
        <p>
          الاجمالي : {TotalIncome}
        </p>
      </div>
    </div>
  );
}
