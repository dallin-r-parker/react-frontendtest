import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import './App.scss';
import Nav from './components/Nav/Nav'
import {updateQuery} from './redux/actions/queryActions'
const BASE_URL = 'https://www.fohrcard.com/front-end-data-test'

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
      const {query} = this.props
      axios.get(`${BASE_URL}/${query}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
      
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
  return {
    query: query,
    searchResults: searchResults
  }
}

export default connect(mapStateToProps, {updateQuery})(App)
