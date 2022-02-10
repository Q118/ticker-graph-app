import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Chart from './Chart';
import ErrorBoundary from '../utils/ErrorBoundary';
// import StockCard from './StockCard';

const StockView = (props) => {
    if (props.isDataLoaded) {
        return (
            <Row>
                <Col sm>
                    <ErrorBoundary>
                        <Chart />
                    </ErrorBoundary>
                </Col>
            </Row>
        );
    }
    return (<Row></Row>);
}

export default StockView;