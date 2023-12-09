import React from "react";
import { BOOKS } from "../assets/data/books";
import { useParams } from "react-router-dom";

const BookPage = () => {
    const { id } = useParams();

    return(
        <div className="book-page">
            {BOOKS.map((book) => {
                for (let i = 0; i < BOOKS.length; i++) {

                    if (Number(id) === book.id) {
                        return(
                            <div className="book-wrapper" key={book.id}>
                                <div className="buy">
                                    <button>קנה</button>
                                </div>

                                <p className="book-title">{book.title}</p>
                                <div className="book-content">
                                    <img src={book.cover} alt={book.title} className="book-cover" />    
                                    <div className="book-description">
                                        <p>{book.desc}</p>
                                    </div>
                                </div>

                                <div className="buy">
                                    <button className="buy-button">קנה</button>
                                </div>
                            </div>
                        )
                    }

                }
            })}
        </div>
    )
}

export default BookPage;