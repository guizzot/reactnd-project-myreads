import React, { Component } from 'react'

class BooksFiltered extends Component {

	handleMove = (book,shelf) => {
		this.props.onMoveShelf(book, shelf)
	}

	render() {

		const { books, type } = this.props

		const booksFiltered = type === ''
			? books
			: books.filter((b) => (
        		b.shelf === type ? b : ''
    		  ))

		return (
			<ol className="books-grid">
		        {booksFiltered.map((book) => (
		             <li key={book.id}>
		             	 <div className="book">
		                 <div className="book-top">
		                   <div className="book-cover">
								<img
									src={book.imageLinks ? book.imageLinks.thumbnail : 'http://andrewcmaxwell.com/wp-content/themes/acm_2014/images/book_not_found.png'}
									width='128'
									height='200'
									alt={book.title} />
							</div>
		                   <div className="book-shelf-changer">
		                     <select
		                             onChange={(e) => this.handleMove(book,e.target.value) }
		                             value={book.shelf}
		                      >
		                       <option value="move" >Move to...</option>
		                       <option value="currentlyReading">Currently Reading</option>
		                       <option value="wantToRead">Want to Read</option>
		                       <option value="read">Read</option>
		                       <option value="none">None</option>
		                     </select>
		                   </div>
		                 </div>
		                 <div className="book-title">{book.title}</div>
		                 <div className="book-authors">{book.authors}</div>
		               </div>
		             </li>
		        ))}
		    </ol>
		)
	}
}

export default BooksFiltered