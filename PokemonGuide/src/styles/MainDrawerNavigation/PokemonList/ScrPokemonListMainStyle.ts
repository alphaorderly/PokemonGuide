import { StyleSheet } from "react-native";
import { Shadow } from "../../../themes/shadows";

export default StyleSheet.create({
    MainView: {
        flex: 1,
    },
    SearchView: {
        flexDirection: 'row',
        alignItem: 'center',
    },
    SearchBar: {
        backgroundColor: '#FFFFFFCC',
        margin: 10,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-bRg',
        flex: 1,
        ...Shadow,
    },
    SettingButton: {
        alignSelf: 'center',
        marginRight: 10,
    }
})