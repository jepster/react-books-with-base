import Book  from "./Book"
export default class BooksRepository{
    constructor(initial){
        this.books = new Map()
        this.counter = initial
    }

    create = (title, price, available) => {
        let isbn = "ISBN" + this.counter++
        console.log('new book created. counter' + this.counter)
        let newBook = new Book(isbn, title, price, available)
        this.books.set(isbn, newBook)
        return newBook
    }
    findByIsbn = (isbn) => this.books[isbn]
    findAll = () => Array.from(this.books.values())
    updatePrice = (isbn, price) => this.findByIsbn(isbn).price = price
    deleteByIsbn = (isbn) => delete this.books.isbn


}
