import { SearchInput } from "@/components/ui/Search";
import React from "react";

export default function Products() {
  return (
    <div className="px-6">
      <header>
        <div className="py-6 ">
          <h1 className="text-3xl font-bold capitalize">Product Inventory</h1>
          <p className="text-sm text-gray-500">
            Manage and track your global product listings and SKUs.
          </p>
        </div>
        <div className=" flex gap-3 pb-3 items-center ">
          <SearchInput className=" flex outline outline-gray-400 items-center gap-2 px-2 py-2 rounded-lg" />
          <button className="px-4 py-2 outline-1 outline-gray-400 rounded-lg text-gray-600">
            filters
          </button>
          <button className="px-4 py-2 bg-blue-600   rounded-lg  text-white ">
            + add product
          </button>
        </div>
      </header>
      <table className="w-full">
        <thead>
          <tr className="w-full ">
            <th className="text-sm text-gray-600 font-medium border border-gray-400 py-2">
              Name
            </th>
            <th className="text-sm text-gray-600 font-medium border border-gray-400 py-2">
              Category
            </th>
            <th className="text-sm text-gray-600 font-medium border border-gray-400 py-2">
              SKU
            </th>
            <th className="text-sm text-gray-600 font-medium border border-gray-400 py-2">
              Price
            </th>
            <th className="text-sm text-gray-600 font-medium border border-gray-400 py-2">
              Status
            </th>
            <th className="text-sm text-gray-600 font-medium border border-gray-400 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
          </tr>
          <tr>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
          </tr>
          <tr>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
          </tr>
          <tr>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
          </tr>
          <tr>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
          </tr>
          <tr>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
            <td className=" px-2 py-2 border border-gray-400">
              <span className="bg-gray-400 inline-block w-full h-6 rounded-lg animate-pulse "></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
