import { StyleSheet } from "react-native";
import { Shadow } from "../../../themes/shadows";
import { Colors } from "../../../themes/colors";

export default StyleSheet.create({
    MainView: {
        marginTop: 10,
    },
    LargeButtonBackground: {
        height: 150,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    LargeButtonBackgroundImage: {
        borderRadius: 15,
    },
    LargeButton: {
        height: 150,
        borderRadius: 15,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF99',
        ...Shadow,
    },
    MainText: {
        fontFamily: 'NanumSquareNeoTTF-eHv',
        fontSize: 30,
    },
    SubText: {
        fontFamily: 'NanumSquareNeoTTF-dEb',
        fontSize: 20,
    }
})