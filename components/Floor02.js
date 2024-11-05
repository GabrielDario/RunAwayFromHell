import { ModelRoom, setModalVisible, modalVisible } from './ModelRoom.js';
import React, { useState } from 'react';
import Actions from '../path/Actions.js';

export function Floor02({ navigation }) {
  

  const [openRoom, setOpenRoom] = useState(false);

  const [room, setRoom] = useState(1);
  const [actionPhrase, setActionPhrase] = useState("NULL");
  let floor = 2;
  let background = require("../img/Floor02.png");


  const handleConfirm = (direct) => {
    console.log('Conferindo...')
    if (openRoom == true) {
      navigation.navigate('Floor03')
    }

    let retorno = Actions.executeAction(direct, room);
    if(retorno[2] == true) {
      setOpenRoom(true);
    }
    setRoom(retorno[0])
    setActionPhrase(retorno[1]);
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
      setOpenRoom={setOpenRoom}
    />
  );
}
