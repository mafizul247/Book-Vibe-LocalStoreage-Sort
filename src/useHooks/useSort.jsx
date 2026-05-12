import { useState } from "react";
import useDataFromDB from "./useDataFromDB";


const useSort = () => {
    const [listData, setListData] = useDataFromDB("readList" || "WhiteList");
    const [sort, setSort] = useState("");

    

    const handleSort = (sortType) => {
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
    }

    return [handleSort, sort]
};

export default useSort;