import { PokemonMode, PokemonType } from './TypeCounter';

export const ChampionList = ['세르클 체육관', '보울 체육관', '누룩스 체육관']

type FightType = {
    level: number[],
    pokemon: {
        number: number,
        level: number,
        skill: {
            name: string,
            type: PokemonType,
            mode: PokemonMode,
        }[]
    }[]
}

type TrainerType = {
    [props: string]: {
        name: string,
        icon: NodeRequire,
        background: NodeRequire,
        type: PokemonType[],
        fight: FightType[]
    }
};

export const Trainers: TrainerType = {
    '세르클 체육관': {
        name : '단풍',
        type : [PokemonType.벌레],
        background: require('../../assets/images/gymImages/serkel_background.png'),
        icon : require('../../assets/images/gymImages/serkel.png'),
        fight: [
            {
                level: [14, 15],
                pokemon: [
                    {
                        number: 14,
                        level: 14,
                        skill: [
                            {
                                name: '벌레의 저항',
                                type: PokemonType.벌레,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '두번 차기',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        number : 12,
                        level: 14,
                        skill: [
                            {
                                name: '벌레먹기',
                                type: PokemonType.벌레,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '승부 굳히기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        number: 215,
                        level: 15,
                        skill: [
                            {
                                name: '연속자르기',
                                type: PokemonType.벌레,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '마구할퀴기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
            {
                level: [65, 66],
                pokemon: [
                    {
                        number: 15,
                        level: 65,
                        skill: [
                            {
                                name: '발꿈치 찍기',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '기습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '덤벼들기',
                                type: PokemonType.벌레,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '뛰어오르기',
                                type: PokemonType.비행,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        number: 259,
                        level: 65,
                        skill: [
                            {
                                name: '벌레먹기',
                                type: PokemonType.벌레,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '자이로볼',
                                type: PokemonType.강철,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '저주',
                                type: PokemonType.고스트,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '스톤에지',
                                type: PokemonType.바위,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                       level: 65,
                       number: 13,
                       skill: [
                            {
                                name: '엄습하는 일격',
                                type: PokemonType.벌레,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '지옥찌르기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '깨트리기',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '스레드트랩',
                                type: PokemonType.벌레,
                                mode: PokemonMode.변화,
                            },
                       ],
                    },
                    {
                        level: 65,
                        number: 262,
                        skill: [
                            {
                                name: '메가혼',
                                type: PokemonType.바위,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '인파이트',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '스톤에지',
                                type: PokemonType.바위,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '깜짝베기',
                                type: PokemonType.악,
                                mode: PokemonMode.변화,
                            },
                        ],
                    },
                    {
                        level: 66,
                        number: 216,
                        skill: [
                            {
                                name: '연속자르기',
                                type: PokemonType.벌레,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '10만마력',
                                type: PokemonType.땅,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '치근거리기',
                                type: PokemonType.페어리,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '깨물어부수기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    '보울 체육관' : {
        name: '콜사',
        background: require('../../assets/images/gymImages/bowl_background.png'),
        icon: require('../../assets/images/gymImages/bowl.png'),
        type: [PokemonType.풀],
        fight: [
            {
                level: [16, 17],
                pokemon: [
                    {
                        level: 16,
                        number: 104,
                        skill: [
                            {
                                name: '수면가루',
                                type: PokemonType.풀,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '메가드레인',
                                type: PokemonType.풀,
                                mode: PokemonMode.특수,
                            },
                        ],
                    },
                    {
                        level: 16,
                        number: 84,
                        skill: [
                            {
                                name: '몸통박치기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '잎날가르기',
                                type: PokemonType.풀,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 17,
                        number: 88,
                        skill: [
                            {
                                name: '개척하기',
                                type: PokemonType.풀,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '돌떨구기',
                                type: PokemonType.바위,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
            {
                level: [65, 66],
                pokemon: [
                    {
                        level: 65,
                        number: 105,
                        skill: [
                            {
                                name: '꽃보라',
                                type: PokemonType.풀,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '빛의장막',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '나비춤',
                                type: PokemonType.벌레,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '파괴광선',
                                type: PokemonType.노말,
                                mode: PokemonMode.특수,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 107,
                        skill: [
                            {
                                name: '마하펀지',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '씨폭탄',
                                type: PokemonType.풀,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '버섯포자',
                                type: PokemonType.풀,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '번개펀치',
                                type: PokemonType.전기,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 83,
                        skill: [
                            {
                                name: '트로피컬킥',
                                type: PokemonType.풀,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '무릎차기',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '치근거리기',
                                type: PokemonType.페어리,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '사념의박치기',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 86,
                        skill: [
                            {
                                name: '대지의파동',
                                type: PokemonType.노말,
                                mode: PokemonMode.특수,
                            },
                             {
                                name: '에너지볼',
                                type: PokemonType.풀,
                                mode: PokemonMode.특수,
                             },
                             {
                                name: '씨뿌리기',
                                type: PokemonType.풀,
                                mode: PokemonMode.변화,
                             },
                             {
                                name: '그래스필드',
                                type: PokemonType.풀,
                                mode: PokemonMode.변화,
                             },
                        ],
                    },
                    {
                        level: 66,
                        number: 88,
                        skill: [
                            {
                                name: '개척하기',
                                type: PokemonType.풀,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '스톤에지',
                                type: PokemonType.바위,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '불꽃펀치',
                                type: PokemonType.불꽃,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '냉동펀치',
                                type: PokemonType.얼음,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    '누룩스 체육관': {
        name: '모야모',
        background: require('../../assets/images/gymImages/noorooks_background.png'),
        icon: require('../../assets/images/gymImages/noorooks.png'),
        type: [PokemonType.전기],
        fight: [
            {
                level: [23, 24],
                pokemon: [
                    {
                        level: 23,
                        number: 177,
                        skill: [
                            {
                                name: '쪼아대기',
                                type: PokemonType.비행,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '전광석화',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '스파크',
                                type: PokemonType.전기,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 23,
                        number: 171,
                        skill: [
                            {
                                name: '물대포',
                                type: PokemonType.물,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '스파크',
                                type: PokemonType.전기,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 23,
                        number: 95,
                        skill: [
                            {
                                name: '스파크',
                                type: PokemonType.전기,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '물기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 24,
                        number: 115,
                        skill: [
                            {
                                name: '차지빔',
                                type: PokemonType.전기,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '병상첨병',
                                type: PokemonType.고스트,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '이상한빛',
                                type: PokemonType.고스트,
                                mode: PokemonMode.변화,
                            },
                        ],
                    },
                ],
            }
            ,
            {
                level: [65, 66],
                pokemon: [
                    {
                        level: 65,
                        number: 178,
                        skill: [
                            {
                                name: '폭풍',
                                type: PokemonType.비행,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '전광석화',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '방전',
                                type: PokemonType.전기,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '순풍',
                                type: PokemonType.비행,
                                mode: PokemonMode.변화,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 171,
                        skill: [
                            {
                                name: '물의파동',
                                type: PokemonType.물,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '번개',
                                type: PokemonType.전기,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '리플렉터',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '기습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 208,
                        skill: [
                            {
                                name: '속임수',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '일렉트릭필드',
                                type: PokemonType.전기,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '방전',
                                type: PokemonType.전기,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '기습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 96,
                        skill: [
                            {
                                name: '깨물어부수기',
                                type: PokemonType.전기,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '와일드볼트',
                                type: PokemonType.전기,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '사이코팽',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '얼음엄니',
                                type: PokemonType.얼음,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 66,
                        number: 115,
                        skill: [
                            {
                                name: '차지빔',
                                type: PokemonType.전기,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '섀도볼',
                                type: PokemonType.고스트,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '매지컬플레임',
                                type: PokemonType.불꽃,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '매지컬샤인',
                                type: PokemonType.페어리,
                                mode: PokemonMode.특수,
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
