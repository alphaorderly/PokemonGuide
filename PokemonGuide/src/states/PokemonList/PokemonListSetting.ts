import { atom } from "recoil";

export const PokemonListSetting = atom({
    key: 'PokemonListSetting',
    default: {
        notSeen: false,
        notCaught: false,
    }
})