import React, { useState } from 'react'
import Alertbox from './Alert';



const Home = () => {

    const [Text, setText] = useState('');
    const [Alert1, setAlert1] = useState('');
    const [Alertcolor, setAlertcolor] = useState('');

    const ConvertToUp = () => {
        let uptext = Text.toString().toUpperCase();
        setText(uptext);
        setAlert1("Your Text Is Converted Successfully!")
        setAlertcolor("success!")
    }

    const ConvertToLow = () => {
        let lowtext = Text.toString().toLowerCase();
        setText(lowtext);
        setAlert1("Your Text Is Converted Successfully!")
        setAlertcolor("success!")
    }

    const Textchange = (event) => {
        setText(event.target.value);
    }
    const AlertArray = {
        "alt": Alert1,
        "altc": Alertcolor,
    }
    return (

        <div className="container">

            <Alertbox Alert={[AlertArray]} />
            <h4 className="mx-3 my-3">Enter Your Text Here</h4>
            <div className="container mt-3  ">

                <textarea className="form-control" rows="8" value={Text} onChange={Textchange} placeholder='Enter Text Here' ></textarea>
            </div>

            <button className="btn btn-primary my-3 mx-2" onClick={ConvertToUp}>Convert To UpperCase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={ConvertToLow}>Convert To LowerCase</button>



            <h4>Your Text Summary</h4>
            <p>
                {Text.split(" ").length} words and {Text.toString().length} characters
            </p>
            <p>
                Reading Time {0.008 * Text.split(" ").length} min
            </p>
            <h2>
                Preview
            </h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h6>UpperCase</h6>
                        <div className='mx-3 border pb-5 pt-1' >
                            <div className='mx-3'>
                                {Text.toString().toUpperCase()}
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <h6>LowerCase</h6>
                        <div className='mx-3 border pb-5 pt-1' >
                            <div className='mx-3'>
                                {Text.toString().toLowerCase()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home