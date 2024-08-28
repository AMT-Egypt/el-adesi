import React, { SetStateAction } from "react";

export type NavBarServiceProps = {
  setFilter: React.Dispatch<SetStateAction<string>>
  setSearch: React.Dispatch<SetStateAction<string>>
};
export default function NavBarService({ setFilter, setSearch }: NavBarServiceProps) {
  return (
    <div
      className="flex justify-between"
    >
      <input
        type="text"
        placeholder="أبحث"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded-md border border-solid border-gray-50" />
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2"
        onChange={(e) => setFilter(e.target.value)}
        defaultValue="الكل"
      >
        <option value="الكل">الكل</option>
        <option value="المرض">المرض</option>
        <option value="الزواج">الزواج</option>
      </select>
    </div>
  );
}
