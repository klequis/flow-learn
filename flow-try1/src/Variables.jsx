// @flow
import * as React from 'react';


export const Variables = () => {
  let foo = 42;

  if (Math.random()) foo = true;
  // if (Math.random()) foo = "hello";

  let isOneOf: number | boolean | string = foo; // Works!
  console.log('isOneOf', isOneOf)
  return (
    <div>
      <h2>Variables</h2>

    </div>
  )
}

export default Variables
