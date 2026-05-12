import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content mt-20">

            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            <Link to='/'>Book Vibe</Link>
                        </h2>

                        <p className="text-sm leading-7 text-gray-300">
                            Discover your next favorite book with Book Vibe.
                            Read, explore, and manage your reading journey
                            with a modern experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `font-medium transition hover:text-primary ${isActive ? "text-primary" : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/books"
                                className={({ isActive }) =>
                                    `font-medium transition hover:text-primary ${isActive ? "text-primary" : ""
                                    }`
                                }
                            >
                                Listed Books
                            </NavLink>

                            <NavLink
                                to="/read"
                                className={({ isActive }) =>
                                    `font-medium transition hover:text-primary ${isActive ? "text-primary" : ""
                                    }`
                                }
                            >
                                Page to Read
                            </NavLink>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-300">
                            <p>Email: support@bookvibe.com</p>
                            <p>Phone: +880 1234-567890</p>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4">

                            {/* Facebook */}
                            <button className="btn btn-circle btn-outline btn-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.017 3.657 9.175 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.52 1.492-3.913 3.777-3.913 1.094 0 2.238.198 2.238.198v2.475h-1.26c-1.243 0-1.63.776-1.63 1.57v1.884h2.773l-.443 2.9h-2.33V22c4.78-.756 8.437-4.913 8.437-9.93z" />
                                </svg>
                            </button>

                            {/* Twitter */}
                            <button className="btn btn-circle btn-outline btn-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149 4.918 4.918 0 0 0 3.195 9.72a4.903 4.903 0 0 1-2.229-.616v.062a4.92 4.92 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.923 4.923 0 0 0 4.596 3.419A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.03 0-.214-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
                                </svg>
                            </button>

                            {/* Instagram */}
                            <button className="btn btn-circle btn-outline btn-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

                    <p className="text-sm text-gray-400 text-center md:text-left">
                        © 2026 Book Vibe. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-sm">
                        <button className="hover:text-primary transition">
                            Privacy Policy
                        </button>

                        <button className="hover:text-primary transition">
                            Terms & Conditions
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;