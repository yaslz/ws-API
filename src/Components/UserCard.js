import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Link to={`/user/${user.id}`}>
            <Button variant="primary">Go profile</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
