import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import './App.scss';
import Nav from './components/Nav/Nav'
import Influencers from './components/Influencers/Influencers'
import {updateQuery, queryResults} from './redux/actions/queryActions'
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
        .then(res => this.props.queryResults(res.data.data))
        .catch(err => console.log(err))
    }
  }


  render() {
    const influencersArray = this.props.searchResults.map((person, i) =>
      <Influencers key={i}
                   site={person.url}
                   first={person.firstName}
                   last={person.lastName}
                   blog={person.name}
                   location={person.location}
                   followers={person.overall_followers}
                   image={person.profile_image}/>
    )
    return (
      <div className="main-container">
        <div>
          <Nav query={this.handleQuery}
               request={this.handleRequest}/>
        </div>
        <div className="result-container">
          {influencersArray}
        </div>
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

export default connect(mapStateToProps, {updateQuery, queryResults})(App)
