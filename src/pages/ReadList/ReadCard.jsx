import { Link } from "react-router";

const ReadCard = ({ book, handleRemoveItem }) => {

    return (
        <div className="border border-gray-200 rounded-2xl p-5 bg-base-100 hover:shadow-lg transition duration-300">

            <div className="flex flex-col lg:flex-row gap-6">

                {/* Image Section */}
                <div className="bg-base-200 rounded-2xl flex items-center justify-center w-full lg:w-[230px] h-[250px]">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="h-[200px] object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">

                    {/* Title */}
                    <h2 className="text-3xl font-bold">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-gray-500 mt-3">
                        By : {book.author}
                    </p>

                    {/* Tags & Year */}
                    <div className="flex flex-wrap items-center gap-4 mt-5">

                        <p className="font-semibold">Tag</p>

                        {book.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium"
                            >
                                #{tag}
                            </span>
                        ))}

                        <div className="flex items-center gap-2 text-gray-500">
                            {/* <IoLocationOutline className="text-lg" /> */}
                            <span>Year of Publishing: {book.yearOfPublishing}</span>
                        </div>
                    </div>

                    {/* Publisher & Pages */}
                    <div className="flex flex-wrap items-center gap-6 mt-5 text-gray-500">

                        <div className="flex items-center gap-2">
                            {/* <HiOutlineUsers className="text-lg" /> */}
                            <span>Publisher: {book.publisher}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* <FaRegFileAlt className="text-lg" /> */}
                            <span>Page {book.totalPages}</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-300 my-6"></div>

                    {/* Bottom Buttons */}
                    <div className="flex flex-wrap items-center gap-4">

                        <button className="btn btn-sm rounded-full bg-blue-100 text-blue-500 border-none hover:bg-blue-200">
                            Category: {book.category}
                        </button>

                        <button className="btn btn-sm rounded-full bg-orange-100 text-orange-500 border-none hover:bg-orange-200">
                            Rating: {book.rating}
                        </button>

                        <Link to={`/books/${book.bookId}`}>
                            <button className="btn btn-success btn-sm rounded-full text-white">
                                View Details
                            </button>
                        </Link>
                        <button onClick={handleRemoveItem} className="btn btn-sm rounded-full bg-red-400 text-white border-none hover:bg-red-600">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadCard;