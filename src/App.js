import React  from 'react'; 
import './App.css';
// import Colorproject from './Components/ColorProject';
// import PasswordGenrator from './Components/PasswordGenrator'
// import image1 from "./images/pexels-melvin-buezo-2529157.jpg"
// import {InputBox} from "./Components"
// import useCurrencyInfo from './Hooks/useCurrencyInfo' 
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
// import About from './Components/About/About';
// import Contect from './Components/Contect/Contect';
// import Home from './Components/Home/Home';
import { Outlet } from 'react-router-dom';


 function App() {
  return (
    <div> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
  }

export default App;
