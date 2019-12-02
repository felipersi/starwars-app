import React, { Component } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';


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
  <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{films.title}</Card.Title>
      <Card.Subtitle className="mb-6 text-muted">Ep:{films.episode_id}</Card.Subtitle>
    <Card.Text>{films.opening_crawl}</Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">{films.director}</small>
    </Card.Footer>
  </Card>
  </Col>

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