import { Alert } from 'react-native';


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

export const death = () => {
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
export default {  death, changeRoom, nothing ,nextFloor };