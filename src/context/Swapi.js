import React, { Component } from 'react'
import 'whatwg-fetch';

export const SwapiContext = React.createContext({})

export default class SwapiProvider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            films: [],
        }

    }


    getSearch = (name) => {
        if(name !== ""){
            fetch(`https://swapi.co/api/films/?search=${name}`)
            .then( response => response.json() )
            .then( json => this.setState({ films: json.results }, ( ) => {
                console.log("Result: ", this.state.films)
                }))

        }
        
    }


    render() {
        const value = {
            state: { ...this.state },
            action: {
              getSearch: this.getSearch,
            }
          };
      
        return (
            <SwapiContext.Provider value={value}>
                {this.props.children}
            </SwapiContext.Provider>
        )

    }
}
