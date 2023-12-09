import React from "react";
import { BOOKS } from "../assets/data/books";
import { Link } from "react-router-dom";

const BooksTable = () => {
    return(
        <div className="content">
            <div className="all-books">
                {BOOKS.map((book) => {
                    return(
                        <div className="book" key={book.id}>
                            <Link to={`/book/${book.id}`} className="book-box">
                                <img src={book.cover} alt={book.alt} />
                                <br />{book.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BooksTable;