import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increaseCounter } from './redux/counterReducer';
import { getTodo } from './redux/todoReducer';

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

  return (
    <div className="App">
      <h2>Practice Redux Middleware</h2>
      <h3>count: {count}</h3>
      <button onClick={handleIncreaseNumber}>increase</button>
      <button onClick={() => {}}>get Todos</button>
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
