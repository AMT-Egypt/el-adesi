export type OneCartProps = {
  fullName: string,
  nationalID: string
  serviceType: "illness" | "marriage"
};
export default function OneCart({ fullName, nationalID, serviceType }: OneCartProps) {
  return (
    <div className="bg-fourth min-w-fit rounded-xl p-4 flex flex-col gap-2">
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
    </div>
  );
}
