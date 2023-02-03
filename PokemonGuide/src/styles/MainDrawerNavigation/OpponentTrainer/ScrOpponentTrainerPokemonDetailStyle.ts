import { StyleSheet } from "react-native";
import { Colors } from "../../../themes/colors";
import { Shadow } from "../../../themes/shadows";

export default StyleSheet.create({
    MainView: {
        flex: 1,
        zIndex:-100,
    },
    InnerView: {
        marginVertical: 200,
        marginHorizontal: 30,
        backgroundColor: Colors.DropdownBackground,
        flex: 1,
        borderRadius: 10,
        ...Shadow,
    },
    PokemonTitleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 20,
    },
    PokemonTitleLeftView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    PokemonTitleText: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-dEb',
    },
    PokemonTitleImage: {
        height: 32,
        width: 32,
        resizeMode: 'contain',
        marginRight: 20,
    },
    PokemonTitleLevel: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-cBd',
    },
});
