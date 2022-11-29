import { DragDropContext } from "react-beautiful-dnd";
import * as BooksAPI from '../BooksAPI';
import Shelf from "../components/Shelf";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Drag({books, setBooks, changeShelf}) {

  const handleOndragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }
    
    setBooks(async () => {
      let book = await BooksAPI.get(result.draggableId)
      changeShelf(book, destination.droppableId)     
    });
  }

  return (
    <DragDropContext onDragEnd={handleOndragEnd}>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf section='Currently Reading' books={books} category="currentlyReading" changeShelf={changeShelf} />
            <Shelf section='Want to read' books={books} category="wantToRead" changeShelf={changeShelf} />
            <Shelf section='Read' books={books} category="read" changeShelf={changeShelf}/>
          </div>
          <div className="open-search">
            <Link to='/search' className='open-search'>Add a book</Link>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Drag;