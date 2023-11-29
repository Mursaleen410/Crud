import React,{useState} from 'react'; 
import './App.css';
// import Colorproject from './Components/ColorProject';
// import PasswordGenrator from './Components/PasswordGenrator'
// import image1 from "./images/pexels-melvin-buezo-2529157.jpg"
// import {InputBox} from "./Components"
// import useCurrencyInfo from './Hooks/useCurrencyInfo';

import InputBox from "./Components/InputBox";
import useCurrencyInfo from './Hooks/useCurrencyInfo';

 function App() {
  const [amount,setAmount]=useState(0)
  const [from,setfrom]=useState("usd")
  const [to,setTo]=useState("pkr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
   const options=Object.keys(currencyInfo)

   const swap=()=>{
    setfrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }
   const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to])
   }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url('https://www.pexels.com/photo/film-18927430/')`,}}>
      <form  onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <div className='w-full mb-1'>
          <InputBox 
          label="Form" 
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setAmount(amount)}
          selectCurrency={from}
          />
        </div>
        <div className='relative w-full h-0.5'>
          <button type='button' className='absolute left-1/2-translate-x-1/2 
          -translate-y-1/2 border-2
          border-white rounded-md
          bg-blue-600 text-white px-2 py-0.5'>Swap</button>
        </div>
      </form>



    {/* <colorProject /> */}
    {/* <Colorproject/> */}
    {/* <PasswordGenrator /> */}
    {/* <InputBox/> */}
    </div>
  );
}

export default App;
