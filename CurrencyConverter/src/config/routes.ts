import {
  createAppContainer,
  createStackNavigator,
  StackNavigatorConfig,
  NavigationRouteConfigMap,
  NavigationStackScreenOptions,
  NavigationScreenProps,
} from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

export enum ROUTES {
  Home = 'Home',
  CurrencyList = 'CurrencyList',
}

const homeNavigationOptions: NavigationStackScreenOptions = {
  header: null,
};

const currencyListNavigationOptions = ({
  navigation,
}: NavigationScreenProps): NavigationStackScreenOptions => {
  const navStateParams = navigation.state.params || {};
  return {
    headerTitle: navStateParams.title || 'Currency',
  };
};

const routeConfigMap: NavigationRouteConfigMap = {
  [ROUTES.Home]: {
    screen: Home,
    navigationOptions: homeNavigationOptions,
  },
  [ROUTES.CurrencyList]: {
    screen: CurrencyList,
    navigationOptions: currencyListNavigationOptions,
  },
};

const stackNavigatorConfig: StackNavigatorConfig = {
  mode: 'modal',
};

export default createAppContainer(
  createStackNavigator(routeConfigMap, stackNavigatorConfig),
);
