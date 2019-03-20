import React  from 'react'
import BookOnShelf from './BookOnShelf';

const Shelf = ({ shelf, books, shelfChangeHandler}) => {
return(
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <BookOnShelf books={books} shelfChangeHandler={shelfChangeHandler}/>
    </div>
)
}

export default Shelf;