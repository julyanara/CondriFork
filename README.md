# CondriFork - Jogo da Forca

Bem-vindo ao CondriFork, o jogo da forca onde cada erro coloca um pirata mais perto da boca de um tubarão faminto! Teste seus conhecimentos sobre o mundo marinho dos Condrictes (peixes cartilaginosos).

## Requisitos

- Node.js (versão 14 ou superior)
- React Native CLI **ou** Expo CLI
- Android Studio ou Xcode para simulação (caso não esteja utilizando o Expo)

## Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/julyanara/CondriFork.git
   cd CondriFork
   ```

2. Instale as dependências:
   - **Se estiver usando Expo:**
     ```sh
     npm install
     ```
   - **Se estiver usando React Native CLI:**
     ```sh
     npm install
     ```

3. Inicie o aplicativo:
   - **Expo:**  
     ```sh
     expo start
     ```
   - **React Native CLI:**
     ```sh
     npx react-native run-android    # Para Android
     npx react-native run-ios        # Para iOS (Xcode)
     ```

Isso vai iniciar o servidor e abrir a aplicação no seu dispositivo ou emulador.

## Como Jogar

- O jogo escolhe uma palavra aleatória do mundo dos Condrictes, representada por underscores (`_`).
- A cada rodada, tente adivinhar uma letra.
- Se acertar, a letra aparece nas posições corretas. Se errar, o número de tentativas diminui e o pirata se aproxima do tubarão.
- O objetivo é descobrir a palavra antes que o pirata seja devorado.

## Regras

- Número limitado de tentativas erradas (**5 tentativas**).
- Letras já tentadas não podem ser repetidas.
- A cada erro, o pirata se aproxima do tubarão.

## Exemplo de Execução

Bem-vindo ao CondriFork!

Adivinhe a palavra do mundo dos Condrictes (dica: é um tipo de peixe):
_ _ _ _ _ _

Tentativas restantes: 5

Digite uma letra: a

Boa! Você acertou a letra!
_ _ a _ _ _

Digite uma letra: r

Errou! O pirata se aproxima da boca do tubarão...
Tentativas restantes: 4
_ _ a _ _ _

## Palavras do Jogo

- **Espécies de Condrictes:** tubarões, raias, quimeras, mantas, etc.
- **Características e Partes do Corpo:** nadadeiras, brânquias, cauda, cartilagem, etc.
- **Ambientes Marinhos:** recifes de corais, fundo marinho, águas profundas, etc.

## Autores

- Geovana Gabrielly
- Julyanara
- Laila Cristina
- Manuele Lopes
- Yara Gomes

## Licença

[MIT](LICENSE)

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests!
