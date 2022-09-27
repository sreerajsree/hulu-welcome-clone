import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Accordion = () => {
  return (
      <div className="max-w-7xl mx-auto mb-10">
        <div className="border-b-[1px] border-t-[1px] border-gray-400">
          <div className="text-white py-4 text-center text-lg flex items-center justify-center">
            Show Add-ons <BsChevronDown className="ml-2 h-7 w-7" />
          </div>
        </div>
      </div>
  );
};

export default Accordion;
