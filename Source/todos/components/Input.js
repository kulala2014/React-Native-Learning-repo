import react from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = ({ inputValue, inputChange }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={inputValue}
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        onChangeText={inputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 60,
    backgroundColor: "#ffffff",
  },
});

export default Input;
