import {useState} from "react";
import BookListComponent from "./BookListComponent";
import { booksRepository } from "../ApplicationContext";

export default function BookInputComponent () {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('');
  const [books, setBooks] = useState([]);
  // const bookRespository = new BooksRepository(0);

  function add (e) {
    booksRepository.create(title, price, available);
    setBooks(booksRepository.findAll());
  }

  return <>
    Title: <input type="text" name="title" onChange={event => setTitle(event.target.value)} value={title}/>
    Price: <input type="text" name="price" onChange={event => setPrice(event.target.value)} value={price}/>
    Available: <input type="checkbox" name="available" onChange={event => setAvailable(event.target.value)} checked={available} />
    <button onClick={add}>Add</button>
    <BookListComponent books={books} />
  </>;

}
