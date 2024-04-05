// ResponsiveAppBar.js

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const ResponsiveAppBar = ({ visible, shrink }) => {
  const [isShrink, setIsShrink] = useState(shrink);

  useEffect(() => {
    setIsShrink(shrink);
  }, [shrink]);

  return (
    <AppBar position={visible ? 'fixed' : 'absolute'} style={{ top: visible ? 0 : -64, transition: 'top 0.3s', height: isShrink ? 50 : 64 }}>
      <Toolbar>
        {/* Your app bar content here */}
        <div style={{ flexGrow: 1 }}>
          {/* Add your logo or title here */}
          <h1>Your Logo or Title</h1>
        </div>
        <div>
          {/* Add your navigation links or buttons here */}
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;
