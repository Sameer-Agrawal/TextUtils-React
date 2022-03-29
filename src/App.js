import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(' Switched To Light Mode!','success')
      document.title='TextUtils - LightMode';
    }else{
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert(' Switched To Dark Mode!','success')
      document.title='TextUtils - DarkMode';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>     
    <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/"> */}
          <TextForm heading="Enter your text which you want to analyze" mode={mode} showalert={showAlert}/>
            {/* </Route>
        </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
