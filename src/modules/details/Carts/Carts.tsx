import { ServiceDataType } from "../../../types/typesData";
import OneCart from "../OneCart";

export type CartsProps = {
  allData: (ServiceDataType)[]
};
export default function Carts({ allData }: CartsProps) {
  return (
    <div className="flex gap-3 w-full flex-wrap">
      {
        allData.length == 0 ?
          <p>
            من فضلك قم ب اضافه بعض الخدمات
          </p> :
          allData.map(({ QuadNameProvided, NationalNumberProvided, Status }, index) => {
            return (
              <OneCart
                id={id}
                fullName={QuadNameProvided}
                nationalID={NationalNumberProvided}
                serviceType={Status}
                key={index} />
            )
          })
      }
    </div>
  );
}
