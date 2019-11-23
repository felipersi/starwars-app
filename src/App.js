import React, { Component } from 'react';
import Axios from 'axios';

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
  <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="index.php" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  
    </div>
  );
}
}
export default App;
