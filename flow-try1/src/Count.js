// @flow
import * as React from 'react';

type State = {
  count: number,
}

class Count extends React.Component<{}, State> {
  state = {
    count: 0
  }
  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    // To access your button instance use `event.currentTarget`.
    console.log(event.currentTarget: HTMLButtonElement)

    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}
export default Count
