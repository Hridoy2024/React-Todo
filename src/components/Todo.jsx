import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import { BiSolidTrashAlt } from "react-icons/bi";
import { ref, remove, update } from "firebase/database";
import { database } from "../FIrebase";
const Todo = ({ item, editorSwitch, editTodo }) => {
  const deletetodo = (id) => {
    remove(ref(database, "todos/" + id));
  };

  const isComplete = (state, item) => {
    update(ref(database, "todos/" + item.ID), {
      complete: state,
    });
  };

  const openEdit = (item) => {
    editTodo(item);
    editorSwitch(true);
  };

  return (
    <div
      className={`
        flex items-center justify-between py-[21px] px-[20px] rounded-[5px] mb-[30px] ${
          item.complete ? "bg-green-400" : "bg-listBG"
        } `}
    >
      <input
        type="checkbox"
        checked={item.complete ? true : false}
        name=""
        id=""
        onChange={(e) => isComplete(e.target.checked, item)}
      />
      <h2 className="font-ubuntu font-medium text-[16px] text-black">
        {item.todo}
      </h2>

      <div className="flex gap-2">
        <MdModeEditOutline
          className="cursor-pointer"
          size={20}
          onClick={() => openEdit(item)}
        />
        <BiSolidTrashAlt
          className="cursor-pointer text-red-500"
          size={20}
          onClick={() => deletetodo(item.ID)}
        />
      </div>
    </div>
  );
};

export default Todo;
