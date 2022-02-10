import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import StockContainer from '../containers/StockContainer';
import Chart from './Chart';
// import { LineChart } from 'recharts';

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
                            </Nav>
                        </Navbar.Collapse>
                        <Button className="join-btn">Create Portfolio</Button>
                    </Navbar>
                    <br />
                    <Chart />
                </Container>
        )
    }
}

export default App;