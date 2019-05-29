import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";
import { ScreenC } from "../screens/ScreenC";
import { ScreenD } from "../screens/ScreenD";
import { CustomBottomNavigation } from "../components/CustomBottomNavigation";

const StackA = createStackNavigator(
  {
    TREINO: {
      screen: ScreenA,
      navigationOptions: {
        header: null,
      }
    }
  }
);

const StackB = createStackNavigator(
  {
    DADOS: {
      screen: ScreenB,
      navigationOptions: {
        header: null,
      }
    }
  }
);

const StackC = createStackNavigator(
  {
    MSG: {
      screen: ScreenC,
      navigationOptions: {
        header: null,
      }
    }
  }
);

const StackD = createStackNavigator(
  {
    PERFIL: {
      screen: ScreenD,
      navigationOptions: {
        header: null,
      }
    }
  }
);
export default createBottomTabNavigator(
  {
    StackA,
    StackB,
    StackC,
    StackD
  },
  {
    tabBarComponent: CustomBottomNavigation,
    tabBarPosition: "bottom",
    animationEnabled: false,
  }
);
