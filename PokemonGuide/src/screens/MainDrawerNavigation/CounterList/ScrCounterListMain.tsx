/* eslint-disable eqeqeq */
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

  return (
    <LogoLayout navigation={props.navigation} scrollable={false}>
      <Text style={Styles.TitleText}>상성 계산기</Text>
      <View style={Styles.VictimView}>
        <Text style={Styles.VictimText}>공격 당하는 포켓몬 타입</Text>
        <DropDownPicker
          style={Styles.Dropdown}
          open={victimOpen}
          value={victimValue}
          items={PokemonTypes}
          setOpen={value => {
            if (value === true) {
              setVictimValue([]);
            }
            setVictimOpen(value);
          }}
          setValue={value => {
            setHostileValue([]);
            setVictimValue(value);
          }}
          listMode={'MODAL'}
          multiple={true}
          min={0}
          max={3}
          placeholder="타입을 선택해주세요"
          mode="BADGE"
          showBadgeDot={false}
          zIndex={100}
          modalTitle={'공격을 받는 포켓몬의 타입을 입력하세요'}
          modalAnimationType="slide"
          modalContentContainerStyle={Styles.ModalContainer}
          modalProps={{ transparent: true, presentationStyle: 'overFullScreen' }}
          modalTitleStyle={Styles.ModalTitle}
          badgeTextStyle={Styles.BadgeText}
          listItemContainerStyle={Styles.ListContainer}
          listItemLabelStyle={Styles.ListLabel}
        />
      </View>
      <View style={Styles.HostileView}>
        <Text style={Styles.HostileText}>공격 하는 포켓몬 타입</Text>
        <DropDownPicker
          style={Styles.Dropdown}
          open={hostileOpen}
          value={hostileValue}
          items={PokemonTypes}
          setOpen={value => {
            if (value === true) {
              setHostileValue([]);
            }
            setHostileOpen(value);
          }}
          setValue={value => {
            setHostileValue([]);
            setHostileValue(value);
            setVictimValue([]);
            setHostileOpen(false);
          }}
          listMode={'MODAL'}
          multiple={true}
          min={0}
          max={1}
          placeholder="타입을 선택해주세요"
          mode="BADGE"
          showBadgeDot={false}
          zIndex={100}
          modalTitle={'공격을 하는 포켓몬의 타입을 입력하세요'}
          modalAnimationType="slide"
          modalContentContainerStyle={Styles.ModalContainer}
          modalProps={{ transparent: true, presentationStyle: 'overFullScreen' }}
          modalTitleStyle={Styles.ModalTitle}
          badgeTextStyle={Styles.BadgeText}
          listItemContainerStyle={Styles.ListContainer}
          listItemLabelStyle={Styles.ListLabel}
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
