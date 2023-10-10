import React from "react";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{
  item: { text: string };
  onDeleteTodo: () => void;
}> = ({ item, onDeleteTodo }) => {
  return (
    <li onClick={onDeleteTodo} className={classes.item}>
      {item.text}
    </li>
  );
};

export default TodoList;
