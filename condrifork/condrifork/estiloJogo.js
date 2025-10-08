 import { StyleSheet } from 'react-native';

export const stylesJO = StyleSheet.create({
 
 containerJogo: {
    flex: 1,
    marginBottom: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderWidth: 0,
    borderColor: 'red',
  },
  pergunta: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    position:'relative',
    zIndex:2,  
    color: '#E2E2E2',
  },

  caixaPergunta: {
  backgroundColor: '#356e9b',  
  padding: 20, 
  height: 40,
  paddingHorizontal: 10,
  paddingVertical: 5, 
  borderRadius: 15,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex:2, 
  marginTop: 45,
},

  palavra: {
    zIndex: 2,
    fontSize: 28,
    marginVertical: 20,
    letterSpacing: 4,
    marginTop: 50,
    color: '#254259',
  },
  mensagem: {
    fontSize: 22,
    margin: 12,
    color: 'red',
  },
  
});