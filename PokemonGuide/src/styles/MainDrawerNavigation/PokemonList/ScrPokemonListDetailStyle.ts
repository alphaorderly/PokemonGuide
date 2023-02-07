import { StyleSheet } from "react-native";

export default StyleSheet.create({
    MainView: {

    },
    PokemonTitleView: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    PokemonTitleImage: {
        height: 64,
        width: 64,
        resizeMode: 'contain'
    },
    PokemonTitleText: {
        fontSize: 32,
        fontFamily: 'NanumSquareNeoTTF-eHv',
    },
    PokemonTitleTypeView: {

    },
    PokemonTitleTypeSingleView: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
    },
    PokemonTitleTypeSingleImage: {
        height: 24,
        resizeMode: 'contain'
    },
    PokemonTitleTypeSingleText: {
        fontSize: 24,
        fontFamily: "DNFBitBitTTF"
    },
    PokemonCSStatusView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    PokemonCSStatusText: {
        fontSize: 18,
        fontFamily: 'NanumSquareNeoTTF-dEb',
    },
    PokemonCSStatusImage: {
        padding: 10,
    },
    PokemonCSStatusSingleView: {
        alignItems: 'center'
    },
    PokemonMemoView: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    PokemonMemoText: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-dEb',
    },
    PokemonMemoTextInput: {
        height: 200,
        borderWidth: 1,
        fontSize: 18,
        fontFamily: 'NanumSquareNeoTTF-bRg',
        marginVertical: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        lineHeight: 22,
    }
})