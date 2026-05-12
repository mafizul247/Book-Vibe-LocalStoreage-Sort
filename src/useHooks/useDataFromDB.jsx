import { useEffect, useState } from "react";
import { getStoredBook } from "../Utility/AddToDB";
import { useLoaderData } from "react-router";


const useDataFromDB = (data) => {
    const [listData, setListData] = useState([]);
    // const [sort, setSort] = useState("");
    const books = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook(data);
        const storedBookNumber = storedBookData.map(id => parseInt(id));
        const myReadList = books.filter(book => storedBookNumber.includes(book.bookId));
        setListData(myReadList);
    }, [books, data]);


    /* const handleSort = (sortType) => {
        setSort(sortType);

        if (sortType === "Pages") {
            const sortItems = [...listData].sort((a, b) => a.totalPages - b.totalPages);
            setListData(sortItems);
        } else if (sortType === "Ratings") {
            const sorttedItems = [...listData].sort((a, b) => a.rating - b.rating);
            setListData(sorttedItems);
        } else if (sortType === "Year") {
            const sortYear = [...listData].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setListData(sortYear);
        }
    } */

    return [listData, setListData];
};

export default useDataFromDB;