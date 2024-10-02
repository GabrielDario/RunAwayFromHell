import { StyleSheet, Text, View, ImageBackground, Image, Pressable,Alert } from 'react-native';
import React, { useState, useEffect } from 'react';


export function Floor01({ navigation }) {

  const [room, setRoom] = useState(1);
  const createTwoButtonAlert = () =>
    Alert.alert('Ir para o norte?', 'Confirmar?', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Ação cancelada'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const north = () => {
    createTwoButtonAlert();
    if (room == 1) {
      death();
    } else {
      console.log('Nada aqui')
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
    if (room == 1) {
      console.log('Nada aqui!');
    } else {
      setRoom(1);
      changeRoom();
    }
  };

  const west = () => {

    if (room == 1) {
      setRoom(2);
      changeRoom()
    } else {
      console.log('Nada aqui!');
    }

  };
  const changeRoom = () => {
    console.log('Você foi para sala ' + room);
  }

  const death = () => {
    console.log('Você morreu!');
    setRoom(1);
  }
  return (

    <View style={styles.container}>

      <ImageBackground source={require('../img/Floor01.png')} resizeMode="cover">
        <View>
          <Text style={styles.title}>Andar : 01/10</Text>
          <Text style={styles.title}>Sala : <Text style={styles.subtitle}>{room}</Text></Text>

          <View style={styles.fundo}>
            <Image source={require('../img/caractherFront.png')} style={styles.caracter} />
          </View>
        </View>

        <Pressable onPress={north} style={[styles.imagem, styles.topImage]} >
          <Image source={require('../img/doorN.png')} style={styles.imagem} />
        </Pressable>

        <Pressable onPress={south} style={[styles.imagem, styles.bottomImage]} >
          <Image source={require('../img/doorS.png')} style={styles.imagem} />
        </Pressable>
        <Pressable onPress={east} style={[styles.imagem, styles.rightImage]} >
          <Image source={require('../img/doorE.png')} style={styles.imagem} />
        </Pressable>
        <Pressable onPress={west} style={[styles.imagem, styles.leftImage]} >
          <Image source={require('../img/doorO.png')} style={styles.imagem} />
        </Pressable>

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
});
