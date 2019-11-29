import React, { Component } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';

import CardsCustom from "./components/Cards/CardCustom";


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    films: [],
  }
  this.getFilms = this.getFilms.bind(this);
}

getFilms(){
   return Axios.get('https://swapi.co/api/films/')
   .then((response) => {
    console.log(response.data.results);
    this.setState( { films: response.data.results } )
    })
}

componentDidMount(){
  this.getFilms();
}



render(){
  return (
    <div className="App">
      <div className = "jumbotron">
    <div className = "container">
      <h1 className  = "center">STAR WARS FILME </h1>
      <p>filmes do starwars</p>
    </div>
  </div>
  <Container>
    <CardColumns>
  <Col xs lg="4">
  {
    this.state.films.map(function(films){
      return(   
        <CardsCustom>

        </CardsCustom>

        );
    })
 }
 </Col>
 </CardColumns>
    </Container>
  </div>
  
      
  );
}
}
export default App;
