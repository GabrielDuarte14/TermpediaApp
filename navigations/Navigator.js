import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Detail from '../screens/Home';


export default function App (){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}