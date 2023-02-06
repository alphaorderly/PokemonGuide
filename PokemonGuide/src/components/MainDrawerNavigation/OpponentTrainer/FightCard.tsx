import React, { useState } from 'react';
import { FightType, Sex } from '../../../consts/OpponentTrainers';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../themes/colors';
import PokemonList from '../../../states/PokemonList/PokemonList';
import { useRecoilValue } from 'recoil';
import { PokemonModes, PokemonTypes } from '../../../consts/TypeCounter';
import { Shadow } from '../../../themes/shadows';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

type Prop = {
    fight: FightType,
    navigation: StackNavigationProp<any, any>
}

const FightCard = (props: Prop) => {

        const imagePwd = [require('../../../../assets/images/pokemonsprite/1.png'), require('../../../../assets/images/pokemonsprite/2.png'), require('../../../../assets/images/pokemonsprite/3.png'), require('../../../../assets/images/pokemonsprite/4.png'), require('../../../../assets/images/pokemonsprite/5.png'), require('../../../../assets/images/pokemonsprite/6.png'), require('../../../../assets/images/pokemonsprite/7.png'), require('../../../../assets/images/pokemonsprite/8.png'), require('../../../../assets/images/pokemonsprite/9.png'), require('../../../../assets/images/pokemonsprite/10.png'), require('../../../../assets/images/pokemonsprite/11.png'), require('../../../../assets/images/pokemonsprite/12.png'), require('../../../../assets/images/pokemonsprite/13.png'), require('../../../../assets/images/pokemonsprite/14.png'), require('../../../../assets/images/pokemonsprite/15.png'), require('../../../../assets/images/pokemonsprite/16.png'), require('../../../../assets/images/pokemonsprite/17.png'), require('../../../../assets/images/pokemonsprite/18.png'), require('../../../../assets/images/pokemonsprite/19.png'), require('../../../../assets/images/pokemonsprite/20.png'), require('../../../../assets/images/pokemonsprite/21.png'), require('../../../../assets/images/pokemonsprite/22.png'), require('../../../../assets/images/pokemonsprite/23.png'), require('../../../../assets/images/pokemonsprite/24.png'), require('../../../../assets/images/pokemonsprite/25.png'), require('../../../../assets/images/pokemonsprite/26.png'), require('../../../../assets/images/pokemonsprite/27.png'), require('../../../../assets/images/pokemonsprite/28.png'), require('../../../../assets/images/pokemonsprite/29.png'), require('../../../../assets/images/pokemonsprite/30.png'), require('../../../../assets/images/pokemonsprite/31.png'), require('../../../../assets/images/pokemonsprite/32.png'), require('../../../../assets/images/pokemonsprite/33.png'), require('../../../../assets/images/pokemonsprite/34.png'), require('../../../../assets/images/pokemonsprite/35.png'), require('../../../../assets/images/pokemonsprite/36.png'), require('../../../../assets/images/pokemonsprite/37.png'), require('../../../../assets/images/pokemonsprite/38.png'), require('../../../../assets/images/pokemonsprite/39.png'), require('../../../../assets/images/pokemonsprite/40.png'), require('../../../../assets/images/pokemonsprite/41.png'), require('../../../../assets/images/pokemonsprite/42.png'), require('../../../../assets/images/pokemonsprite/43.png'), require('../../../../assets/images/pokemonsprite/44.png'), require('../../../../assets/images/pokemonsprite/45.png'), require('../../../../assets/images/pokemonsprite/46.png'), require('../../../../assets/images/pokemonsprite/47.png'), require('../../../../assets/images/pokemonsprite/48.png'), require('../../../../assets/images/pokemonsprite/49.png'), require('../../../../assets/images/pokemonsprite/50.png'), require('../../../../assets/images/pokemonsprite/51.png'), require('../../../../assets/images/pokemonsprite/52.png'), require('../../../../assets/images/pokemonsprite/53.png'), require('../../../../assets/images/pokemonsprite/54.png'), require('../../../../assets/images/pokemonsprite/55.png'), require('../../../../assets/images/pokemonsprite/56.png'), require('../../../../assets/images/pokemonsprite/57.png'), require('../../../../assets/images/pokemonsprite/58.png'), require('../../../../assets/images/pokemonsprite/59.png'), require('../../../../assets/images/pokemonsprite/60.png'), require('../../../../assets/images/pokemonsprite/61.png'), require('../../../../assets/images/pokemonsprite/62.png'), require('../../../../assets/images/pokemonsprite/63.png'), require('../../../../assets/images/pokemonsprite/64.png'), require('../../../../assets/images/pokemonsprite/65.png'), require('../../../../assets/images/pokemonsprite/66.png'), require('../../../../assets/images/pokemonsprite/67.png'), require('../../../../assets/images/pokemonsprite/68.png'), require('../../../../assets/images/pokemonsprite/69.png'), require('../../../../assets/images/pokemonsprite/70.png'), require('../../../../assets/images/pokemonsprite/71.png'), require('../../../../assets/images/pokemonsprite/72.png'), require('../../../../assets/images/pokemonsprite/73.png'), require('../../../../assets/images/pokemonsprite/74.png'), require('../../../../assets/images/pokemonsprite/75.png'), require('../../../../assets/images/pokemonsprite/76.png'), require('../../../../assets/images/pokemonsprite/77.png'), require('../../../../assets/images/pokemonsprite/78.png'), require('../../../../assets/images/pokemonsprite/79.png'), require('../../../../assets/images/pokemonsprite/80.png'), require('../../../../assets/images/pokemonsprite/81.png'), require('../../../../assets/images/pokemonsprite/82.png'), require('../../../../assets/images/pokemonsprite/83.png'), require('../../../../assets/images/pokemonsprite/84.png'), require('../../../../assets/images/pokemonsprite/85.png'), require('../../../../assets/images/pokemonsprite/86.png'), require('../../../../assets/images/pokemonsprite/87.png'), require('../../../../assets/images/pokemonsprite/88.png'), require('../../../../assets/images/pokemonsprite/89.png'), require('../../../../assets/images/pokemonsprite/90.png'), require('../../../../assets/images/pokemonsprite/91.png'), require('../../../../assets/images/pokemonsprite/92.png'), require('../../../../assets/images/pokemonsprite/93.png'), require('../../../../assets/images/pokemonsprite/94.png'), require('../../../../assets/images/pokemonsprite/95.png'), require('../../../../assets/images/pokemonsprite/96.png'), require('../../../../assets/images/pokemonsprite/97.png'), require('../../../../assets/images/pokemonsprite/98.png'), require('../../../../assets/images/pokemonsprite/99.png'), require('../../../../assets/images/pokemonsprite/100.png'), require('../../../../assets/images/pokemonsprite/101.png'), require('../../../../assets/images/pokemonsprite/102.png'), require('../../../../assets/images/pokemonsprite/103.png'), require('../../../../assets/images/pokemonsprite/104.png'), require('../../../../assets/images/pokemonsprite/105.png'), require('../../../../assets/images/pokemonsprite/106.png'), require('../../../../assets/images/pokemonsprite/107.png'), require('../../../../assets/images/pokemonsprite/108.png'), require('../../../../assets/images/pokemonsprite/109.png'), require('../../../../assets/images/pokemonsprite/110.png'), require('../../../../assets/images/pokemonsprite/111.png'), require('../../../../assets/images/pokemonsprite/112.png'), require('../../../../assets/images/pokemonsprite/113.png'), require('../../../../assets/images/pokemonsprite/114.png'), require('../../../../assets/images/pokemonsprite/115.png'), require('../../../../assets/images/pokemonsprite/116.png'), require('../../../../assets/images/pokemonsprite/117.png'), require('../../../../assets/images/pokemonsprite/118.png'), require('../../../../assets/images/pokemonsprite/119.png'), require('../../../../assets/images/pokemonsprite/120.png'), require('../../../../assets/images/pokemonsprite/121.png'), require('../../../../assets/images/pokemonsprite/122.png'), require('../../../../assets/images/pokemonsprite/123.png'), require('../../../../assets/images/pokemonsprite/124.png'), require('../../../../assets/images/pokemonsprite/125.png'), require('../../../../assets/images/pokemonsprite/126.png'), require('../../../../assets/images/pokemonsprite/127.png'), require('../../../../assets/images/pokemonsprite/128.png'), require('../../../../assets/images/pokemonsprite/129.png'), require('../../../../assets/images/pokemonsprite/130.png'), require('../../../../assets/images/pokemonsprite/131.png'), require('../../../../assets/images/pokemonsprite/132.png'), require('../../../../assets/images/pokemonsprite/133.png'), require('../../../../assets/images/pokemonsprite/134.png'), require('../../../../assets/images/pokemonsprite/135.png'), require('../../../../assets/images/pokemonsprite/136.png'), require('../../../../assets/images/pokemonsprite/137.png'), require('../../../../assets/images/pokemonsprite/138.png'), require('../../../../assets/images/pokemonsprite/139.png'), require('../../../../assets/images/pokemonsprite/140.png'), require('../../../../assets/images/pokemonsprite/141.png'), require('../../../../assets/images/pokemonsprite/142.png'), require('../../../../assets/images/pokemonsprite/143.png'), require('../../../../assets/images/pokemonsprite/144.png'), require('../../../../assets/images/pokemonsprite/145.png'), require('../../../../assets/images/pokemonsprite/146.png'), require('../../../../assets/images/pokemonsprite/147.png'), require('../../../../assets/images/pokemonsprite/148.png'), require('../../../../assets/images/pokemonsprite/149.png'), require('../../../../assets/images/pokemonsprite/150.png'), require('../../../../assets/images/pokemonsprite/151.png'), require('../../../../assets/images/pokemonsprite/152.png'), require('../../../../assets/images/pokemonsprite/153.png'), require('../../../../assets/images/pokemonsprite/154.png'), require('../../../../assets/images/pokemonsprite/155.png'), require('../../../../assets/images/pokemonsprite/156.png'), require('../../../../assets/images/pokemonsprite/157.png'), require('../../../../assets/images/pokemonsprite/158.png'), require('../../../../assets/images/pokemonsprite/159.png'), require('../../../../assets/images/pokemonsprite/160.png'), require('../../../../assets/images/pokemonsprite/161.png'), require('../../../../assets/images/pokemonsprite/162.png'), require('../../../../assets/images/pokemonsprite/163.png'), require('../../../../assets/images/pokemonsprite/164.png'), require('../../../../assets/images/pokemonsprite/165.png'), require('../../../../assets/images/pokemonsprite/166.png'), require('../../../../assets/images/pokemonsprite/167.png'), require('../../../../assets/images/pokemonsprite/168.png'), require('../../../../assets/images/pokemonsprite/169.png'), require('../../../../assets/images/pokemonsprite/170.png'), require('../../../../assets/images/pokemonsprite/171.png'), require('../../../../assets/images/pokemonsprite/172.png'), require('../../../../assets/images/pokemonsprite/173.png'), require('../../../../assets/images/pokemonsprite/174.png'), require('../../../../assets/images/pokemonsprite/175.png'), require('../../../../assets/images/pokemonsprite/176.png'), require('../../../../assets/images/pokemonsprite/177.png'), require('../../../../assets/images/pokemonsprite/178.png'), require('../../../../assets/images/pokemonsprite/179.png'), require('../../../../assets/images/pokemonsprite/180.png'), require('../../../../assets/images/pokemonsprite/181.png'), require('../../../../assets/images/pokemonsprite/182.png'), require('../../../../assets/images/pokemonsprite/183.png'), require('../../../../assets/images/pokemonsprite/184.png'), require('../../../../assets/images/pokemonsprite/185.png'), require('../../../../assets/images/pokemonsprite/186.png'), require('../../../../assets/images/pokemonsprite/187.png'), require('../../../../assets/images/pokemonsprite/188.png'), require('../../../../assets/images/pokemonsprite/189.png'), require('../../../../assets/images/pokemonsprite/190.png'), require('../../../../assets/images/pokemonsprite/191.png'), require('../../../../assets/images/pokemonsprite/192.png'), require('../../../../assets/images/pokemonsprite/193.png'), require('../../../../assets/images/pokemonsprite/194.png'), require('../../../../assets/images/pokemonsprite/195.png'), require('../../../../assets/images/pokemonsprite/196.png'), require('../../../../assets/images/pokemonsprite/197.png'), require('../../../../assets/images/pokemonsprite/198.png'), require('../../../../assets/images/pokemonsprite/199.png'), require('../../../../assets/images/pokemonsprite/200.png'), require('../../../../assets/images/pokemonsprite/201.png'), require('../../../../assets/images/pokemonsprite/202.png'), require('../../../../assets/images/pokemonsprite/203.png'), require('../../../../assets/images/pokemonsprite/204.png'), require('../../../../assets/images/pokemonsprite/205.png'), require('../../../../assets/images/pokemonsprite/206.png'), require('../../../../assets/images/pokemonsprite/207.png'), require('../../../../assets/images/pokemonsprite/208.png'), require('../../../../assets/images/pokemonsprite/209.png'), require('../../../../assets/images/pokemonsprite/210.png'), require('../../../../assets/images/pokemonsprite/211.png'), require('../../../../assets/images/pokemonsprite/212.png'), require('../../../../assets/images/pokemonsprite/213.png'), require('../../../../assets/images/pokemonsprite/214.png'), require('../../../../assets/images/pokemonsprite/215.png'), require('../../../../assets/images/pokemonsprite/216.png'), require('../../../../assets/images/pokemonsprite/217.png'), require('../../../../assets/images/pokemonsprite/218.png'), require('../../../../assets/images/pokemonsprite/219.png'), require('../../../../assets/images/pokemonsprite/220.png'), require('../../../../assets/images/pokemonsprite/221.png'), require('../../../../assets/images/pokemonsprite/222.png'), require('../../../../assets/images/pokemonsprite/223.png'), require('../../../../assets/images/pokemonsprite/224.png'), require('../../../../assets/images/pokemonsprite/225.png'), require('../../../../assets/images/pokemonsprite/226.png'), require('../../../../assets/images/pokemonsprite/227.png'), require('../../../../assets/images/pokemonsprite/228.png'), require('../../../../assets/images/pokemonsprite/229.png'), require('../../../../assets/images/pokemonsprite/230.png'), require('../../../../assets/images/pokemonsprite/231.png'), require('../../../../assets/images/pokemonsprite/232.png'), require('../../../../assets/images/pokemonsprite/233.png'), require('../../../../assets/images/pokemonsprite/234.png'), require('../../../../assets/images/pokemonsprite/235.png'), require('../../../../assets/images/pokemonsprite/236.png'), require('../../../../assets/images/pokemonsprite/237.png'), require('../../../../assets/images/pokemonsprite/238.png'), require('../../../../assets/images/pokemonsprite/239.png'), require('../../../../assets/images/pokemonsprite/240.png'), require('../../../../assets/images/pokemonsprite/241.png'), require('../../../../assets/images/pokemonsprite/242.png'), require('../../../../assets/images/pokemonsprite/243.png'), require('../../../../assets/images/pokemonsprite/244.png'), require('../../../../assets/images/pokemonsprite/245.png'), require('../../../../assets/images/pokemonsprite/246.png'), require('../../../../assets/images/pokemonsprite/247.png'), require('../../../../assets/images/pokemonsprite/248.png'), require('../../../../assets/images/pokemonsprite/249.png'), require('../../../../assets/images/pokemonsprite/250.png'), require('../../../../assets/images/pokemonsprite/251.png'), require('../../../../assets/images/pokemonsprite/252.png'), require('../../../../assets/images/pokemonsprite/253.png'), require('../../../../assets/images/pokemonsprite/254.png'), require('../../../../assets/images/pokemonsprite/255.png'), require('../../../../assets/images/pokemonsprite/256.png'), require('../../../../assets/images/pokemonsprite/257.png'), require('../../../../assets/images/pokemonsprite/258.png'), require('../../../../assets/images/pokemonsprite/259.png'), require('../../../../assets/images/pokemonsprite/260.png'), require('../../../../assets/images/pokemonsprite/261.png'), require('../../../../assets/images/pokemonsprite/262.png'), require('../../../../assets/images/pokemonsprite/263.png'), require('../../../../assets/images/pokemonsprite/264.png'), require('../../../../assets/images/pokemonsprite/265.png'), require('../../../../assets/images/pokemonsprite/266.png'), require('../../../../assets/images/pokemonsprite/267.png'), require('../../../../assets/images/pokemonsprite/268.png'), require('../../../../assets/images/pokemonsprite/269.png'), require('../../../../assets/images/pokemonsprite/270.png'), require('../../../../assets/images/pokemonsprite/271.png'), require('../../../../assets/images/pokemonsprite/272.png'), require('../../../../assets/images/pokemonsprite/273.png'), require('../../../../assets/images/pokemonsprite/274.png'), require('../../../../assets/images/pokemonsprite/275.png'), require('../../../../assets/images/pokemonsprite/276.png'), require('../../../../assets/images/pokemonsprite/277.png'), require('../../../../assets/images/pokemonsprite/278.png'), require('../../../../assets/images/pokemonsprite/279.png'), require('../../../../assets/images/pokemonsprite/280.png'), require('../../../../assets/images/pokemonsprite/281.png'), require('../../../../assets/images/pokemonsprite/282.png'), require('../../../../assets/images/pokemonsprite/283.png'), require('../../../../assets/images/pokemonsprite/284.png'), require('../../../../assets/images/pokemonsprite/285.png'), require('../../../../assets/images/pokemonsprite/286.png'), require('../../../../assets/images/pokemonsprite/287.png'), require('../../../../assets/images/pokemonsprite/288.png'), require('../../../../assets/images/pokemonsprite/289.png'), require('../../../../assets/images/pokemonsprite/290.png'), require('../../../../assets/images/pokemonsprite/291.png'), require('../../../../assets/images/pokemonsprite/292.png'), require('../../../../assets/images/pokemonsprite/293.png'), require('../../../../assets/images/pokemonsprite/294.png'), require('../../../../assets/images/pokemonsprite/295.png'), require('../../../../assets/images/pokemonsprite/296.png'), require('../../../../assets/images/pokemonsprite/297.png'), require('../../../../assets/images/pokemonsprite/298.png'), require('../../../../assets/images/pokemonsprite/299.png'), require('../../../../assets/images/pokemonsprite/300.png'), require('../../../../assets/images/pokemonsprite/301.png'), require('../../../../assets/images/pokemonsprite/302.png'), require('../../../../assets/images/pokemonsprite/303.png'), require('../../../../assets/images/pokemonsprite/304.png'), require('../../../../assets/images/pokemonsprite/305.png'), require('../../../../assets/images/pokemonsprite/306.png'), require('../../../../assets/images/pokemonsprite/307.png'), require('../../../../assets/images/pokemonsprite/308.png'), require('../../../../assets/images/pokemonsprite/309.png'), require('../../../../assets/images/pokemonsprite/310.png'), require('../../../../assets/images/pokemonsprite/311.png'), require('../../../../assets/images/pokemonsprite/312.png'), require('../../../../assets/images/pokemonsprite/313.png'), require('../../../../assets/images/pokemonsprite/314.png'), require('../../../../assets/images/pokemonsprite/315.png'), require('../../../../assets/images/pokemonsprite/316.png'), require('../../../../assets/images/pokemonsprite/317.png'), require('../../../../assets/images/pokemonsprite/318.png'), require('../../../../assets/images/pokemonsprite/319.png'), require('../../../../assets/images/pokemonsprite/320.png'), require('../../../../assets/images/pokemonsprite/321.png'), require('../../../../assets/images/pokemonsprite/322.png'), require('../../../../assets/images/pokemonsprite/323.png'), require('../../../../assets/images/pokemonsprite/324.png'), require('../../../../assets/images/pokemonsprite/325.png'), require('../../../../assets/images/pokemonsprite/326.png'), require('../../../../assets/images/pokemonsprite/327.png'), require('../../../../assets/images/pokemonsprite/328.png'), require('../../../../assets/images/pokemonsprite/329.png'), require('../../../../assets/images/pokemonsprite/330.png'), require('../../../../assets/images/pokemonsprite/331.png'), require('../../../../assets/images/pokemonsprite/332.png'), require('../../../../assets/images/pokemonsprite/333.png'), require('../../../../assets/images/pokemonsprite/334.png'), require('../../../../assets/images/pokemonsprite/335.png'), require('../../../../assets/images/pokemonsprite/336.png'), require('../../../../assets/images/pokemonsprite/337.png'), require('../../../../assets/images/pokemonsprite/338.png'), require('../../../../assets/images/pokemonsprite/339.png'), require('../../../../assets/images/pokemonsprite/340.png'), require('../../../../assets/images/pokemonsprite/341.png'), require('../../../../assets/images/pokemonsprite/342.png'), require('../../../../assets/images/pokemonsprite/343.png'), require('../../../../assets/images/pokemonsprite/344.png'), require('../../../../assets/images/pokemonsprite/345.png'), require('../../../../assets/images/pokemonsprite/346.png'), require('../../../../assets/images/pokemonsprite/347.png'), require('../../../../assets/images/pokemonsprite/348.png'), require('../../../../assets/images/pokemonsprite/349.png'), require('../../../../assets/images/pokemonsprite/350.png'), require('../../../../assets/images/pokemonsprite/351.png'), require('../../../../assets/images/pokemonsprite/352.png'), require('../../../../assets/images/pokemonsprite/353.png'), require('../../../../assets/images/pokemonsprite/354.png'), require('../../../../assets/images/pokemonsprite/355.png'), require('../../../../assets/images/pokemonsprite/356.png'), require('../../../../assets/images/pokemonsprite/357.png'), require('../../../../assets/images/pokemonsprite/358.png'), require('../../../../assets/images/pokemonsprite/359.png'), require('../../../../assets/images/pokemonsprite/360.png'), require('../../../../assets/images/pokemonsprite/361.png'), require('../../../../assets/images/pokemonsprite/362.png'), require('../../../../assets/images/pokemonsprite/363.png'), require('../../../../assets/images/pokemonsprite/364.png'), require('../../../../assets/images/pokemonsprite/365.png'), require('../../../../assets/images/pokemonsprite/366.png'), require('../../../../assets/images/pokemonsprite/367.png'), require('../../../../assets/images/pokemonsprite/368.png'), require('../../../../assets/images/pokemonsprite/369.png'), require('../../../../assets/images/pokemonsprite/370.png'), require('../../../../assets/images/pokemonsprite/371.png'), require('../../../../assets/images/pokemonsprite/372.png'), require('../../../../assets/images/pokemonsprite/373.png'), require('../../../../assets/images/pokemonsprite/374.png'), require('../../../../assets/images/pokemonsprite/375.png'), require('../../../../assets/images/pokemonsprite/376.png'), require('../../../../assets/images/pokemonsprite/377.png'), require('../../../../assets/images/pokemonsprite/378.png'), require('../../../../assets/images/pokemonsprite/379.png'), require('../../../../assets/images/pokemonsprite/380.png'), require('../../../../assets/images/pokemonsprite/381.png'), require('../../../../assets/images/pokemonsprite/382.png'), require('../../../../assets/images/pokemonsprite/383.png'), require('../../../../assets/images/pokemonsprite/384.png'), require('../../../../assets/images/pokemonsprite/385.png'), require('../../../../assets/images/pokemonsprite/386.png'), require('../../../../assets/images/pokemonsprite/387.png'), require('../../../../assets/images/pokemonsprite/388.png'), require('../../../../assets/images/pokemonsprite/389.png'), require('../../../../assets/images/pokemonsprite/390.png'), require('../../../../assets/images/pokemonsprite/391.png'), require('../../../../assets/images/pokemonsprite/392.png'), require('../../../../assets/images/pokemonsprite/393.png'), require('../../../../assets/images/pokemonsprite/394.png'), require('../../../../assets/images/pokemonsprite/395.png'), require('../../../../assets/images/pokemonsprite/396.png'), require('../../../../assets/images/pokemonsprite/397.png'), require('../../../../assets/images/pokemonsprite/398.png'), require('../../../../assets/images/pokemonsprite/399.png'), require('../../../../assets/images/pokemonsprite/400.png') ];

        const pokemonList = useRecoilValue(PokemonList);

        
    const genderName = (s: Sex): string => {
        switch (s) {
            case Sex.Female:
                return 'female';
            case Sex.Male:
                return 'male';
            default:
                return 'non-binary';
        }
    };

    const genderColor = (s: Sex): string => {
        switch (s) {
            case Sex.Female:
                return 'rgb(200, 120, 100)';
            case Sex.Male:
                return 'rgb(80, 136, 135)';
            default:
                return 'rgb(111, 111, 111)';
        }
    };

    return (
        <View style={Styles.MainView}>
            <View style={Styles.TitleView}>
                <Text style={Styles.TitleText}>{props.fight.title}</Text>
                <Text style={Styles.TitleLevel}>{props.fight.level[0]} ~ {props.fight.level[1]} Lv</Text>
            </View>
            {
                props.fight.pokemon.map(
                    (item) => {
                        const pokemon = pokemonList[item.number - 1];
                        return (
                            <TouchableOpacity key={pokemon.number} style={Styles.PokemonView}
                                onPress={() => {props.navigation.navigate('PokemonDetail', {pokemon: item})}}
                            >
                                <View style={Styles.PokemonTitleView}>
                                    <View style={Styles.PokemonTitleLeftView}>
                                        <Image style={Styles.PokemonTitleImage} source={imagePwd[item.number - 1]} />
                                        <Text style={Styles.PokemonTitleText}>{pokemon.name}</Text>
                                    </View>
                                    <Material name={ `gender-${genderName(item.sex)}`} size={24} color={genderColor(item.sex)}/>
                                    <Text style={Styles.PokemonTitleLevel}>{item.level}.Lv</Text>
                                </View>
                                <View style={Styles.WholeSkillView}>
                                    {
                                        item.skill.map(
                                            (skill) => {
                                                return (
                                                    <View key={skill.name + pokemon.name} style={Styles.SkillView}>
                                                        <Text style={Styles.SkillText}>{skill.name}</Text>
                                                        <View style={Styles.SkillTypeView}>
                                                            <Image style={Styles.SkillTypeIcon} source={PokemonTypes[skill.type].icon} />
                                                            <Text style={Styles.SkillTypeText}>{PokemonTypes[skill.type].label}</Text>
                                                            <Text style={Styles.SkillTypeText}>{PokemonModes[skill.mode].name}</Text>
                                                        </View>
                                                    </View>
                                                )
                                            }
                                        )
                                    }
                                </View>
                            </TouchableOpacity>
                        )
                    }
                )
            }
        </View>
    );
};

export default FightCard;

const Styles = StyleSheet.create({
    MainView: {
        margin: 10,
        backgroundColor: Colors.DropdownBackground,
        borderRadius: 15,
    },
    TitleView: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    TitleText: {
        fontSize: 25,
        fontFamily: 'NanumSquareNeoTTF-eHv',
    },
    TitleLevel: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-dEb',
    },
    PokemonView: {
        padding: 20,
        margin: 5,
        marginTop: 10,
        backgroundColor: Colors.ModalBackground,
        borderRadius: 10,
    },
    PokemonTitleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    PokemonTitleLeftView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    PokemonTitleText: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-dEb',
    },
    PokemonTitleImage: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
        marginRight: 20,
    },
    PokemonTitleLevel: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-cBd',
    },
    WholeSkillView: {
        marginTop: 10,
    },
    SkillView: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SkillText: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-bRg',
    },
    SkillTypeView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
    },
    SkillTypeIcon: {
        height: 32,
        width: 32,
    },
    SkillTypeText: {
        width: 80,
        fontSize: 20,
        paddingHorizontal: 10,
        fontFamily: 'DNFBitBitTTF'
    }
});
