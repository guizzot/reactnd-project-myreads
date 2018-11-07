import React from 'react'
import BooksFiltered from './BooksFiltered'
import { Link } from 'react-router-dom'

const ListBooks = props => {

    const { books, onMoveShelf, filterBookType, handleMove } = props
	const titleCurrentlyReading = 'Currently Reading'
	const titleRead = 'Read'
	const titleWantToRead = 'Want to Read'
	const booksCurrentlyReading  = filterBookType(books,'currentlyReading')
	const booksRead = filterBookType(books,'read')
	const booksWantToRead = filterBookType(books,'wantToRead')

    return (
    	<div className="list-books">
            	<div className="list-books-title">
              		<h1>MyReads</h1>
            	</div>
				<div className="list-books-content">
	              <div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">{titleCurrentlyReading}</h2>
	                    <div className="bookshelf-books">
	                      <ol className="books-grid">
					          <BooksFiltered
				                            books={booksCurrentlyReading}
				                            onMoveShelf={onMoveShelf}
				                            handleMove={handleMove}
					          />
						    </ol>
	                    </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">{titleRead}</h2>
	                    <div className="bookshelf-books">
	                      <ol className="books-grid">
					          <BooksFiltered
				                            books={booksRead}
				                            onMoveShelf={onMoveShelf}
				                            handleMove={handleMove}
					          />
						    </ol>
	                    </div>
	                </div>
	                <div className="bookshelf">
	                  <h2 className="bookshelf-title">{titleWantToRead}</h2>
	                    <div className="bookshelf-books">
	                      <ol className="books-grid">
					          <BooksFiltered
				                            books={booksWantToRead}
				                            onMoveShelf={onMoveShelf}
				                            handleMove={handleMove}
					          />
						    </ol>
	                    </div>
	                </div>
	                <div className="open-search">
	                	<Link
      						className="a-button-search"
      						to="/search"
						>Add a Book</Link>
					</div>
	              </div>
	          </div>
          </div>

    )


}

export default ListBooks