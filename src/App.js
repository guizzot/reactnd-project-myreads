import React, { Component } from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class MyReads extends Component {

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

  filterBookType = (books,type) => (
      books.filter((b) => (
          b.shelf === type ? b : ''
      ))
  )

  handleMove = (book,shelf) => {
    this.onMoveShelf(book, shelf)
  }

  render() {
    return (
      <React.Fragment>
              <Route exact path="/" render={() => (
                      <ListBooks  books={this.state.books}
                                  onMoveShelf={this.onMoveShelf}
                                  filterBookType={this.filterBookType}
                                  handleMove={this.handleMove}
                      />
                  )}
              />

              <Route path="/search"
                     render={({history}) => (
                       <SearchBooks  onMoveShelf={this.onMoveShelf}
                                     books={this.state.books}
                                     handleMove={this.handleMove}
                        />
                      )}
              />
      </React.Fragment>
    )
  }
}


export default MyReads
