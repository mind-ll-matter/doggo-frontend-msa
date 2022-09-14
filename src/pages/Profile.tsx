import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";


export const Profile = () => {
  const { user } = useAuth0();
  return (
    <Container className= "mb-5">
      <Row className="align-items-center profile-header mb-10 text-center text-md-left">
        <Col md={2}>
          <img
            src = {user?.picture}
            alt = "Profile"
            className = "bottom-50 rounded-circle img-fluid profile-picture mb-5 mb-md-5"
          />
        </Col>
        <Col md>
          <h2>{user?.name}</h2>
          <p className="lead text-muted">{user?.email}</p>
        </Col>
      </Row>
    </Container>
    );
};

export default Profile;
