import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.scss';
import Nav from './components/Nav/Nav'
import {updateQuery} from './redux/actions/queryActions'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleQuery = this.handleQuery.bind(this)
    this.handleRequest = this.handleRequest.bind(this)
  }

  handleQuery(e) {
    this.props.updateQuery(e)
  }

  handleRequest(key){
    if(key === 13){
      
    }
  }


  render() {
    return (
      <div>
        <Nav query={this.handleQuery}
             request={this.handleRequest}/>
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

export default connect(mapStateToProps, {updateQuery})(App)
