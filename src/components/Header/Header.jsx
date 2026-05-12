import { useState } from "react";
import { NavLink } from "react-router";


const Header = () => {
    const [open, setOpen] = useState(false);

    const navLinks = (
        <>
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
                to="/listed-books"
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
        </>
    );

    return (
        <>
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="flex items-center justify-between h-16">

                        {/* Left Side */}
                        <div className="flex items-center gap-3">

                            {/* Menu Button */}
                            <button
                                onClick={() => setOpen(true)}
                                className="btn btn-ghost btn-sm lg:hidden"
                            >
                                {/* Hamburger Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>

                            {/* Logo */}
                            <NavLink
                                to="/"
                                className="text-2xl font-bold text-primary"
                            >
                                Book Vibe
                            </NavLink>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks}
                        </div>

                        {/* Right Side */}
                        <div>
                            <button className="btn btn-success rounded-lg">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${open
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            ></div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-base-100 z-50 shadow-xl transform transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >

                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b">

                    <h2 className="text-2xl font-bold text-primary">
                        Book Vibe
                    </h2>

                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="btn btn-ghost btn-sm"
                    >
                        {/* X Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Drawer Menu */}
                <div className="flex flex-col gap-6 p-6">
                    {navLinks}

                    <button className="btn btn-success mt-4">
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;