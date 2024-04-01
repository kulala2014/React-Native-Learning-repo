import { View, Text, StyleSheet, Pressable } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  button: {
    height: 50,
    backgroundColor: "#72063c",
    paddingHorizontal: 20,
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0, .1)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default Button;
