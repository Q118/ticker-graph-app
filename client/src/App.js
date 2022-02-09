import Chart from './components/Chart';
import Form from './components/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
    return (
        <Container fluid>
            <div className="App">
                <Row>
                    <Form />
                </Row>
                <Row>
                    <Chart />
                </Row>
            </div>
        </Container>
    );
}

export default App;
