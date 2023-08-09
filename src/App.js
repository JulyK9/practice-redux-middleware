import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increaseCounter } from './redux/counterReducer';
import { getTodo } from './redux/todoReducer';
import { client } from './client';

function App() {
  const count = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  // 디스패치를 통해 액션을 스토어에 전달(feat. 액션크리에이터)
  const handleIncreaseNumber = () => {
    const increaseAction = increaseCounter(); // 액션크리에이터로 액션 생성
    dispatch(increaseAction); // 디스패치로 액션 전달
  };

  const todos = useSelector((store) => store.todo.todos);

  // const handleGetTodos = () => {
  //   const getTodoAction = getTodo(todos);
  //   dispatch(getTodoAction);
  // };

  // api로 호출하는 사이드이펙트 작업 필요

  // api를 호출하는 비동기 함수
  // 인자로 들어오는 storeDispatch 는 thunk에서 action이 함수이기 때문에 넣어주는 것
  const getTodos = (storeDispatch) => {
    // 비동기로 요청을 하고 받아온 todos를 가지고 디스패치로 액션을 전달
    // client.get('todos').then((todos) => dispatch(getTodo(todos)));
    client
      .get('todos')
      .then((todos) => storeDispatch({ type: 'todo/getTodo', payload: todos }));
  };

  // 비동기 함수를 dispatch로 전달하는 함수
  const requestTodos = () => {
    dispatch(getTodos); // thunk에서 함수로 인지하는 부분에서 걸림
  };

  return (
    <div className="App">
      <h2>Practice Redux Middleware</h2>
      <h3>count: {count}</h3>
      <button onClick={handleIncreaseNumber}>increase</button>
      <button onClick={requestTodos}>get Todos</button>
      <section>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
