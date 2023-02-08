import { StyleSheet } from "react-native";
import { Colors } from "../../../themes/colors";
import { Shadow } from "../../../themes/shadows";

export default StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: '#00000055',
    },
    InnerView: {
        marginVertical: 200,
        marginHorizontal: 30,
        backgroundColor: Colors.DropdownBackground,
        flex: 1,
        borderRadius: 10,
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
    TerastalView: {
        padding: 10,
    },
    TerastalTitleView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingBottom: 10,
    },
    TerastalTitleText: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'DNFBitBitTTF',
    },
    TerastalTitleImage: {
        height: 32,
        resizeMode: 'contain'
    },
    WholeSkillView: {
        marginTop: 10,
    },
    SkillView: {
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors.ModalBackground,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SkillText: {
        fontSize: 20,
        fontFamily: 'NanumSquareNeoTTF-bRg',
    },
    SkillTypeView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
    },
    SkillTypeIcon: {
        height: 32,
        width: 32,
    },
    SkillTypeText: {
        width: 80,
        fontSize: 20,
        paddingHorizontal: 10,
        fontFamily: 'DNFBitBitTTF'
    }
});
