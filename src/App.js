import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React, { useState } from 'react';

function App() {

  const [theme, settheme] = useState('light')

  const toggleMode = () => {
    if(theme === 'light') {
        settheme('dark');
        document.body.style.background = 'grey'
    } else if(theme === 'dark') {
        settheme('light')
        document.body.style.background = 'white'
    }
  }

  return (
    <>
      <Navbar title="React-App" nav1="Home" nav2="About Us" mode={theme} toggleMode={toggleMode}/>

      <div className="container my-3">
        <Form heading="Enter the text to analyze" />
      </div>

      <About/>
      <br /><br />
    </>
  );
}

export default App;
