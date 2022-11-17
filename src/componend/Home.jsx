import React, { useState } from 'react'
import Alertbox from './Alert';



const Home = () => {

    const [Text, setText] = useState();
    // const [Alert1, setAlert1] = useState();
    // const [Alertcolor, setAlertcolor] = useState();

    const ConvertToUp = () => {
        let uptext = Text.toString().toUpperCase();
        setText(uptext);
        // setAlert1("Your Text Is Converted Successfully!")
        // setAlertcolor("success!")
    }

    const ConvertToLow = () => {
        let lowtext = Text.toString().toLowerCase();
        setText(lowtext);
        // setAlert1("Your Text Is Converted Successfully!")
        // setAlertcolor("success!")
    }

    const Textchange = (event) => {
        setText(event.target.value);
    }

    return (

        <div className="container">
            {/* <Alertbox Alert={[Alert1, Alertcolor]} /> */}
            <h4 className="mx-3 my-3">Enter Your Text Here</h4>
            <div className="container mt-3  ">

                <textarea className="form-control" rows="7" value={Text} onChange={Textchange} ></textarea>
            </div>

            <button className="btn btn-primary my-3 mx-2" onClick={ConvertToUp}>Convert To UpperCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={ConvertToLow}>Convert To LowerCase</button>
        </div>
    )
}

export default Home