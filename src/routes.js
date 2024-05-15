import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/home/index';
import DatesImc from './pages/datesimc';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

export function Routes() {
    return (
        <Tabs.Navigator>
          <Tabs.Screen name='Home' component={Home} options={ { tabBarShowLabel: false,  headerShown: false, tabBarIcon: ({focused, size, color }) =>{
            if(focused){
                return <Ionicons size={size} color={color} name='home'/>
            }else{
                return <Ionicons size={size} color={color} name='home-outline' />
            }
          }}}/>  
          <Tabs.Screen name='DatesImc' component={DatesImc} options={ { tabBarShowLabel: false, headerShown: false, tabBarIcon: ({focused, size, color }) =>{
            if(focused){
              return <Ionicons size={size} color={color} name='lock-closed'/>
            }else{
              return <Ionicons size={size} color={color} name='lock-closed-outline' />
            }
          }}} />
        </Tabs.Navigator>
    );
}

