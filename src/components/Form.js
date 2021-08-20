import React, { useState } from 'react';


export default function Form(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleClClick = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} id="box" rows="8" onChange={handleOnChange} placeholder="Enter Text Here"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
            </div>

            <div className="container my-2">
                <h2>You text summary</h2>
                <p>{text.length} characters and {text.split(" ").length} words</p>
                <p>{0.008 * text.split(" ").length} word will take minutes to read for an average person</p>

                {/* preview */}
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
