import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <View style={styles.todoContainer}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.todoText}>{todo.title}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title={"Del"}
          onPress={() => deleteTodo(todo.todoIndex)}
          customStyle={{
            button: styles.completeButton,
            Text: styles.completeText,
          }}
          //   customStyle={{ button: styles.deleteButton, Text: styles.deleteText }}
        />
        <Button
          title={"Done"}
          onPress={() => completeTodo(todo.todoIndex)}
          customStyle={{
            button: styles.completeButton,
            Text: styles.completeText,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
    paddingLeft: 14,
    paddingVertical: 7,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    width: "91%",
  },
  todoText: {
    fontSize: 17,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  deleteButton: {
    alignSelf: "flex-end",
    padding: 7,
    borderColor: "#eded",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
    marginTop: 0,
    width: "100%",
    height: 40,
    backgroundColor: "rgba(175, 47, 47, 0.25)",
  },
  deleteText: {
    color: "#666666",
  },
  completeButton: {
    margin: 0,
    marginTop: 0,
    padding: 0,
    borderColor: "#eded",
    borderWidth: 1,
    borderRadius: 4,
    width: "100%",
    height: 40,
    backgroundColor: "rgba(175, 47, 47, 0.25)",
  },
  completeText: {
    color: "green",
    fontWeight: "bold",
  },
});

export default Todo;
