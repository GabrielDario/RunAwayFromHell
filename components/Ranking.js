import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React, { useState, useMemo, useEffect } from 'react';
import { DataTable } from 'react-native-paper';

export function Ranking({ navigation }) {
  const [page, setPage] = useState([0]);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = useState([0]);

  const [items] = useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
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
          <DataTable>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={styles.text}>Dessert</DataTable.Title>
              <DataTable.Title numeric>Calories</DataTable.Title>
              <DataTable.Title numeric>Fat</DataTable.Title>
            </DataTable.Header>

            {items.map((item) => (
              <DataTable.Row style={styles.cont} key={item.key}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
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
    borderColor: 'white',
    fontColor: 'red',
  },
  cont: {
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: '#DCDCDC',

  },
});
