import { View, Pressable, Text, Image } from 'react-native';
import { stylesGO } from "./estiloGameOver";

export function GameOver({ irPara }) {
  const forca1 = require('./assets/acerto.png');

  return (
    <View style={stylesGO.containerGO}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 8,
          padding: 8,
        }}>
        <Image source={forca1} style={stylesGO.imagemGO} />
        <Pressable
          style={stylesGO.botao}
          onPress={() => irPara('inicio')} // volta para a tela inicial
        >
          <Text style={stylesGO.texto}>GAME OVER</Text>
        </Pressable>
      </View>
    </View>
  );
}
