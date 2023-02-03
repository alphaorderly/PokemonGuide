import { atom } from 'recoil';
import { PokemonType } from '../../consts/TypeCounter';

export type Pokemon = {
  'number': number;
  'name': string,
  'catch': boolean,
  'seen': boolean,
  'type': PokemonType[]
}

const PokemonList = atom<Pokemon[]>({
    key: 'PokemonList',
    default: [
      {
          'number': 1,
          'name': '나오하',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 2,
          'name': '나로테',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 3,
          'name': '마스카나',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.악,
          ],
      },
      {
          'number': 4,
          'name': '뜨아거',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 5,
          'name': '악뜨거',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 6,
          'name': '라우드본',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.고스트,
          ],
      },
      {
          'number': 7,
          'name': '꾸왁스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 8,
          'name': '아꾸왁',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 9,
          'name': '웨이니발',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.격투,
          ],
      },
      {
          'number': 10,
          'name': '맛보돈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 11,
          'name': '퍼퓨돈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 12,
          'name': '타랜툴라',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 13,
          'name': '트래피더',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 14,
          'name': '콩알뚜기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 15,
          'name': '엑스레그',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 16,
          'name': '통통코',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.비행,
          ],
      },
      {
          'number': 17,
          'name': '두코',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.비행,
          ],
      },
      {
          'number': 18,
          'name': '솜솜코',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.비행,
          ],
      },
      {
          'number': 19,
          'name': '화살꼬빈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 20,
          'name': '불화살빈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.비행,
          ],
      },
      {
          'number': 21,
          'name': '파이어로',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.비행,
          ],
      },
      {
          'number': 22,
          'name': '빠모',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 23,
          'name': '빠모트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.격투,
          ],
      },
      {
          'number': 24,
          'name': '빠르모트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.격투,
          ],
      },
      {
          'number': 25,
          'name': '델빌',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 26,
          'name': '헬가',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 27,
          'name': '영구스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 28,
          'name': '형사구스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 29,
          'name': '탐리스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 30,
          'name': '요씽리스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 31,
          'name': '해너츠',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 32,
          'name': '해루미',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 33,
          'name': '귀뚤뚜기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 34,
          'name': '귀뚤톡크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 35,
          'name': '분이벌레',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 36,
          'name': '분떠도리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 37,
          'name': '비비용',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.비행,
          ],
      },
      {
          'number': 38,
          'name': '세꿀버리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.비행,
          ],
      },
      {
          'number': 39,
          'name': '비퀸',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.비행,
          ],
      },
      {
          'number': 40,
          'name': '파라꼬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.비행,
          ],
      },
      {
          'number': 41,
          'name': '파크로우',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.비행,
          ],
      },
      {
          'number': 42,
          'name': '아머까오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.비행,
              PokemonType.강철,
          ],
      },
      {
          'number': 43,
          'name': '핑복',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 44,
          'name': '럭키',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 45,
          'name': '해피너스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 46,
          'name': '루리리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.페어리,
          ],
      },
      {
          'number': 47,
          'name': '마릴',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.페어리,
          ],
      },
      {
          'number': 48,
          'name': '마릴리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.페어리,
          ],
      },
      {
          'number': 49,
          'name': '비구술',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 50,
          'name': '비나방',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 51,
          'name': '브이젤',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 52,
          'name': '플로젤',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 53,
          'name': '우파',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.땅,
          ],
      },
      {
          'number': 54,
          'name': '토오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.땅,
          ],
      },
      {
          'number': 55,
          'name': '고라파덕',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 56,
          'name': '골덕',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 57,
          'name': '깨물부기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 58,
          'name': '갈가부기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.바위,
          ],
      },
      {
          'number': 59,
          'name': '푸푸린',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.페어리,
          ],
      },
      {
          'number': 60,
          'name': '푸린',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.페어리,
          ],
      },
      {
          'number': 61,
          'name': '푸크린',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.페어리,
          ],
      },
      {
          'number': 62,
          'name': '랄토스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
              PokemonType.페어리,
          ],
      },
      {
          'number': 63,
          'name': '킬리아',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
              PokemonType.페어리,
          ],
      },
      {
          'number': 64,
          'name': '가디안',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
              PokemonType.페어리,
          ],
      },
      {
          'number': 65,
          'name': '엘레이드',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 66,
          'name': '슬리프',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 67,
          'name': '슬리퍼',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 68,
          'name': '고오스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 69,
          'name': '고우스트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 70,
          'name': '팬텀',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 71,
          'name': '두리쥐',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 72,
          'name': '파밀리쥐',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 73,
          'name': '피츄',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 74,
          'name': '피카츄',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 75,
          'name': '라이츄',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 76,
          'name': '쫀도기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 77,
          'name': '바우첼',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 78,
          'name': '게을로',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 79,
          'name': '발바로',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 80,
          'name': '게을킹',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 81,
          'name': '달콤아',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 82,
          'name': '달무리나',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 83,
          'name': '달코퀸',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 84,
          'name': '미니브',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.노말,
          ],
      },
      {
          'number': 85,
          'name': '올리뇨',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.노말,
          ],
      },
      {
          'number': 86,
          'name': '올리르바',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.노말,
          ],
      },
      {
          'number': 87,
          'name': '꼬지지',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 88,
          'name': '꼬지모',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 89,
          'name': '암멍이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 90,
          'name': '루가루암',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 91,
          'name': '탄동',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 92,
          'name': '탄차곤',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 93,
          'name': '석탄산',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 94,
          'name': '꼬링크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 95,
          'name': '럭시오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 96,
          'name': '렌트라',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 97,
          'name': '찌르꼬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 98,
          'name': '찌르버드',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 99,
          'name': '찌르호크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 100,
          'name': '춤추새',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.비행,
          ],
      },
      {
          'number': 101,
          'name': '메리프',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 102,
          'name': '보송송',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 103,
          'name': '전룡',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 104,
          'name': '치릴리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 105,
          'name': '드레디어',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 106,
          'name': '버섯꼬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 107,
          'name': '버섯모',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.격투,
          ],
      },
      {
          'number': 108,
          'name': '과사삭벌레',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 109,
          'name': '애프룡',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 110,
          'name': '단지래플',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 111,
          'name': '피그점프',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 112,
          'name': '피그킹',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 113,
          'name': '시비꼬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 114,
          'name': '무우마',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 115,
          'name': '무우마직',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 116,
          'name': '마크탕',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 117,
          'name': '하리뭉',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 118,
          'name': '오기지게',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 119,
          'name': '모단단게',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.얼음,
          ],
      },
      {
          'number': 120,
          'name': '야도뇽',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 121,
          'name': '염뉴트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 122,
          'name': '코코리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 123,
          'name': '코리갑',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 124,
          'name': '끼리동',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
          ],
      },
      {
          'number': 125,
          'name': '대왕끼리동',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
          ],
      },
      {
          'number': 126,
          'name': '딥상어동',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 127,
          'name': '한바이트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 128,
          'name': '한카리아스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 129,
          'name': '베베솔트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 130,
          'name': '스태솔트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 131,
          'name': '콜로솔트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 132,
          'name': '갈모매',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.비행,
          ],
      },
      {
          'number': 133,
          'name': '패리퍼',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.비행,
          ],
      },
      {
          'number': 134,
          'name': '잉어킹',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 135,
          'name': '갸라도스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.비행,
          ],
      },
      {
          'number': 136,
          'name': '찌로꼬치',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 137,
          'name': '꼬치조',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 138,
          'name': '배쓰나이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 139,
          'name': '꼴깍몬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
          ],
      },
      {
          'number': 140,
          'name': '꿀꺽몬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
          ],
      },
      {
          'number': 141,
          'name': '나옹',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 142,
          'name': '페르시온',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 143,
          'name': '흔들풍손',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 144,
          'name': '둥실라이드',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 145,
          'name': '플라베베',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 146,
          'name': '플라엣테',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 147,
          'name': '플라제스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 148,
          'name': '디그다',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 149,
          'name': '닥트리오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 150,
          'name': '코터스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 151,
          'name': '둔타',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 152,
          'name': '폭타',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 153,
          'name': '동미러',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 154,
          'name': '동탁군',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 155,
          'name': '터검니',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 156,
          'name': '액슨도',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 157,
          'name': '액스라이즈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 158,
          'name': '망키',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 159,
          'name': '성원숭',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 160,
          'name': '저승갓숭',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.고스트,
          ],
      },
      {
          'number': 161,
          'name': '요가랑',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 162,
          'name': '요가램',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 163,
          'name': '리오르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 164,
          'name': '루카리오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.강철,
          ],
      },
      {
          'number': 165,
          'name': '카르본',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 166,
          'name': '카디나르마',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 167,
          'name': '파라블레이즈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.고스트,
          ],
      },
      {
          'number': 168,
          'name': '미꾸리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.땅,
          ],
      },
      {
          'number': 169,
          'name': '메깅',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.땅,
          ],
      },
      {
          'number': 170,
          'name': '빈나두',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 171,
          'name': '찌리배리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 172,
          'name': '미끄메라',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 173,
          'name': '미끄네일',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 174,
          'name': '미끄래곤',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 175,
          'name': '삐딱구리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.격투,
          ],
      },
      {
          'number': 176,
          'name': '독개굴',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.격투,
          ],
      },
      {
          'number': 177,
          'name': '찌리비',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.비행,
          ],
      },
      {
          'number': 178,
          'name': '찌리비크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.비행,
          ],
      },
      {
          'number': 179,
          'name': '이브이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 180,
          'name': '샤미드',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 181,
          'name': '쥬피썬더',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 182,
          'name': '부스터',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 183,
          'name': '에브이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 184,
          'name': '블래키',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
          ],
      },
      {
          'number': 185,
          'name': '리피아',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 186,
          'name': '글레이시아',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 187,
          'name': '님피아',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 188,
          'name': '노고치',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 189,
          'name': '노고고치',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 190,
          'name': '사철록',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 191,
          'name': '바라철록',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 192,
          'name': '키링키',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 193,
          'name': '키키링',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 194,
          'name': '질퍽이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
          ],
      },
      {
          'number': 195,
          'name': '질뻐기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
          ],
      },
      {
          'number': 196,
          'name': '오라티프',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
          ],
      },
      {
          'number': 197,
          'name': '마피티프',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
          ],
      },
      {
          'number': 198,
          'name': '일레즌',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 199,
          'name': '스트린더',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 200,
          'name': '데덴네',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.페어리,
          ],
      },
      {
          'number': 201,
          'name': '파치리스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 202,
          'name': '땃쭈르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.노말,
          ],
      },
      {
          'number': 203,
          'name': '태깅구르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.노말,
          ],
      },
      {
          'number': 204,
          'name': '노라키',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 205,
          'name': '깜놀버슬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.독,
          ],
      },
      {
          'number': 206,
          'name': '뽀록나',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.독,
          ],
      },
      {
          'number': 207,
          'name': '찌리리공',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 208,
          'name': '붐볼',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 209,
          'name': '코일',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.강철,
          ],
      },
      {
          'number': 210,
          'name': '레어코일',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.강철,
          ],
      },
      {
          'number': 211,
          'name': '자포코일',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.강철,
          ],
      },
      {
          'number': 212,
          'name': '메타몽',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 213,
          'name': '가디',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 214,
          'name': '윈디',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 215,
          'name': '깜지곰',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 216,
          'name': '링곰',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 217,
          'name': '쟝고',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 218,
          'name': '세비퍼',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
          ],
      },
      {
          'number': 219,
          'name': '파비코',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 220,
          'name': '파비코리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 221,
          'name': '메이클',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 222,
          'name': '고고트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 223,
          'name': '켄타로스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 224,
          'name': '레오꼬',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.노말,
          ],
      },
      {
          'number': 225,
          'name': '화염레오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
              PokemonType.노말,
          ],
      },
      {
          'number': 226,
          'name': '스컹뿡',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.악,
          ],
      },
      {
          'number': 227,
          'name': '스컹탱크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.악,
          ],
      },
      {
          'number': 228,
          'name': '조로아',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
          ],
      },
      {
          'number': 229,
          'name': '조로아크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
          ],
      },
      {
          'number': 230,
          'name': '포푸니',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.얼음,
          ],
      },
      {
          'number': 231,
          'name': '포푸니라',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.얼음,
          ],
      },
      {
          'number': 232,
          'name': '니로우',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.비행,
          ],
      },
      {
          'number': 233,
          'name': '돈크로우',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.비행,
          ],
      },
      {
          'number': 234,
          'name': '고디탱',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 235,
          'name': '고디보미',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 236,
          'name': '고디모아젤',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 237,
          'name': '데인차',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 238,
          'name': '포트데스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 239,
          'name': '따라큐',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
              PokemonType.페어리,
          ],
      },
      {
          'number': 240,
          'name': '클레피',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
              PokemonType.페어리,
          ],
      },
      {
          'number': 241,
          'name': '에써르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 242,
          'name': '그푸리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.고스트,
          ],
      },
      {
          'number': 243,
          'name': '공푸리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.고스트,
          ],
      },
      {
          'number': 244,
          'name': '들눈해',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
              PokemonType.풀,
          ],
      },
      {
          'number': 245,
          'name': '육파리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
              PokemonType.풀,
          ],
      },
      {
          'number': 246,
          'name': '트로피우스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.비행,
          ],
      },
      {
          'number': 247,
          'name': '짜랑랑',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 248,
          'name': '라란티스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 249,
          'name': '절벼게',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 250,
          'name': '캡싸이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 251,
          'name': '스코빌런',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 252,
          'name': '선인왕',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
          ],
      },
      {
          'number': 253,
          'name': '밤선인',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.악,
          ],
      },
      {
          'number': 254,
          'name': '구르데',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 255,
          'name': '베라카스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 256,
          'name': '콘팡',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 257,
          'name': '도나리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 258,
          'name': '피콘',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
          ],
      },
      {
          'number': 259,
          'name': '쏘콘',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.강철,
          ],
      },
      {
          'number': 260,
          'name': '스라크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.비행,
          ],
      },
      {
          'number': 261,
          'name': '핫삼',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.강철,
          ],
      },
      {
          'number': 262,
          'name': '헤라크로스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.격투,
          ],
      },
      {
          'number': 263,
          'name': '하느라기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 264,
          'name': '클레스퍼트라',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 265,
          'name': '히포포타스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 266,
          'name': '하마돈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 267,
          'name': '깜눈크',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
              PokemonType.악,
          ],
      },
      {
          'number': 268,
          'name': '악비르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
              PokemonType.악,
          ],
      },
      {
          'number': 269,
          'name': '악비아르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
              PokemonType.악,
          ],
      },
      {
          'number': 270,
          'name': '모래뱀',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 271,
          'name': '사다이사',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 272,
          'name': '머드나기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 273,
          'name': '만마드',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
          ],
      },
      {
          'number': 274,
          'name': '활화르바',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 275,
          'name': '불카모스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 276,
          'name': '아공이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 277,
          'name': '쉘곤',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 278,
          'name': '보만다',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 279,
          'name': '어리짱',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 280,
          'name': '벼리짱',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 281,
          'name': '두드리짱',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 282,
          'name': '몸지브림',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 283,
          'name': '손지브림',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 284,
          'name': '브리무음',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.에스퍼,
              PokemonType.페어리,
          ],
      },
      {
          'number': 285,
          'name': '메롱꿍',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.페어리,
          ],
      },
      {
          'number': 286,
          'name': '쏘겨모',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.페어리,
          ],
      },
      {
          'number': 287,
          'name': '오롱털',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.페어리,
          ],
      },
      {
          'number': 288,
          'name': '바다그다',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 289,
          'name': '바닥트리오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 290,
          'name': '떨구새',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.비행,
          ],
      },
      {
          'number': 291,
          'name': '맨돌핀',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 292,
          'name': '돌핀맨',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 293,
          'name': '부르롱',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
          ],
      },
      {
          'number': 294,
          'name': '부르르룸',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
          ],
      },
      {
          'number': 295,
          'name': '모토마',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 296,
          'name': '꿈트렁',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
          ],
      },
      {
          'number': 297,
          'name': '깜까미',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.고스트,
          ],
      },
      {
          'number': 298,
          'name': '어둠대신',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 299,
          'name': '다크펫',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 300,
          'name': '대여르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 301,
          'name': '루차불',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.비행,
          ],
      },
      {
          'number': 302,
          'name': '화강돌',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 303,
          'name': '음뱃',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.비행,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 304,
          'name': '음번',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.비행,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 305,
          'name': '드라꼰',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
              PokemonType.고스트,
          ],
      },
      {
          'number': 306,
          'name': '드래런치',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
              PokemonType.고스트,
          ],
      },
      {
          'number': 307,
          'name': '드래펄트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
              PokemonType.고스트,
          ],
      },
      {
          'number': 308,
          'name': '초롱순',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 309,
          'name': '킬라플로르',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 310,
          'name': '로토무',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.고스트,
          ],
      },
      {
          'number': 311,
          'name': '망망이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 312,
          'name': '묘두기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 313,
          'name': '하랑우탄',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 314,
          'name': '내던숭이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
          ],
      },
      {
          'number': 315,
          'name': '자말라',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
          ],
      },
      {
          'number': 316,
          'name': '애버라스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 317,
          'name': '데기라스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 318,
          'name': '마기라스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 319,
          'name': '돌헨진',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
          ],
      },
      {
          'number': 320,
          'name': '빙큐보',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 321,
          'name': '찌르성게',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 322,
          'name': '모래꿍',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 323,
          'name': '모래성이당',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 324,
          'name': '야돈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 325,
          'name': '야도란',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 326,
          'name': '야도킹',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 327,
          'name': '깝질무',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 328,
          'name': '트리토돈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.땅,
          ],
      },
      {
          'number': 329,
          'name': '셀러',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 330,
          'name': '파르셀',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.얼음,
          ],
      },
      {
          'number': 331,
          'name': '침바루',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.독,
          ],
      },
      {
          'number': 332,
          'name': '사랑동이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 333,
          'name': '형광어',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 334,
          'name': '네오라이트',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 335,
          'name': '치갈기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 336,
          'name': '맘복치',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 337,
          'name': '수레기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.물,
          ],
      },
      {
          'number': 338,
          'name': '드래캄',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 339,
          'name': '완철포',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 340,
          'name': '블로스터',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 341,
          'name': '저리어',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 342,
          'name': '저리릴',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 343,
          'name': '저리더프',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 344,
          'name': '시마사리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.물,
          ],
      },
      {
          'number': 345,
          'name': '더시마사리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.독,
              PokemonType.물,
          ],
      },
      {
          'number': 346,
          'name': '꼬이밍고',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.비행,
              PokemonType.격투,
          ],
      },
      {
          'number': 347,
          'name': '미뇽',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 348,
          'name': '신뇽',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 349,
          'name': '망나뇽',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 350,
          'name': '누니머기',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
              PokemonType.벌레,
          ],
      },
      {
          'number': 351,
          'name': '모스노우',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
              PokemonType.벌레,
          ],
      },
      {
          'number': 352,
          'name': '눈쓰개',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.얼음,
          ],
      },
      {
          'number': 353,
          'name': '눈설왕',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.얼음,
          ],
      },
      {
          'number': 354,
          'name': '딜리버드',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
              PokemonType.비행,
          ],
      },
      {
          'number': 355,
          'name': '코고미',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 356,
          'name': '툰베어',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 357,
          'name': '눈꼬마',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 358,
          'name': '얼음귀신',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 359,
          'name': '눈여아',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
              PokemonType.고스트,
          ],
      },
      {
          'number': 360,
          'name': '프리지오',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 361,
          'name': '터벅고래',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 362,
          'name': '우락고래',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 363,
          'name': '꽁어름',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 364,
          'name': '크레베이스',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 365,
          'name': '수리둥보',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 366,
          'name': '워글',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.노말,
              PokemonType.비행,
          ],
      },
      {
          'number': 367,
          'name': '자망칼',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.강철,
          ],
      },
      {
          'number': 368,
          'name': '절각참',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.강철,
          ],
      },
      {
          'number': 369,
          'name': '대도각참',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.강철,
          ],
      },
      {
          'number': 370,
          'name': '모노두',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 371,
          'name': '디헤드',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 372,
          'name': '삼삼드래',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 373,
          'name': '가비루사',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 374,
          'name': '어써러셔',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.물,
          ],
      },
      {
          'number': 375,
          'name': '싸리용',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 376,
          'name': '위대한엄니',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
              PokemonType.격투,
          ],
      },
      {
          'number': 377,
          'name': '우렁찬꼬리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
              PokemonType.에스퍼,
          ],
      },
      {
          'number': 378,
          'name': '사나운버섯',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.풀,
              PokemonType.악,
          ],
      },
      {
          'number': 379,
          'name': '날개치는머리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
              PokemonType.페어리,
          ],
      },
      {
          'number': 380,
          'name': '땅을기는날개',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.벌레,
              PokemonType.격투,
          ],
      },
      {
          'number': 381,
          'name': '모래털가죽',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
          ],
      },
      {
          'number': 382,
          'name': '무쇠바퀴',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.땅,
              PokemonType.강철,
          ],
      },
      {
          'number': 383,
          'name': '무쇠보따리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.얼음,
          ],
      },
      {
          'number': 384,
          'name': '무쇠손',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.전기,
          ],
      },
      {
          'number': 385,
          'name': '무쇠머리',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.비행,
          ],
      },
      {
          'number': 386,
          'name': '무쇠독나방',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.불꽃,
          ],
      },
      {
          'number': 387,
          'name': '무쇠가시',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.바위,
              PokemonType.전기,
          ],
      },
      {
          'number': 388,
          'name': '드니차',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 389,
          'name': '드니꽁',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 390,
          'name': '드닐레이브',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 391,
          'name': '모으령',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.고스트,
          ],
      },
      {
          'number': 392,
          'name': '타부자고',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.강철,
              PokemonType.고스트,
          ],
      },
      {
          'number': 393,
          'name': '총지엔',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.풀,
          ],
      },
      {
          'number': 394,
          'name': '파오젠',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.얼음,
          ],
      },
      {
          'number': 395,
          'name': '딩루',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.땅,
          ],
      },
      {
          'number': 396,
          'name': '위유이',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.악,
              PokemonType.불꽃,
          ],
      },
      {
          'number': 397,
          'name': '고동치는달',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.드래곤,
          ],
      },
      {
          'number': 398,
          'name': '무쇠무인',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.페어리,
          ],
      },
      {
          'number': 399,
          'name': '코라이돈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.격투,
              PokemonType.드래곤,
          ],
      },
      {
          'number': 400,
          'name': '미라이돈',
          'catch': false,
          'seen': false,
          'type': [
              PokemonType.전기,
              PokemonType.드래곤,
          ],
      },
  ],
});

export default PokemonList;
