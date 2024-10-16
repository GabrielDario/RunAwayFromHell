import { ModelRoom } from './ModelRoom.js';
import React, { useState } from 'react';
import { death, changeRoom, nothing, nextFloor } from '../path/Actions.js'


export function Floor01({navigation}) {
  const [room, setRoom] = useState(1);
  const [openModal, setOpenModal] = useState(false); //MODAL CONFIRMAR
  let floor = 1;
  let background = require("../img/Floor01.png");



  const handleConfirm = (direction) => {
    if (direction == 'left') {
      if (room == 1) {
        changeRoom(2)
        setRoom(2)
      } else {
        nothing();
      }
    }
    if (direction == 'right') {
      if (room == 1) {
        nothing()
      } else {
        changeRoom(1);
        setRoom(1)
      }
    }
    if (direction == 'north') {
      if (room == 1) {
        death();
      } else {
        nothing();
      }
    }
    if (direction == 'south') {
      if (room == 1) {
        nextFloor(2);
        navigation.navigate('Floor02')
      } else {
        death();
        setRoom(1)
      }
    }
    setOpenModal(false);  // Fecha o modal após a confirmação
  };

  return (
    <ModelRoom
      floor={floor}
      handleConfirm={handleConfirm}
      openModal={openModal}
      setOpenModal={setOpenModal}
      background={background}
      room={room}
    />
  );
}
