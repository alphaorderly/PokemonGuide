import React from 'react';
import BackLayout from '../../../layouts/BackLayout';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { ChampionList, StardustList } from '../../../consts/OpponentTrainers';
import ChampionButton from '../../../components/MainDrawerNavigation/OpponentTrainer/TrainerButton';

type Prop = {
    navigation: StackNavigationProp<any, any>,
    route: RouteProp<any, any>
}

const ScrOpponentTrainerList = (props: Prop) => {

    const params = props.route.params!;

    let data: string[];

    switch (params.type) {
        case 'champion':
            data = ChampionList;
            break;
        case 'stardust':
            data = StardustList;
            break;
        default:
            data = [];
            break;
    }

    return (
        <BackLayout navigation={props.navigation}>
            <FlatList
                data={data}
                keyExtractor={item => item}
                renderItem={({item}) => {
                    return <ChampionButton name={item} navigation={props.navigation}/>;
                }}
            />
        </BackLayout>
    );
};

export default ScrOpponentTrainerList;
