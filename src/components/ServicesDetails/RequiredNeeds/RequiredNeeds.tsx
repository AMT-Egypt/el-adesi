import { ServiceDataType } from "../../../types/typesData";

export type RequiredNeedsProps = {
  data: ServiceDataType
};
export default function RequiredNeeds({ data }: RequiredNeedsProps) {
  const { Requirements, Items } = data;
  const totalSum = Items.reduce((acc, curr) => acc + +curr.Total, 0);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="title-data font-semibold">الاحتياجات المطلوبة</p>
      <div className="personalData grid grid-cols-1 gap-y-1">
        <p>
          الوصف : {Requirements}
        </p>
      </div>
      <p className="title-data font-semibold">
        المتطلبات
      </p>
      <ul>
        {
          Items.map(({ item, number, Total, PriceItem }, index) => {
            return (
              <li key={index}>
                تريد عدد {number} من {item} سعر الواحده منه {PriceItem} فيكون السعر الاجمالي {Total}
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
