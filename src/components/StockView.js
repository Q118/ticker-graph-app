import React from 'react';
import { Row, Col } from 'react-bootstrap'
// import Chart from './Chart.js.bu';
import ErrorBoundary from '../utils/ErrorBoundary';
import Chart from './HighChart';
// import StockCard from './StockCard';

const StockView = (props) => {
    if (props.isDataLoaded) {
        return (
            <Row>
                <Col sm>
                    <ErrorBoundary>
                        {/* <Chart /> attempt here with tradingviews */}
                        <Chart
                            data={props.data}
                            volume={props.volume}
                            symbol={props.symbol}
                        />
                    </ErrorBoundary>
                </Col>
            </Row>
        );
    }
    return (<Row></Row>);
}

export default StockView;