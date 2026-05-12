import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
    // console.log(book)


    return (
        <Link to={`/books/${book.bookId}`}>
            <div
                className="border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition duration-300 bg-base-100 flex flex-col"
            >

                {/* Image */}
                <div className="bg-base-200 rounded-2xl flex items-center justify-center h-[230px]">
                    <img
                        src={book?.image}
                        alt={book?.bookName}
                        className="h-[170px] object-contain"
                    />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-5">
                    {book?.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mt-4 sm:min-h-[60px] lg:min-h-[72px]">{book.bookName}</h2>

                {/* Author */}
                <p className="text-sm text-gray-500 mt-2">
                    By : {book.author}
                </p>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-300 my-5"></div>

                {/* Bottom */}
                <div className="flex items-center justify-between text-sm text-gray-600 mt-auto">

                    <p>{book.category}</p>

                    <div className="flex items-center gap-1">
                        <span>{book.rating}</span>
                        <FaStarHalfAlt />
                        {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.26a1 1 0 00.95.69h6.58c.969 0 1.371 1.24.588 1.81l-5.325 3.87a1 1 0 00-.364 1.118l2.036 6.26c.3.921-.755 1.688-1.54 1.118l-5.325-3.87a1 1 0 00-1.176 0l-5.325 3.87c-.784.57-1.838-.197-1.539-1.118l2.036-6.26a1 1 0 00-.364-1.118L.463 11.687c-.783-.57-.38-1.81.588-1.81h6.58a1 1 0 00.95-.69l2.036-6.26z"
                        />
                    </svg> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;