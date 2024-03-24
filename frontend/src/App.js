import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route, Navigate
} from "react-router-dom";
import ImageInput from "./views/imageInput";
import Recommendations from './views/Recommendations'
import Form from "./views/Form";

// MUI
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from "./views/Components/ResponsiveAppBar";
import Footer from "./views/Components/footer";
import Home from "./Home";
import Login from "./login";
import Register from "./register";

function App() {
  const isAuthenticated = localStorage.getItem('token');
  
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar/>
              <Router>
                <Switch>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                {/* <Protect path="/input" element={<ImageInput />} isAuthenticated={isAuthenticated} />
                <Protect path="/recs" element={<Recommendations />} isAuthenticated={isAuthenticated} />
                <Protect path="/form" element={<Form />} isAuthenticated={isAuthenticated} /> */}

                  <Route path="/input" element={isAuthenticated ? <ImageInput /> : <Navigate to="/login" />} />
                  <Route path="/form" element={isAuthenticated ? <Form /> : <Navigate to="/login" />} />
                  <Route path="/recs" element={isAuthenticated ? <Recommendations /> : <Navigate to="/login" />} />
                </Switch>
              </Router>
     <Footer/>
    </>

  );
}

export default App;
