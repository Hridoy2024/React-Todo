import React from "react";
import Input from "../components/input";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="w-[600px] bg-secondaryBG h-[400px] rounded-[20px] mt-[56px] py-[19px] px-[55px]">
      <Input />
      <TodoList />
    </div>
  );
};

export default Home;
