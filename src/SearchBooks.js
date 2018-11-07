import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksFiltered from './BooksFiltered'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

    state = {
      search: '',
      query : []
    }

    hasShelf = (bookSearched,bookInShelf) => {
      let book

      bookInShelf.map((b) => {
        if(bookSearched.id === b.id){
          book = b
        }
        return book
      })

      return book
    }

    updateSearch = (searchValue,shelfBook) => {
      if(searchValue.length > 0){
          this.setState(() => ({
            search: searchValue
          }))

          BooksAPI.search(searchValue).then((query) => {

            this.setState(() => ({
               query: (query.error)
                    ? 'empty'
                    : query.map(b => {
                        let bookInShelf = this.hasShelf(b,shelfBook)

                        if (bookInShelf === undefined) {
                          b.shelf = 'none'
                          return b
                        } else {
                          return bookInShelf
                        }
                      })
            }))
           })
        } else {
           this.setState(() => ({
              search: '', query : []
           }))
        }
      }

    render(){

      const { search, query } = this.state
      const { onMoveShelf, books } = this.props

      return(
              <div className="app">
                <div className="search-books">
                  <div className="search-books-bar">
                    <Link
                          to="/"
                          className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">

                      <input
                            type="text"
                            placeholder="Search by title or author"
                            value={search}
                            onChange={(e) => this.updateSearch(e.target.value,books)}
                      />

                    </div>
                  </div>
                  <div className="search-books-results">
                      {
                        query === 'empty' && (
                          <h3> Books not found! </h3>
                        )
                      }
                      { search.length > 0 && query !== 'empty' && (
                          <ol className="books-grid">
                            <BooksFiltered books={query}
                                           type=''
                                           onMoveShelf={onMoveShelf}/>
                          </ol>
                        )
                      }
                  </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks