import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';



export const CardFilm = (props) => {
    
    const { films } = props;        

    useEffect(() => {
        console.log("props", films)
    }, [props])

    return (
       
        <Container>

        <div className="row">
            {films.map( films => {
                return( 
                    <div className="col-lg-4 col-md-6" key={films.url}>  
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
                  </div>
                )

            })}
        </div>
        </Container>

    )
}
