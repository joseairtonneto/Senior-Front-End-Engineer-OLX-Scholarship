import React from 'react'
import { Draggable } from "react-beautiful-dnd";

const Book = ({book, changeShelf, index}) => {
    const updateShelf = (e) => {
        changeShelf(book, e.target.value)
        console.log(e.target.value)
    }
    return (
        <Draggable className="book" key={book.id} draggableId={book.id} index={index}>
            {(draggableProvided) => (
                <div
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    
                >
                    <div className="book-top">
                        <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:`url(${book.imageLinks ? book.imageLinks.smallThumbnail : ""})`,
                        }}></div>
                        <div className="book-shelf-changer" value={book.shelf}>
                            <select onChange={updateShelf}>
                            <option value="none">
                            Move to...</option>
                            <option value="currentlyReading">
                            Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div> 
                </div>
            )}
        </Draggable>
    )}

export default Book