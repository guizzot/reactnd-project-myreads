import React, { Component } from 'react'
import BooksFiltered from './BooksFiltered'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

	render() {

		const { books, onMoveShelf } = this.props

		return (
			<div className="list-books">
            	<div className="list-books-title">
              		<h1>MyReads</h1>
              		<button> <Link
              						className="a-button-search"
              						to="/search"
						     >Search</Link>
					</button>
            	</div>
				<div className="list-books-content">
	              <div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                    <div className="bookshelf-books">
	                      <ol className="books-grid">
					          <BooksFiltered
				                            books={books}
				                            onMoveShelf={onMoveShelf}
				                            type='currentlyReading'
					          />
						    </ol>
	                    </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Read</h2>
	                    <div className="bookshelf-books">
	                      <ol className="books-grid">
					          <BooksFiltered
				                            books={books}
				                            onMoveShelf={onMoveShelf}
				                            type='read'
					          />
						    </ol>
	                    </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">Want to Read</h2>
	                    <div className="bookshelf-books">
	                      <ol className="books-grid">
					          <BooksFiltered
				                            books={books}
				                            onMoveShelf={onMoveShelf}
				                            type='wantToRead'
					          />
						    </ol>
	                    </div>
	                </div>
	                <div className="open-search">
	                  <a>Add a book</a>
	                </div>
	              </div>
	          </div>
          </div>
		)
	}
}

export default ListBooks