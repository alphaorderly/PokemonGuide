import React from 'react';
import LogoLayout from '../../../layouts/LogoLayout';

import {Text} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

type Prop = {
  navigation: DrawerNavigationProp<any, any>;
};

const ScrCounterListMain = (props: Prop) => {
  return (
    <LogoLayout navigation={props.navigation}>
      <Text>상성 표</Text>
    </LogoLayout>
  );
};

export default ScrCounterListMain;
