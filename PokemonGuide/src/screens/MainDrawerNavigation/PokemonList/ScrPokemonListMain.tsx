/* eslint-disable react-hooks/exhaustive-deps */
import { DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types';
import React, { useCallback, useEffect, useState } from 'react';

import Styles from '../../../styles/MainDrawerNavigation/PokemonList/ScrPokemonListMainStyle';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';
import LogoLayout from '../../../layouts/LogoLayout';

import pokemonList, { Pokemon } from '../../../states/PokemonList/PokemonList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FlatList } from 'react-native-gesture-handler';
import PokemonButton from '../../../components/MainDrawerNavigation/PokemonList/PokemonButton';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import * as Hangul from 'hangul-js';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/core';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { PokemonListSetting } from '../../../states/PokemonList/PokemonListSetting';
import { Shadow } from 'react-native-shadow-2';


type Prop = {
    navigation: NavigationProp<any, any>;
};


const ScrPokemonListMain = (props: Prop) => {

    const isFocused = useIsFocused();

    const [list, setList] = useRecoilState<Pokemon[]>(pokemonList);

    const pokemonListSetting = useRecoilValue(PokemonListSetting);

    const getFile = async () => {
        const str = await AsyncStorage.getItem('PokemonList') ?? '';
        if (str !== '') {
            setList(JSON.parse(str));
        }
        console.log('get');
    };

    const setFile = async (saveList: Pokemon[]) => {
        await AsyncStorage.setItem('PokemonList', JSON.stringify(saveList));
    };

    useEffect(() => {
        if (isFocused){
            getFile();
        }
    }, [isFocused]);

    const [textBox, setTextBox] = useState<string>('');

    const listItem = ({item}) => {
        return <PokemonButton navigation={props.navigation} item={item} setPokemon={setList} setFile={setFile}/>;
    };

    useFocusEffect(
        useCallback(() => {
          const parent = props.navigation.getParent()
          parent?.setOptions({ swipeEnabled: true })
          // It returns to the initial state.
          return () => parent?.setOptions({ swipeEnabled: false })
        }, [props.navigation])
      )

    return (
        <LogoLayout navigation={props.navigation}>
            <View style={Styles.MainView}>
                <View style={Styles.SearchView}>
                    <Shadow style={Styles.SearchShadow} containerStyle={Styles.SearchContainerShadow} distance={3} startColor='#00000022'>
                    <TextInput
                        style={Styles.SearchBar}
                        placeholder="이름을 입력하세요"
                        clearButtonMode="always"
                        value={textBox}
                        onChangeText={setTextBox}
                    />
                    </Shadow>
                    <TouchableOpacity style={Styles.SettingButton} onPress={() => {props.navigation.navigate('Setting');}}>
                        <MaterialIcon name="settings" size={30} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={list.filter(item => {
                        if (pokemonListSetting.notCaught && item.catch) {return false;}
                        if (pokemonListSetting.notSeen && item.seen) {return false;}
                        if (textBox.length === 0) {return true;}
                        return Hangul.search(item.name, textBox) >= 0 || String(item.number).startsWith(textBox);
                    })}
                    renderItem={listItem}
                />
            </View>
        </LogoLayout>
    );
};

export default ScrPokemonListMain;
