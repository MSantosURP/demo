import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Screens/HomeScreen';
import { Box, NativeBaseProvider, Text } from 'native-base';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import NotVerifyScreen from './src/Screens/NotVerifyScreen';

export default function App() {
  return (
    <NativeBaseProvider>
    <HomeScreen/>
  </NativeBaseProvider>
  );
}
