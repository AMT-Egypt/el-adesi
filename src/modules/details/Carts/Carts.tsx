import { ServiceDataType } from "../../../types/typesData";
import OneCart from "../OneCart";

interface DataService {
  id: number,
  attributes: ServiceDataType,
}

export type CartsProps = {
  allData: DataService[]
};
export default function Carts({ allData }: CartsProps) {
  
  return (
    <div className="flex gap-3 w-full flex-wrap">
      {
        allData.length == 0 ?
          <p>
            من فضلك قم ب اضافه بعض الخدمات
          </p> :
          allData?.map(({ id, attributes }, index) => {
            return (
              <OneCart
                id={id}
                fullName={attributes?.QuadNameProvided}
                nationalID={attributes?.NationalNumberProvided}
                serviceType={attributes?.Status}
                key={index} />
            )
          })
      }
    </div>
  );
}
