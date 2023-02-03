import { StyleSheet } from "react-native";
import { Shadow } from "../../../themes/shadows";

export default StyleSheet.create({
    MainView: {
        flex: 1,
    },
    DescriptionBackground: {
        resizeMode: 'cover'
    },
    DescriptionBackgroundView: {
        padding: 20,
        backgroundColor: '#FFFFFFAA',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...Shadow
    },
    JobText: {
        fontSize: 35,
        marginVertical: 20,
        fontFamily: 'NanumSquareNeoTTF-eHv',
    },
    DescriptionIcon: {
        height: 64,
        width: 64,
    },
    NameText: {
        fontSize: 30,
        marginVertical: 10,
    }
})