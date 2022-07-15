import { PlusIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import InputCard from "./InputCard";

const InputCardContainer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className={`${open ? "block" : "hidden"}`}>
        <InputCard open={open} setOpen={setOpen} />
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={`
        ${
          open ? "hidden" : "flex"
        } group gap-2 items-center px-2 cursor-pointer py-2 text-gray-700 hover:text-black hover:bg-gray-400 transition-all duration-300 rounded-sm 
        `}
      >
        <PlusIcon className="w-5 h-5 group-hover:text-black" />
        <p className="text-lg">Add a card</p>
      </div>
    </div>
  );
};

export default InputCardContainer;
