import React from "react";
import './Square.css';
const Square = (props) => {
return (
    <button className='square'
    onClick={props.onClickEvent}
    >
        {props.value}
        </button>
)
}

export default Square;