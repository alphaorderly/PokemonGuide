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
    SearchShadow: {
        height: 50,
        width: '100%',
    },
    SearchContainerShadow: {
        margin: 10,
        flexGrow: 1,
    },
    SearchBar: {
        backgroundColor: '#FFFFFFCC',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-bRg',
        flexGrow: 1,
        width: '100%',
    },
    SettingButton: {
        alignSelf: 'center',
        marginRight: 10,
    }
})