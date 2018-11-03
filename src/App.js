import React, { Component } from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }  

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks 
              books={this.state.books} 
          />
          )} 
        /> 


        <Route path='/search' render={({
          history }) => (
              <SearchBooks
            />
          )} 
        />

      </div>     
    ) 
  }
}

export default BooksApp
