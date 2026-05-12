// import { useEffect, useState } from "react";
import { Suspense, use } from "react";
import Book from "./Book";


const Books = ({books}) => {
    const booksData = use(books);
    /* const [books, setBooks] = useState([]);
    console.log(books)

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []) */

  
    
    return (
        <div className="my-8">
            <h2 className="text-center text-2xl font-bold mb-4">Books</h2>
            <Suspense fallback={<p>Loader...</p>}>
                <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        booksData.map(book => <Book key={book.bookId} book={book}/>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;