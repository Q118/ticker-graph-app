import React from 'react';
import { Row, Col } from 'react-bootstrap'
import Chart from './HighChart';
// import StockCard from './StockCard';

const StockView = (props) => {
  if (props.isDataLoaded) {
    return (
      <Row>
        <Col sm>
          <Chart data={props.data} volume={props.volume} symbol={props.symbol} />
        </Col>
      </Row>
    );
  }
  return (<Row></Row>);
}

export default StockView;