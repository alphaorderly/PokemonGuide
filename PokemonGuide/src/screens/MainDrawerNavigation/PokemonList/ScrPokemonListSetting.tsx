/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Switch, Text, View, Animated, TouchableOpacity, Alert } from 'react-native';
import { PokemonListSetting } from '../../../states/PokemonList/PokemonListSetting';
import { useRecoilState, useRecoilValue } from 'recoil';
import PokemonList from '../../../states/PokemonList/PokemonList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../../../styles/MainDrawerNavigation/PokemonList/ScrPokemonListSettingStyle';
import { StackNavigationProp } from '@react-navigation/stack';

type Prop = {
    navigation: StackNavigationProp<any, any>;
};

const ScrPokemonListSetting = (props: Prop) => {

    const [pokemonListSetting, setPokemonListSetting] = useRecoilState(PokemonListSetting);

    const pokemonList = useRecoilValue(PokemonList);

    const [notCaught, setNotCaught] = useState<Boolean>(pokemonListSetting.notCaught);

    const [notSeen, setNotSeen] = useState<Boolean>(pokemonListSetting.notSeen);


    const setFile = async () => {
        await AsyncStorage.setItem('PokemonList', JSON.stringify(pokemonList.map(item => {item.catch = false; item.seen = false; return item;})));
    };

    const animation = useRef(new Animated.Value(-200)).current;

    useEffect(() => {
        Animated.spring(
            animation,
            {
                toValue: 0,
                delay: 200,
                speed: 0.05,
                bounciness: 0.005,
                useNativeDriver: true,
            }
        ).start();
    }, []);

    return (
        <View style={Styles.MainView}>
            <Animated.View style={{...Styles.InnerView, transform: [{translateY: animation}]}}>
                <View style={Styles.TopView}>
                    <Text style={Styles.TopText}>설정</Text>
                    <View style={Styles.TopCloseView} onTouchStart={() => {props.navigation.pop();}}>
                        <Text style={Styles.TopClose}>적용하기</Text>
                    </View>
                </View>
                <View style={Styles.SettingItemView}>
                    <Text style={Styles.SettingItemText}>안 잡은 포켓몬만 보기</Text>
                    <Switch
                        value={notCaught}
                        onValueChange={(val) => {
                            setNotCaught(val);
                            setPokemonListSetting(
                                prev => {
                                prev.notCaught = val;
                                return prev;
                            });
                        }}
                    />
                </View>
                <View style={Styles.SettingItemView}>
                    <Text style={Styles.SettingItemText}>안 본 포켓몬만 보기</Text>
                    <Switch
                        value={notSeen}
                        onValueChange={(val) => {
                            setNotSeen(val);
                            setPokemonListSetting(
                                prev => {
                                prev.notSeen = val;
                                return prev;
                            });
                        }}
                    />
                </View>
                <View style={Styles.SettingItemView}>
                    <Text style={Styles.SettingItemText}>도감 초기화 하기</Text>
                    <TouchableOpacity style={Styles.SettingItemButton} onPress={() => {
                        Alert.alert('정말 초기화 하시겠습니까?', '도감이 초기화됩니다.', [
                            {
                                text: '취소',
                                onPress: () => {},
                                style: 'default',
                            },
                            {
                                text: '확인',
                                onPress: async () => {await setFile();props.navigation.navigate('Main');},
                                style: 'cancel',
                            },
                        ]);
                    }}>
                        <Text style={Styles.SettingItemButtonText}>초기화</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
};

export default ScrPokemonListSetting;

