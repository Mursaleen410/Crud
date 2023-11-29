import React from 'react'
import  './Footer.css'

function Footer() {
 
  return (
    <>
    <div className='foot'>
      <h1>Your<span>Logo</span></h1>
      <div className='description'>
         <thead>RECOURCES</thead>
         <li>Home</li>
         <li>Contect</li>
         <li>About</li>
         
      </div>
      <div className='follow'>
         <thead>FOLLOW US</thead>
         <li>GItHub</li>
         <li>Discort</li>
         </div>
         <div className='legal'>
         <thead>LEGAL</thead>
         <li>Privicy Policy</li>
         <li>Terms & Conditions</li>
         </div>
    </div>
    
    </>
    

  )
}

export default Footer
