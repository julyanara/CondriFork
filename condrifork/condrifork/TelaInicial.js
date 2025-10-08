import { 
  View, 
  Pressable, 
  Image, 
  Text, 
  SafeAreaView 
} from 'react-native';

import { stylesIN } from "./estiloInicial";

export function TelaInicial({ irPara }) {
  // Imagem do fundo (só usada na tela inicial)
  const fundo = require('./assets/startmar.png');
  // Imagem do papagaio
  const papagaio = require('./assets/papagaio.png');

  // Componente Botão
  const Botao = ({ label, onPress }) => (
    <Pressable 
      style={({ pressed }) => [stylesIN.btn, pressed && stylesIN.btnPressed]} 
      onPress={onPress}
    >
      <Text style={stylesIN.btnText}>{label}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={stylesIN.container}>
      {/* Fundo da tela inicial */}
      <Image style={stylesIN.imagem} source={fundo} resizeMode="cover" />

      {/* Container do título */}
      <View style={stylesIN.containerTitulo}>
        <Text style={stylesIN.titulo1}>CONDRIFORK</Text>
      </View>

      {/* Container do botão e do papagaio */}
      <View style={stylesIN.containerBotaoPapagaio}>
        <Image source={papagaio} style={stylesIN.imagemPapagaio} />
        <Botao label="Iniciar" onPress={() => irPara("jogo")} />
      </View>
    </SafeAreaView>
  );
}
