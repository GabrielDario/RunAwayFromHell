import { StyleSheet, Text, View, ImageBackground, Pressable, Image, Modal,Alert ,BackHandler } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const onPressFunction = (req, res) => {
    console.log('OnPress')
  }
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/HomeScreen.png')} resizeMode="cover" style={styles.image}>
        <Image
          style={styles.logoImg}
          source={require('./assets/logo.png')}
        />
        <View style={styles.menus}>
          <Pressable onPress={onPressFunction} style={styles.btn}>
            <Text style={styles.textBtn}>Novo Jogo</Text>
          </Pressable>
          <Pressable onPress={onPressFunction} style={styles.btn}>
            <Text style={styles.textBtn}>Apoiar</Text>
          </Pressable>
          <Pressable onPress={onPressFunction} style={styles.btn}>
            <Text style={styles.textBtn}>Ranking</Text>
          </Pressable>

           {/* MODAL OPÇÕES */}
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>OPCOESS</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>x</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* FIM DO MODAL OPÇÕES */}
          <Pressable
              style={[styles.btn]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textBtn}>Opções</Text>
            </Pressable>

          {/* MODAL CRÉDITOS */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Feito por Gabriel Dario da Rosa</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>x</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* FIM DO MODAL CRÉDITOS */}

          <Pressable
              style={[styles.btn]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textBtn}>Créditos</Text>
            </Pressable>
          <Pressable onPress={()=> BackHandler.exitApp()} style={styles.btn}>
            <Text style={styles.textBtn}>Sair</Text>
          </Pressable>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
  },
  logoImg: {
    top: 50,

  },
  menus: {
    top: 100
  },
  btn: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20
  },
  textBtn: {
    lineHeight: 60,
    fontWeight: 'bold',
    color: 'yellow',
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
  }, 
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

  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
