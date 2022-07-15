import { XIcon } from "@heroicons/react/solid";
import React from "react";

const InputCard = () => {
  return (
    <div>
      <input
        className="w-full py-2 px-2 border border-[#0079BF] rounded-sm mb-2 focus:outline-[#0079BF] "
        type="text"
        placeholder="Enter a title for this card..."
      />
      <div className="flex gap-2 items-center">
        <button className="py-2 px-3 bg-[#0079BF] text-sm hover:bg-[#026AA7] transition-all duration-300 rounded-md text-white">
          Add Card
        </button>
        <XIcon className="cursor-pointer w-6 h-6 text-gray-500 hover:text-gray-900 transition-all duration-300" />
      </div>
    </div>
  );
};

export default InputCard;
