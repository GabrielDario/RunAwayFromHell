import { ModelRoom } from './ModelRoom.js';
import React, { useState } from 'react';
import { death, changeRoom, nothing, nextFloor } from '../path/Actions.js'


export function Floor02({navigation}) {
  const [room, setRoom] = useState(1);
  const [openModal, setOpenModal] = useState(false); //MODAL CONFIRMAR
  let floor = 2;
  let background = require("../img/Floor02.png");



  const handleConfirm = (direction) => {
    if (direction == 'left') {
      if (room == 1) {
        nothing();
      } else {
        nothing();
      }
    }
    if (direction == 'right') {
      if (room == 1) {
        nothing()
      } else {
        nothing();
      }
    }
    if (direction == 'north') {
      if (room == 1) {
        nothing();
      } else {
        nothing();
      }
    }
    if (direction == 'south') {
      if (room == 1) {
        nothing();
      } else {
        nothing();
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
