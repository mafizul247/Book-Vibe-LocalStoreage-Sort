import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/AddToDB';
import ReadCard from "./ReadCard";
import Swal from 'sweetalert2';
// import useDataFromDB from '../../useHooks/useDataFromDB';

const ReadList = () => {
    // const [readDataList] = useDataFromDB("readList");
    // const [whiteDataList] = useDataFromDB("whiteList");
    const [sort, setSort] = useState("");
    const [readList, setReadList] = useState([]);
    const [whiteList, setWhiteList] = useState([]);
    const books = useLoaderData();
    // console.log(readList)

    useEffect(() => {
        const storedBookData = getStoredBook("readList");
        const storedBookNumber = storedBookData.map(id => parseInt(id));
        const myReadList = books.filter(book => storedBookNumber.includes(book.bookId));
        setReadList(myReadList);
    }, [books]);

    useEffect(() => {
        const storedWhiteList = getStoredBook("whiteList");
        const storedWhiteNumber = storedWhiteList.map(id => parseInt(id));
        const myWhiteList = books.filter(book => storedWhiteNumber.includes(book.bookId));
        setWhiteList(myWhiteList);
    }, [books]);

    const handleSort = (sortType) => {
        setSort(sortType);

        if (sortType === "Pages") {
            const sortItems = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortItems);
            setWhiteList(sortItems);
        } else if (sortType === "Ratings") {
            const sorttedItems = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sorttedItems);
            setWhiteList(sorttedItems);
        } else if (sortType === "Year") {
            const sortYear = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortYear);
            setWhiteList(sortYear);
        }
    }

    const handleRemoveItem = (id, listType) => {

        const storedItems = JSON.parse(localStorage.getItem(listType)) || [];
        const updateItems = storedItems.filter(bookId => bookId !== id);

        if (listType === "readList") {
            // const storedItems = JSON.parse(localStorage.getItem(listType)) || [];
            // const updateItems = storedItems.filter(bookId => bookId !== id);
            localStorage.setItem(listType, JSON.stringify(updateItems));
            const newReadList = readList.filter(book => book.bookId !== id);
            setReadList(newReadList);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Read Item Has been Removed",
                showConfirmButton: false,
                timer: 1500
            });
            // console.log("read", id);
        } else if (listType === "whiteList") {
            // const storedItems = JSON.parse(localStorage.getItem(listType)) || [];
            // const updateItems = storedItems.filter(bookId => bookId !== id);
            localStorage.setItem(listType, JSON.stringify(updateItems));
            const newWhiteList = whiteList.filter(book => book.bookId !== id);
            setWhiteList(newWhiteList);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "White List Item Has been Removed",
                showConfirmButton: false,
                timer: 1500
            });
            // console.log('White', id)
        }

    }

    const handleRemoveAll = (removeType) => {

        if (removeType === "readList") {
            Swal.fire({
                title: "Are you sure Delete All?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem(removeType);
                    setReadList([]);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            });

        } else if (removeType === "whiteList") {
            Swal.fire({
                title: "Are you sure Delete All?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem(removeType);
                    setWhiteList([]);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            });
        }
    }

    return (
        <div className='my-8'>
            <h2 className='text-2xl font-bold bg-gray-200 text-center p-4 rounded-md mb-4'>Books</h2>

            {/* Dropdown  */}
            <div className="dropdown mb-8">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-300">Sort By: {sort && sort} </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("Pages")}>Page Number</a></li>
                    <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                    <li><a onClick={() => handleSort("Year")}>Publishing Year</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>White List</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-bold text-gray-600 mt=2'>Total Read Books is {readList.length > 0  ? readList.length : "Empty"}</h3>
                        {readList.length > 0 && <button onClick={() => handleRemoveAll("readList")} className="btn btn-error">Remove All</button>}
                    </div>
                    <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
                        {
                            readList.map(book => <ReadCard
                                key={book.bookId}
                                book={book}
                                handleRemoveItem={() => handleRemoveItem(book.bookId, "readList")} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-between">
                        <h2 className='text-xl font-bold text-gray-600 mt=2'>Total White List is {whiteList.length > 0 ? whiteList.length : "Empty"}</h2>
                        {whiteList.length > 0 && <button onClick={() => handleRemoveAll("whiteList")} className="btn btn-error">Remove All</button>}
                    </div>
                    <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
                        {
                            whiteList.map(book => <ReadCard
                                key={book.bookId}
                                book={book}
                                handleRemoveItem={() => handleRemoveItem(book.bookId, "whiteList")} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;