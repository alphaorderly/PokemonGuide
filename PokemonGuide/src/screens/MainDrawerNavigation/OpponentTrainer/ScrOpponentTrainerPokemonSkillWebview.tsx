/* eslint-disable react-hooks/exhaustive-deps */
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

import Styles from '../../../styles/MainDrawerNavigation/OpponentTrainer/ScrOpponentTrainerPokemonSkillWebviewStyle';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';
import { Skill } from '../../../consts/PokemonSkills';

type Prop = {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
};

const ScrOpponentTrainerPokemonSkillWebview = (props: Prop) => {

    const animation = useRef(new Animated.Value(200)).current;

    const skill: Skill = props.route.params!.skill;

    const webViewRef = useRef(null)

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }
        ).start();
    }, []);

    return (
        <View style={Styles.MainView}>
            <Animated.View style={{...Styles.InnerView, transform: [{translateY: animation}]}}>
                <View style={Styles.TopView}>
                    <Text style={Styles.TopText}>{skill.name} 상세정보</Text>
                    <MaterialCommunity name="chevron-left" size={32} onPress={() => {webViewRef.current.goBack();}}/>
                    <MaterialCommunity name="chevron-right" size={32} onPress={() => {webViewRef.current.goForward();}}/>
                    <MaterialCommunity name="close" size={32} onPress={() => {props.navigation.pop();}}/>
                </View>
                <WebView ref={webViewRef} style={Styles.WebView} source={{ uri: 'https://pokemon.fandom.com/ko/wiki/' + skill.name }} />
            </Animated.View>
        </View>
    );
};

export default ScrOpponentTrainerPokemonSkillWebview;
