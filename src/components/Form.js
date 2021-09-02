import React, { useState } from 'react';


export default function Form(props) {
    document.title = 'TextUtils - Word counter | character counter | lowercase to uppercase | uppercase to lowercase'

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);

        props.alert("success", ": Converted to uppercase!")
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);

        props.alert("success", ": Converted to lowercase!")
    }

    const handleClClick = () => {
        setText('');

        props.alert("success", ": textbox cleared!")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var tex = document.getElementById("box");
        // text.select();

        navigator.clipboard.writeText(tex.value);

        props.alert("success", ": Copied to clipboard!")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h2 style={{color: props.mode==="light"?'black':'white'}}>{props.heading}</h2>
                    <textarea className="form-control" style={{backgroundColor: props.mode==="light"?'white':'black', color: props.mode==='light'?'black':'white'}} value={text} id="box" rows="8" onChange={handleOnChange} placeholder="Enter Text Here" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lower case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear</button>
            </div>

            <div className="container my-2">
                <h2 style={{color: props.mode==="light"?'black':'white'}}>You text summary</h2>
                <p style={{color: props.mode==="light"?'black':'white'}} >{text.length} characters and {text.split(" ").filter((element)=>{return element.length !== 0;}).length} words</p>
                <p style={{color: props.mode==="light"?'black':'white'}} >{0.008 * text.split(" ").length} word will take minutes to read for an average person</p>

                {/* preview */}
                <h2 style={{color: props.mode==="light"?'black':'white'}}>Preview</h2>
                <p style={{color: props.mode==="light"?'black':'white'}} >{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
