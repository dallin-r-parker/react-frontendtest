import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.scss';
import Nav from './components/Nav/Nav'

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }


  render() {
    return (
      <div>
        <Nav/>
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
