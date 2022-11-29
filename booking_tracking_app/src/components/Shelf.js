import { Droppable } from "react-beautiful-dnd";
import Book from './Book'

const Shelf = ({section, books, category, changeShelf}) => {
  const booksCategory = books.filter((book) => book.shelf === category)

  const shelf = booksCategory.map((book, index) => (
    <Book key={book.id}  book={book} changeShelf={changeShelf} index={index}/>
  ))

  console.log(booksCategory)
  return (
    <Droppable className="bookshelf" droppableId={category}>
      {(droppableProvided) => (
        <div
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
          
        > 
          <h2 className="bookshelf-title">{section}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {shelf}
              </ol>
          </div>
          {droppableProvided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Shelf