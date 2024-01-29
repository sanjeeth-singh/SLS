import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import Counter from './Counter';
import store from './store/store';

function App() {
  return (
    <div className='border border-danger p-2 border-3'>
      <Provider store={store}>
        <h1>Welcom to reactJS Edupoly</h1>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
