import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { Navbar, Nav, Container, Col } from 'react-bootstrap';
import StockContainer from '../containers/StockContainer';
import Search from '../containers/Search';

class App extends React.Component {
    render() {
        return (
                <Container fluid>
                    <Navbar hover="true" style={{ backgroundColor: "#3d4147" }} expand="lg" variant="dark" sticky="top">
                        <Navbar.Brand style={{ color: "#20c94d" }} href="/stock_view">Covey</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Leaderboard</Nav.Link>
                                <Nav.Link href="#">Communities</Nav.Link>
                                <Nav.Link href="#">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav.Link style={{ color: "#20c94d" }}>Create Portfolio</Nav.Link>
                    </Navbar>
                    <div className="mt-5">
                        <Search />
                    </div>
                    <br />
                    <StockContainer />
                </Container>
        )
    }
}

export default App;