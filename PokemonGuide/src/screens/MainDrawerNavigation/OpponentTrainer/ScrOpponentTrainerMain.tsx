import React from 'react';
import LogoLayout from '../../../layouts/LogoLayout';
import Styles from '../../../styles/MainDrawerNavigation/OpponentTrainer/ScrOpponentTrainerMainStyle';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Prop = {
    navigation: DrawerNavigationProp<any, any>
}

const ScrOpponentTrainerMain = (props: Prop) => {
    return (
        <LogoLayout navigation={props.navigation}>
            <View style={Styles.MainView}>
            <ImageBackground blurRadius={7} style={Styles.LargeButtonBackground} imageStyle={Styles.LargeButtonBackgroundImage} source={require('../../../../assets/images/opponentFaction/champion.jpeg')}>
                <TouchableOpacity style={Styles.LargeButton} onPress={() => {props.navigation.navigate('List', {type:'champion'});}}>
                    <Text style={Styles.MainText}>체육관</Text>
                    <Text style={Styles.SubText}>챔피언 로드</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground blurRadius={7} style={Styles.LargeButtonBackground} imageStyle={Styles.LargeButtonBackgroundImage} source={require('../../../../assets/images/opponentFaction/paldeaLeague.png')}>
                <TouchableOpacity style={Styles.LargeButton} onPress={() => {props.navigation.navigate('List', {type:'league'});}}>
                    <Text style={Styles.MainText}>팔데아 리그</Text>
                    <Text style={Styles.SubText}>결전! 포켓몬 챔피언</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground blurRadius={7} style={Styles.LargeButtonBackground} imageStyle={Styles.LargeButtonBackgroundImage} source={require('../../../../assets/images/opponentFaction/stardust.png')}>
                <TouchableOpacity style={Styles.LargeButton} onPress={() => {props.navigation.navigate('List', {type:'stardust'});}}>
                    <Text style={Styles.MainText}>스타단</Text>
                    <Text style={Styles.SubText}>스타더스트★스트리트</Text>
                </TouchableOpacity>
            </ImageBackground>
            </View>
        </LogoLayout>
    );
};

export default ScrOpponentTrainerMain;
