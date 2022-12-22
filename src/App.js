import React from "react";
import Alert from "./componend/Alert";
import Home from "./componend/Home";
import Nav from "./componend/Nav";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import About from "./componend/About";

function App() {
  const [Text, setText] = useState('');
  const [alert, setAlert] = useState('')
  const [dark, setDark] = useState('light')

  const showalert = (massage, type) => {
    {
      setAlert({
        msg: massage,
        type: type
      })
      setTimeout(() => {
        setAlert({
          msg: null,
          type: null
        })
      }, 1800);
    }
  }


  const ConvertToUp = () => {
    if (!Text ) {
      showalert("Please Enter Text!", "danger")
    } else {
      showalert("Converted To UpperCase!", "success")
      let upText = Text.toString().toUpperCase();
      setText(upText);
    }
  }

  const ConvertToLow = () => {
    if (Text === '') {
      showalert("Please Enter Text!", "danger")
    } else {
      showalert("Converted To LowerCase!", "success")
      let lowtext = Text.toString().toLowerCase();
      setText(lowtext);
    }
  }

  const ClrText = () => {
    setText('')
    showalert("Cleared Successfully", "dark")
  }

  const Copytext = () => {
    if (Text === '') {
      showalert("Please Enter Text!", "danger")
    } else {
      showalert("Copied Text Successfully", "success")
      copy(Text);
    }
  }

  const Textchange = (event) => {
    setText(event.target.value);
  }

  const Refresh = () => {
    setText('');
  }


  const Dark_mode = () => {
    if (dark === "light") {
      setDark('dark')
      document.body.style.backgroundColor = '#343a40'
    } else {
      setDark('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <Router>
      <Nav Dark_mode={Dark_mode} dark={dark} Refresh={Refresh} />
      <Alert alert={alert} />
    <Routes>
      <Route  path="/" element={ <Home ConvertToUp={ConvertToUp} ConvertToLow={ConvertToLow} Textchange={Textchange}
        Text={Text} ClrText={ClrText} Copytext={Copytext} dark={dark}
      />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
    </Router>
  );
}

export default App;
