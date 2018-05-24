
import * as React from 'react';


const TheChildren = ({ children }) => {
  console.log(children);
  return (<p>ChildrenAre: {children}</p>)
}
export default TheChildren
