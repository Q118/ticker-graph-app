import React from 'react';
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <div className="spinner-container">
            <Spinner animation="border" variant="success" />
        </div>
    )
}

export default Loader;