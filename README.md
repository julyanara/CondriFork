CondriFork - Jogo da Forca

Bem-vindo ao CondriFork, o jogo da forca onde cada erro coloca um pirata mais perto da boca de um tubarão faminto! Teste seus conhecimentos sobre o mundo marinho dos Condrictes (peixes cartilaginosos como tubarões e raias) e evite que o pirata se torne a refeição do tubarão.

Requisitos

Node.js (versão 14 ou superior)

React Native CLI ou Expo CLI (dependendo da abordagem que você preferir usar)

Android Studio ou Xcode para simulação em dispositivos móveis (caso não esteja utilizando o Expo)

Instalação e Execução
1. Clone o repositório:
git clone https://github.com/seu-usuario/condrifork.git
cd condrifork

2. Instale as dependências:

Se você está usando Expo para facilitar o desenvolvimento, basta rodar:

npm install


Ou, caso esteja utilizando o React Native CLI, execute:

npx react-native init CondriFork
cd CondriFork
npm install

3. Inicie o aplicativo:

Se estiver usando Expo, basta rodar:

expo start


Se estiver usando React Native CLI, execute:

npx react-native run-android    # Para Android
npx react-native run-ios        # Para iOS (caso tenha Xcode configurado)


Isso vai iniciar o servidor e abrir a aplicação no seu dispositivo ou emulador.

Como Jogar

Início do Jogo:
O jogo escolhe uma palavra aleatória do mundo dos Condrictes. Você verá a palavra representada por letras ocultas, substituídas por underscores (_).

Tentativas:
A cada rodada, você tenta adivinhar uma letra. Se acertar, a letra será revelada nas posições correspondentes. Caso erre, o número de tentativas restantes diminui e o pirata vai se aproximando cada vez mais da boca do tubarão!

Objetivo:
O objetivo é adivinhar todas as letras da palavra secreta antes que o pirata chegue à boca do tubarão. Se o pirata for devorado, você perde o jogo!

Fim do Jogo:
O jogo termina de duas maneiras:

Você acerta a palavra e vence.

O pirata chega à boca do tubarão e o jogo termina.

Regras

O jogo permite um número limitado de tentativas erradas (5 tentativas).

A cada erro, o pirata se aproxima do tubarão.

As letras já tentadas não podem ser repetidas.

Exemplo de Execução
Bem-vindo ao CondriFork!

Adivinhe a palavra do mundo dos Condrictes (dica: é um tipo de peixe):
_ _ _ _ _ _

Tentativas restantes: 6

Digite uma letra: a

Boa! Você acertou a letra!
_ _ a _ _ _

Digite uma letra: r

Errou! O pirata se aproxima da boca do tubarão...
Tentativas restantes: 5
_ _ a _ _ _

Palavras do Jogo

As palavras do CondriFork são relacionadas ao universo dos Condrictes e ao ambiente marinho, como:

Espécies de Condrictes: tubarões, raias, quimeras, mantas e outros peixes cartilaginosos.

Características e Partes do Corpo: nadadeiras, brânquias, cauda, cartilagem e outros termos biológicos.

Ambientes Marinhos: recifes de corais, fundo marinho, águas profundas, etc.
