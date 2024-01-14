import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { database } from "../FIrebase";
import { ref, onValue } from "firebase/database";
import Loading from "./Loading";

const TodoList = ({ editorSwitch, editTodo }) => {
  const [List, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const starCountRef = ref(database, "todos/");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });

      setList(arr);
      setLoading(false);

      console.log(List);
    });
  }, []);

  const ShowList = () => {
    return List.length == 0 ? (
      <div className="h-full w-full bg-green-300 flex justify-center items-center ">
        <h2 className="font-bold text-[50px]">Nothing Here</h2>
      </div>
    ) : (
      List.map((item, i) => {
        return (
          <Todo
            key={i}
            item={item}
            editorSwitch={editorSwitch}
            editTodo={editTodo}
          />
        );
      })
    );
  };

  return (
    <div className="h-[200px] overflow-y-scroll no-scrollbar">
      {loading ? <Loading /> : <ShowList />}
    </div>
  );
};

export default TodoList;
