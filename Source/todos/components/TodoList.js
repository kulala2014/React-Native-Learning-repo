import { View } from "react-native";

import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  todos = todos.map((todo, i) => {
    return (
      <Todo
        key={todo.todoIndex}
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    );
  });

  return <View>{todos}</View>;
};

export default TodoList;
