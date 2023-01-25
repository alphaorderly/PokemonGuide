import React from 'react';

import {ScrollView, Text, StyleSheet} from 'react-native';
import {PokemonTypeCounters, PokemonTypes} from '../../../consts/TypeCounter';

/*


*/

type Prop = {
  types: number[];
  attacked: boolean;
};

const CounterAnswer = (props: Prop) => {
  let ans = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  for (var i = 0; i < props.types.length; i++) {
    for (var j = 0; j < 18; j++) {
      ans[j] *= PokemonTypeCounters[props.types[i]][j];
    }
  }

  ans.sort((a, b) => {
    return b - a;
  });

  return (
    <ScrollView style={Styles.MainView}>
      {ans.map((value, index) => {
        if (value == 1) {
          return;
        }
        return (
          <Text key={index} style={Styles.MainText}>
            <Text style={{color: PokemonTypes[index].color}}>
              {PokemonTypes[index].label} 속성
            </Text>{' '}
            에 {value} 배 피해를 {props.attacked ? '받음' : '줌'}
          </Text>
        );
      })}
    </ScrollView>
  );
};

export default CounterAnswer;

const Styles = StyleSheet.create({
  MainView: {
    margin: 20,
    alignSelf: 'center',
  },
  MainText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    paddingVertical: 8,
    fontFamily: 'Bitbit',
  },
});
