import { ModelRoom, setModalVisible } from './ModelRoom.js';
import React, { useState, useEffect } from 'react';
import Actions from '../path/Actions.js';


export function Floor03({ navigation }) {
  const [openRoom, setOpenRoom] = useState(false);
  const [room, setRoom] = useState(1);

  
  const [axe,setAxe] = useState(false);
  const [actionPhrase, setActionPhrase] = useState("NULL");
  let floor = 3;
  let background = require("../img/Floor03.png");

  useEffect(() => {
    explainRoom();
  }, []);

  const explainRoom = () => {
    setActionPhrase("VOCê ESTÁ NO 3º ANDAR."
      + "\nAgora você tem que usar objetos para passar."
      + "\nE para pegar objetos, clique na LUPA"
      + "\nVocê agora tem vida, você começa com 100 de vida"
      + "\nSe você tiver com 0, você perde tudo e voltará para o 1º andar"
      + "\nNova opção: VASCULHAR SALA");
  }

  const handleConfirm = (direct) => {
    if (openRoom == true) {
      navigation.navigate('Floor01')
    }
    let retorno = Actions.executeAction(direct, room, floor,axe);
    
    if (retorno[2] == true && retorno[1] == true) {
      console.log('PASSOU!')
      setActionPhrase(retorno[0])
      setOpenRoom(true);
      return;
    }
   
    setRoom(retorno[0]);
    setActionPhrase(retorno[1]);
  };

  const checkRoom = (room) => {
  
    let retorno = Actions.checking(floor,room,axe);
    if (retorno[1] == true) {
      setAxe(true);
    }
  
    setActionPhrase(retorno[0]);
  }
  return (
    <ModelRoom
      floor={floor}
      background={background}
      room={room}
      handleConfirm={handleConfirm}
      setModalVisible={setModalVisible}
      actionPhrase={actionPhrase}
      setActionPhrase={setActionPhrase}
      openRoom={openRoom}
      setOpenRoom={setOpenRoom}
      checkRoom={checkRoom}
      axe={axe}
    />
  );
}