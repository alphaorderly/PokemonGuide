/* eslint-disable react-hooks/exhaustive-deps */
import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import Styles from '../../../styles/MainDrawerNavigation/PokemonList/ScrPokemonListWebViewStyle';
import { Pokemon } from '../../../states/PokemonList/PokemonList';

import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';

type Prop = {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<any, any>;
};

const ScrPokemonListWebView = (props: Prop) => {

    const animation = useRef(new Animated.Value(200)).current;

    const pokemon: Pokemon = props.route.params as Pokemon;

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
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'transparent'
                }}
                onPress={() => props.navigation.pop()}
            />
            <Animated.View style={{...Styles.InnerView, transform: [{translateY: animation}]}}>
                <View style={Styles.TopView}>
                    <Text style={Styles.TopText}>{pokemon.name} 상세정보</Text>
                    <MaterialCommunity name="chevron-left" size={32} onPress={() => {webViewRef.current.goBack();}}/>
                    <MaterialCommunity name="chevron-right" size={32} onPress={() => {webViewRef.current.goForward();}}/>
                    <MaterialCommunity name="close" size={32} onPress={() => {props.navigation.pop();}}/>
                </View>
                <WebView ref={webViewRef} style={Styles.WebView} source={{ uri: 'https://namu.wiki/w/' + pokemon.name }} />
            </Animated.View>
        </View>
    );
};

export default ScrPokemonListWebView;
