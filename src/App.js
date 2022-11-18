import React from "react";
import Alert from "./componend/Alert";
import Home from "./componend/Home";
import Nav from "./componend/Nav";
import { useState } from "react";

function App() {
  const [Text, setText] = useState('');
  const [alert, setAlert] = useState('')
  const [dark, setDark] = useState('light')
  
  const showalert = (massage, type) => {{
      setAlert({
        msg: massage ,
        type: type
      })
      setTimeout(() => {
          setAlert({
            msg: null,
            type: null
          })
        }, 1500);
      }
}


        const ConvertToUp = () => {
         if(Text===''){
        showalert("Lavdya kahi tr tak", "danger")
      }else{
        let uptext = Text.toString().toUpperCase();
        setText(uptext);
        showalert("Converted To UpperCase!", "success")
      }
      }
    
    const ConvertToLow = () => {
      if(Text===''){
        showalert("Lavdya kahi tr tak", "danger")
      }else{
        let lowtext = Text.toString().toLowerCase();
        setText(lowtext);
        showalert("Converted To LowerCase!", "success")
      }}
      
      const ClrText = () => {
        if(Text===''){
        showalert("Bhaii terese nhi hoga !", "danger")
      }else{
        setText('')
        showalert("Cleared Successfully", "dark")
    }}

    const Textchange = (event) => {
        setText(event.target.value);
    }

    const Refresh =()=>{
      setText('');
    }


    const Dark_mode = () => {
        if (dark === "light") {
            setDark('dark')
            document.body.style.backgroundColor='#343a40'
        } else {
          setDark('light')
          document.body.style.backgroundColor='white'
        }
        }
    
  return (
    <div>
    <Nav Dark_mode={Dark_mode}  dark={dark} Refresh={Refresh}/>
    <Alert alert={alert} />
    <Home ConvertToUp={ConvertToUp} ConvertToLow={ConvertToLow} Textchange={Textchange} 
         Text={Text} ClrText={ClrText} dark={dark} 
    />
    </div>
  );
}

export default App;
