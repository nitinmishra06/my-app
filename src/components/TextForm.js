import React ,{useState}from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  
  const handleloClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleClear=()=>{
    setText("");
    props.showAlert("Cleared Text","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
    wordCounter(event.target.value);
  }
  function reverseString() {
    var splitString = text.split(" ");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(" ");
    setText(joinArray);
    props.showAlert("The String is Reveresed","success");
  
}
const[words,setWords]=useState(3);
const wordCounter = (text) => {
  const wordsCount = text.trim().split(/\s+/).filter(Boolean).length;
  setWords(wordsCount);
};
const handleCopy = () => {
  navigator.clipboard.writeText(text).then(() => {
    props.showAlert("Text copied to clipboard!", "success");
  }).catch(err => {
    props.showAlert("Failed to copy text", "danger");
  });
}



  const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container' style={{color: props.bgColor==='light'?"black":"white"}}>
        <h1>Text Utils- One Stop Solution For all text Manipulation</h1>
<div className="mb-3 my-3" >
  <textarea className="form-control" value={text} style={{backgroundColor:props.bg2color ,color: props.bgColor==='light'?"black":"white"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={words===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={words===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to Lowercase</button>
<button disabled={words===0} className="btn btn-primary mx-1 my-1" onClick={reverseString}>Reverse the Para</button>
<button disabled={words===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
<button disabled={words===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
    </div>
    <div className="container my-3" style={{color: props.bgColor==='light'?"black":"white"}}>
     <h2>your text summary</h2>
     <p> {words} words {text.length} characters</p>
      <p>{0.008*words} Minute to Read.</p>
      <h2>Preview</h2>
      <p>{text.toLowerCase()}</p>

    </div>
    </>
  )
}
