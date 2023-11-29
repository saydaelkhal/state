import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class App extends Component {
  constructor (props){
    super(props)
    this.state={
      // settin state person
      person:{
      fullName:'Aubrey Drake Graham',
      bio:' October 24, 1986 in Canada',
      imgSrc:'./drake.jpg',
      profession:'Singer, Rapper and Actor',
      show:true},
      intervalId: null,
      timeSinceMount: 0,
    }
  }
  // button state
  show=()=>{
    this.setState({show:!this.state.show})
  }
  // componentdidmount time
  componentDidMount() {
    this.setState({
      intervalId: setInterval(() => {
        this.setState((prevState) => ({
          timeSinceMount: prevState.timeSinceMount + 1,
        }));
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { person,timeSinceMount } = this.state;
    return (
      
        <body>  
          <div className='App'>
            <h1 style={{color:'#FFFFFF',marginTop:'100px',marginBottom:'20px'}}>D  R  A  K  E</h1> {this.state.show &&<Card style={{ width: '18rem',margin:'20px'}}>
      <Card.Img variant="top" src={person.imgSrc}/>
      <Card.Body>
        {/* calling fullName inside person state */}
        <Card.Title>{person.fullName}</Card.Title>
        <Card.Text>
          {/* calling bio and profession inside person state */}
          Drake was born in {person.bio} ,he is a famous {person.profession}
        </Card.Text>
      </Card.Body>
    </Card>} 
    {/* button to show profile onclick */}
    <Button variant="dark" onClick={this.show} style={{marginTop:'5px'}}>Show profile</Button>
    {/* calling time since mount */}
    <p style={{color:'#FFFFFF'}}>Time since mount: {timeSinceMount} seconds</p>
    </div>
    </body>
     
      
      
    )
  }
}
