import React, { useCallback } from 'react';
import LogoLayout from '../../../layouts/LogoLayout';
import Styles from '../../../styles/MainDrawerNavigation/OpponentTrainer/ScrOpponentTrainerMainStyle';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';

type Prop = {
    navigation: DrawerNavigationProp<any, any>
}

const ScrOpponentTrainerMain = (props: Prop) => {

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
            <Shadow style={Styles.Shadow} containerStyle={Styles.ShadowContainer} distance={4}>
                <ImageBackground blurRadius={7} style={Styles.LargeButtonBackground} imageStyle={Styles.LargeButtonBackgroundImage} source={require('../../../../assets/images/opponentFaction/champion.jpeg')}>
                    <TouchableOpacity style={Styles.LargeButton} onPress={() => {props.navigation.navigate('List', {type:'champion'});}}>
                        <Text style={Styles.MainText}>체육관</Text>
                        <Text style={Styles.SubText}>챔피언 로드</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </Shadow>
            <Shadow style={Styles.Shadow} containerStyle={Styles.ShadowContainer} distance={4}>
            <ImageBackground blurRadius={7} style={Styles.LargeButtonBackground} imageStyle={Styles.LargeButtonBackgroundImage} source={require('../../../../assets/images/opponentFaction/paldeaLeague.png')}>
                <TouchableOpacity style={Styles.LargeButton} onPress={() => {props.navigation.navigate('List', {type:'league'});}}>
                    <Text style={Styles.MainText}>팔데아 리그</Text>
                    <Text style={Styles.SubText}>결전! 포켓몬 챔피언</Text>
                </TouchableOpacity>
            </ImageBackground>
            </Shadow>
            <Shadow style={Styles.Shadow} containerStyle={Styles.ShadowContainer} distance={4}>
            <ImageBackground blurRadius={7} style={Styles.LargeButtonBackground} imageStyle={Styles.LargeButtonBackgroundImage} source={require('../../../../assets/images/opponentFaction/stardust.png')}>
                <TouchableOpacity style={Styles.LargeButton} onPress={() => {props.navigation.navigate('List', {type:'stardust'});}}>
                    <Text style={Styles.MainText}>스타단</Text>
                    <Text style={Styles.SubText}>스타더스트★스트리트</Text>
                </TouchableOpacity>
            </ImageBackground>
            </Shadow>
            </View>
        </LogoLayout>
    );
};

export default ScrOpponentTrainerMain;
