import { createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from './HomeDrawer'
import Profile from './Profile'
import Settings from './Settings'

const myDrawer = createDrawerNavigator({
    Home: Home,
    Profile: Profile,
    Settings: Settings
})

export default createAppContainer(myDrawer)