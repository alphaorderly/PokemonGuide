import React from 'react';

import Styles from '../../../styles/MainDrawerNavigation/OpponentTrainer/ScrOpponentTrainerDetailStyle';

import { Image, ImageBackground, Text, View } from 'react-native';
import BackLayout from '../../../layouts/BackLayout';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Trainers } from '../../../consts/OpponentTrainers';
import FightCard from '../../../components/MainDrawerNavigation/OpponentTrainer/FightCard';

type Prop = {
    navigation: StackNavigationProp<any, any>
    route: RouteProp<any, any>
}

const ScrOpponentTrainerDetail = (props: Prop) => {

    const params = props.route.params!;

    const trainer = Trainers[params.name];

    return (
        <BackLayout navigation={props.navigation} scrollable={true}>
            <View style={Styles.MainView}>
                <ImageBackground blurRadius={8} imageStyle={Styles.DescriptionBackground} source={trainer.background}>
                    <View style={Styles.DescriptionBackgroundView}>
                        <View>
                            <Text style={Styles.JobText}>{params.name}</Text>
                            <Text style={Styles.NameText}>{trainer.name}</Text>
                        </View>
                        <View>
                            <Image source={trainer.icon} style={Styles.DescriptionIcon} />
                        </View>
                    </View>
                </ImageBackground>
                {
                    trainer.fight.map(
                        (item, index) => {
                            return <FightCard fight={item} key={index}/>;
                        }
                    )
                }
            </View>
        </BackLayout>
    )
}

export default ScrOpponentTrainerDetail