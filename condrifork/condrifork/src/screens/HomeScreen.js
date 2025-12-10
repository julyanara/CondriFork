import { useState } from 'react';
import { View } from 'react-native';

// Importando as telas
import { TelaInicial } from './TelaInicial';
import { Jogo } from './Jogo';
import { TelaGanhou } from './TelaGanhou';
import { GameOver } from './GameOver';
import  ScoresScreen  from './ScoresScreen'

export default function App() {
  // Estado que controla qual tela aparece
  const [tela, setTela] = useState('inicio'); // começa na TelaInicial

  const irPara = (nomeTela) => setTela(nomeTela);

  return (
    <View style={{ flex: 1 }}>
      {tela === 'inicio' && <TelaInicial irPara={irPara} />}
      {tela === 'jogo' && <Jogo irPara={irPara} />}
      {tela === 'ganhou' && <TelaGanhou irPara={irPara} />}
      {tela === 'gameover' && <GameOver irPara={irPara} />}
      {tela === 'ranking' && <ScoresScreen irPara={irPara} />}
    </View>
  );
}
