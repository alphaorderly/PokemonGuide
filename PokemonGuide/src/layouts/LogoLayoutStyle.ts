import {StyleSheet} from 'react-native';
import {Colors} from '../themes/colors';

export default StyleSheet.create({
  MainView: {
    flex: 1,
  },
  LogoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Colors.LogoBackground,
  },
  NavIcon: {},
  NavTitle: {
    fontFamily: 'Bitbit',
    fontSize: 32,
    color: 'black',
  },
  ContentView: {
    backgroundColor: Colors.ContentBackground,
  },
});
