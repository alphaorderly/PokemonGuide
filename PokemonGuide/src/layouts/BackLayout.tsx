import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Styles from './BackLayoutStyle';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import Material from 'react-native-vector-icons/MaterialIcons'

type Prop = {
  navigation: StackNavigationProp<any, any>;
  scrollable?: boolean;
  children?: React.ReactNode;
};

const BackLayout = (props: Prop) => {
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
          <Material
            size={32}
            name="arrow-back"
            style={Styles.NavIcon}
            onPress={() => {
              props.navigation.pop();
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
          <Material
            size={32}
            name="arrow-back"
            style={Styles.NavIcon}
            onPress={() => {
              props.navigation.pop();
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

export default BackLayout;
