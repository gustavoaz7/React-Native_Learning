import {
  createAppContainer,
  createStackNavigator,
  StackNavigatorConfig,
  NavigationRouteConfigMap,
  NavigationStackScreenOptions,
  NavigationScreenProps,
} from 'react-navigation';
// @ts-ignore
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

export enum ROUTES {
  Home = 'Home',
  CurrencyList = 'CurrencyList',
  Options = 'Options',
  Themes = 'Themes',
}

/**
 * Home Stack
 */
const homeNavigationOptions: NavigationStackScreenOptions = {
  header: null,
};
const optionsNavigationOptions: NavigationStackScreenOptions = {
  headerTitle: ROUTES.Options,
};
const themesNavigationOptions: NavigationStackScreenOptions = {
  headerTitle: ROUTES.Themes,
};

const homeRouteConfigMap: NavigationRouteConfigMap = {
  [ROUTES.Home]: {
    screen: Home,
    navigationOptions: homeNavigationOptions,
  },
  [ROUTES.Options]: {
    screen: Options,
    navigationOptions: optionsNavigationOptions,
  },
  [ROUTES.Themes]: {
    screen: Themes,
    navigationOptions: themesNavigationOptions,
  },
};
const homeStackNavigatorConfig: StackNavigatorConfig = {
  transitionConfig: () => ({
    screenInterpolator: StackViewStyleInterpolator.forHorizontal,
  }),
};

const HomeStackNavigator = createStackNavigator(
  homeRouteConfigMap,
  homeStackNavigatorConfig,
);

/**
 * Currency Stack
 */
const currencyListNavigationOptions = ({
  navigation,
}: NavigationScreenProps): NavigationStackScreenOptions => {
  const navStateParams = navigation.state.params || {};
  return {
    headerTitle: navStateParams.title || 'Currency',
  };
};

const currencyRouteConfigMap: NavigationRouteConfigMap = {
  [ROUTES.CurrencyList]: {
    screen: CurrencyList,
    navigationOptions: currencyListNavigationOptions,
  },
};

const CurrencyStackNavigator = createStackNavigator(currencyRouteConfigMap);

/**
 * App Stack
 */
const routeConfigMap: NavigationRouteConfigMap = {
  [ROUTES.Home]: HomeStackNavigator,
  [ROUTES.CurrencyList]: CurrencyStackNavigator,
};

const stackNavigatorConfig: StackNavigatorConfig = {
  mode: 'modal',
  headerMode: 'none',
};

export default createAppContainer(
  createStackNavigator(routeConfigMap, stackNavigatorConfig),
);
