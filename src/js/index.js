//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(_props){
    return(<div className="bigCounter">
        <div className="calendar"><i className="fa-regular fa-clock"></i></div>
        <div className="four">{_props.digitFour % 10}</div>
        <div className="three">{_props.digitThree % 10}</div>
        <div className="two">{_props.digitTwo % 10}</div>
        <div className="one">{_props.digitOne % 10}</div>
    </div>);
}

SimpleCounter.propTypes = {
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number
};

let counter = 0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one); 
    counter ++;  

    //render your react application
ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, 
    document.querySelector("#app")
);
}, 1000);

