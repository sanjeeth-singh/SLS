import logo from './logo.svg';
import './App.css';
import Products from './product';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './cart';
import Header from './header';
import { Outlet } from 'react-router';

function App() {
  return (
    <Provider store={store}>
      <div>
       
      
        <Header></Header>
        {/* <Products></Products>
        <Cart></Cart> */}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </Provider>

  );
}

export default App;
