import React from "react";

import { MdModeEditOutline } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";

const Todo = ({item}) => {
  return (
    <div className="flex items-center justify-between py-[21px] px-[20px] rounded-[5px] mb-[30px] bg-listBG ">
      <input type="checkbox" name="" id="" />
      <h2 className="font-ubuntu font-medium text-[16px] text-black">

        {item.todo}
      </h2>

      <div className="flex gap-2">
        <MdModeEditOutline className="cursor-pointer" size={20} />
        <BiSolidTrashAlt className="cursor-pointer text-red-500" size={20} />
      </div>
    </div>
  );
};

export default Todo;
