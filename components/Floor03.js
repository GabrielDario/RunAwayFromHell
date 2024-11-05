import { ModelRoom, setModalVisible, modalVisible } from './ModelRoom.js';
import React, { useState } from 'react';
import Actions from '../path/Actions.js';


export function Floor03({navigation}) {
  const [room, setRoom] = useState(1);
  const [openModal, setOpenModal] = useState(false); //MODAL CONFIRMAR
  let floor = 3;
  let background = require("../img/Floor03.png");



  const handleConfirm = (direction) => {
   
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
