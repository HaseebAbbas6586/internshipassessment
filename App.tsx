

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wellcome from './Screens/Wellcome';
import Home from './Screens/Home'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
     
<Stack.Navigator >
  <Stack.Screen name='wellcome' component={Wellcome} />
  <Stack.Screen name='home' component={Home}/>

</Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


