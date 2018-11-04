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

  onMoveShelf = (book,shelf) => {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;

        this.setState((prevState) => ({
           books: prevState.books.filter(b => b.id !== book.id).concat([book])
        }))

      })
  }

  render() {
    return (
      <div>
      {//JSON.stringify(this.state.books)
      }
        <Route exact path='/' render={() => {
            return (
              <div>
                <ListBooks  books={this.state.books}
                            onMoveShelf={this.onMoveShelf}
                />
              </div>
            )
         }}
        /> 


        <Route path='/search' render={({
          history }) => (
              <SearchBooks onMoveShelf={this.onMoveShelf}
            />
          )} 
        />

      </div>     
    ) 
  }
}

export default BooksApp
