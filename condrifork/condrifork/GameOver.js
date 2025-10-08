import { View, Pressable, Text, Image } from "react-native";
import { stylesGO } from "./estiloGameOver";

export function GameOver({ irPara }) {
  const forca1 = require("./assets/acerto.png");

  return (
    <View style={stylesGO.containerGO}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0, borderWidth:0, borderColor:'red'
        }}>
        <Pressable
          style={stylesGO.botao}
          onPress={() => irPara("inicio")}
        >
          <Text style={stylesGO.texto}>GAME OVER</Text>
        </Pressable>
        <Image source={forca1} style={stylesGO.imagemGO} />
      </View>
    </View>
  );
}
