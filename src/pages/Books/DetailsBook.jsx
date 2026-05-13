import { useLoaderData, useNavigate, useParams } from "react-router";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { addToStoredDB } from "../../Utility/AddToDB";




const DetailsBook = () => {
    const { id } = useParams();
    const booksData = useLoaderData();
    const navigate = useNavigate();

    const book = booksData.find(singleBook => singleBook.bookId === parseInt(id));

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleAddToBD = (id) => {
        addToStoredDB(id, "readList");
    }

    const handleAddToBDWhiteList = (id) => {
        addToStoredDB(id, "whiteList")
        console.log(id)
    }

    return (
        <div>
                <title>{bookName}</title>
            <div className="flex justify-around items-center gap-12 my-12">
                <h2 className="text-2xl font-bold">Book Details Information</h2>
                <button className="cursor-pointer btn" onClick={() => navigate(-1)}> <FaArrowAltCircleLeft /> Back Home</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-8 gap-8">
                <div className="p-16 bg-gray-200 rounded-lg">
                    <img className="w-full rounded-md" src={image} alt={bookName} />
                </div>
                <div className="flex flex-col gap-6 p-4 text-gray-600">
                    <h1 className="text-3xl font-bold">{bookName}</h1>
                    <p className="">By: {author}</p>
                    <p className="border-t-1 border-b-1 border-gray-400 py-2">{category}</p>
                    <p className="text-justify"><b>Review: </b>{review}</p>
                    <div className="flex items-center gap-4 pb-3 border-b-1 border-gray-400 py-2">
                        <p><b>Tags</b></p>
                        {tags.map((tag, index) => <button className="btn btn-sm rounded-full bg-green-300 mr-2" key={index}>#{tag}</button>)}
                    </div>
                    <div className="flex gap-12">
                        <div>
                            <p>Number of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publising: </p>
                            <p>Rating: </p>
                        </div>
                        <div>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleAddToBD(bookId)} className="btn mr-3">Mark as Read</button>
                        <button onClick={() => handleAddToBDWhiteList(bookId)} className="btn btn-info">Add To Whitelist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBook;