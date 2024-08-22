import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTypeService } from "../../../store/user/userSlice";

export type OneCartProps = {
  fullName: string,
  nationalID: string,
  serviceType: "illness" | "marriage",
  id: string
};
export default function OneCart({ fullName, nationalID, serviceType, id }: OneCartProps) {
  const dispatch = useDispatch()
  return (
    <Link
      onClick={() => dispatch(setTypeService(serviceType))}
      to={`/main/servicesDetails/${id}`}
      className="bg-fourth min-w-fit rounded-xl p-4 flex flex-col gap-2">
      <p className="font-bold text-lg">
        {fullName}
      </p>
      <div className=" flex flex-col gap-0">
        <p>
          {nationalID}
        </p>
        <p>
          {serviceType == "illness" ? "مرض" : "زواج"}
        </p>
      </div>
    </Link>
  );
}
