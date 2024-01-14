import React, { useState } from "react";
import Input from "../components/input";
import TodoList from "../components/TodoList";
import Editor from "../components/Editor";

const Home = () => {
  const [editorPage, editorSwitch] = useState(false);
  const [getTodo, setGetTodo] = useState({});
  const editTodo = (item) => {
    console.log(item);
    setGetTodo(item);
  };
  return (
    <div className="w-[600px] bg-secondaryBG h-[400px] rounded-[20px] mt-[56px] py-[19px] px-[55px]">
      <Input />

      {editorPage ? (
        <Editor editorSwitch={editorSwitch} getTodo={getTodo} />
      ) : (
        <TodoList editorSwitch={editorSwitch} editTodo={editTodo} />
      )}
    </div>
  );
};

export default Home;
