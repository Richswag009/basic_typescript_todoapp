import React, { useContext, useRef } from "react";
import "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = () => {
  const todosctx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText?.trim().length === 0) {
      return;
    }
    todosctx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>

      <input type="text" ref={todoTextInputRef} id="todo" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
