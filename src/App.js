import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }


  render() {
    return (
      <div>
        <h2>Howdy</h2>
      </div>
    );
  }
}

function mapStateToProps(searchReducer){
  const {query, searchResults} = searchReducer
  console.log(query, searchResults)
  return {
    query,
    searchResults
  }
}

export default connect(mapStateToProps)(App)
