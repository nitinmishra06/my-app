import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.bgColor} navbar-${props.bgColor}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.appname}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          
          
         
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className={`btn btn-outline-${props.bgColor==="success"?"primary":"success"}`} type="submit">Search</button>
        </form>
      </div>
      


<div className={`mx-2 text-${props.bgColor==="light"?"dark":"light"}`}>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" v name="inlineRadioOptions"onChange={props.handleRadiochange} id="inlineRadio1" value="danger"/>
  <label className="form-check-label" for="inlineRadio1">Red</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio"  name="inlineRadioOptions"onChange={props.handleRadiochange} id="inlineRadio2" value="light"/>
  <label className="form-check-label" for="inlineRadio2">White</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio"  name="inlineRadioOptions" onChange={props.handleRadiochange}id="inlineRadio3" value="success" />
  <label className="form-check-label" for="inlineRadio3">Green</label>
</div>
<div className="form-check form-check-inline">
  <input className={`form-check-input text-${props.bgColor==="light"?"dark":"light"}`} type="radio"  name="inlineRadioOptions" onChange={props.handleRadiochange}id="inlineRadio3" value="dark" />
  <label className="form-check-label" for="inlineRadio3">Black</label>
</div>
</div>




{/*

<div className={`form-check form-switch mx-3 text-${props.Mode==="light"?"dark":"light"}`}>
  <input className="form-check-input " type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>*/}
    </div>
  </nav>
  )
}
Navbar.propTypes = {
    appname: PropTypes.string
  };
  
  Navbar.defaultProps = {
    appname: 'appname'
  };
  