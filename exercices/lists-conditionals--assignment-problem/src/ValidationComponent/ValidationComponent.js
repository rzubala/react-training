import React from 'react';

const validationComponent = (props) => {
  let result = null;
  if (props.textLength < 5) {
    result = <p>Text too short</p>;
  } else {
    result = <p>Text long enough</p>;
  }

  return (
    <div>
      {result}
    </div>
  )
}

export default validationComponent;
