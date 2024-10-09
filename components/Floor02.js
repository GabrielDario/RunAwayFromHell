import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Alert, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';


export function Floor02({navigation}) {
  const [openModal, setOpenModal] = useState(false); //MODAL CONFIRMAR
  const [room, setRoom] = useState(1);

  const handlePress = () => {
    setOpenModal(true);
  };

  const handleConfirm = (direction) => {
    if(direction == 'left') {
      console.log('INDO PARA ESQUERDA')
    }else if(direction == 'right'){
      console.log('INDO PARA DIREITA')

    }else if(direction == 'north'){
      console.log('INDO PARA NORTE')
    }else{
      console.log('SUL')
    }
  
    setOpenModal(false);  // Fecha o modal após a confirmação
  };

  const handleCancel = () => {
    setOpenModal(false);  
  };

  const north = (n) => {
    if (room == 1) {
      death();
    } else {
      console.log('Nada aqui');
    }
  };

  const south = () => {
    console.log('Sul!');

    if (room == 1) {
      console.log('Proximo andar!')
    } else {
      death();
    }
  };

  const east = () => {
  };

  const west = async () => {
    console.log('WEST!')

  };


  const death = () => {
    console.log('Você morreu!');
    setRoom(1);
  }
  return (

    <View style={styles.container}>

      <ImageBackground source={require('../img/Floor01.png')} resizeMode="cover">
        <View>
          <Text style={styles.title}>Andar : <Text style={styles.subtitle}>02/10</Text> </Text>
          <Text style={styles.title}>Sala : <Text style={styles.subtitle}>{room}</Text></Text>
          {/* <Text style={styles.title}>{direction ? <Text>{direction}</Text> : <Text>direction</Text>}</Text> */}

          <View style={styles.fundo}>
            <Image source={require('../img/caractherFront.png')} style={styles.caracter} />
          </View>
        </View>

        <Pressable onPress={() => handlePress(direction = 'north')} style={[styles.imagem, styles.topImage]} >
          <Image source={require('../img/doorN.png')} style={styles.imagem} />
        </Pressable>

        <Pressable onPress={() => handlePress(direction = 'south')} style={[styles.imagem, styles.bottomImage]} >
          <Image source={require('../img/doorS.png')} style={styles.imagem} />
        </Pressable>
        <Pressable onPress={() => handlePress(direction = 'right')}
          style={[styles.imagem, styles.rightImage]} >
          <Image source={require('../img/doorE.png')} style={styles.imagem} />
        </Pressable>
        <Pressable onPress={() => handlePress(direction = 'left')} 
        style={[styles.imagem, styles.leftImage]} >
          <Image source={require('../img/doorO.png')} style={styles.imagem} />
        </Pressable>

        {/* //MODAL */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setOpenModal(!openModal);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Deseja abrir portaa?</Text>
                <Pressable
                  style={[styles.button, styles.buttonConfirm]}
                  onPress={() => handleConfirm(direction)}>
                  <Text style={styles.textStyle}>OK</Text>
                </Pressable>
                <Text></Text>
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={handleCancel}>
                  <Text style={styles.textStyle}>Cancelar !</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    lineHeight: 50,
    left: 25,
    top: 50,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  subtitle: {
    color: 'red',
    fontSize: 25,
  },
  fundo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 750
  },
  caracter: {
    height: 140,
    width: 85,
  },
  imagem: {
    width: 175,
    height: 175,
    position: 'absolute',
  },
  topImage: {
    top: 150,
    left: 125,
  },
  bottomImage: {
    top: 650,
    left: 125
  },
  leftImage: {
    top: 425,
  },
  rightImage: {
    top: 425,
    left: 225
  },

  //MODAL
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonConfirm: {
    backgroundColor: '#2196F3',
  },
  buttonCancel: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
