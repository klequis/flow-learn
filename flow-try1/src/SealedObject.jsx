// @flow
import * as React from 'react';


export const SealedObject = () => {
  var obj = {
    foo: 1
  };
  // Object.seal(obj) // doesn't work ==> JS error
  // Without seal the code runs but Flow flags it as an error
  // $ExpectError
  obj.bar = true;    // Error!
  // $ExpectError
  obj.baz = 'three'; // Error!

  // console.log('isOneOf', isOneOf)
  return (
    <div>
      <h2>SealedObjects</h2>

    </div>
  )
}

export default SealedObject
