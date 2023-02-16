//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(_props){
    return(<div className="bigCounter">
        <div className="calendar"><i className="fa-regular fa-clock"></i></div>
        <div className="four">{_props.digitFour}</div>
        <div className="three">{_props.digitThree}</div>
        <div className="two">{_props.digitTwo}</div>
        <div className="one">{_props.digitOne}</div>
    </div>);
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.nuber,
    digitThree: PropTypes.nuber,
    digitTwo: PropTypes.nuber,
    digitOne: PropTypes.nuber,
}

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/10000);
    const three = Math.floor(counter/1000);
    const two = Math.floor(counter/100);
    const one = Math.floor(counter/10);
    console.log(four, three, two, one);   
}, 1000);
//render your react application
ReactDOM.render(
    <SimpleCounter digitOne={counter.indexOf()}/>, 
    document.querySelector("#app")
);

