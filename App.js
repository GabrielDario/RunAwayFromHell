import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { Ranking } from './components/Ranking';
 import { registerRootComponent } from 'expo';

 registerRootComponent(App);

const Stack = createNativeStackNavigator();

function App() {  
  return (
    <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'HomeScreen',
          headerStyle: {
            backgroundColor: 'rgb(148, 37, 235)',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{
          title: 'Ranking',
          headerStyle: {
            backgroundColor: 'rgb(148, 37, 235)',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>

  
  );
}

