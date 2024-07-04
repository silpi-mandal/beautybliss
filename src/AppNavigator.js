import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './screens/Splash';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import ItemDetails from './comon/ItemDetails';
import Main from './tabs/Main';
import Cart from './tabs/Cart';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash} />
        <Stack.Screen options={{headerShown:false}} name='LogIn' component={LogIn} />
        <Stack.Screen options={{headerShown:false}} name='SignUp' component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name='Home' component={Home} />
        <Stack.Screen options={{headerShown:false}} name='Main' component={Main} />
        <Stack.Screen options={{headerShown:false}} name='Cart' component={Cart} />
        <Stack.Screen options={{headerShown:false}} name='ItemDetails' component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
