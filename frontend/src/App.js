// App.js

import React, { useState, useEffect } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ImageInput from "./views/imageInput";
import Recommendations from './views/Recommendations'
import Form from "./views/Form";

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from "./views/Components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import Footer from "./views/Components/footer";
import Home from "./Home";
import Login from "./login";
import Register from "./register";

function App() {
  const isAuthenticated = localStorage.getItem('token');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [shrink, setShrink] = useState(false); // Define shrink state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
      setShrink(currentScrollPos > 100); // Update shrink state based on scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <CssBaseline />
      <Router>
        <ResponsiveAppBar shrink={shrink} visible={visible} /> {/* Pass shrink and visible props */}
        <div style={{ paddingTop: '64px' }}>
          {/* Adjust paddingTop according to your navbar height */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/input" element={isAuthenticated ? <ImageInput /> : <Navigate to="/login" />} />
            <Route path="/form" element={isAuthenticated ? <Form /> : <Navigate to="/login" />} />
            <Route path="/recs" element={isAuthenticated ? <Recommendations /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
