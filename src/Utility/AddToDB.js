import Swal from "sweetalert2";


const getStoredBook = (addData) => {
    const storedBookStr = localStorage.getItem(addData);

    if (storedBookStr) {
        const storedBookData = JSON.parse(storedBookStr);
        return storedBookData;
    } else {
        return [];
    }
}

const addToStoredDB = (id, addData) => {
    const storedBookData = getStoredBook(addData);

    if (storedBookData.includes(id)) {
        /* Swal.fire({
            position: "center",
            icon: "error",
            title: `Book already add to ${addData}`,
            showConfirmButton: false,
            timer: 1500
        }); */
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Book already add to ${addData}`
        });
    } else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem(addData, data);
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Book has been ${addData}`,
            showConfirmButton: false,
            timer: 1500
        });
    }
}


export { addToStoredDB, getStoredBook };



