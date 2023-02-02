import { PokemonSkill, Skill } from './PokemonSkills';
import { PokemonType } from './TypeCounter';

export const ChampionList = ['세르클 체육관', '보울 체육관', '누룩스 체육관', '카라프 체육관', '참푸르 체육관', '프리지 체육관', '베이크 체육관', '나페산 체육관'];

export const StardustList = ['팀 세긴 기지', '팀 쉐다르 기지', '팀 시 기지', '팀 루크바 기지', '팀 카프 기지'];

export const LeagueList = ['첫번째 사천왕'];

export type FightType = {
    level: [number, number],
    title: string
    pokemon: {
        number: number,
        level: number,
        skill: Skill[],
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
                            PokemonSkill['벌레의저항'],
                            PokemonSkill['두번치기'],
                        ],
                    },
                    {
                        number : 12,
                        level: 14,
                        skill: [
                            PokemonSkill['벌레먹기'],
                            PokemonSkill['승부굳히기'],
                        ],
                    },
                    {
                        number: 215,
                        level: 15,
                        skill: [
                            PokemonSkill['연속자르기'],
                            PokemonSkill['마구할퀴기'],
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
                            PokemonSkill['발꿈치찍기'],
                            PokemonSkill['기습'],
                            PokemonSkill['덤벼들기'],
                            PokemonSkill['뛰어오르기'],
                        ],
                    },
                    {
                        number: 259,
                        level: 65,
                        skill: [
                            PokemonSkill['벌레먹기'],
                            PokemonSkill['자이로볼'],
                            PokemonSkill['저주'],
                            PokemonSkill['스톤에지'],
                        ],
                    },
                    {
                       level: 65,
                       number: 13,
                       skill: [
                            PokemonSkill['엄습하는일격'],
                            PokemonSkill['지옥찌르기'],
                            PokemonSkill['깨트리기'],
                            PokemonSkill['스레드트랩'],
                       ],
                    },
                    {
                        level: 65,
                        number: 262,
                        skill: [
                            PokemonSkill['메가혼'],
                            PokemonSkill['인파이트'],
                            PokemonSkill['스톤에지'],
                            PokemonSkill['깜짝베기'],
                        ],
                    },
                    {
                        level: 66,
                        number: 216,
                        skill: [
                            PokemonSkill['연속자르기'],
                            PokemonSkill['10만마력'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['깨물어부수기'],
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
                            PokemonSkill['수면가루'],
                            PokemonSkill['메가드레인'],
                        ],
                    },
                    {
                        level: 16,
                        number: 84,
                        skill: [
                            PokemonSkill['몸통박치기'],
                            PokemonSkill['잎날가르기'],
                        ],
                    },
                    {
                        level: 17,
                        number: 88,
                        skill: [
                            PokemonSkill['개척하기'],
                            PokemonSkill['돌떨구기'],
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
                            PokemonSkill['꽃보라'],
                            PokemonSkill['빛의장막'],
                            PokemonSkill['나비춤'],
                            PokemonSkill['파괴광선'],
                        ],
                    },
                    {
                        level: 65,
                        number: 107,
                        skill: [
                            PokemonSkill['마하펀치'],
                            PokemonSkill['씨폭탄'],
                            PokemonSkill['버섯포자'],
                            PokemonSkill['번개펀치'],
                        ],
                    },
                    {
                        level: 65,
                        number: 83,
                        skill: [
                            PokemonSkill['트로피컬킥'],
                            PokemonSkill['무릎차기'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['사념의박치기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 86,
                        skill: [
                            PokemonSkill['대지의파동'],
							PokemonSkill['에너지볼'],
							PokemonSkill['씨뿌리기'],
							PokemonSkill['그래스필드'],
                        ],
                    },
                    {
                        level: 66,
                        number: 88,
                        skill: [
                            PokemonSkill['개척하기'],
							PokemonSkill['스톤에지'],
							PokemonSkill['불꽃펀치'],
							PokemonSkill['냉동펀치'],
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
                            PokemonSkill['쪼아대기'],
							PokemonSkill['전광석화'],
							PokemonSkill['스파크'],
                        ],
                    },
                    {
                        level: 23,
                        number: 171,
                        skill: [
                            PokemonSkill['물대포'],
							PokemonSkill['스파크'],
                        ],
                    },
                    {
                        level: 23,
                        number: 95,
                        skill: [
                            PokemonSkill['스파크'],
							PokemonSkill['물기'],
                        ],
                    },
                    {
                        level: 24,
                        number: 115,
                        skill: [
                            PokemonSkill['차지빔'],
							PokemonSkill['병상첨병'],
							PokemonSkill['이상한빛'],
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
                            PokemonSkill['폭풍'],
							PokemonSkill['전광석화'],
							PokemonSkill['방전'],
							PokemonSkill['순풍'],
                        ],
                    },
                    {
                        level: 65,
                        number: 171,
                        skill: [
                            PokemonSkill['물의파동'],
							PokemonSkill['번개'],
							PokemonSkill['리플렉터'],
							PokemonSkill['기습'],
                        ],
                    },
                    {
                        level: 65,
                        number: 208,
                        skill: [
                            PokemonSkill['속임수'],
							PokemonSkill['일렉트릭필드'],
							PokemonSkill['방전'],
							PokemonSkill['기습'],
                        ],
                    },
                    {
                        level: 65,
                        number: 96,
                        skill: [
                            PokemonSkill['깨물어부수기'],
							PokemonSkill['와일드볼트'],
							PokemonSkill['사이코팽'],
							PokemonSkill['얼음엄니'],
                        ],
                    },
                    {
                        level: 66,
                        number: 115,
                        skill: [
                            PokemonSkill['차지빔'],
							PokemonSkill['섀도볼'],
							PokemonSkill['매지컬플레임'],
							PokemonSkill['매지컬샤인'],
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
                            PokemonSkill['베어가르기'],
							PokemonSkill['쪼아대기'],
							PokemonSkill['아쿠아커터'],
                        ],
                    },
                    {
                        level: 29,
                        number: 289,
                        skill: [
                            PokemonSkill['진흙뿌리기'],
							PokemonSkill['물의파동'],
							PokemonSkill['박치기'],
                        ],
                    },
                    {
                        number: 119,
                        level: 30,
                        skill: [
                            PokemonSkill['집게해머'],
							PokemonSkill['바위깨기'],
							PokemonSkill['힘껏치기'],
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
                            PokemonSkill['아쿠아제트'],
							PokemonSkill['아쿠아커터'],
							PokemonSkill['사이코커터'],
							PokemonSkill['깜짝베기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 133,
                        skill: [
                            PokemonSkill['폭풍'],
							PokemonSkill['파도타기'],
							PokemonSkill['눈보라'],
							PokemonSkill['전광석화'],
                        ],
                    },
                    {
                        level: 65,
                        number: 289,
                        skill: [
                            PokemonSkill['트리플다이브'],
							PokemonSkill['지옥찌르기'],
							PokemonSkill['기습'],
							PokemonSkill['분함의발구르기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 340,
                        skill: [
                            PokemonSkill['물의파동'],
							PokemonSkill['악의파동'],
							PokemonSkill['용의파동'],
							PokemonSkill['파동탄'],
                        ],
                    },
                    {
                        level: 66,
                        number: 119,
                        skill: [
                            PokemonSkill['집게해머'],
							PokemonSkill['아이스해머'],
							PokemonSkill['사념의박치기'],
							PokemonSkill['인파이트'],
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
                            PokemonSkill['하품'],
							PokemonSkill['깨물어부수기'],
							PokemonSkill['힘껏치기'],
                        ],
                    },
                    {
                        level: 35,
                        number: 189,
                        skill: [
                            PokemonSkill['하이퍼드릴'],
							PokemonSkill['드릴라이너'],
							PokemonSkill['뱀눈초리'],
                        ],
                    },
                    {
                        level: 36,
                        number: 99,
                        skill: [
                            PokemonSkill['객기'],
							PokemonSkill['제비반환'],
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
                            PokemonSkill['누르기'],
							PokemonSkill['씨기관총'],
							PokemonSkill['사념의박치기'],
							PokemonSkill['아이언헤드'],
                        ],
                    },
                    {
                        level: 65,
                        number: 315,
                        skill: [
                            PokemonSkill['하품'],
							PokemonSkill['깨물어부수기'],
							PokemonSkill['우드해머'],
							PokemonSkill['사념의박치기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 366,
                        skill: [
                            PokemonSkill['브레이브버드'],
							PokemonSkill['브레이브클로'],
							PokemonSkill['인파이트'],
							PokemonSkill['암석봉인'],
                        ],
                    },
                    {
                        level: 65,
                        number: 189,
                        skill: [
                            PokemonSkill['하이퍼드릴'],
							PokemonSkill['드릴라이너'],
							PokemonSkill['드래곤다이브'],
							PokemonSkill['스톤에지'],
                        ],
                    },
                    {
                        level: 66,
                        number: 99,
                        skill: [
                            PokemonSkill['객기'],
							PokemonSkill['브레이브버드'],
							PokemonSkill['인파이트'],
							PokemonSkill['도둑질'],
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
                            PokemonSkill['얼어붙은바람'],
							PokemonSkill['기습'],
							PokemonSkill['야습'],
                        ],
                    },
                    {
                        level: 41,
                        number: 239,
                        skill: [
                            PokemonSkill['빛의장막'],
							PokemonSkill['야습'],
							PokemonSkill['베어가르기'],
                        ],
                    },
                    {
                        level: 41,
                        number: 72,
                        skill: [
                            PokemonSkill['치근거리기'],
							PokemonSkill['깨물어부수기'],
							PokemonSkill['고스트다이브'],
                        ],
                    },
                    {
                        level: 42,
                        number: 199,
                        skill: [
                            PokemonSkill['방전'],
							PokemonSkill['병상첨병'],
							PokemonSkill['하이퍼보이스'],
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
                            PokemonSkill['얼어붙은바람'],
							PokemonSkill['기습'],
							PokemonSkill['야습'],
							PokemonSkill['고스트다이브'],
                        ],
                    },
                    {
                        level: 65,
                        number: 239,
                        skill: [
                            PokemonSkill['빛의장막'],
							PokemonSkill['야습'],
							PokemonSkill['베어가르기'],
							PokemonSkill['치근거리기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 302,
                        skill: [
                            PokemonSkill['방어'],
							PokemonSkill['기습'],
							PokemonSkill['저주'],
							PokemonSkill['도깨비불'],
                        ],
                    },
                    {
                        level: 65,
                        number: 72,
                        skill: [
                            PokemonSkill['치근거리기'],
							PokemonSkill['깨물어부수기'],
							PokemonSkill['고스트다이브'],
							PokemonSkill['얼음엄니'],
                        ],
                    },
                    {
                        level: 66,
                        number: 199,
                        skill: [
                            PokemonSkill['방전'],
							PokemonSkill['병상첨병'],
							PokemonSkill['하이퍼보이스'],
							PokemonSkill['오물폭탄'],
                        ],
                    },
                ],
            },
        ],
    },
    '베이크 체육관': {
        name: '리파',
        background: require('../../assets/images/gymImages/bake_background.png'),
        icon: require('../../assets/images/gymImages/bake.png'),
        type: [PokemonType.에스퍼],
        fight: [
            {
                level: [44, 45],
                title: '1차전',
                pokemon: [
                    {
                        level: 44,
                        number: 193,
                        skill: [
                            PokemonSkill['깨물어부수기'],
							PokemonSkill['사념의박치기'],
							PokemonSkill['리플렉터'],
                        ],
                    },
                    {
                        level: 44,
                        number: 64,
                        skill: [
                            PokemonSkill['사이코키네시스'],
							PokemonSkill['매지컬샤인'],
							PokemonSkill['에너지볼'],
                        ],
                    },
                    {
                        level: 44,
                        number: 264,
                        skill: [
                            PokemonSkill['사이코키네시스'],
							PokemonSkill['전광석화'],
							PokemonSkill['섀도볼'],
                        ],
                    },
                    {
                        level: 45,
                        number: 147,
                        skill: [
                            PokemonSkill['사이코키네시스'],
							PokemonSkill['문포스'],
							PokemonSkill['꽃보라'],
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
                        number: 193,
                        skill: [
                            PokemonSkill['깨물어부수기'],
							PokemonSkill['사념의박치기'],
							PokemonSkill['리플렉터'],
							PokemonSkill['아이언헤드'],
                        ],
                    },
                    {
                        level: 65,
                        number: 64,
                        skill: [
                            PokemonSkill['사이코키네시스'],
							PokemonSkill['매지컬샤인'],
							PokemonSkill['에너지볼'],
							PokemonSkill['매지컬플레임'],
                        ],
                    },
                    {
                        level: 65,
                        number: 264,
                        skill: [
                            PokemonSkill['사이코키네시스'],
							PokemonSkill['전광석화'],
							PokemonSkill['섀도볼'],
							PokemonSkill['매지컬샤인'],
                        ],
                    },
                    {
                        level: 65,
                        number: 65,
                        skill: [
                            PokemonSkill['사이코커터'],
							PokemonSkill['리프블레이드'],
							PokemonSkill['시저크로스'],
							PokemonSkill['인파이트'],
                        ],
                    },
                    {
                        level: 66,
                        number: 147,
                        skill: [
                            PokemonSkill['사이코키네시스'],
							PokemonSkill['문포스'],
							PokemonSkill['꽃보라'],
							PokemonSkill['애교부리기'],
                        ],
                    },
                ],
            },
        ],
    },
    '나페산 체육관': {
        name: '그루샤',
        background: require('../../assets/images/gymImages/narphesan_background.png'),
        icon: require('../../assets/images/gymImages/narphesan.png'),
        type: [PokemonType.얼음],
        fight: [
            {
                level: [47, 48],
                title: '1차전',
                pokemon: [
                    {
                        level: 47,
                        number: 351,
                        skill: [
                            PokemonSkill['눈보라'],
							PokemonSkill['벌레의야단법석'],
							PokemonSkill['순풍'],
                        ],
                    },
                    {
                        level: 47,
                        number: 356,
                        skill: [
                            PokemonSkill['아쿠아제트'],
							PokemonSkill['고드름떨구기'],
							PokemonSkill['지진'],
                        ],
                    },
                    {
                        level: 47,
                        number: 362,
                        skill: [
                            PokemonSkill['아이스스피너'],
							PokemonSkill['아쿠아브레이크'],
							PokemonSkill['얼음뭉치'],
                        ],
                    },
                    {
                        level: 48,
                        number: 220,
                        skill: [
                            PokemonSkill['냉동빔'],
							PokemonSkill['용의파동'],
							PokemonSkill['문포스'],
							PokemonSkill['폭풍'],
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
                        number: 351,
                        skill: [
                            PokemonSkill['눈보라'],
							PokemonSkill['벌레의야단법석'],
							PokemonSkill['순풍'],
                        ],
                    },
                    {
                        level: 65,
                        number: 356,
                        skill: [
                            PokemonSkill['아쿠아제트'],
							PokemonSkill['고드름떨구기'],
							PokemonSkill['지진'],
                        ],
                    },
                    {
                        level: 65,
                        number: 362,
                        skill: [
                            PokemonSkill['아이스스피너'],
							PokemonSkill['아쿠아브레이크'],
							PokemonSkill['얼음뭉치'],
							PokemonSkill['뛰어오르기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 231,
                        skill: [
                            PokemonSkill['깜짝베기'],
							PokemonSkill['냉동펀치'],
							PokemonSkill['섀도클로'],
							PokemonSkill['시저크로스'],
                        ],
                    },
                    {
                        level: 66,
                        number: 220,
                        skill: [
                            PokemonSkill['냉동빔'],
							PokemonSkill['용의파동'],
							PokemonSkill['문포스'],
							PokemonSkill['폭풍'],
                        ],
                    },
                ],
            },
        ],
    },
    '팀 세긴 기지': {
        name: '피나',
        background: require('../../assets/images/blank.png'),
        icon: require('../../assets/images/stardustImages/segin.png'),
        type: [PokemonType.악],
        fight: [
            {
                level: [20, 21],
                title: '1차전',
                pokemon: [
                    {
                        level: 21,
                        number: 367,
                        skill: [
                            PokemonSkill['메탈클로'],
							PokemonSkill['연속자르기'],
							PokemonSkill['제비반환'],
                        ],
                    },
                    {
                        level: 20,
                        number: 294,
                        skill: [
                            PokemonSkill['다크액셀'],
							PokemonSkill['바크아웃'],
							PokemonSkill['금속음'],
							PokemonSkill['스피드스타'],
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
                        number: 253,
                        skill: [
                            PokemonSkill['씨기관총'],
							PokemonSkill['기습'],
							PokemonSkill['니들카드'],
							PokemonSkill['번개펀치'],
                        ],
                    },
                    {
                        level: 65,
                        number: 233,
                        skill: [
                            PokemonSkill['폭풍'],
							PokemonSkill['악의파동'],
							PokemonSkill['사이코키네시스'],
							PokemonSkill['순풍'],
                        ],
                    },
                    {
                        level: 65,
                        number: 197,
                        skill: [
                            PokemonSkill['치근거리기'],
							PokemonSkill['깨물어부수기'],
							PokemonSkill['보복'],
							PokemonSkill['얼음엄니'],
                        ],
                    },
                    {
                        level: 65,
                        number: 269,
                        skill: [
                            PokemonSkill['지진'],
							PokemonSkill['깨물어부수기'],
							PokemonSkill['드래곤클로'],
							PokemonSkill['불꽃엄니'],
                        ],
                    },
                    {
                        level: 66,
                        number: 369,
                        skill: [
                            PokemonSkill['도각참'],
							PokemonSkill['아이언헤드'],
							PokemonSkill['칼춤'],
							PokemonSkill['스톤에지'],
                        ],
                    },
                ],
            },
        ],
    },
    '팀 쉐다르 기지': {
        name: '멜로코',
        icon: require('../../assets/images/stardustImages/shedar.png'),
        background: require('../../assets/images/blank.png'),
        type: [PokemonType.불꽃],
        fight: [
            {
                level: [26, 27],
                title: '1차전',
                pokemon: [
                    {
                        level: 27,
                        number: 150,
                        skill: [
                            PokemonSkill['화염바퀴'],
							PokemonSkill['클리어스모그'],
                        ],
                    },
                    {
                        level: 26,
                        number: 294,
                        skill: [
                            PokemonSkill['오버히트'],
							PokemonSkill['번액셀'],
							PokemonSkill['싫은소리'],
							PokemonSkill['스피드스타'],
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
                        number: 150,
                        skill: [
                            PokemonSkill['바디프레스'],
							PokemonSkill['하품'],
							PokemonSkill['플레어드라이브'],
							PokemonSkill['스톤에지'],
                        ],
                    },
                    {
                        level: 65,
                        number: 93,
                        skill: [
                            PokemonSkill['히트스탬프'],
							PokemonSkill['록블라스트'],
							PokemonSkill['바디프레스'],
							PokemonSkill['지진'],
                        ],
                    },
                    {
                        level: 65,
                        number: 26,
                        skill: [
                            PokemonSkill['불대문자'],
							PokemonSkill['악의파동'],
							PokemonSkill['오물폭탄'],
							PokemonSkill['번개엄니'],
                        ],
                    },
                    {
                        level: 65,
                        number: 214,
                        skill: [
                            PokemonSkill['플레어드라이브'],
							PokemonSkill['신속'],
							PokemonSkill['인파이트'],
							PokemonSkill['오버히트'],
                        ],
                    },
                    {
                        level: 66,
                        number: 166,
                        skill: [
                            PokemonSkill['파동탄'],
							PokemonSkill['아머캐논'],
							PokemonSkill['에너지볼'],
							PokemonSkill['사이코키네시스'],
                        ],
                    },
                ],
            },
        ],
    },
    '팀 시 기지': {
        name: '추명',
        icon: require('../../assets/images/stardustImages/shi.png'),
        background: require('../../assets/images/blank.png'),
        type: [PokemonType.독],
        fight: [
            {
                level: [32, 33],
                title: '1차전',
                pokemon: [
                    {
                        level: 32,
                        number: 227,
                        skill: [
                            PokemonSkill['기습'],
                            PokemonSkill['맹독'],
                            PokemonSkill['베놈쇼크'],
                        ],
                    },
                    {
                        level: 32,
                        number: 195,
                        skill: [
                            PokemonSkill['오물웨이브'],
                            PokemonSkill['진흙뿌리기'],
                        ],
                    },
                    {
                        level: 33,
                        number: 293,
                        skill: [
                            PokemonSkill['아이언헤드'],
                            PokemonSkill['오물공격'],
                            PokemonSkill['승부굳히기'],
                            PokemonSkill['땅고르기'],
                        ],
                    },
                    {
                        level: 32,
                        number: 294,
                        skill: [
                            PokemonSkill['휠스핀'],
                            PokemonSkill['포이즌액셀'],
                            PokemonSkill['니트로차지'],
                            PokemonSkill['스모그'],
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
                        number: 227,
                        skill: [
                            PokemonSkill['기습'],
                            PokemonSkill['베놈쇼크'],
                            PokemonSkill['맹독'],
                            PokemonSkill['화염방사'],
                        ],
                    },
                    {
                        level: 65,
                        number: 195,
                        skill: [
                            PokemonSkill['오물웨이브'],
                            PokemonSkill['작아지기'],
                            PokemonSkill['드레인펀치'],
                            PokemonSkill['녹기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 338,
                        skill: [
                            PokemonSkill['용의파동'],
                            PokemonSkill['베놈쇼크'],
                            PokemonSkill['맹독'],
                            PokemonSkill['방어'],
                        ],
                    },
                    {
                        level: 65,
                        number: 345,
                        skill: [
                            PokemonSkill['토치카'],
                            PokemonSkill['하이드로펌프'],
                            PokemonSkill['베놈쇼크'],
                            PokemonSkill['눈보라'],
                        ],
                    },
                    {
                        level: 66,
                        number: 293,
                        skill: [
                            PokemonSkill['휠스핀'],
                            PokemonSkill['독찌르기'],
                            PokemonSkill['사념의박치기'],
                            PokemonSkill['오버히트'],
                        ],
                    },
                ],
            },
        ],
    },
    '팀 루크바 기지': {
        name: '오르티가',
        background: require('../../assets/images/blank.png'),
        icon: require('../../assets/images/stardustImages/lukeba.png'),
        type: [PokemonType.페어리],
        fight: [
            {
                level: [50, 51],
                title: '1차전',
                pokemon: [
                    {
                        level: 50,
                        number: 48,
                        skill: [
                            PokemonSkill['아쿠아테일'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['뛰어오르기'],
                            PokemonSkill['애교부리기'],
                        ],
                    },
                    {
                        level: 50,
                        number: 61,
                        skill: [
                            PokemonSkill['누르기'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['자이로볼'],
                            PokemonSkill['애교부리기'],
                        ],
                    },
                    {
                        level: 51,
                        number: 77,
                        skill: [
                            PokemonSkill['깨물어부수기'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['초롱초롱눈동자'],
                            PokemonSkill['진흙뿌리기'],
                        ],
                    },
                    {
                        level: 50,
                        number: 294,
                        skill: [
                            PokemonSkill['아이언롤러'],
                            PokemonSkill['매지컬액셀'],
                            PokemonSkill['이상한빛'],
                            PokemonSkill['휠스핀'],
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
                        number: 240,
                        skill: [
                            PokemonSkill['러스터캐논'],
                            PokemonSkill['매지컬샤인'],
                            PokemonSkill['리플렉터'],
                            PokemonSkill['빛의장막'],
                        ],
                    },
                    {
                        level: 65,
                        number: 48,
                        skill: [
                            PokemonSkill['아쿠아테일'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['냉동펀치'],
                            PokemonSkill['깨트리기'],
                        ],
                    },
                    {
                        level: 65,
                        number: 61,
                        skill: [
                            PokemonSkill['누르기'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['불꽃펀치'],
                            PokemonSkill['번개펀치'],
                        ],
                    },
                    {
                        level: 65,
                        number: 284,
                        skill: [
                            PokemonSkill['사이코키네시스'],
                            PokemonSkill['매지컬샤인'],
                            PokemonSkill['섀도볼'],
                            PokemonSkill['미스트필드'],
                        ],
                    },
                    {
                        level: 66,
                        number: 77,
                        skill: [
                            PokemonSkill['깨물어부수기'],
                            PokemonSkill['치근거리기'],
                            PokemonSkill['얼음엄니'],
                            PokemonSkill['불꽃엄니'],
                        ],
                    },
                ],
            },
        ],
    },
    '팀 카프 기지': {
        name: '비파',
        background: require('../../assets/images/blank.png'),
        icon: require('../../assets/images/stardustImages/kaf.png'),
        type: [PokemonType.격투],
        fight: [
            {
                level: [55, 56],
                title: '1차전',
                pokemon: [
                    {
                        level: 55,
                        number: 176,
                        skill: [
                            PokemonSkill['독찌르기'],
                            PokemonSkill['깨트리기'],
                            PokemonSkill['기습'],
                        ],
                    },
                    {
                        level: 55,
                        number: 314,
                        skill: [
                            PokemonSkill['인파이트'],
                            PokemonSkill['암석봉인'],
                            PokemonSkill['씨폭탄'],
                        ],
                    },
                    {
                        level: 55,
                        number: 164,
                        skill: [
                            PokemonSkill['용의파동'],
                            PokemonSkill['파동탄'],
                            PokemonSkill['악의파동'],
                        ],
                    },
                    {
                        level: 56,
                        number: 160,
                        skill: [
                            PokemonSkill['분노의주먹'],
                            PokemonSkill['인파이트'],
                            PokemonSkill['냉동펀치'],
                            PokemonSkill['불꽃펀치'],
                        ],
                    },
                    {
                        level: 56,
                        number: 294,
                        skill: [
                            PokemonSkill['파이트액셀'],
                            PokemonSkill['휠스핀'],
                            PokemonSkill['기어체인지'],
                            PokemonSkill['10만마력'],
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
                        number: 159,
                        skill: [
                            PokemonSkill['더스트슈트'],
                            PokemonSkill['분함의발구르기'],
                            PokemonSkill['크로스촙'],
                            PokemonSkill['스톤샤워'],
                        ],
                    },
                    {
                        level: 65,
                        number: 176,
                        skill: [
                            PokemonSkill['독찌르기'],
                            PokemonSkill['깨트리기'],
                            PokemonSkill['기습'],
                            PokemonSkill['냉동펀치'],
                        ],
                    },
                    {
                        level: 65,
                        number: 314,
                        skill: [
                            PokemonSkill['인파이트'],
                            PokemonSkill['더스트슈트'],
                            PokemonSkill['씨폭탄'],
                            PokemonSkill['지진'],
                        ],
                    },
                    {
                        level: 65,
                        number: 164,
                        skill: [
                            PokemonSkill['용의파동'],
                            PokemonSkill['파동탄'],
                            PokemonSkill['악의파동'],
                            PokemonSkill['신속'],
                        ],
                    },
                    {
                        level: 66,
                        number: 160,
                        skill: [
                            PokemonSkill['분노의주먹'],
                            PokemonSkill['인파이트'],
                            PokemonSkill['냉동펀치'],
                            PokemonSkill['더스트슈트'],
                        ],
                    },
                ],
            },
        ],
    },
    '첫번째 사천왕': {
        name: '칠리',
        background: require('../../assets/images/blank.png'),
        icon: require('../../assets/images/leagueImage/icon.png'),
        type: [PokemonType.땅],
        fight: [
            {
                level: [57, 58],
                title: '첫번째 사천왕',
                pokemon: [
                    {
                        level: 57,
                        number: 169,
                        skill: [
                            
                        ],
                    },
                ],
            },

        ],
    },
};
