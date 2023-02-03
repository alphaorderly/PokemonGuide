import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './LogoLayoutStyle';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerNavigationProp} from '@react-navigation/drawer';

type Prop = {
  navigation: DrawerNavigationProp<any, any>;
  scrollable?: boolean;
  children?: React.ReactNode;
};

const LogoLayout = (props: Prop) => {
  const insets = useSafeAreaInsets();

  if (props.scrollable) {
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
          <Text style={Styles.NavTitle}>
            <Text style={{color: '#FF2400'}}>SCARLET</Text>{' '}
            <Text style={{color: '#8F00FF'}}>VIOLET</Text> GUIDE
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={Styles.ContentView}>{props.children}</ScrollView>
      </View>
    );
  } else {
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
          <Text style={Styles.NavTitle}>
            <Text style={{color: '#FF2400'}}>SCARLET</Text>{' '}
            <Text style={{color: '#8F00FF'}}>VIOLET</Text> GUIDE
          </Text>
        </View>
        <View style={Styles.ContentView}>{props.children}</View>
      </View>
    );
  }
};

export default LogoLayout;
