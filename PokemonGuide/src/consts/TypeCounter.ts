/*

포켓몬 상성 표입니다.

*/

const S = 2;
const N = 1;
const W = 0.5;
const X = 0;

/*

행 - 피해를 받는 타입
열 - 피해를 주는 타입
값 - 피햬 계수

피해 계산법 - 타입의 내적값.

*/
export const PokemonTypeCounters = [
  [N, N, N, N, N, N, S, N, N, N, N, N, N, X, N, N, N, N], // 노말
  [N, W, S, W, N, W, N, N, S, N, N, W, S, N, N, N, W, W], // 불꽃
  [N, W, W, S, S, W, N, N, N, N, N, N, N, N, N, N, W, N], // 물
  [N, S, W, W, W, S, N, S, W, S, N, S, N, N, N, N, N, N], // 풀
  [N, N, N, N, W, N, N, N, S, W, N, N, N, N, N, N, W, N], // 전기
  [N, S, N, N, N, W, S, N, N, N, N, N, S, N, N, N, S, N], // 얼음
  [N, N, N, N, N, N, N, N, N, S, S, W, W, N, N, W, N, S], // 격투
  [N, N, N, W, N, N, W, W, S, N, S, W, N, N, N, N, N, W], // 독
  [N, N, S, S, X, S, N, W, N, N, N, N, W, N, N, N, N, N], // 땅
  [N, N, N, W, S, S, W, N, X, N, N, W, S, N, N, N, N, N], // 비행
  [N, N, N, N, N, N, W, N, N, N, W, S, N, S, N, S, N, N], // 에스퍼
  [N, S, N, W, N, N, W, N, W, S, N, N, S, N, N, N, N, N], // 벌레
  [W, W, S, S, N, N, S, W, S, W, N, N, N, N, N, N, S, N], // 바위
  [X, N, N, N, N, N, X, W, N, N, N, W, N, S, N, S, N, N], // 고스트
  [N, W, W, W, W, S, N, N, N, N, N, N, N, N, S, N, N, S], // 드래곤
  [N, N, N, N, N, N, S, N, N, N, X, S, N, W, N, W, N, S], // 악
  [W, S, N, W, N, W, S, X, S, W, W, W, W, N, W, N, W, W], // 강철
  [N, N, N, N, N, N, W, S, N, N, N, W, N, N, X, W, S, N], // 페어리
];

export const PokemonTypes = [
  {label: '노말', value: 0, color: '#A8A77A'},
  {label: '불꽃', value: 1, color: '#EE8130'},
  {label: '물', value: 2, color: '#6390F0'},
  {label: '풀', value: 3, color: '#7AC74C'},
  {label: '전기', value: 4, color: '#6390F0'},
  {label: '얼음', value: 5, color: '#96D9D6'},
  {label: '격투', value: 6, color: '#C22E28'},
  {label: '독', value: 7, color: '#A33EA1'},
  {label: '땅', value: 8, color: '#E2BF65'},
  {label: '비행', value: 9, color: '#A98FF3'},
  {label: '에스퍼', value: 10, color: '#F95587'},
  {label: '벌레', value: 11, color: '#A6B91A'},
  {label: '바위', value: 12, color: '#B6A136'},
  {label: '고스트', value: 13, color: '#735797'},
  {label: '드래곤', value: 14, color: '#6F35FC'},
  {label: '악', value: 15, color: '#705746'},
  {label: '강철', value: 16, color: '#B7B7CE'},
  {label: '페어리', value: 17, color: '#D685AD'},
];

export enum PokemonType {
  노말,
  불꽃,
  물,
  풀,
  전기,
  얼음,
  격투,
  독,
  땅,
  비행,
  에스퍼,
  벌레,
  바위,
  고스트,
  드래곤,
  악,
  강철,
  페어리
}

export enum PokemonMode {
  물리,
  특수,
  변화,
}