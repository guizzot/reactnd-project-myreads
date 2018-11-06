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

  render() {
    return (
            <div>
              <Route exact path="/" render={() => {
                return (
                    <div>
                      <ListBooks  books={this.state.books}
                                  onMoveShelf={this.onMoveShelf}
                      />
                    </div>
                  )
               }}
              />

              <Route path="/search"
                     render={({history}) => (
                       <SearchBooks  onMoveShelf={this.onMoveShelf}
                                     books={this.state.books}
                        />
                      )}
              />
            </div>
    )
  }
}

export default MyReads
