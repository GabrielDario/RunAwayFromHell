import { StyleSheet, Text, View, ImageBackground, Pressable ,Image} from 'react-native';

export default function App() {
  const onPressFunction = (req, res) => {
    console.log('Teste')
  }
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
          <Pressable onPress={onPressFunction} style={styles.btn}>
            <Text style={styles.textBtn}>Opções</Text>
          </Pressable>
          <Pressable onPress={onPressFunction} style={styles.btn}>
            <Text style={styles.textBtn}>Créditos</Text>
          </Pressable>
          <Pressable onPress={onPressFunction} style={styles.btn}>
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
    top:50,

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
  }
});
