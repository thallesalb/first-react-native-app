import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login'
import Home from './Home'

const MainNav = createStackNavigator ({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'home'
        }
    }
})

export default createAppContainer(MainNav)