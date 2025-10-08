import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const stylesGO = StyleSheet.create({
  containerGO: {
    flex: 1,
    backgroundColor: "#99F0FF",
  },
  botao: {
    paddingVertical: 28,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: "#356E9B",
    borderWidth: 0,
    borderColor: "#c5f",
    position: "absolute",
    top: height * 0.12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  texto: {
    fontSize: 45,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "Nunito",
  },

  imagemGO: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderWidth: 0,
    borderColor: "black",
  },
});
