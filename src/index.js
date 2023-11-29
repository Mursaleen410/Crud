import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{ Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contect from './Components/Contect/Contect';

// import reportWebVitals from './reportWebVitals';


// const router = createBrowserRouter([
//    {
//       path: '/',
//       element: <App />,
//       children:[
//          {path:'', element:<Home />},
//          {path:'/about', element:<About/>}
//       ]
//    }
// ])


const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path=''element={<App />}>
         <Route path='/' element={<Home />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/contect' element={<Contect />}/>

      </Route>
   )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router}/>
   </React.StrictMode>

);