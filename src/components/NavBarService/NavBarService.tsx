import React, { SetStateAction } from "react";

export type NavBarServiceProps = {
  setFilter: React.Dispatch<SetStateAction<string>>
  setSearch: React.Dispatch<SetStateAction<string>>
};
export default function NavBarService({ setFilter, setSearch }: NavBarServiceProps) {
  return (
    <div
      className="flex justify-between gap-5"
    >
      <input
        type="text"
        placeholder="ادخل كلمة البحث"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 focus:border-primary border-2 focus:outline-none transition-all rounded-md px-5 border-solid border-gray-300 w-full" />
      <select
        id="countries"
        className="bg-gray-50 focus:border-primary border-2 focus:outline-none border-gray-300 w-49 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block  p-2 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setFilter(e.target.value)}
        defaultValue="الكل"
      >
        <option value="">الكل</option>
        <option value="المرض">المرض</option>
        <option value="الزواج">الزواج</option>
      </select>
    </div>
  );
}
