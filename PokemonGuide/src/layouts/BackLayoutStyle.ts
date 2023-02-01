import {StyleSheet} from 'react-native';
import {Colors} from '../themes/colors';

export default StyleSheet.create({
  MainView: {
    flex: 1,
  },
  LogoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.LogoBackground,
  },
  NavIcon: {},
  NavTitle: {
    fontFamily: 'DNFBitBitTTF',
    fontSize: 24,
    color: 'black',
  },
  ContentView: {
    backgroundColor: Colors.ContentBackground,
    flex: 1,
  },
});
