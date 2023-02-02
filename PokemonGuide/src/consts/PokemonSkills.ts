import { PokemonMode, PokemonType } from "./TypeCounter";

export type Skill = {
    name: string,
        type: PokemonType
        mode: PokemonMode
}

export type SkillList = {
    [key:string]: Skill
}

export const PokemonSkill: SkillList = {
    벌레의저항: {
        name: '벌레의저항',
        type: PokemonType.벌레,
        mode: PokemonMode.특수,
    },
    두번치기: {
        name: '두번치기',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    벌레먹기: {
        name: '벌레먹기',
        type: PokemonType.벌레,
        mode: PokemonMode.물리,
    },
    승부굳히기: {
        name: '승부굳히기',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    연속자르기: {
        name: '연속자르기',
        type: PokemonType.벌레,
        mode: PokemonMode.물리,
    },
    마구할퀴기: {
        name: '마구할퀴기',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    발꿈치찍기: {
        name: '발꿈치찍기',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    기습: {
        name: '기습',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    덤벼들기: {
        name: '덤벼들기',
                                type: PokemonType.벌레,
                                mode: PokemonMode.물리,
    },
    뛰어오르기: {
        name: '뛰어오르기',
                                type: PokemonType.비행,
                                mode: PokemonMode.물리,
    },
    자이로볼: {
        name: '자이로볼',
        type: PokemonType.강철,
        mode: PokemonMode.물리,
    },
    저주: {
        name: '저주',
        type: PokemonType.고스트,
        mode: PokemonMode.변화,
    },
    스톤에지: {
        name: '스톤에지',
        type: PokemonType.바위,
        mode: PokemonMode.물리,
    },
    엄습하는일격: {
        name: '엄습하는 일격',
        type: PokemonType.벌레,
        mode: PokemonMode.물리,
    },
    지옥찌르기: {
        name: '지옥찌르기',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    깨트리기: {
        name: '깨트리기',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    스레드트랩: {
        name: '스레드트랩',
        type: PokemonType.벌레,
        mode: PokemonMode.변화,
    },
    메가혼: {
        name: '메가혼',
        type: PokemonType.바위,
        mode: PokemonMode.물리,
    },
    인파이트: {
        name: '인파이트',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    깜짝베기: {
        name: '깜짝베기',
        type: PokemonType.악,
        mode: PokemonMode.변화,
    },
    '10만마력': {
        name: '10만마력',
        type: PokemonType.땅,
        mode: PokemonMode.물리,
    },
    치근거리기: {
        name: '치근거리기',
        type: PokemonType.페어리,
        mode: PokemonMode.물리,
    },
    깨물어부수기: {
        name: '깨물어부수기',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    수면가루: {
        name: '수면가루',
        type: PokemonType.풀,
        mode: PokemonMode.변화,
    },
    메가드레인: {
        name: '메가드레인',
        type: PokemonType.풀,
        mode: PokemonMode.특수,
    },
    몸통박치기: {
        name: '몸통박치기',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    잎날가르기: {
        name: '잎날가르기',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    개척하기: {
        name: '개척하기',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    돌떨구기: {
        name: '돌떨구기',
        type: PokemonType.바위,
        mode: PokemonMode.물리,
    },
    꽃보라: {
        name: '꽃보라',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    빛의장막: {
        name: '빛의장막',
        type: PokemonType.에스퍼,
        mode: PokemonMode.변화,
    },
    나비춤: {
        name: '나비춤',
        type: PokemonType.벌레,
        mode: PokemonMode.변화,
    },
    파괴광선: {
        name: '파괴광선',
        type: PokemonType.노말,
        mode: PokemonMode.특수,
    },
    마하펀치: {
        name: '마하펀지',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    씨폭탄: {
        name: '씨폭탄',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    버섯포자: {
        name: '버섯포자',
        type: PokemonType.풀,
        mode: PokemonMode.변화,
    },
    번개펀치: {
        name: '번개펀치',
        type: PokemonType.전기,
        mode: PokemonMode.물리,
    },
    트로피컬킥: {
        name: '트로피컬킥',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    무릎차기: {
        name: '무릎차기',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    사념의박치기: {
        name: '사념의박치기',
        type: PokemonType.에스퍼,
        mode: PokemonMode.물리,
    },
    대지의파동: {
        name: '대지의파동',
        type: PokemonType.노말,
        mode: PokemonMode.특수,
    },
    에너지볼: {
        name: '에너지볼',
        type: PokemonType.풀,
        mode: PokemonMode.특수,
    },
    씨뿌리기: {
        name: '씨뿌리기',
        type: PokemonType.풀,
        mode: PokemonMode.변화,
    },
    그래스필드: {
        name: '그래스필드',
        type: PokemonType.풀,
        mode: PokemonMode.변화,
    },
    불꽃펀치: {
        name: '불꽃펀치',
        type: PokemonType.불꽃,
        mode: PokemonMode.물리,
    },
    냉동펀치: {
        name: '냉동펀치',
        type: PokemonType.얼음,
        mode: PokemonMode.물리,
    },
    쪼아대기: {
        name: '쪼아대기',
        type: PokemonType.비행,
        mode: PokemonMode.물리,
    },
    전광석화: {
        name: '전광석화',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    스파크: {
        name: '스파크',
        type: PokemonType.전기,
        mode: PokemonMode.물리,
    },
    물대포: {
        name: '물대포',
        type: PokemonType.물,
        mode: PokemonMode.특수,
    },
    물기: {
        name: '물기',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    차지빔: {
        name: '차지빔',
        type: PokemonType.전기,
        mode: PokemonMode.특수,
    },
    병상첨병: {
        name: '병상첨병',
        type: PokemonType.고스트,
        mode: PokemonMode.특수,
    },
    이상한빛: {
        name: '이상한빛',
        type: PokemonType.고스트,
        mode: PokemonMode.변화,
    },
    폭풍: {
        name: '폭풍',
        type: PokemonType.비행,
        mode: PokemonMode.특수,
    },
    방전: {
        name: '방전',
        type: PokemonType.전기,
        mode: PokemonMode.특수,
    },
    순풍: {
        name: '순풍',
        type: PokemonType.비행,
        mode: PokemonMode.변화,
    },
    물의파동: {
        name: '물의파동',
        type: PokemonType.물,
        mode: PokemonMode.특수,
    },
    번개: {
        name: '번개',
        type: PokemonType.전기,
        mode: PokemonMode.특수,
    },
    리플렉터: {
        name: '리플렉터',
        type: PokemonType.에스퍼,
        mode: PokemonMode.변화,
    },
    속임수: {
        name: '속임수',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    일렉트릭필드: {
        name: '일렉트릭필드',
        type: PokemonType.전기,
        mode: PokemonMode.변화,
    },
    와일드볼트: {
        name: '와일드볼트',
        type: PokemonType.전기,
        mode: PokemonMode.물리,
    },
    사이코팽: {
        name: '사이코팽',
        type: PokemonType.에스퍼,
        mode: PokemonMode.물리,
    },
    얼음엄니: {
        name: '얼음엄니',
        type: PokemonType.얼음,
        mode: PokemonMode.물리,
    },
    섀도볼: {
        name: '섀도볼',
        type: PokemonType.고스트,
        mode: PokemonMode.특수,
    },
    매지컬플레임: {
        name: '매지컬플레임',
        type: PokemonType.불꽃,
        mode: PokemonMode.특수,
    },
    매지컬샤인: {
        name: '매지컬샤인',
        type: PokemonType.페어리,
        mode: PokemonMode.특수,
    },
    베어가르기: {
        name: '베어가르기',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    아쿠아커터: {
        name: '아쿠아커터',
        type: PokemonType.물,
        mode: PokemonMode.물리,
    },
    진흙뿌리기: {
        name: '진흙뿌리기',
        type: PokemonType.땅,
        mode: PokemonMode.특수,
    },
    박치기: {
        name: '박치기',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    집게해머: {
        name: '집게해머',
        type: PokemonType.물,
        mode: PokemonMode.물리,
    },
    바위깨기: {
        name: '바위깨기',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    힘껏치기: {
        name: '힘껏치기',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    아쿠아제트: {
        name: '아쿠아제트',
        type: PokemonType.물,
        mode: PokemonMode.물리,
    },
    사이코커터: {
        name: '사이코커터',
        type: PokemonType.물,
        mode: PokemonMode.물리,
    },
    파도타기: {
        name: '파도타기',
        type: PokemonType.물,
        mode: PokemonMode.특수,
    },
    눈보라: {
        name: '눈보라',
        type: PokemonType.얼음,
        mode: PokemonMode.특수,
    },
    트리플다이브: {
        name: '트리플다이브',
        type: PokemonType.물,
        mode: PokemonMode.물리,
    },
    분함의발구르기: {
        name: '분함의발구르기',
        type: PokemonType.땅,
        mode: PokemonMode.물리,
    },
    악의파동: {
        name: '악의파동',
        type: PokemonType.악,
        mode: PokemonMode.특수,
    },
    용의파동: {
        name: '용의파동',
        type: PokemonType.드래곤,
        mode: PokemonMode.특수,
    },
    파동탄: {
        name: '파동탄',
        type: PokemonType.격투,
        mode: PokemonMode.특수,
    },
    아이스해머: {
        name: '아이스해머',
        type: PokemonType.얼음,
        mode: PokemonMode.물리,
    },
    샤념의박치기: {
        name: '사념의박치기',
        type: PokemonType.에스퍼,
        mode: PokemonMode.물리,
    },
    하품: {
        name: '하품',
        type: PokemonType.노말,
        mode: PokemonMode.변화,
    },
    하이퍼드릴: {
        name: '하이퍼드릴',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    드릴라이너: {
        name: '드릴라이너',
        type: PokemonType.땅,
        mode: PokemonMode.물리,
    },
    뱀눈초리: {
        name: '뱀눈초리',
        type: PokemonType.노말,
        mode: PokemonMode.변화,
    },
    객기: {
        name: '객기',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    제비반환: {
        name: '제비반환',
        type: PokemonType.비행,
        mode: PokemonMode.물리,
    },
    누르기: {
        name: '누르기',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    씨기관총: {
        name: '씨기관총',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    아이언헤드: {
        name: '아이언헤드',
        type: PokemonType.강철,
        mode: PokemonMode.물리,
    },
    우드해머: {
        name: '우드해머',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    브레이브버드: {
        name: '브레이브버드',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    브레이브클로: {
        name: '브레이브클로',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    암석봉인: {
        name: '암석봉인',
        type: PokemonType.바위,
        mode: PokemonMode.물리,
    },
    드래곤다이브: {
        name: '드래곤다이브',
        type: PokemonType.드래곤,
        mode: PokemonMode.물리,
    },
    도둑질: {
        name: '도둑질',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    얼어붙은바람: {
        name: '얼어붙은바람',
        type: PokemonType.얼음,
        mode: PokemonMode.특수,
    },
    야습: {
        name: '야습',
        type: PokemonType.고스트,
        mode: PokemonMode.물리,
    },
    고스트다이브: {
        name: '고스트다이브',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    하이퍼보이스: {
        name: '하이퍼보이스',
        type: PokemonType.고스트,
        mode: PokemonMode.특수,
    },
    방어: {
        name: '방어',
        type: PokemonType.노말,
        mode: PokemonMode.변화,
    },
    도깨비불: {
        name: '도깨비불',
        type: PokemonType.불꽃,
        mode: PokemonMode.변화,
    },
    오물폭탄: {
        name: '오물폭탄',
        type: PokemonType.독,
        mode: PokemonMode.특수,
    },
    사이코키네시스: {
        name: '사이코키네시스',
        type: PokemonType.에스퍼,
        mode: PokemonMode.특수,
    },
    문포스: {
        name: '문포스',
        type: PokemonType.페어리,
        mode: PokemonMode.특수,
    },
    리프블레이드: {
        name: '리프블레이드',
        type: PokemonType.풀,
        mode: PokemonMode.물리,
    },
    시저크로스: {
        name: '시저크로스',
        type: PokemonType.벌레,
        mode: PokemonMode.물리,
    },
    애교부리기: {
        name: '애교부리기',
        type: PokemonType.페어리,
        mode: PokemonMode.변화,
    },
    벌레의야단법석: {
        name: '벌레의야단법석',
        type: PokemonType.벌레,
        mode: PokemonMode.특수,
    },
    고드름떨구기: {
        name: '고드름떨구기',
        type: PokemonType.얼음,
        mode: PokemonMode.물리,
    },
    지진: {
        name: '지진',
        type: PokemonType.땅,
        mode: PokemonMode.물리,
    },
    아이스스피너: {
        name: '아이스스피너',
        type: PokemonType.얼음,
        mode: PokemonMode.물리,
    },
    아쿠아브레이크: {
        name: '아쿠아브레이크',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    얼음뭉치: {
        name: '얼음뭉치',
        type: PokemonType.고스트,
        mode: PokemonMode.물리,
    },
    냉동빔: {
        name: '냉동빔',
        type: PokemonType.얼음,
        mode: PokemonMode.특수,
    },
    섀도클로: {
        name: '섀도클로',
        type: PokemonType.고스트,
        mode: PokemonMode.물리,
    },
    메탈클로: {
        name: '메탈클로',
        type: PokemonType.강철,
        mode: PokemonMode.물리,
    },
    다크액셀: {
        name: '다크액셀',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    바크아웃: {
        name: '바크아웃',
        type: PokemonType.악,
        mode: PokemonMode.특수,
    },
    금속음: {
        name: '금속음',
        type: PokemonType.강철,
        mode: PokemonMode.변화,
    },
    스피드스타: {
        name: '스피드스타',
        type: PokemonType.강철,
        mode: PokemonMode.변화,
    },
    니들카드: {
        name: '니들카드',
        type: PokemonType.풀,
        mode: PokemonMode.변화,
    },
    보복: {
        name: '보복',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    드래곤클로: {
        name: '드래곤클로',
        type: PokemonType.드래곤,
        mode: PokemonMode.물리,
    },
    불꽃엄니: {
        name: '불꽃엄니',
        type: PokemonType.불꽃,
        mode: PokemonMode.물리,
    },
    도각참: {
        name: '도각참',
        type: PokemonType.악,
        mode: PokemonMode.물리,
    },
    칼춤: {
        name: '칼춤',
        type: PokemonType.노말,
        mode: PokemonMode.변화,
    },
    화염바퀴: {
        name: '화염바퀴',
        type: PokemonType.불꽃,
        mode: PokemonMode.물리,
    },
    클리어스모그: {
        name: '클리어스모그',
        type: PokemonType.독,
        mode: PokemonMode.특수,
    },
    오버히트: {
        name: '오버히트',
        type: PokemonType.불꽃,
        mode: PokemonMode.특수,
    },
    번액셀: {
        name: '번액셀',
        type: PokemonType.불꽃,
        mode: PokemonMode.물리,
    },
    싫은소리: {
        name: '싫은소리',
        type: PokemonType.노말,
        mode: PokemonMode.변화,
    },
    바디프레스: {
        name: '바디프레스',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    플레어드라이브: {
        name: '플레어드라이브',
        type: PokemonType.불꽃,
        mode: PokemonMode.물리,
    },
    히트스탬프: {
        name: '히트스탬프',
        type: PokemonType.불꽃,
        mode: PokemonMode.물리,
    },
    록블라스트: {
        name: '록블라스트',
        type: PokemonType.바위,
        mode: PokemonMode.물리,
    },
    불대문자: {
        name: '불대문자',
        type: PokemonType.불꽃,
        mode: PokemonMode.특수,
    },
    번개엄니: {
        name: '번개엄니',
        type: PokemonType.전기,
        mode: PokemonMode.물리,
    },
    신속: {
        name: '신속',
        type: PokemonType.노말,
        mode: PokemonMode.물리,
    },
    아머캐논: {
        name: '아머캐논',
        type: PokemonType.불꽃,
        mode: PokemonMode.특수,
    },
    맹독: {
        name: '맹독',
        type: PokemonType.독,
        mode: PokemonMode.변화,
    },
    베놈쇼크: {
        name: '베놈쇼크',
        type: PokemonType.독,
        mode: PokemonMode.특수,
    },
    오물웨이브: {
        name: '오물웨이브',
        type: PokemonType.독,
        mode: PokemonMode.특수,
    },
    땅고르기: {
        name: '땅고르기',
        type: PokemonType.땅,
        mode: PokemonMode.물리,
    },
    휠스핀: {
        name: '휠스핀',
        type: PokemonType.강철,
        mode: PokemonMode.특수,
    },
    포이즌액셀: {
        name: '포이즌액셀',
        type: PokemonType.독,
        mode: PokemonMode.특수,
    },
    니트로차지: {
        name: '니트로차지',
        type: PokemonType.불꽃,
        mode: PokemonMode.특수,
    },
    스모그: {
        name: '스모그',
        type: PokemonType.독,
        mode: PokemonMode. 특수,
    },
    화염방사: {
        name: '화염방사',
        type: PokemonType.불꽃,
        mode: PokemonMode.특수,
    },
    작아지기: {
        name: '작아지기',
        type: PokemonType.노말,
        mode: PokemonMode.변화,
    },
    드레인펀치: {
        name: '드레인펀치',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    녹기: {
        name: '녹기',
        type: PokemonType.독,
        mode: PokemonMode.변화,
    },
    토치카: {
        name: '토치카',
        type: PokemonType.독,
        mode: PokemonMode.변화,
    },
    하이드로펌프: {
        name: '하이드로펌프',
        type: PokemonType.물,
        mode: PokemonMode.특수,
    },
    독찌르기: {
        name: '독찌르기',
        type: PokemonType.독,
        mode: PokemonMode.물리,
    },
    오물공격: {
        name: '오물공격',
        type: PokemonType.독,
        mode: PokemonMode.특수,
    },
    아쿠아테일: {
        name: '아쿠아테일',
        type: PokemonType.물,
        mode: PokemonMode.물리,
    },
    초롱초롱눈동자: {
        name: '초롱초롱눈동자',
        type: PokemonType.페어리,
        mode: PokemonMode.변화,
    },
    아이언롤러: {
        name: '아이언롤러',
        type: PokemonType.강철,
        mode: PokemonMode.물리,
    },
    매지컬액셀: {
        name: '매지컬액셀',
        type: PokemonType.페어리,
        mode: PokemonMode.물리,
    },
    러스터캐논: {
        name: '러스터캐논',
        type: PokemonType.강철,
        mode: PokemonMode.특수,
    },
    미스트필드: {
        name: '미스트필드',
        type: PokemonType.페어리,
        mode: PokemonMode.물리,
    },
    분노의주먹: {
        name: '분노의주먹',
        type: PokemonType.고스트,
        mode: PokemonMode.물리,
    },
    파이트액셀: {
        name: '파이트액셀',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    기어체인지: {
        name: '기어체인지',
        type: PokemonType.강철,
        mode: PokemonMode.변화,
    },
    더스트슈트: {
        name: '더스트슈트',
        type: PokemonType.독,
        mode: PokemonMode.물리,
    },
    크로스촙: {
        name: '크로스촙',
        type: PokemonType.격투,
        mode: PokemonMode.물리,
    },
    스톤샤워: {
        name: '스톤샤워',
        type: PokemonType.바위,
        mode: PokemonMode.물리,
    },
    탁류: {
        name: '탁류',
        type: PokemonType.물,
        mode: PokemonMode.특수,
    },
    대지의힘: {
        name: '대지의힘',
        type: PokemonType.땅,
        mode: PokemonMode.특수,
    },
    미래예지: {
        name: '미래예지',
        type: PokemonType.에스퍼,
        mode: PokemonMode.특수,
    }

}
