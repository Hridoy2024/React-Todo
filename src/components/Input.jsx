import React, { useState } from "react";
import { database } from "../FIrebase";
import { ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const input = () => {
  const [todo, setTodo] = useState("");
  const handleClick = () => {
    if (!todo) {
      alert("Empty");
    } else {
      let uniqueID = uuidv4();
      set(ref(database, "todos/" + uniqueID), {
        ID: uniqueID,
        todo: todo,
        complete: false,
      });

      setTodo("");
    }
  };

  return (
    <div>
      <h1 className="font-ubuntu font-semibold text-[40px] text-textPrimary text-center mb-[10px]">
        ToDo App
      </h1>
      <div className=" relative flex items-center justify-center w-[250px] mx-auto">
        <input
          onChange={(e) => setTodo(e.target.value)}
          className="h-[32px] w-full bg-inputBG py-[9px] px-[10px] rounded-[5px] outline-none"
          type="text"
          value={todo}
          name=""
          id=""
          placeholder="some words"
        />

        <button
          onClick={handleClick}
          className="w-[45px] h-[32px] flex items-center justify-center bg-gray rounded-0-[5px] absolute top-0 right-[0] font-ubuntu font-bold text-[24px] text-white "
        >
          +
        </button>
      </div>

      <div className="h-[1px] w-full bg-black my-[15px]"></div>
    </div>
  );
};

export default input;
