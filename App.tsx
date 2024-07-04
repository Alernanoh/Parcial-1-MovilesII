import { StyleSheet, Text, View } from 'react-native'; 
import 'react-native-gesture-handler';
import Navigator from './Navigators/StackNavigator';
import WelcomeScreen from './Screens/WelcomeScreen';

export default function App() {
  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
