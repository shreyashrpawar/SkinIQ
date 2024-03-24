import * as React from 'react';
import './navbar.css'




function ResponsiveAppBar() {
  const handleLogout=()=>{
  localStorage.removeItem('token'); 
  window.location.reload(false);
}
  const isAuthenticated = localStorage.getItem('token');
  return (
   <>
   <div className='bg-[1C1B19] myown1 mx-5 items-center'>
      <div>
        <div className='text-2xl font-mono px-3'><a href='/'> SkinIQ</a></div>
      </div>
      <div className='flex space-x-12 text-lg items-center font-serif'>
        <div><a href='/'> Home</a></div>
        <div><a href='/#sectioncontact'> Contact</a></div>
        <div><a href='/#sectionabout'> About</a></div>
        {/* <div>Blog</div> */}
      </div>
      <div className='px-3'>
        {isAuthenticated?(
<div><div>
  <button onClick={handleLogout}>Logout</button>
</div></div>):
(<div><a href='/login'> Login</a></div>)

        }
        
      </div>
   </div>
   </>
  );
}
export default ResponsiveAppBar;
