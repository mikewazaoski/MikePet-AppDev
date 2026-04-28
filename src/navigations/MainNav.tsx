import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';

// screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ROUTES.HOME} 
                component={HomeScreen} 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={ROUTES.PROFILE} 
                component={ProfileScreen} 
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigation;

