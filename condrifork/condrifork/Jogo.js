import { View, Text } from 'react-native';
import { useState } from 'react';
import Forca from './components/Forca';
import Teclado from './components/Teclado';
import { stylesJO } from "./estiloJogo";

const perguntas = [
  { pergunta: 'Por onde eles respiram?', resposta: 'brânquias' },
  { pergunta: 'Onde se localiza a boca?', resposta: 'ventral' },
  { pergunta: 'O que significa condrictes?', resposta: 'cartilagem' },
  { pergunta: 'Qual é seu habitat?', resposta: 'marinho' },
  { pergunta: 'Qual é o seu tipo de reprodução?', resposta: 'ovíparos' },
];

// Função para sortear uma pergunta
const sorteiaPergunta = () => perguntas[Math.floor(Math.random() * perguntas.length)];

// Função para normalizar acentos
const removerAcentos = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

export function Jogo({ irPara }) {
  const [situacao, setSituacao] = useState(0);           // Inicializa com 0 para nenhum erro
  const [letrasAdvinhadas, setLetrasAdvinhadas] = useState([]);
  const [gameOver, setGameOver] = useState(false);      // Novo: pausa o jogo localmente
  
  const [sorteio, setSorteio] = useState(sorteiaPergunta());
  const [palavra, setPalavra] = useState(sorteio.resposta);
  const [perguntaAtual, setPerguntaAtual] = useState(sorteio.pergunta);
  
  // Monta a palavra exibida (com normalização)
  const montaPalavra = () => {
    return palavra
      .split('')
      .map((l) => (letrasAdvinhadas.includes(removerAcentos(l)) ? l : '_'))
      .join(' ');
  };
  
  // Valida o palpite do jogador
  const validarPalpite = (letra) => {
    if (gameOver) return;  // Ignora inputs após game over

    const letraNormalizada = removerAcentos(letra);
    const palavraNormalizada = removerAcentos(palavra);
    // Ignora letras já digitadas
    if (letrasAdvinhadas.includes(letraNormalizada)) return;
    
    let proximo = situacao; // Guarda o valor atual de situacao
    
    if (palavraNormalizada.includes(letraNormalizada)) {
      const novasLetras = [...letrasAdvinhadas, letraNormalizada];
      setLetrasAdvinhadas(novasLetras);
      // Testa se ganhou
      const montada = palavra.split('').map(l => novasLetras.includes(removerAcentos(l)) ? l : '_').join('');
      if (montada === palavra) {
        irPara('ganhou');
      }
    } else {
      // Atualiza situacao no erro
      proximo++;  // Incrementa erros somente se for falha
      console.log(`Erro #${proximo}: Letra '${letra}'`);  // Debug: rastreie erros

      // Verifique o game over ANTES de atualizar a situacao
      const maxErros = 5;  // Altere para 5 se o limite for 5
      if (proximo >= maxErros) {
        setGameOver(true);  // Pausa localmente
        setTimeout(() => {
          irPara('gameover');
        }, 0);  // Alternativa sem delay: irPara('gameover');
        return;  // Impede que continue processando erros após game over
      }

      // Atualiza o estado do número de erros
      setSituacao(proximo);
    }
  };
  
  // Função para reiniciar o jogo
  const novoJogo = () => {
    const novoSorteio = sorteiaPergunta();
    setSorteio(novoSorteio);
    setPalavra(novoSorteio.resposta);
    setPerguntaAtual(novoSorteio.pergunta);
    setSituacao(0);  // Reseta para 0 erros ao reiniciar o jogo
    setLetrasAdvinhadas([]);
    setGameOver(false);  // Reset
  };

  return (
    <View style={stylesJO.containerJogo}>
      <View style={stylesJO.caixaPergunta}>
        <Text style={stylesJO.pergunta}>{perguntaAtual}</Text>
      </View>
      <Forca exibir={situacao} />
      <View style={{ alignItems: 'center' }}>
        <Text style={stylesJO.palavra}>{montaPalavra()}</Text>
        <Teclado 
          letras={letrasAdvinhadas} 
          valida={validarPalpite} 
          desabilitado={gameOver} 
        />
        {gameOver && <Text style={{ color: 'red', fontSize: 18 }}>Game Over!</Text>}
      </View>
    </View>
  );
}
