import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'; 
import { handleConfirm } from '../components/Floor01.js'; 
export const ModelRoom = ({background,floor, room,handleConfirm}) => {

    return (
        <View style={styles.container}>

            <ImageBackground source={background} resizeMode="cover"> 
                <View>
                    <Text style={styles.title}>Andar : <Text style={styles.subtitle}>{floor}/10</Text> </Text>
                    <Text style={styles.title}>Sala : <Text style={styles.subtitle}>{room}</Text></Text>

                    <View style={styles.fundo}>
                        <Image source={require('../img/caractherFront.png')} style={styles.caracter} />
                    </View>
                </View>

                <Pressable onPress={() => handleConfirm(direction = 'north')} style={[styles.imagem, styles.topImage]} >
                    <Image source={require('../img/doorN.png')} style={styles.imagem} />
                </Pressable>

                <Pressable onPress={() => handleConfirm(direction = 'south')} style={[styles.imagem, styles.bottomImage]} >
                    <Image source={require('../img/doorS.png')} style={styles.imagem} />
                </Pressable>
                <Pressable onPress={() => handleConfirm(direction = 'right')}
                    style={[styles.imagem, styles.rightImage]} >
                    <Image source={require('../img/doorE.png')} style={styles.imagem} />
                </Pressable>
                <Pressable onPress={() => handleConfirm(direction = 'left')}
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


