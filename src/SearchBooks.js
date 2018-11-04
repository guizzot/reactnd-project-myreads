import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksFiltered from './BooksFiltered'

class SearchBooks extends Component {

    state = {
      search: '',
      query : []
    }

    updateSearch = (query) => {
      if(query !== ''){
          this.setState(() => ({
            search: query
          }))

          BooksAPI.search(query).then((query) => {
            this.setState(() => ({
               query: (query.error) ? 'empty' : query
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
      const { onMoveShelf } = this.props

      return(
              <div className="app">
              {
                //JSON.stringify(query)
              }
              {
                //JSON.stringify(result)
              }
                <div className="search-books">
                  <div className="search-books-bar">
                    <a className="close-search">Close</a>
                    <div className="search-books-input-wrapper">
                      
                      <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={search}
                            onChange={(e) => this.updateSearch(e.target.value)}
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