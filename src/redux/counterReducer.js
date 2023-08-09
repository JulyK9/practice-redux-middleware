// 액션 타입 상수화
const INCREASE = 'counter/increase';

// 액션 크리에이터 설정(optional)
// 전달할 액션 타입을 함수화하여 실행시 타입을 반환, 나중에 필요한 곳에서 디스패치로 엑션 전달시 활용
export const increaseCounter = () => {
  return {
    type: INCREASE,
  };
};

// 초기상태 직관적 설정
const INITIAL_STATE = 0;

const counterReducer = (prevState = INITIAL_STATE, action) => {
  if (action.type === INCREASE) {
    return prevState + 1;
  }

  return prevState;
};

export default counterReducer;
