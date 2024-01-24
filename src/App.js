import logo from './logo.svg';
import './App.css';
import { Outlet, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate()
  const home = () => {
    navigate('/home')
  }
  const contact = () => {
    navigate('/contact')
  }
  const aboutus = () => {
    navigate('/aboutus')
  }
  const countries = () => {
    navigate('/countries')
  }
  return (
    <div>
      <span onClick={home}>Home</span>&nbsp;&nbsp;&nbsp;
      <span onClick={contact}>Contact</span>&nbsp;&nbsp;&nbsp;
      <span onClick={aboutus}>About us</span>&nbsp;&nbsp;&nbsp;
      <span onClick={countries}>countries</span>&nbsp;&nbsp;&nbsp;

      <Outlet></Outlet>
    </div>
  );
}

export default App;
