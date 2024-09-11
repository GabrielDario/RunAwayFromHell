import { View, Text, Image, SafeAreaView } from 'react-native';

export function Ranking({ navigation }) {  
    let text123 = 'Olá amiguinhoO';
  const meuGif =
    'https://www.reactiongifs.us/wp-content/uploads/2017/11/What-Is-Love-Jim-Carrey-Edition.gif';
  return (
    <View
      style={{
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
      }}>
      <Text>Olá amigos</Text>
      <SafeAreaView>
        <Text>{text123}</Text>
      </SafeAreaView>
      <Image
        style={{ width: 250, height: 250, borderRadius: 5 }}
        source={{ uri: meuGif }}
      />
    </View>
  );
}

export default Ranking;
