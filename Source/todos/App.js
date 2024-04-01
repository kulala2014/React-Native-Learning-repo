import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import Heading from "./components/Heading";
import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
let todoIndex = 0;

const initialState = {
  inputValues: "",
  todos: [],
  type: "All",
};

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const inputChange = (text) => {
    console.log(text);
    setInputValue(text);
  };

  const submitTodo = () => {
    if (inputValue === "") {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };
    console.log("todo:", todo);
    todoIndex++;
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setInputValue("");
  };

  const toggleComplete = (todoIndex) => {
    let newTodos = todos;
    console.log("current list: ", newTodos);
    newTodos.forEach((todo) => {
      if (todoIndex === todo.todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const deleteTodo = (todoIndex) => {
    let newTodos = todos;
    newTodos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Heading />
        <Input
          inputValue={inputValue}
          inputChange={(text) => inputChange(text)}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={toggleComplete}
        />
        <Button
          title={"Submit"}
          onPress={submitTodo}
          customStyle={{ container: styles.buttonContainer }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});
