import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
const Dashboard = () => {
  return (

    <div className="Dashboard">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav.Link href="/" >Navbar</Nav.Link>
          <Nav className="me-auto">
            <Nav.Link href="/todo">ToDos</Nav.Link>
            <Nav.Link href="/post">Post</Nav.Link>
            <Nav.Link href="/album">Album</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>

  )
}

export default Dashboard
