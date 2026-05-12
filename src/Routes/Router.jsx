import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
// import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DetailsBook from '../pages/Books/DetailsBook';
import ReadList from '../pages/ReadList/ReadList';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: 'books/:id',
                loader: async () => {
                    const res = await fetch('/booksData.json');
                    return res.json();
                },
                Component: DetailsBook
            },
            {
                path: 'listed-books',
                loader: async () => {
                    const res = await fetch('/booksData.json');
                    return res.json();
                },
                Component: ReadList
            }
        ]
    }
])


export default router;