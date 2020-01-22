import React  from 'react';
//import { Container, Row, Col } from 'reactstrap';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}


export default Square;