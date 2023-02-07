import { StyleSheet } from "react-native";
import { Colors } from "../../../themes/colors";
export default StyleSheet.create({
    MainView: {
        flex: 1,
    },
    InnerView: {
        backgroundColor: Colors.DropdownBackground,
        marginTop: 60,
        flex: 1,
        borderRadius: 12,
    },
    TopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        paddingHorizontal: 20,
        },
    TopText: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-eHv'
    },
    WebView: {
        flex: 1,
    }
})