import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  fetchData = () => {

    console.log('fetching data');

    // you can use either fetch or axios
    
    // fetch('https://jsonplaceholder.typicode.com/todos/')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     this.setState({data: json})
    //   })

    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(res => {
        console.log(res);
        this.setState({data: res.data})
      })
  }

  render(){
    return (
      <div className="App" style={{textAlign: 'left'}}>
        <button onClick={this.fetchData}>Click me to Fetch Data</button>
        <div>
          <h2>Display Data</h2>
          <ul style={{listStyle: 'none'}}>
            {
              this.state.data.map((item, index)=>{
              return (<li>ID: {index} - Title: {item.title}</li>)
              })
            }
          </ul>
        </div>
      </div>
    );
  }
  }


export default App;
