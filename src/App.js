import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="React-App" nav1="Home" nav2="About Us" />

      <div className="container my-3">
        <Form heading="Enter the text to analyze" />
      </div>

      <About/>
      <br /><br />
    </>
  );
}

export default App;
