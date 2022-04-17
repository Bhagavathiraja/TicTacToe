import React from 'react';

const Square = (pros) => {
    console.log(pros)
    return ( 
    <button type = "button" className= "square ">{pros.value}</button> 
    );
}
 
export default Square;