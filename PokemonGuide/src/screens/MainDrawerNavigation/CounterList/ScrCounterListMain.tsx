
import React, {useCallback, useState} from 'react';
import LogoLayout from '../../../layouts/LogoLayout';

import {DrawerNavigationProp} from '@react-navigation/drawer';
import {View, Text} from 'react-native';

import Styles from '../../../styles/MainDrawerNavigation/CounterList/ScrCounterListMainStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import {PokemonTypes} from '../../../consts/TypeCounter';
import CounterAnswer from '../../../components/MainDrawerNavigation/CounterList/CounterAnswer';
import { useFocusEffect } from '@react-navigation/native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { Shadow } from 'react-native-shadow-2';
import CounterListItem from '../../../components/MainDrawerNavigation/CounterList/CounterListItem';

type Prop = {
  navigation: DrawerNavigationProp<any, any>;
};

const ScrCounterListMain = (props: Prop) => {

  useFocusEffect(
    useCallback(() => {
      props.navigation.setOptions({ swipeEnabled: true });
      return () => props.navigation.setOptions({ swipeEnabled: false });
    }, [props.navigation])
  );

  const [victimOpen, setVictimOpen] = useState<boolean>(false);
  const [victimValue, setVictimValue] = useState<number[]>([]);
  const [hostileOpen, setHostileOpen] = useState<boolean>(false);
  const [hostileValue, setHostileValue] = useState<number[]>([]);

  return (
    <LogoLayout navigation={props.navigation} scrollable={false}>
      <Text style={Styles.TitleText}>상성 계산기</Text>
      <View style={Styles.VictimView}>
        <Text style={Styles.VictimText}>공격 당하는 포켓몬 타입</Text>
        <Shadow
          distance={3}
        >
        <DropDownPicker
          schema={{
            icon: 'pickerIcon',
          }}
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
          selectedItemContainerStyle={Styles.SelectedListContainer}
          selectedItemLabelStyle={Styles.SelectedListLabel}
          showArrowIcon={false}
          showTickIcon={false}
          CloseIconComponent={({style}) => <Material name='close' size={32} style={style} />}
          flatListProps={{  contentContainerStyle: Styles.WholeList, numColumns: 2, }}
          placeholderStyle={Styles.Placeholder}
          searchContainerStyle={{
            borderBottomWidth: 0,
          }}
          renderListItem={p => <CounterListItem {...p} />}
        /> 
        </Shadow>
      </View>
      <View style={Styles.HostileView}>
        <Text style={Styles.HostileText}>공격 하는 포켓몬 타입</Text>
        <Shadow
          distance={3}
        >
        <DropDownPicker
          schema={{
            icon: 'pickerIcon',
          }}
          style={Styles.Dropdown}
          open={hostileOpen}
          value={hostileValue}
          items={PokemonTypes}
          setOpen={(value) => {
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
          selectedItemContainerStyle={Styles.SelectedListContainer}
          selectedItemLabelStyle={Styles.SelectedListLabel}
          flatListProps={{ style: Styles.WholeList, numColumns: 2, }}
          showArrowIcon={false}
          showTickIcon={false}
          CloseIconComponent={({style}) =><Material name='close' size={32} style={style} />}
          placeholderStyle={Styles.Placeholder}
          searchContainerStyle={{
            borderBottomWidth: 0,
          }}
          renderListItem={p => <CounterListItem {...p} />}
        />
        </Shadow>
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
