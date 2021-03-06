import * as React from 'react';

type Props = {
  title: string,
  data: { [key: string]: string, ...}
}

class MyComponent extends React.PureComponent<Props> {
  render() {
    console.log('rendering MyComponent')
    const { title, data } = this.props;

    return (
      <div>
        <h1>This is the pure component</h1>
        <h3>{title}</h3>
        <p>Items: {data.items.length}</p>
      </div>
    )
  }
}

export default MyComponent