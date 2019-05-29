import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import { Svg, LinearGradient } from "expo";
import { Feather } from "@expo/vector-icons";
import { Dumbbell, Inbox, Stats, User } from "../assets/images/components";

const SVG_MAP = {
  TREINO: Dumbbell,
  DADOS: Stats,
  MSG: Inbox,
  PERFIL: User
};

const Screen = Dimensions.get("screen");
const proportionalHeight = height => height * (Screen.width / 413);
const NAV_HEIGHT = proportionalHeight(88);
const FAB_SIZE = proportionalHeight(68);

export class CustomBottomNavigation extends React.Component {
  renderFAB = () => {
    return (
      <LinearGradient
        key="TabBarButton-FAB"
        colors={["#7B60E1", "#434489"]}
        useAngle={true}
        angle={45}
        angleCenter={{ x: -0.0868, y: 0.6246 }}
        style={{
          width: FAB_SIZE,
          height: FAB_SIZE,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: FAB_SIZE / 2,
          zIndex: 9,
          marginBottom: proportionalHeight(60)
        }}
      >
        <Feather name="menu" size={28} color="#fff" />
      </LinearGradient>
    );
  };

  renderTabBarButton = (route, routeIndex) => {
    if (route === "FAB") {
      return this.renderFAB();
    }
    const { navigation } = this.props;
    // const focused = index === routeIndex;
    const { routeName } = route.routes[0];
    const SvgComponent = SVG_MAP[routeName];
    return (
      <TouchableOpacity
        key={`TabBarButton-${routeIndex}`}
        style={styles.tabBarButton}
        onPress={() => {
          navigation.navigate(routeName);
        }}
      >
        <View style={{ aspectRatio: 1, height: 25 }}>
          <SvgComponent />
        </View>
        <Text style={{ color: "#6155CC" }}>{routeName}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      navigation: {
        state: { routes }
      }
    } = this.props;
    const routesWithFAB = routes
      .slice(0, 2)
      .concat("FAB")
      .concat(routes.slice(2));
    const tabBarButtons = routesWithFAB.map(this.renderTabBarButton);
    return (
      <View style={styles.absolute}>
        <View style={styles.container}>
          {tabBarButtons}
          <View style={styles.svg}>
            <Svg
              height={NAV_HEIGHT + 80}
              width={Screen.width + 80}
              viewBox={`0 0 493 168`}
            >
              <Svg.Path
                d="M40 45.1569H182.315C191.237 45.1569 199.059 51.0759 202.343 59.3715C207.305 71.9049 215.727 89.1018 226.396 95.2464C232.896 98.9903 253.664 106.244 271.585 92.4082C279.084 86.6182 287.441 69.835 292.708 57.9216C296.071 50.3125 303.504 45.1569 311.823 45.1569H453V133H40V45.1569Z"
                fill="#fff"
              />
            </Svg>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: proportionalHeight(NAV_HEIGHT),
    alignItems: "center",
    justifyContent: "space-around"
  },
  absolute: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  },
  svg: {
    backgroundColor: "transparent",
    position: "absolute",
    left: -40,
    right: 40,
    bottom: -40
  },
  tabBarButton: {
    zIndex: 1,
    alignItems: "center",
    flex: 1
  }
});
