import React, { useState } from "react";

export default function Textform(props) {
  const handleupper = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("UpperCase has been succesfully applied!","success")
  };
  const handlelower = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("LowerCase has been succesfully applied!","success")
  };
  const handleclear = () => {
    setText("");
    props.showAlert("Textform Cleared Successfully!","success")
  };
  const handlecopy =()=>{
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success")
  }
  const remspace =()=>{
    let newTxt=text.split(/[ ]+/);
    setText(newTxt.join(" "));
    props.showAlert("Extra Spaces Removed!","success")
  }

  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="myBox"
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
        <button className="btn btn-primary float-left my-3" onClick={handleupper}>
          To UpperCase
        </button>
        <button className="btn btn-secondary float-right mx-4 my-2" onClick={handlelower}>
          To LowerCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleclear}>Clear</button>

        <button className="btn btn-success mx-3" onClick={handlecopy}>Copy text</button>

        <button className="btn btn-warning mx-3" onClick={remspace}>Remove Extra Spaces</button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words,{text.length} Characters</p>
        <p><b>{0.008*(text.split(" ").length)}</b> Minutes to Read</p>
        <h3>Preview</h3>
        <h5>{text.length>0?text:"Enter some text in Textarea"}</h5>
      </div>
    </>
  );
}
