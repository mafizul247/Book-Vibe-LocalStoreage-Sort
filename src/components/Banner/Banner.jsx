import banner from './../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="bg-gray-200 p-12 rounded-lg lg:flex md:block justify-between items-center gap-12 my-4">
            <div>
                <h1 className="text-3xl font-bold mb-4">Books to freshen up <br /> your bookshelf</h1>
                <button className="btn btn-success mb-8">View The List</button>
            </div>
            <div>
                <img className='rounded-md w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;