import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'

function App() {

 const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      var target = document.getElementById('my-box');
      target.style.backgroundColor = 'grey';
      target.style.color = 'grey';
    }else{
      setMode('light');
      var target = document.getElementById('my-box');
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
    }
  }
  return (
      <>
        <Navbar  aboutText = "About us" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
             <TextForm placeholder = "Enter the Text"/>
             {/* <About/> */}
        </div>
      </>
  );
}

export default App;
