// 미들웨어 생성: api를 호출하는 부분에 대한 처리를 thunk 에서 처리
export const thunk = (store) => (next) => (action) => {
  typeof action === 'function' // action이 (객체 타입이 아니라) 함수이면
    ? action(store.dispatch, store.getState) // 그 함수를 호출하고 => getTodos를 호출하여 실행
    : next(action); // 아니면 그 다음으로 넘기기
};
