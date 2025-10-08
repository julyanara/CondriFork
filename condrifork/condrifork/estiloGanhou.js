import { StyleSheet } from 'react-native';

export const stylesGA = StyleSheet.create({

 containerGanhou: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#87CEFA',
  },
  imagemFundo: {
    position: 'absolute',
    marginTop: 345,
    width:400,
  },
  caixaMensagem: {
    backgroundColor: '#4682B4',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 70,
    alignItems: 'center',
    zIndex: 2,
  },
  textoMensagem: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  botaoReiniciar: {
    marginTop: 5,
    padding: 10,
    borderRadius: 50,
  },
  imagemReiniciar: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  containerPirata: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    position: 'relative',
  },
  ponte: {
    position:'absolute',
    top:340,
  },
  pirata: {
    width: '300%',
    aspectRatio: 1,
    position: 'absolute',
    bottom: 100,
    zIndex: 3,
  },
});