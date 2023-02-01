import { PokemonMode, PokemonType } from './TypeCounter';

export const ChampionList = ['세르클 체육관', '보울 체육관', '누룩스 체육관', '카라프 체육관', '참푸르 체육관', '프리지 체육관'];

export type FightType = {
    level: [number, number],
    title: string
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

export type TrainerType = {
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
                title: '1차전',
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
                title: '2차전',
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
                title: '1차전',
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
                title: '2차전',
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
                title: '1차전',
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
                title: '2차전',
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
    '카라프 체육관': {
        name: '곤포',
        icon: require('../../assets/images/gymImages/karaf.png'),
        background: require('../../assets/images/gymImages/karaf_background.png'),
        type: [PokemonType.물],
        fight: [
            {
                level: [29, 30],
                title: '1차전',
                pokemon: [
                    {
                        level: 29,
                        number: 373,
                        skill: [
                            {
                                name: '베어가르기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '쪼아대기',
                                type: PokemonType.비행,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '아쿠아커터',
                                type: PokemonType.물,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 29,
                        number: 289,
                        skill: [
                            {
                                name: '진흙뿌리기',
                                type: PokemonType.땅,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '물의 파동',
                                type: PokemonType.물,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '박치기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        number: 119,
                        level: 30,
                        skill: [
                            {
                                name: '집게해머',
                                type: PokemonType.물,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '바위깨기',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '힘껏치기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
            {
                level: [65, 66],
                title: '2차전',
                pokemon: [
                    {
                        level: 65,
                        number: 373,
                        skill: [
                            {
                                name: '아쿠아제트',
                                type: PokemonType.물,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '아쿠아커터',
                                type: PokemonType.물,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '사이코커터',
                                type: PokemonType.물,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '깜짝베기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 133,
                        skill: [
                            {
                                name: '폭풍',
                                type: PokemonType.비행,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '파도타기',
                                type: PokemonType.물,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '눈보라',
                                type: PokemonType.얼음,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '전광석화',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 289,
                        skill: [
                            {
                                name: '트리플다이브',
                                type: PokemonType.물,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '지옥찌르기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '기습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '분함의 발구르기',
                                type: PokemonType.땅,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 340,
                        skill: [
                            {
                                name: '물의파동',
                                type: PokemonType.물,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '악의파동',
                                type: PokemonType.악,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '용의파동',
                                type: PokemonType.드래곤,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '파동탄',
                                type: PokemonType.격투,
                                mode: PokemonMode.특수,
                            },
                        ],
                    },
                    {
                        level: 66,
                        number: 119,
                        skill: [
                            {
                                name: '집게해머',
                                type: PokemonType.물,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '아이스해머',
                                type: PokemonType.얼음,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '사념의박치기',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '인파이트',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    '참푸르 체육관': {
        name: '청목',
        background: require('../../assets/images/gymImages/champhur_background.jpeg'),
        icon: require('../../assets/images/gymImages/champhur.png'),
        type: [PokemonType.노말],
        fight: [
            {
                level: [35, 36],
                title: '1차전',
                pokemon: [
                    {
                        level: 35,
                        number: 315,
                        skill: [
                            {
                                name: '하품',
                                type: PokemonType.노말,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '깨물어부수기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '힘껏치기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 35,
                        number: 189,
                        skill: [
                            {
                                name: '하이퍼드릴',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '드릴라이너',
                                type: PokemonType.땅,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '뱀눈초리',
                                type: PokemonType.노말,
                                mode: PokemonMode.변화,
                            },
                        ],
                    },
                    {
                        level: 36,
                        number: 99,
                        skill: [
                            {
                                name: '객기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '제비반환',
                                type: PokemonType.비행,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
            {
                level: [65, 66],
                title: '2차전',
                pokemon: [
                    {
                        level: 65,
                        number: 11,
                        skill: [
                            {
                                name: '누르기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '씨기관총',
                                type: PokemonType.풀,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '사념의박치기',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '아이언헤드',
                                type: PokemonType.강철,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 315,
                        skill: [
                            {
                                name: '하품',
                                type: PokemonType.노말,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '깨물어부수기',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '우드해머',
                                type: PokemonType.풀,
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
                        number: 366,
                        skill: [
                            {
                                name: '브레이브버드',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '브레이브클로',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '인파이트',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '암석봉인',
                                type: PokemonType.바위,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 189,
                        skill: [
                            {
                                name: '하이퍼드릴',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '드릴라이너',
                                type: PokemonType.땅,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '드래곤다이브',
                                type: PokemonType.드래곤,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '스톤에지',
                                type: PokemonType.바위,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 66,
                        number: 99,
                        skill: [
                            {
                                name: '객기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '브레이브버드',
                                type: PokemonType.비행,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '인파이트',
                                type: PokemonType.격투,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '도둑질',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    '프리지 체육관': {
        name: '라임',
        icon: require('../../assets/images/gymImages/freezy.png'),
        background: require('../../assets/images/gymImages/freezy_background.jpeg'),
        type: [PokemonType.고스트],
        fight: [
            {
                level: [41, 42],
                title: '1차전',
                pokemon: [
                    {
                        level: 41,
                        number: 299,
                        skill: [
                            {
                                name: '얼어붙은 바람',
                                type: PokemonType.얼음,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '기습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '야습',
                                type: PokemonType.고스트,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 41,
                        number: 239,
                        skill: [
                            {
                                name: '빛의 장막',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '야습',
                                type: PokemonType.고스트,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '베어가르기',
                                type: PokemonType.고스트,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 41,
                        number: 72,
                        skill: [
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
                            {
                                name: '고스트다이브',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 42,
                        number: 199,
                        skill: [
                            {
                                name: '방전',
                                type: PokemonType.전기,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '병상첨병',
                                type: PokemonType.고스트,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '하이퍼보이스',
                                type: PokemonType.고스트,
                                mode: PokemonMode.특수,
                            },
                        ],
                    },
                ],
            },
            {
                level: [65, 66],
                title: '2차전',
                pokemon: [
                    {
                        level: 65,
                        number: 299,
                        skill: [
                            {
                                name: '얼어붙은바람',
                                type: PokemonType.얼음,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '기습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '야습',
                                type: PokemonType.고스트,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '고스트다이브',
                                type: PokemonType.고스트,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 239,
                        skill: [
                            {
                                name: '빛의장막',
                                type: PokemonType.에스퍼,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '야습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '베어가르기',
                                type: PokemonType.노말,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '치근거리기',
                                type: PokemonType.페어리,
                                mode: PokemonMode.물리,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 302,
                        skill: [
                            {
                                name: '방어',
                                type: PokemonType.노말,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '기습',
                                type: PokemonType.악,
                                mode: PokemonMode.물리,
                            },
                            {
                                name: '저주',
                                type: PokemonType.고스트,
                                mode: PokemonMode.변화,
                            },
                            {
                                name: '도깨비불',
                                type: PokemonType.불꽃,
                                mode: PokemonMode.변화,
                            },
                        ],
                    },
                    {
                        level: 65,
                        number: 72,
                        skill: [
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
                            {
                                name: '고스트다이브',
                                type: PokemonType.고스트,
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
                        number: 199,
                        skill: [
                            {
                                name: '방전',
                                type: PokemonType.전기,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '병상첨병',
                                type: PokemonType.고스트,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '하이퍼보이스',
                                type: PokemonType.노말,
                                mode: PokemonMode.특수,
                            },
                            {
                                name: '오물폭탄',
                                type: PokemonType.독,
                                mode: PokemonMode.특수,
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
