import * as React from 'react';

function injectProp<Props: {}>(
  Component: React.ComponentType<Props>,
): React.ComponentType<$Diff<Props, { foo: number | void }>> {
  return function WrapperComponent(props: Props) {
    return <Component {...props} foo={42} />;
  };
}

class MyComponent extends React.Component<{
  a: number,
  b: number,
  foo: number,
}> {
  render() {
    console.log('MyComponent: props', this.props)
    return <p>MyComponent</p>
  }
}

const MyEnhancedComponent = injectProp(MyComponent);

export default MyEnhancedComponent
