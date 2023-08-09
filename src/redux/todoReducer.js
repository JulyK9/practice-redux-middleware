// 액션타입 상수화
const GET_TODO = 'todo/getTodo';

// 액션크리에이터
// 액션 타입에 부가적으로 페이로드를 전달, 페이로드는 할일 목록
export const getTodo = (todos) => {
  return {
    type: GET_TODO,
    payload: todos,
  };
};

// 초기 상태 직관적 설정
// 객체 형태로 관리
// 객체 내부에 할일 목록 속성을 설정하여 초기값은 빈 배열로 하고 요소로 추가할 수 있음 고려
const INITIAL_STATE = {
  todos: [],
};

// 할일에 대한 변경 로직이 있는 슬라이스 리듀서
const todoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === GET_TODO) {
    return {
      todos: [...state.todos, ...action.payload],
    };
  }

  return state;
};

export default todoReducer;
