import { atom } from "recoil";

export type GuidanceMemoType = {
    title: string,
    content: string,
}

export default atom<GuidanceMemoType[]>({
    key: 'GuidanceMemo',
    default: [
        {
            title: 'example',
            content: 'example'
        }
    ]
})