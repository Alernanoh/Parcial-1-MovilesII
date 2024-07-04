import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import IngresoScreen from '../Screens/IngresoScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfoScreen from '../Screens/InfoScreen';
import EditarScreen from '../Screens/EditarScreen';
import ApiScreen from '../Screens/ApiScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Bottom" component={MyTabs} />
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Data" component={IngresoScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Editar" component={EditarScreen} />
      <Tab.Screen name="Api" component={ApiScreen} />
    </Tab.Navigator>
  );
}

export default function Navigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}