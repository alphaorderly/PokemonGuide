import { StyleSheet } from "react-native";
import { Shadow } from "../../../themes/shadows";
import { Colors } from "../../../themes/colors";
export default StyleSheet.create({
    MainView: {
        flex: 1,
    },
    InnerView: {
        backgroundColor: Colors.DropdownBackground,
        marginTop: 80,
        flex: 1,
        ...Shadow,
        borderRadius: 30,
    },
    TopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        paddingHorizontal: 20,
        },
    TopText: {
        fontSize: 24,
        fontFamily: 'NanumSquareNeoTTF-eHv'
    },
    WebView: {
        flex: 1,
    }
})