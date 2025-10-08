import { View, Pressable, Text, StyleSheet } from "react-native";

const Teclado = ({ letras, valida }) => {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz".split(""); //[a,b...]

  return (
    <View style={styles.teclado}>
      {alfabeto.map(letra => (
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: "#6A2B11" },
            styles.tecla,
            letras.includes(letra) && styles.teclaDesativada,
          ]}
          onPress={() => valida(letra)}
          disabled={letras.includes(letra)}
          key={letra}>
          <Text style={styles.letra}>{letra}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    zIndex: 2,
    borderWidth: 0,
  },
  tecla: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 15,
  },
  teclaDesativada: {
    backgroundColor: "#356E9B",
    color: "#E2E2E2",
  },
  letra: {
    fontSize: 18,
    color: "#E2E2E2",
  },
});

export default Teclado;
