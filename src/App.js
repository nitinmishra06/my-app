
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const[mode,setMode]=useState("light");
  const togglemode=()=>{
  if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode is ON","success");
    }
    else{
      setMode("light");
       document.body.style.backgroundColor="white";
       showAlert("Light Mode Enabled","success");
    }
  }
  const [bgColor, setBgColor] = useState('light');
  const[bg2color,setBg2Color]=useState('white');
  const handleRadiochange=(event)=>{
    const selectedColor = event.target.value;
    setBgColor(selectedColor);
    switch (selectedColor) {
      case "danger":
        document.body.style.backgroundColor="#58151c";
        setBg2Color("#58151c")
        showAlert("Red Theme Enabled","success");
        
        break;
      case "success":
        document.body.style.backgroundColor="#0a3622";
        setBg2Color("#0a3622");
        showAlert("Green Theme Enabled","success");
        
        break;
      case "light":
        document.body.style.backgroundColor="white";
        setBg2Color('white');
        showAlert("Light Theme Enabled","success");
        
        break;
      case "dark":
        document.body.style.backgroundColor="grey";
        setBg2Color("grey");
        showAlert("Dark Theme Enabled","success");
        break;
  
    
      default:
        break;
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
setAlert({
  message:message,
  type:type,
})
setTimeout(() => {
  setAlert(null);
}, 500);
  };


  




  return (
   <>
   <Router>
    <Navbar appname="TextUtils" Mode={mode} handleRadiochange={handleRadiochange} bgColor={bgColor} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-3">
        
      <Routes>
      <Route exact path="/about" element={<About bg2color={bg2color} bgColor={bgColor}/>} />
      <Route exact path="/" element={<TextForm bgColor={bgColor} bg2color={bg2color} showAlert={showAlert} />} />
        </Routes>
     
        
        
      </div>
    
      </Router>
   
   </>
  );
}

export default App;
