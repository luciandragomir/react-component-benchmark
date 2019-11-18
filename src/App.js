import React from 'react';
import './App.css';

import MyComponent from './Regular';
// import MyComponent from './Pure';
// import MyComponent from './Func';
// import MyComponent from './Memo';

function App() {
  const [count, setCount] = React.useState(0);
  const [items, setItems] = React.useState([]);

  return (
    <div className="App">

      <span>{count}</span>
      <button onClick={() => {
        setCount(count => count + 1);
        setItems(items => {
          const result = [...items];
          
          for (let i = 0; i <= count * 100; i++) {
            result.push({
              item: i,
              value: `test ${i}`
            });
          }

          return result;
        });
      }
      }>Count</button>
      <MyComponent title={'Title'} data={{ items }} />

    </div>
  );
}

export default App;
