import React, { useState } from 'react'



export default function TextForm(props) {
  // const [text, setText] = useState('Enter text here');
  const [text, setText] = useState('');


  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert(" Converted to UpperCase!","success")
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert(" Converted to LowerCase!","success")
  }
  
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert(" Extra Space's Removed !","success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container">
        <h1 style={{color: props.mode==='light'?'black':'white'}}> {props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>

      </div>

      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>


        <h1>Your text summary</h1>
        <p>{text.split(" ").length - 1} Words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text To Preview It Here!"}</p>


      </div>


    </>
  )
}
