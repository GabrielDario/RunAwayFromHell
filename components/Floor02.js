import { ModelRoom, setModalVisible, modalVisible } from './ModelRoom.js';
import React, { useState,useEffect } from 'react';
import { executeAction} from '../path/Actions.js';

export function Floor02({ navigation }) {

  useEffect(() => {
    console.log('Segundo andar...')
    setOpenRoom(false)
  }, );

  const [openRoom, setOpenRoom] = useState(false);

  const [room, setRoom] = useState(1);
  const [actionPhrase, setActionPhrase] = useState("NULL");
  let floor = 2;
  let background = require("../img/Floor02.png");


  const handleConfirm = (direct) => {
    if(openRoom == true) {
      navigation.navigate('Floor03')
    }
    Actions.executeAction(direct, room);
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
