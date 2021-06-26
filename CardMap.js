import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
function Card1() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400"  />
    <Card.Body>
      <Card.Title>    Kashmir  </Card.Title>
      <Card.Text>
        Welcome to the beautiful Kashmir
      </Card.Text>
      <Button variant="primary">Comment Below</Button>
    </Card.Body>
  </Card>
);
}
export default Card1
