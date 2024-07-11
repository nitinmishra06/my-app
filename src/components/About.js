import React from 'react'

export default function About(props) {
 
        
   
  return (
    
    <div className={`container  py-3` } style={{ backgroundColor: props.bg2color, color: props.bgColor==='light'?"black":"white" }}   >
        <h1 className='my-2'>About us</h1>
      <div className="accordion my-2" id="accordionExample">
  <div className={`accordion-item bg-${props.bgColor}`} >
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.bgColor}`} style={{color: props.bgColor==='light'?"black":"white" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.bgColor}`}  style={{color: props.bgColor==='light'?"black":"white"}} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Here's a brief description: </strong>Welcome to TextUtils, your go-to tool for text analysis and manipulation. Easily convert text to uppercase or lowercase, or even reverse it with just a click of a button. Designed for simplicity and efficiency, TextUtils helps you transform your text with ease.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.bgColor}`} style={{color: props.bgColor==='light'?"black":"white" }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className={`accordion-collapse collapse bg-${props.bgColor}`}  style={{color: props.bgColor==='light'?"black":"white"}} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Free to use: </strong>TextUtils is a free, user-friendly tool for all your text analysis needs. Enjoy unlimited access to features like case conversion and text reversal without any cost.
      </div>
    </div>
  </div>
  <div className="accordion-item mb-3" >
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.bgColor}`} style={{color: props.bgColor==='light'?"black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" className={`accordion-collapse collapse bg-${props.bgColor}`}  style={{color: props.bgColor==='light'?"black":"white"}} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Browser Compatibility: </strong> TextUtils is fully compatible with all modern browsers, ensuring a seamless experience across different platforms. Access and use TextUtils effortlessly, whether you're on Chrome, Firefox, Safari, or Edge.
      </div>
    </div>
  </div>
  </div>
  </div>
  
  );
}
