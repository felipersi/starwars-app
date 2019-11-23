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

    </div>
  );
}
}
export default App;
