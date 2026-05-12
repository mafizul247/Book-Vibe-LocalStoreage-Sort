// import { useLoaderData } from "react-router";
import { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    // const books = useLoaderData();
    // console.log(books)

    const books = fetch('booksData.json').then(res => res.json());

    return (
        <div>
            <Banner />
            <Suspense fallback={<p>Loadin...</p>} >
                <Books books={books} />
            </Suspense>
        </div>
    );
};

export default Home;