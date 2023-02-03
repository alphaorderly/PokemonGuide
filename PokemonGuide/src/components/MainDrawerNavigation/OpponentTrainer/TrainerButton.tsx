import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Trainers } from '../../../consts/OpponentTrainers';
import { Shadow } from '../../../themes/shadows';
import { PokemonTypes } from '../../../consts/TypeCounter';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Prop = {
    navigation: StackNavigationProp<any, any>
    name: string,
}

const ChampionButton = (props: Prop) => {

    const item = Trainers[props.name]

    return (
        <ImageBackground blurRadius={10} style={Styles.MainImageStyle} imageStyle={Styles.MainImage} source={item.background}>
            <TouchableOpacity style={Styles.MainView} onPress={() => {props.navigation.navigate('Detail', {name: props.name})}}>
                <Image style={Styles.MainIcon} source={item.icon}/>
                <View style={Styles.DescriptionView}>
                    <Text style={Styles.DescriptionJob}>{props.name}</Text>
                    <Text style={Styles.DescriptionName}>{item.name}</Text>
                    {
                        item.type.map(elem => {
                            return <Text key={elem} style={{...Styles.DescriptionType}}>{PokemonTypes[elem].label}</Text>;
                        })
                    }
                </View>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default ChampionButton;

const Styles = StyleSheet.create({
    MainImageStyle: {
        margin: 10,
        height: 150,
        ...Shadow,
    },
    MainImage: {
        borderRadius: 15,
    },
    MainView: {
        height: 150,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFFAA',
        padding: 20,
    },
    MainIcon: {
        height: 64,
        width: 64,
    },
    DescriptionView: {
        
    },
    DescriptionJob: {
        fontSize: 30,
        fontFamily: 'NanumSquareNeoTTF-eHv',
        padding: 4,
        textAlign: 'right',
    },
    DescriptionName: {
        fontSize: 25,
        fontFamily: 'NanumSquareNeoTTF-cBd',
        padding: 4,
        textAlign: 'right',
    },
    DescriptionType: {
        fontSize: 24,
        fontFamily: 'DNFBitBitTTF',
        padding: 4,
        textAlign: 'right',
    }
})