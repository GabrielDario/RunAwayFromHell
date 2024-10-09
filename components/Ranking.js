import { StyleSheet, Text, View, ImageBackground, Image ,Pressable} from 'react-native';
import React, { useState, useMemo, useEffect } from 'react';
import { DataTable } from 'react-native-paper';

export function Ranking({ navigation }) {
  const [page, setPage] = useState([0]);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = useState([0]);

  const [items] = useState([
    {
      key: 1,
      place: '1º',
      name: "Jeorge",
      score: 16,
    },
    {
      key: 2,
      place: '2º',
      name: "Henrique",
      score: 16,
    },
    {
      key: 3,
      place: '3º',
      name: "Anderson",
      score: 6,
    },
    {
      key: 4,
      place: '4º',
      name: "Paulo",
      score: 6.4,
    },
    ,
    {
      key: 5,
      place: '5º',
      name: "João",
      score: 4.3,
    }
    ,
    {
      key: 6,
      place: '6º',
      name: "Lucas",
      score: 1.7,
    }
    ,
    {
      key: 7,
      place: '7º',
      name: "Thaigo",
      score: 3.8,
    }
    ,
    {
      key: 8,
      place: '8º',
      name: "Vinicus",
      score: 3.0,
    }
    ,
    {
      key: 9,
      place: '9º',
      name: "José",
      score: 4.7,
    }
    ,
    {
      key: 10,
      place: '10º',
      name: "Pedro",
      score: 3.7,
    }
  ]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (

    <View style={styles.container}>
      <ImageBackground source={require('../assets/HomeScreen.png')} resizeMode="cover" style={styles.image}>
        <Image
          style={styles.logoImg}
          source={require('../assets/logo.png')}
        />
        <View>
          <Text style={styles.title}>Ranking</Text>
          <View style={styles.center}>
          <Pressable  onPress={() => navigation.navigate('HomeScreen')} style={styles.btn}>
          <Image
            style={styles.close}
            source={require('../assets/back.png')}
          />
          </Pressable>
          </View>
       
          <DataTable>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={styles.text}>Lugar</DataTable.Title>
              <DataTable.Title >Usuário</DataTable.Title>
              <DataTable.Title numeric>Pountuação</DataTable.Title>
            </DataTable.Header>

            {items.map((item) => (
              <DataTable.Row style={styles.cont} key={item.key}>
                <DataTable.Cell>{item.place}</DataTable.Cell>
                <DataTable.Cell numeric>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric>{item.score}</DataTable.Cell>
              </DataTable.Row>
            ))}


          </DataTable>
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
  },
  close: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    top: 5
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
    borderWidth: 2,
    borderColor: 'red',
    fontColor: 'red',
  },
  cont: {
    borderWidth: 2,

    backgroundColor: '#DCDCDC',

  },
});