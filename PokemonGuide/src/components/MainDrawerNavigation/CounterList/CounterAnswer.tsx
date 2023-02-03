import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {PokemonTypeCounters, PokemonTypes} from '../../../consts/TypeCounter';

/*


*/

type Prop = {
  types: number[];
  attacked: boolean;
};

const CounterAnswer = (props: Prop) => {
  let ans = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  if (props.types.length === 0) {return;}

  if (props.attacked === true) {
    for (var i = 0; i < props.types.length; i++) {
      for (var j = 0; j < 18; j++) {
        ans[j] *= PokemonTypeCounters[props.types[i]][j];
      }
    }
  } else {
    for (var j = 0; j < 18; j++) {
      ans[j] *= PokemonTypeCounters[j][props.types[0]];
    }
  }

  return (
    <View style={Styles.MainView}>
      <View style={Styles.BuffView}>
        {ans.map((value, index) => {
          const val = value
          if (val <= 1) {
            return;
          }
          return (
            <Text key={index} style={Styles.MainText}>
              <Text style={{color: PokemonTypes[index].color}}>
                {PokemonTypes[index].label}
              </Text>{' '}
              x {val}  {props.attacked ? '받음' : '가함'}
            </Text>
          );
        })}
      </View>
      <View style={Styles.NerfView}>
        {ans.map((value, index) => {
          const val = value
          if (val >= 1) {
            return;
          }
          return (
            <Text key={index} style={Styles.MainText}>
              <Text style={{color: PokemonTypes[index].color}}>
                {PokemonTypes[index].label}
              </Text>{' '}
              x {val}  {props.attacked ? '받음' : '가함'}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default CounterAnswer;

const Styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  BuffView: {
    
  },
  NerfView: {

  },
  MainText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingVertical: 8,
    fontFamily: 'DNFBitBitTTF',
  },
});
