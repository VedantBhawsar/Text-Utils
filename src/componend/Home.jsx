import React from 'react'; 


const Home = (props) => {


    return (
        <div className="container" style={{ color: props.dark === 'light' ? 'black' : 'white' }}>
            <h4 className="mx-3 my-3">Enter Your Text Here</h4>
            <div className="container mt-3" style={{ color: props.dark === 'light' ? 'black' : 'white' }}>
                <textarea className="form-control" rows="8" value={props.Text} onChange={props.Textchange} placeholder='Enter Text Here' style={{ backgroundColor: props.dark === 'light' ? 'white' : '#343a40', color: props.dark === 'light' ? 'black' : 'white' }} ></textarea>
            </div>
        <div className='my-3'>
            <button className="btn btn-primary my-1 mx-2" onClick={props.ConvertToUp}>Convert To UpperCase</button>
            <button className="btn btn-primary my-1 mx-2" onClick={props.ConvertToLow}>Convert To LowerCase</button>
            <button className="btn btn-primary my-1 mx-2" onClick={props.Copytext}>Copy Text</button>
            <button className="btn btn-primary my-1 mx-2" onClick={props.ClrText}>Clear</button >   
</div>



            <h4>Your Text Summary</h4>
            <p>
                {props.Text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {props.Text.toString().length} characters
            </p>
            <p>
                Reading Time {0.008 * props.Text.split(" ").filter((element) => { return element.length !== 0 }).length} min
            </p>
            <h2>
                Preview
            </h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>UpperCase</h6>
                        <div className='mx-3 border pb-5 pt-1'  >
                            <div className='mx-3'>
                                {props.Text.toString().toUpperCase()}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <h6>LowerCase</h6>
                        <div className='mx-3 border pb-5 pt-1' >
                            <div className='mx-3'>
                                {props.Text.toString().toLowerCase()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home