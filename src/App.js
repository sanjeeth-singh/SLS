import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Todolist from './todolist';


function App() {
  return (
    <Provider store={store}>
       <div>
        <h1>Welcom to Edupoly</h1>
        <Todolist></Todolist>
      </div>

    </Provider>

  );
}

export default App;
