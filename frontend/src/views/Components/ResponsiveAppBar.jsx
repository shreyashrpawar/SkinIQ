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
   
<header id="header">

  <a class="nav-brand" href="" target="_blank">
    <img id="header-img" src="imagenavbar.png" alt="Pixel Skincare"/>
  </a>
  
  
  <input type="checkbox" id="toggle-menu" role="button"/>
  <label for="toggle-menu" class="toggle-menu">Menu</label>
  
  <nav id="nav-bar" class="navbar">
    <ul class="menu">

      <li><a class="nav-link" href="#about">About</a></li>
      <li><a class="nav-link" href="#contact">Contact</a></li>
      <div className='px-3'>
        {isAuthenticated?(
<div><div>
  <button onClick={handleLogout}>Logout</button>
</div></div>):
(<div><a href='/login'> Login</a></div>)

        }
        </div>
    </ul>
    {/* <ul class="social-menu">
      <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
    </ul> */}
  </nav>
</header>
   {/* <div className='bg-[1C1B19] myown1 mx-5 items-center'>
      <div>
        <div className='text-2xl font-mono px-3'><a href='/'> SkinIQ</a></div>
      </div>
      <div className='flex space-x-12 text-lg items-center font-serif'>
        <div><a href='/'> Home</a></div>
        <div><a href='/#sectioncontact'> Contact</a></div>
        <div><a href='/#sectionabout'> About</a></div>
        {/* <div>Blog</div> */}
      {/* </div>
      <div className='px-3'>
        {isAuthenticated?(
<div><div>
  <button onClick={handleLogout}>Logout</button>
</div></div>):
(<div><a href='/login'> Login</a></div>)

        }
        
      </div>
   </div> */} 
   </>
  );
}
export default ResponsiveAppBar;
