import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { database } from "../FIrebase";
import { ref, onValue } from "firebase/database";

const TodoList = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    const starCountRef = ref(database, "todos/");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setList(arr);
    });
  }, []);
  return (
    <div className="h-[200px] overflow-y-scroll no-scrollbar">
      {List.map((item) => {
        return <Todo item={item}/>;
      })}
    </div>
  );
};

export default TodoList;
