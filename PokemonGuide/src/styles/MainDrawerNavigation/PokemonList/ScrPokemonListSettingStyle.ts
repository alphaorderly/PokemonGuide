import { StyleSheet } from "react-native";
import { Colors } from "../../../themes/colors";

export default StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: '#00000055'
    },
    InnerView: {
        marginVertical: 200,
        marginHorizontal: 60,
        backgroundColor: Colors.DropdownBackground,
        flex: 1,
        borderRadius: 10,
    },
    TopView: {
        backgroundColor: '#f3e5da77',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TopText: {
        padding: 20,
        fontSize: 30,
        fontFamily: 'NanumSquareNeoTTF-eHv',
    },
    TopClose: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-eHv',
    },
    TopCloseView: {
        margin: 10,
        padding: 10,
        backgroundColor: '#EE3424AA',
        borderRadius: 10,
    },
    SettingItemView: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SettingItemText: {
        fontSize: 18,
        fontFamily: 'NanumSquareNeoTTF-cBd',
    },
    SettingItemButton: {
        backgroundColor: '#EE3424AA',
        padding: 10,
        borderRadius: 10,
    },
    SettingItemButtonText: {
        fontSize: 14,
        fontFamily: 'NanumSquareNeoTTF-cBd',
    },
});
