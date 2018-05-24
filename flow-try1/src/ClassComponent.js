// @flow
import React, { Component } from 'react'


type Props = {
  foo: number,
};
type State = {
  dirty: number,
};

class ClassComponent extends Component<Props, State> {

  state = {
    dirty: 42,
  }
  render() {
    return <h1>ClassComponent</h1>
  }
}
export default ClassComponent
