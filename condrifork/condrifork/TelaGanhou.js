import {
  View,
  Pressable,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';

import { stylesGA } from "./estiloGanhou";

export function TelaGanhou({ irPara }) {
  // imagens
  const fundo = require('./assets/mar.png');
  const pirata = require('./assets/piratafeliz.png');
  const reiniciar = require('./assets/reiniciar.png');
  const ponte = require('./assets/ponte.png');

  return (
    <SafeAreaView style={stylesGA.containerGanhou}>
      {/* Fundo */}
      <Image style={stylesGA.imagemFundo} source={fundo} resizeMode="cover" />

      {/* Mensagem + botão reiniciar separados */}
      <View style={stylesGA.caixaMensagem}>
        <Text style={stylesGA.textoMensagem}>VOCÊ GANHOU!</Text>

        <Pressable
          style={({ pressed }) => [
            stylesGA.botaoReiniciar,
            pressed && { opacity: 0.6, transform: [{ scale: 0.9 }] },
          ]}
          onPress={() => {
            irPara("inicio"); // reinicia o jogo voltando para a tela inicial
          }}
        >
          <Image source={reiniciar} style={stylesGA.imagemReiniciar} />
        </Pressable>
      </View>

      {/* Pirata em cima da ponte */}
      <View style={stylesGA.containerPirata}>
        <Image source={ponte} style={stylesGA.ponte} resizeMode="contain" />
        <Image source={pirata} style={stylesGA.pirata} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
}
