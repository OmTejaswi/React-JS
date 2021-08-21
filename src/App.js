import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert'
import React, { useState } from 'react';

function App() {

  const [theme, settheme] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (type,message) => {
        setalert({
          typ: type, 
          msg: message,
        })

        setTimeout(() => {
            setalert(null);
        }, 2000);
  }


  const toggleMode = () => {
    if (theme === 'light') {
      settheme('dark');
      document.body.style.background = '#042743'
      showAlert("success",": Dark mode has been enabled");
    } else if (theme === 'dark') {
      settheme('light')
      document.body.style.background = 'white'
      showAlert("success",": Dark mode has been disabled");
    }
  }

  return (
    <>
      <Navbar title="React-App" nav1="Home" nav2="About Us" mode={theme} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Form heading="Enter the text to analyze" mode={theme} alert={showAlert}/>
      </div>
      <About mode={theme} />
      <br /><br />
    </>
  );
}

export default App;
