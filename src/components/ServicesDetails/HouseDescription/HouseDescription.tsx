import { ServiceDataType } from "../../../types/typesData";

export type HouseDescriptionProps = {
  data: ServiceDataType
};
export default function HouseDescription({ data }: HouseDescriptionProps) {
  const { descHouse } = data
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-semibold">وصف السكن</p>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-y-1">
        <p>
          وصف عام للمنزل : {descHouse}
        </p>
      </div>
    </div>
  );
}
