import { Alert } from 'react-native';

export const aDireita = () => {
  Alert.alert(
    "Você foi a direita",
    "Movendo...",
    [
      {
        text: "OK",
      }
    ]
  );
};

export const aEsquerda = () => {
  console.log('------------')
  Alert.alert(
    "Você foi para a esquerda",
    "Movendo...",
    [
      {
        text: "OK",
      }
    ]
  );
};

export const aSul = () => {
  Alert.alert(
    "Você foi o sul ",
    "Movendo...",
    [
      {
        text: "OK",
      }
    ]
  );
};

export const aNorte = () => {
  Alert.alert(
    "Você foi para o norte",
    "Movendo...",
    [
      {
        text: "OK",
      }
    ]
  );
};

export const changeRoom = (newRoom) => {
  Alert.alert(
    `Você foi para a sala ${newRoom}`,
    "Movendo...",
    [
      {
        text: "OK",
      }
    ]
  );
};

export const nothing = () => {
  Alert.alert(
    `...`,
    "Não há nada aqui",
    [
      {
        text: "OK",
      }
    ]
  );
};

export const morte = () => {
  Alert.alert(
    "Você foi morto!",
    "Renascendo na sala 1.",
    [
      {
        text: "OK",
      }
    ]
  );
};

export const nextFloor = (nextFloor) => {
  Alert.alert(
    "VOCÊ SUBIU DE ANDAR!",
    `Você está indo para o andar ${nextFloor}`,
    [
      {
        text: "OK",
      }
    ]
  );
};
export default { aDireita, aEsquerda, aSul, aNorte, morte, changeRoom, nothing ,nextFloor };