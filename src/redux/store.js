import { applyMiddleware, combineReducers, createStore } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';
import { thunk } from './middleware/thunk';
import { logger } from './middleware/loger';

// combineReducers를 통해 슬라이스된 리듀서로부터 루트 리듀서 만들어 combine 해주기
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

// store를 만들고 리듀서를 store에 넣어주기
// deprecated 됐으나 pure redux 로직을 통한 흐름을 이해하기 위해 먼저 사용해보고
// toolkit에서 지원하는 configureStore로 변환할 것
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
