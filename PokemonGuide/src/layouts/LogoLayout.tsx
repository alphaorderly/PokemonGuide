import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './LogoLayoutStyle';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerNavigationProp} from '@react-navigation/drawer';

type Prop = {
  children: React.ReactNode;
  navigation: DrawerNavigationProp<any, any>;
};

const LogoLayout = (props: Prop) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...Styles.MainView,
        marginTop: insets.top,
        marginBottom: insets.bottom,
        marginLeft: insets.left,
        marginRight: insets.right,
      }}>
      <View style={Styles.LogoView}>
        <Ionicons
          size={32}
          name="reorder-three"
          style={Styles.NavIcon}
          onPress={() => {
            props.navigation.openDrawer();
          }}
        />
        <Text style={Styles.NavTitle}>POKEGUIDE</Text>
      </View>
      <ScrollView style={Styles.ContentView}>{props.children}</ScrollView>
    </View>
  );
};

export default LogoLayout;
