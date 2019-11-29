import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export default class CardCustom extends Component {
  render(films) {
    return (<div>
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
    </div>);
  }
}
