import * as React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const berandaRoute = () => <Text>beranda</Text>;

const pesananRoute = () => <Text>pesanan</Text>;

const pembatalanRoute = () => <Text>pembatalan</Text>;

const navbar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "beranda", title: "beranda", icon: "queue-music" },
    { key: "pesanan", title: "pesanan", icon: "album" },
    { key: "pembatalan", title: "pembatalan", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    beranda: berandaRoute,
    pesanan: pesananRoute,
    pembatalan: pembatalanRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default navbar;