import './App.css';
import Counter from './Counter';
import Todo from './Todo';

function App() {
  return (
    <div className='border border-2 bg-warning m-2 border-primary rounded'>
     <h1>Welcom to Edupoly</h1>
     <Counter></Counter>
     <Todo></Todo>
    </div>
  );
}

export default App;
