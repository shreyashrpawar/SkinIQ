import * as React from 'react';
import './navbar.css'

function Footer() {

  return (

   <div className='bg-black flex flex-row text-white p-0 m-0 justify-around pt-6 pb-3'>
      <div className='text-6xl thenew'>SkinIQ</div>
      <div>
        <div className='flex flex-col'>
          <div><a href='/'>Home</a></div>
          <div><a href='/contact'>Contact</a></div>
          <div><a href='/about'>About</a></div>
        </div>
      </div>
   </div>

  );
}
export default Footer;
