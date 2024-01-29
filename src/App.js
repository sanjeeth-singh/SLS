import logo from './logo.svg';
import './App.css';
import Todolist from './todolist';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='border border-info border-5 p-2'>
        <h1>TODO List</h1>
      <Todolist></Todolist>
    </div>
    </Provider>
  );
}

export default App;
