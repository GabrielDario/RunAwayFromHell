import { StyleSheet, Text, View, ImageBackground, Pressable, Image, Modal, Alert, BackHandler ,
  TouchableOpacity,Clipboard
} from 'react-native';
import React, { useState, useMemo } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function App() {

  const language = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Português',
      value: 'pt'
    },
    {
      id: '2',
      label: 'English',
      value: 'en'
    }
  ]), []);
  const sound = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Ligado',
      value: 'on'
    },
    {
      id: '2',
      label: 'Desligado',
      value: 'off'
    }
  ]), []);
  const onPressFunction = (req, res) => {
    console.log('OnPress')
  }

  const [selectLanguage, setSelectLanguage] = useState();
  const [selectSound, setSelectSound] = useState();

  const [modalApoiar, setModalApoiar] = useState(false);
  const [modalCreditos, setModalCreditos] = useState(false);
  const [modalOpcoes, setModalOpcoes] = useState(false);

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


          {/* MODAL APOIAR */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalApoiar}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalApoiar(!modalApoiar);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Apoiar</Text>
                <Text></Text>
                <Text>CPF pixx</Text>
                <TouchableOpacity onPress={() => Clipboard.setString('11236613910')}>
                  <View>
                    <Text style={{ color: 'blue'}}>
                      11236613910
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text></Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalApoiar(!setModalApoiar)}>
                  <Text style={styles.textStyle}>x</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* FIM DO MODAL APOIAR */}

          <Pressable
            style={[styles.btn]}
            onPress={() => setModalApoiar(!modalApoiar)}>
            <Text style={styles.textBtn}>Apoiar</Text>
          </Pressable>
          <Pressable onPress={onPressFunction} style={styles.btn}>
            <Text style={styles.textBtn}>Ranking</Text>
          </Pressable>


          {/* MODAL OPÇÕES */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpcoes}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalOpcoes(!modalOpcoes);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Idioma: </Text>
                <RadioGroup
                  radioButtons={language}
                  onPress={setSelectLanguage}
                  selectedId={selectLanguage}
                />
                <Text></Text>
                <Text style={styles.modalText}>Som : </Text>
                <RadioGroup
                  radioButtons={sound}
                  onPress={setSelectSound}
                  selectedId={selectSound}
                />
                <Text></Text>

                <Pressable
                  style={[styles.button]}
                  onPress={() => setModalOpcoes(!modalOpcoes)}>
                  <Text style={styles.textStyle}>Salvar</Text>
                </Pressable>
                <Text></Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalOpcoes(!modalOpcoes)}>
                  <Text style={styles.textStyle}>x</Text>
                </Pressable>


              </View>
            </View>
          </Modal>
          {/* FIM DO MODAL OPÇÕES */}
          <Pressable
            style={[styles.btn]}
            onPress={() => setModalOpcoes(!modalOpcoes)}>
            <Text style={styles.textBtn}>Opções</Text>
          </Pressable>

          {/* MODAL CRÉDITOS */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalCreditos}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalCreditos(!modalCreditos);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Feito por Gabriel Dario da Rosa</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalCreditos(!setModalCreditos)}>
                  <Text style={styles.textStyle}>x</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* FIM DO MODAL CRÉDITOS */}

          <Pressable
            style={[styles.btn]}
            onPress={() => setModalCreditos(!modalCreditos)}>
            <Text style={styles.textBtn}>Créditos</Text>
          </Pressable>
          <Pressable onPress={() => BackHandler.exitApp()} style={styles.btn}>
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
