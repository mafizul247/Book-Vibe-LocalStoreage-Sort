import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Error Page</h1>
            <button><Link to='/'>Go to Home</Link></button>
            <br />
            <button className="cursor-pointer" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default ErrorPage;