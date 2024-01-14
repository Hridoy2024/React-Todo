import React, { useState } from "react";
import { database } from "../FIrebase";
import { ref, update } from "firebase/database";
const Editor = ({ editorSwitch, getTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const updateTodo = () => {
    if (!newTodo) {
      alert("Please Type Something");
    } else {
      update(ref(database, "todos/" + getTodo.ID), {
        todo: newTodo,
      });

      editorSwitch(false);
    }
  };

  return (
    <div className="w-full h-full bg-primaryBG p-2 rounded">
      <input
        onChange={(e) => setNewTodo(e.target.value)}
        className="w-full h-12 mb-4 outline-none bg-secondaryBG font-ubuntu font-medium p-2 rounded text-2xl"
        type="text"
        placeholder={getTodo.todo}
      />

      <div className="flex items-center justify-between">
        <button
          onClick={updateTodo}
          className="w-1/2 text-white bg-green-500 p-2 font-ubuntu font-semibold text-xl "
        >
          Update
        </button>

        <button
          onClick={() => {
            editorSwitch(false);
          }}
          className="w-1/2 text-white bg-red-500 p-2 font-ubuntu font-semibold text-xl "
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default Editor;
