import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        setText("You have Clicked Convert");
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');

  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert</button>
    </div>
  )
}
