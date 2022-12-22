import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ControlPage from './components/tabnavigator';
import HomeContainer from './components/homecompnent';
import SignIn from './components/signin';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='HomePage'>
        <Stack.Screen name='Home' component={HomeContainer} />
        <Stack.Screen name='ControlPage' component={ControlPage} />

        
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop: StatusBar.currentHeight
  },
});
