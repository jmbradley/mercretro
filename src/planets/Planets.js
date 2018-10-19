import React from 'react';
import logo from '../Assets/BadMerc/BadMerc.001.png'
import logo2 from '../Assets/GoodMerc/MercGoodpeg.001.jpeg'
import './Planets.css';





function Planets(props) {
    
const isRetro = props.planets;

console.log(isRetro);

    if (isRetro === true) {
        return (
        <div className="spinners">
            <img src= {logo} className="App-logo" alt="logo" />
            <img src= {logo} className="App-logo" alt="logo" />
            <img src= {logo} className="App-logo" alt="logo" />
        </div>
        )}

    else {
        return(
        <div className="spinners">
            <img src= {logo2} className="App-logo" alt="logo" />
            <img src= {logo2} className="App-logo" alt="logo" />
            <img src= {logo2} className="App-logo" alt="logo" />
        </div>
        )};
    }

export default Planets;