
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Pages
import Homescreen from './pages/Homescreen';
import Loginscreen from './pages/Loginscreen';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
     
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Loginscreen} />
          <Stack.Screen name="Home" component={Homescreen} />
        </Stack.Navigator>
     
    </NavigationContainer>
  );
}


