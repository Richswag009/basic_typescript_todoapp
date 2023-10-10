import TodoList from "./TodoList";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosctx = useContext(TodosContext);
  todosctx.items;
  return (
    <ul className={classes.todos}>
      {todosctx.items.map((item, i) => (
        <TodoList
          key={i}
          item={item}
          onDeleteTodo={todosctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
