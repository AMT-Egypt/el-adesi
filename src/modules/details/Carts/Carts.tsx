import { illnessDataType, marriageDataType } from "../../../types/typesData";
import OneCart from "../OneCart";

export type CartsProps = {
  allData: (illnessDataType | marriageDataType)[]
};
export default function Carts({ allData }: CartsProps) {
  return (
    <div className="flex gap-3 w-full flex-wrap">
      {
        allData.length == 0 ?
          <p>
            من فضلك قم ب اضافه بعض الخدمات
          </p> :
          allData.map(({ fullName, nationalID, serviceType }, index) => {
            return (
              <OneCart
                fullName={fullName}
                nationalID={nationalID}
                serviceType={serviceType}
                key={index} />
            )
          })
      }
    </div>
  );
}
