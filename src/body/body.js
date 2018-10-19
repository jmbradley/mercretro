import React from 'react';
import crown from '../Assets/2000px-Keep-calm-and-carry-on.svg.png';





function Body(props) {
    
    const isRetro = props.planets;

console.log(props.isRetro);

    if (isRetro === true) {
        return (
            <div className="leftbox">
            <h3> Mercury Retrograde is <span className="emphasis2">FULL ON</span> ! Remember these things:</h3>
          <ul>
            <p> Review all contracts and legal documents before signing.</p>
            <p>Pause and breathe before speaking. (Repeat yourself if necessary!)</p>
            <p>Read all emails and documents before you send.</p>
            <p>Insure/track important mail and packages (Mercury rules the postal system).</p>
            <p>Get your vehicles (or bikes) tuned up, pack an emergency roadside kit.</p>
            <p>Leave early for any travel and appointments, since Mercury Rx can delay flights.</p>
          </ul>
          </div>
        )}

    else {
        return(
            <div className="rightbox">
            <h3>Mercury is <span className="emphasis1">NOT</span> in Retrograde.</h3>
            <div class="check"></div><div class="check"></div><div class="check"></div>
            <img src={crown} alt="Keep Cool Daddy-O"/>
          </div>
        )};
    }

export default Body;