import { ModelRoom, setModalVisible,modalVisible ,openRoom} from './ModelRoom.js';
import React, { useState } from 'react';


export function Floor01({navigation}) {
  const [room, setRoom] = useState(1);
  const [actionPhrase, setActionPhrase] = useState("NULL");
  let floor = 1;
  let background = require("../img/Floor01.png");


  const handleConfirm = (direction, openRoom) => {
    console.log('FLOOR1: ' + openRoom)
    if (direction == 'left') {
      if (room == 1) {
        setRoom(2)
        setActionPhrase("Você estando indo para a sala 2");
      } else {
        setActionPhrase("Não há nada aqui")
      }
    }
    if (direction == 'right') {
      if (room == 1) {
        setActionPhrase("Não há nada aqui")
      } else {
        setRoom(1);
        setActionPhrase("Você estando indo para a sala 1");
      }
    }
    if (direction == 'north') {
      if (room == 1) {
        setActionPhrase("Você morreu e foi para sala 1");
      } else {
        setActionPhrase("Não há nada aqui");
      }
    }
      if (direction == 'south') {
        if (room == 1) {
          setActionPhrase("VOCÊ CONSEGUIU ACHAR A PORTA! VOCÊ VAI PARA O PRÓXIMO ANDAR");
          if(openRoom == true) {
            navigation.navigate('Floor02')
          }
      } else {
        setRoom(1)
        setActionPhrase("VOCÊ FOI MORTO E FOI PARA SALA 1");
      }
    }
  };

  return (
    <ModelRoom
      floor={floor}
      background={background}
      room={room}
      handleConfirm={handleConfirm}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      actionPhrase={actionPhrase}
      openRoom={openRoom}
    />
  );
}
