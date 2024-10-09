import React, { useState } from 'react';
import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';

export function Teste() {
    const [isTrue, setIsTrue] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = async () => {
        setModalVisible(true);
    };

    const handleConfirm = () => {
        setIsTrue(true);
        setModalVisible(false);  // Fecha o modal após a confirmação
    };

    const handleCancel = () => {
        setModalVisible(false);  // Fecha o modal sem alterar o valor
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Valor atual: {isTrue ? 'Verdadeiro' : 'Falso'}</Text>

            <Pressable
                onPress={handlePress}
                style={{ padding: 10, backgroundColor: 'blue', marginTop: 20 }}
            >
                <Text style={{ color: 'white' }}>Clique para alterar</Text>
            </Pressable>

            {/* Modal de confirmação */}
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={handleCancel}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Deseja realmente alterar o valor?</Text>

                        <View style={styles.modalButtons}>
                            <Pressable
                                style={[styles.button, styles.buttonCancel]}
                                onPress={handleCancel}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonConfirm]}
                                onPress={handleConfirm}
                            >
                                <Text style={styles.textStyle}>Confirmar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    buttonCancel: {
        backgroundColor: 'red',
    },
    buttonConfirm: {
        backgroundColor: 'green',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
});
