import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert'
import React, { useState } from 'react';

// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [theme, settheme] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (type, message) => {
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
      showAlert("success", ": Dark mode has been enabled");
    } else if (theme === 'dark') {
      settheme('light')
      document.body.style.background = 'white'
      showAlert("success", ": Dark mode has been disabled");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" nav1="Home" nav2="About Us" mode={theme} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Switch>
            <Route exact path="/about">
              <About mode={theme} />
            </Route>
            <Route exact path="/home">
              <Form heading="Enter the text to analyze" mode={theme} alert={showAlert} />
            </Route>
            <Route exact path="/React-JS">
              <Form heading="Enter the text to analyze" mode={theme} alert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
      <br /><br />
    </>
  );
}

export default App;
