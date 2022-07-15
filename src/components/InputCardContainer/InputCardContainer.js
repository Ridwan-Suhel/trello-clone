import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import InputCard from "./InputCard";

const InputCardContainer = () => {
  return (
    <div>
      <InputCard />
      <div className="group flex gap-2 items-center px-2 cursor-pointer py-2 text-gray-700 hover:text-black hover:bg-gray-400 transition-all duration-300 rounded-sm ">
        <PlusIcon className="w-5 h-5 group-hover:text-black" />
        <p className="text-lg">Add a card</p>
      </div>
    </div>
  );
};

export default InputCardContainer;
