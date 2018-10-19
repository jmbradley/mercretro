import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



////Created
import Planets from '../planets/Planets';
import Title from '../title/Title';
import Body from '../body/body';





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      retrograde: [],
      };
    }
  
   componentDidMount() {
     axios
     .get('https://mercuryretrogradeapi.com')
     .then((response) => {
      this.setState({ retrograde: response.data})
      console.log(response.data);
     })
     .catch(err => {
       console.log(err);
     })
   };

   handleChange = () => {
     if(this.state.retrograde.is_retrograde === false) {
       return this.setState({retrograde:{is_retrograde:true}});
     }
     else {
       return this.setState({retrograde:{is_retrograde:false}});
     }
   }



  render() {
    console.log(this.state.retrograde.is_retrograde);
    console.log(this.state);


    return (
      <div className="App">
        <header className="App-header">
          <div className="logogroup">
            <Planets planets={this.state.retrograde.is_retrograde}/>
          </div>
            <Title/>
        </header>
        <div className="mainbody">
          <div className="sliderbanner">
              <h1>
              Mercury Retrograde Has A Crazy Impact On The Choices You Make.<br/>
             <span className="emphasis3">Know With Precision Before Your Decision!</span>
              </h1>
              
              <label className="switch">
                <input type="checkbox" onChange={this.handleChange}/>
                <span className="slider round"></span>
             </label>
             <p>(Slide for different states)</p>
          </div>
          <div className="statement-container">
            <Body planets={this.state.retrograde.is_retrograde}/>
          </div>
        </div>
    </div>
  )};
}

export default App;
