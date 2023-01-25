/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import LogoLayout from '../../../layouts/LogoLayout';

import {DrawerNavigationProp} from '@react-navigation/drawer';
import {View, Text} from 'react-native';

import Styles from '../../../styles/MainDrawerNavigation/CounterList/ScrCounterListMainStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import {PokemonTypes} from '../../../consts/TypeCounter';
import CounterAnswer from '../../../components/MainDrawerNavigation/CounterList/CounterAnswer';

type Prop = {
  navigation: DrawerNavigationProp<any, any>;
};

const ScrCounterListMain = (props: Prop) => {
  const [victimOpen, setVictimOpen] = useState(false);
  const [victimValue, setVictimValue] = useState([]);
  const [hostileOpen, setHostileOpen] = useState(false);
  const [hostileValue, setHostileValue] = useState([]);
  const [items, setItems] = useState(PokemonTypes);

  return (
    <LogoLayout navigation={props.navigation} scrollable={false}>
      <Text style={Styles.TitleText}>상성 계산기</Text>
      <View style={Styles.VictimView}>
        <Text style={Styles.VictimText}>공격 당하는 포켓몬 타입</Text>
        <DropDownPicker
          open={victimOpen}
          value={victimValue}
          items={items}
          setOpen={setVictimOpen}
          setValue={value => {
            setHostileValue([]);
            setVictimValue(value);
          }}
          setItems={setItems}
          listMode={'MODAL'}
          multiple={true}
          min={0}
          max={3}
          placeholder="타입을 선택해주세요"
          mode="BADGE"
          showBadgeDot={false}
          badgeTextStyle={{
            color: 'black',
          }}
          zIndex={100}
        />
      </View>
      <View style={Styles.VictimView}>
        <Text style={Styles.VictimText}>공격 하는 포켓몬 타입</Text>
        <DropDownPicker
          open={hostileOpen}
          value={hostileValue}
          items={items}
          setOpen={setHostileOpen}
          setValue={value => {
            setHostileValue(value);
            setVictimValue([]);
          }}
          setItems={setItems}
          listMode={'MODAL'}
          multiple={true}
          min={0}
          max={1}
          placeholder="타입을 선택해주세요"
          mode="BADGE"
          showBadgeDot={false}
          badgeTextStyle={{
            color: 'black',
          }}
          zIndex={100}
        />
      </View>
      <View>
        <CounterAnswer
          types={victimValue.length === 0 ? hostileValue : victimValue}
          attacked={victimValue.length === 0 ? false : true}
        />
      </View>
    </LogoLayout>
  );
};

export default ScrCounterListMain;
