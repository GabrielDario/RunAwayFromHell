import { ModelRoom } from './ModelRoom.js';
import React, { useState } from 'react';
import { death, changeRoom, nothing, nextFloor } from '../path/Actions.js'


export function Floor03({navigation}) {
  const [room, setRoom] = useState(1);
  const [openModal, setOpenModal] = useState(false); //MODAL CONFIRMAR
  let floor = 3;
  let background = require("../img/Floor03.png");



  const handleConfirm = (direction) => {
    if (direction == 'left') {
      if (room == 1) {
        changeRoom(4);
        setRoom(4);
      } else if(room == 2) {
        death();
        setRoom(1);
      }else if(room == 3) {
        changeRoom(1);
        setRoom(1);
      }else if(room == 4) {
        nothing();
      }else{
        nothing();
      }
    }
    if (direction == 'right') {
      if (room == 1) {
        changeRoom(3);
        setRoom(3);
      } else if(room == 2) {
        nextFloor(3);
        navigation.navigate('Floor03')
      }else if(room == 3) {
        nothing();
      }else if(room == 4) {
        changeRoom(1);
        setRoom(1);
      }else{
        death();
        setRoom(1);
      }
    }
    if (direction == 'north') {
      if (room == 1) {
        changeRoom(2);
        setRoom(2);
      } else if(room == 2) {
        nothing();
      }else if(room == 3) {
        nothing();
      }else if(room == 4) {
        changeRoom(5);
        setRoom(5);
      }else{
        nothing();
      }
    }
    if (direction == 'south') {
      if (room == 1) {
        nothing();
      } else if(room == 2) {
        changeRoom(1);
        setRoom(1);
      }else if(room == 3) {
        nothing();
      }else if(room == 4) {
        nothing();
      }else{
        changeRoom(4);
        setRoom(4);
      }
    }
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
