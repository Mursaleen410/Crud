import React,{useCallback, useEffect, useRef, useState} from 'react'



function PasswordGenrator() {
    const [Length,setLenght]=useState("8")
    const [number,setNumber]=useState("false")
    const [char,setChar]=useState("false")
    const [password,setPassword]=useState("")

     const passwordRef=useRef(null)
    const PasswordGenrator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number) str +="0123456789"
        if(char) str +="!@#$%^&*()"

        for (let  i = 1;  i <= Length;  i++) {    
             let charactor=Math.floor(Math.random() * str.length +1)
             pass +=str.charAt(charactor)
        }
        setPassword(pass)
    },[Length,number,char,setPassword])

    const copyPasswordToBoard = useCallback(()=>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    },[password]) 
    useEffect(()=>{
        PasswordGenrator()
    },[Length,number,char,PasswordGenrator])
  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-gray-700'>
    <h1 className='text-white text-center'>Password Genrator </h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'> <input type='text' value={password} className='outline-none w-full py-1 px-3'placeholder='password' readOnly  ref={passwordRef} />
     <button className='outline-none bg-blue-700 text-white px-3 py-0.5  shrink-0 ' onClick={copyPasswordToBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type='range' min={5} max={50} value={Length} className='cursor-pointer' 
                onChange={(e)=>{setLenght(e.target.value)}}
                /><label>length:{Length}</label>
            </div>
            <div className='flex  items-center gap-x-1'>
                <input type='checkbox' defaultChecked={number} id='numberInput' onChange={()=>{
                    setNumber((prev)=>!prev);
                }} /> <label>Numbers</label>
            </div>
            <div className=' flex items-center gap-x-1 '>
                <input type='checkbox' defaultChecked={char} id='charInput' onChange={()=>{
                    setChar((prev)=>!prev)
                }} /><label>Charactors</label>
            </div>
        </div>
        </div>

  )
}

export default PasswordGenrator