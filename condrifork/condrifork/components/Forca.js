import { Image, StyleSheet } from 'react-native';

const Forca = ({ exibir }) => {
  const forca1 = require('../assets/erro5.png');
  const forca2 = require('../assets/erro4.png');
  const forca3 = require('../assets/erro3.png');
  const forca4 = require('../assets/erro2.png');
  const forca5 = require('../assets/erro1.png');
  
  const lista = [forca1, forca2, forca3, forca4, forca5];

  return <Image source={lista[exibir]} style={styles.imagem} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  imagem: {
    width: '120%',
    height: '110%',
    position: 'absolute',
    zIndex: 1,
  },
});

export default Forca;
