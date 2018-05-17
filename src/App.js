import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlphabetList from 'alphabet-list'
import { Tag, Icon } from 'antd';
import randomWords from 'random-words';


class App extends Component {
  render() {
    const data = randomWords(100).concat(['16', '$$$', '😀']);
    return (
      <div className="App">
        <AlphabetList
          data={data}
          generateFn={
            (item, index) => {
              return (
                <Tag
                  color="rgb(42, 42, 42)"
                  key={item + index}
                >
                  <Icon type="plus" style={{ margin: '0 4px 0 0' }} />
                  {item}
                </Tag>
              )
            }
          }
        />
      </div>
    );
  }
}

export default App;
