import * as React from 'react';

type Props = {
  title: string,
  data: { [key: string]: string, ...}
}

const MyComponent = (props: Props) => {
    console.log('rendering MyComponent')
    const { title, data } = props;

    return (
      <div>
        <h1>This is the functional component</h1>
        <h3>{title}</h3>
        <p>Items: {data.items.length}</p>
      </div>
    )
}

export default MyComponent