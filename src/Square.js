import React from 'react';

const Square = (props) => {
  return (
    <div className='square' {...props}>{props.x ? 'x' : (props.o ? 'o' : '')}</div>
  );
}

export default Square;
