import BookComponent from "./BookComponent";

export default function BookListComponent(props) {

  console.log(props.books);

  if (props.books.length === undefined) {
    return <p>No books available</p>;
  } else if (props.books.length > 0) {
    return <>
      {props.books.map((book) => (<BookComponent key={book.isbn} title={book.title} price={book.price} isbn={book.isbn} available={book.available} />))}
    </>;
  }

}
