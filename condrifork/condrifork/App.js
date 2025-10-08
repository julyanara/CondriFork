import { useState } from 'react';
import { SafeAreaView } from 'react-native';

// Importando as telas
import { TelaInicial } from './TelaInicial';
import { Jogo } from './Jogo';
import { TelaGanhou } from './TelaGanhou';
import { GameOver } from './GameOver';

export default function App() {
  // Estado que controla qual tela aparece
  const [tela, setTela] = useState('inicio'); // começa na TelaInicial

  const irPara = (nomeTela) => setTela(nomeTela);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {tela === 'inicio' && <TelaInicial irPara={irPara} />}
      {tela === 'jogo' && <Jogo irPara={irPara} />}
      {tela === 'ganhou' && <TelaGanhou irPara={irPara} />}
      {tela === 'gameover' && <GameOver irPara={irPara} />}
    </SafeAreaView>
  );
}
