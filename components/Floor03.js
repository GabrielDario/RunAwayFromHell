import { ModelRoom, setModalVisible } from './ModelRoom.js';
import React, { useState,useEffect} from 'react';
// import Actions from '../path/Actions.js';


export function Floor03({navigation}) {
  const [openRoom, setOpenRoom] = useState(false);
  const [room, setRoom] = useState(1);
  const [life,setLife] = useState(100);
  
  const [actionPhrase, setActionPhrase] = useState("NULL");
  let floor = 3;
  let background = require("../img/Floor03.png");

  useEffect(() => {
    explainRoom();
  },[]);
  
  const explainRoom = () => {
    setActionPhrase("VOCê ESTÁ NO 3º ANDAR."
                    + "\nAgora você tem que usar objetos para passar."
                    + "\nE para pegar objetos, clique na LUPA"
                    + "\nVocê agora tem vida, você começa com 100 de vida"
                    + "\nSe você tiver com 0, você perde tudo e voltará para o 1º andar"
                    + "\nNova opção: VASCULHAR SALA");
  }

  const handleConfirm = (direction) => {

  };

  return (
    <ModelRoom
    life={life}
    floor={floor}
    background={background}
    room={room}
    handleConfirm={handleConfirm}
    setModalVisible={setModalVisible}
    actionPhrase={actionPhrase}
    openRoom={openRoom}
    setOpenRoom={setOpenRoom}
    setLife={setLife}
    />
  );
}