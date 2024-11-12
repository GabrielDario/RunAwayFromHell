import { StyleSheet, Text, View, ImageBackground, Image, Pressable, Modal } from 'react-native'
import { useState, useEffect } from 'react';

export const ModelRoom = ({ background, floor, room, handleConfirm, actionPhrase, openRoom, life, checkRoom }) => {
    useEffect(() => {
        explainRoom();
    }, []);

    const explainRoom = () => {
        if (floor == 3) {
            setModalVisible(true);
        }
    }
    const [modalVisible, setModalVisible] = useState(false);

    const checkOpen = (direction) => {
        if (openRoom) {
            handleConfirm(direction)
        }
    };
    return (

        <View style={styles.container}>

            <ImageBackground source={background} resizeMode="cover">
                <View>
                    <View style={styles.status}>
                        <Text style={styles.title}>Andar : <Text style={styles.subtitle}>{floor}/10</Text> </Text>
                        <Text style={styles.title}>Sala: <Text style={styles.subtitle}>{room}</Text></Text>
                        {floor >= 3 ?
                            <>
                                <Text style={styles.title}>Vida :<Text style={styles.subtitle}>{life}</Text></Text>
                                <Text style={styles.title}>Objetos :</Text>
                                <Text style={styles.object}>
                                    <Image source={require('../img/pickaxe.png')} />
                                </Text>
                            </>


                            : <></>
                        }
                    </View>
                    {/* ------------------- */}
                    <View style={styles.statusLeft}>
                        <Image source={require('../img/cure.png')} />
                        <Pressable onPress={() => { checkRoom(room); setModalVisible(true) }}>
                            <Image source={require('../img/magGlass.png')} style={styles.glass} />
                        </Pressable>
                    </View>

                    <View style={styles.fundo}>
                        <Image source={require('../img/caractherFront.png')} style={styles.caracter} />
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>{actionPhrase}</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => { checkOpen(); setModalVisible(!modalVisible) }}
                                    >
                                        <Text style={styles.textStyle}>OK</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>

                <Pressable onPress={() => { handleConfirm('north'); setModalVisible(true) }}
                    style={[styles.imagem, styles.topImage]} >
                    <Image source={require('../img/doorN.png')} style={styles.imagem} />
                </Pressable>

                <Pressable onPress={() => { handleConfirm('south'); setModalVisible(true); }}
                    style={[styles.imagem, styles.bottomImage]} >
                    <Image source={require('../img/doorS.png')} style={styles.imagem} />
                </Pressable>

                <Pressable onPress={() => { handleConfirm('right'); setModalVisible(true) }}
                    style={[styles.imagem, styles.rightImage]} >
                    <Image source={require('../img/doorE.png')} style={styles.imagem} />
                </Pressable>
                <Pressable onPress={() => { handleConfirm('left'); setModalVisible(true) }}
                    style={[styles.imagem, styles.leftImage]} >
                    <Image source={require('../img/doorO.png')} style={styles.imagem} />
                </Pressable>

            </ImageBackground>
        </View>
    )
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
        // bottom: 00
    },
    status: {
        flexDirection: 'column'
    },
    statusLeft: {
        right: 25,
        top: 50,
        position: 'absolute',
    },
    glass: {
        marginTop: 50
    },
    object: {
        // backgroundColor: 'red',
        width: 175,
        height: 175,
        top: 25
    },
    imagem: {
        width: 175,
        height: 175,
        position: 'absolute',
    },
    topImage: {
        top: 50,
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
    buttonClose: {
        backgroundColor: 'green',
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


