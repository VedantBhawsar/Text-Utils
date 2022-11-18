import React from "react";
import Alert from "./componend/Alert";
import Home from "./componend/Home";
import Nav from "./componend/Nav";
import { useState } from "react";

function App() {
  const [Text, setText] = useState('');
  const [alert, setAlert] = useState('');
  const [alertcolor, setAlertcolor] = useState('');
  const [labdark, setLabdark] = useState("White Mode")
  const [dark, setDark] = useState('light')
  
        const ConvertToUp = () => {
        let uptext = Text.toString().toUpperCase();
        setText(uptext);
        setAlert("Your Text Is Converted Successfully!")
        setAlertcolor("success!")
      }
    
    const ConvertToLow = () => {
    let lowtext = Text.toString().toLowerCase();
        setText(lowtext);
        setAlert("Your Text Is Converted Successfully!")
        setAlertcolor("success!")
    }

    const ClrText = () => {
        setText('')
    }

    const Textchange = (event) => {
        setText(event.target.value);
    }


    const Dark_mode = () => {
        if (dark === "light") {
            setDark('dark')
            setLabdark("Light Mode")
            document.body.style.backgroundColor='#343a40'
        } else {
          setDark('light')
          setLabdark("Dark Mode")
          document.body.style.backgroundColor='white'
        }
        }
    
  return (
    <div>
    <Nav Dark_mode={Dark_mode} labdark={labdark} dark={dark} />
    <Alert Alert={alert} Alertcolor={alertcolor} />
    <Home ConvertToUp={ConvertToUp} ConvertToLow={ConvertToLow} Textchange={Textchange} 
         Text={Text} ClrText={ClrText} dark={dark}
    />
    </div>
  );
}

export default App;
