import logo from './logo.svg';
import './App.css';
import Countries from './countries';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
      <div className='w-50'>
        <h1>HELLO Countries</h1>
        <Link to='/countries'>country</Link>
        <Outlet></Outlet>
      </div>
    
  
  );
}

export default App;
                             