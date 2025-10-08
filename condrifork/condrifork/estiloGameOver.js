import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const stylesGO = StyleSheet.create({
  containerGO: {
    flex: 1,
    backgroundColor: '#99F0FF',
  },
  botao: {
    paddingVertical: 28,
    paddingHorizontal: 50,
    borderRadius: 10,
    backgroundColor: '#356E9B',
    position: 'absolute',
    bottom: 600,
  },
  texto: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Nunito',
  },

  imagemGO: {
    width: '170%',
    height: '130%',
    resizeMode: 'cover',
  },
  },
);
