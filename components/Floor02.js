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
    if (openRoom == true) {
      navigation.navigate('Floor03')
    }

    let retorn = Actions.executeAction(direct, room);
    if(retorn[2] == true) {
      setOpenRoom(true);
    }
    setRoom(retorn[0])
    setActionPhrase(retorn[1]);
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
