import {StyleSheet} from 'react-native';

import { Colors } from '../../../themes/colors';

export default StyleSheet.create({
  TitleText: {
    alignSelf: 'center',
    paddingTop: 20,
    color: 'black',
    fontSize: 30,
    fontFamily: 'DNFBitBitTTF',
  },
  VictimView: {
    padding: 20,
  },
  VictimText: {
    fontFamily: 'DNFBitBitTTF',
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 20,
    color: '#002030'
  },
  HostileView: {
    padding: 20,
  },
  HostileText: {
    fontFamily: 'DNFBitBitTTF',
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 20,
    color: '#002030'
  },
  Dropdown: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 10,
    backgroundColor: Colors.DropdownBackground,
  },
  ModalContainer: {
    backgroundColor: Colors.ModalBackground,
    marginHorizontal: 20,
    marginVertical: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ModalTitle: {
    fontFamily: 'DNFBitBitTTF',
    fontSize: 20 
  },
  BadgeText: {
    fontFamily: 'NanumSquareNeoTTF-bRg',
    fontSize: 16
  },
  ListContainer: {
    flexDirection: 'row',
  },
  ListLabel: {
    fontSize: 18,
    fontFamily: 'NanumSquareNeoTTF-bRg',
    padding: 5,
  }
});
