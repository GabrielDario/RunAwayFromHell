import { StyleSheet, Text, View, ImageBackground, Image ,Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';

export function Floor01({ }) {
 
  return (

    <View style={styles.container}>
      <ImageBackground source={require('../assets/HomeScreen.png')} resizeMode="cover" style={styles.image}>
        <Image
          style={styles.logoImg}
          source={require('../assets/logo.png')}
        />
        <View>
          <Text style={styles.title}>Andar 01</Text>
          <View style={styles.center}>
    
          </View>
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
