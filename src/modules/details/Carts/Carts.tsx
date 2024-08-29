/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ServiceDataType } from "../../../types/typesData";
import OneCart from "../OneCart";

// interface DataService {
//   id: number,
//   attributes: ServiceDataType,
// }

export type CartsProps = {
  allData: any[],
  filter:string
};
export default function Carts({ allData,filter }: CartsProps) {
  // console.log(allData);
  return (
    <div className="flex gap-3 w-full flex-wrap">
      {
        allData.length == 0 ?
          <p>
            من فضلك قم ب اضافه بعض الخدمات
          </p> :
          allData?.map(({ id, attributes }, index) => (
            attributes.Status.includes(filter) ? 
              <OneCart
                id={id}
                fullName={attributes?.QuadNameProvided}
                nationalID={attributes?.NationalNumberProvided}
                serviceType={attributes?.Status}
                key={index} />
            : null
          ))
      }
    </div>
  );
}
