import { View, Text, StyleSheet, Pressable } from "react-native";

const Button = ({ title, onPress, customStyle }) => {
  return (
    <View style={[styles.buttonContainer, customStyle.container]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.button, styles.pressed, customStyle?.button]
            : [styles.button, customStyle?.button]
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={[styles.text, customStyle?.Text]}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    borderRadius: 28,
    margin: 4,
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
