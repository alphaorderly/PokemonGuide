import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomDrawer = props => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{flex: 1, marginBottom: insets.bottom, marginLeft: insets.left, marginRight: insets.right}}>
        <DrawerContentScrollView
            {...props}
        >
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={Styles.FixedBottomView}>
          <TouchableOpacity style={Styles.FixedBottomButton}>
            <Ionicons name="settings" size={24}/>
            <Text style={Styles.FixedBottomText}>설정</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default CustomDrawer;

const Styles = StyleSheet.create({
  FixedBottomView: {
    margin: 30,
  },
  FixedBottomButton: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 10,
  },
  FixedBottomText: {
    fontSize: 24,
    fontFamily: 'NanumSquareNeoTTF-dEb',
    marginLeft: 10,
  }
})