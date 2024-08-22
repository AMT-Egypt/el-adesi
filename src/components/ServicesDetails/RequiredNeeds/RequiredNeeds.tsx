import { illnessDataType, marriageDataType } from "../../../types/typesData";

export type RequiredNeedsProps = {
  data: illnessDataType | marriageDataType
};
export default function RequiredNeeds({ data }: RequiredNeedsProps) {
  const { requiredNeeds, estimatedBudget } = data
  const totalSum = estimatedBudget.reduce((acc, curr) => acc + +curr.total, 0);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">الاحتياجات المطلوبة</p>
      <div className="grid grid-cols-1 gap-y-1">
        <p>
          الوصف : {requiredNeeds}
        </p>
      </div>
      <p className="font-semibold">
        المتطلبات
      </p>
      <ul>
        {
          estimatedBudget.map(({ item, number, total, unitPrice }, index) => {
            return (
              <li key={index}>
                تريد عدد {number} من {item} سعر الواحده منه {unitPrice} فيكون السعر الاجمالي {total}
              </li>
            )
          })
        }
      </ul>
      <p>
        سعر السهم {+totalSum} سعر نصف السهم {+totalSum / 2} سعر ربع السهم {+totalSum / 4}
      </p>
    </div>
  );
}
