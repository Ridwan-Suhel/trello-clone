import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import ListCard from "./ListCard/ListCard";

const Lists = () => {
  return (
    <div className="single-lists w-[290px] bg-[#EBECF0] rounded-sm p-3">
      <div className="flex justify-between items-center mb-4">
        <h3>To Do</h3>
        <DotsHorizontalIcon className="h-5 w-5 text-gray-900" />
      </div>
      <ListCard />
      <ListCard />
    </div>
  );
};

export default Lists;
