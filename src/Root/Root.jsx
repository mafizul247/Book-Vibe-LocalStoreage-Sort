import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <>
            <div>
                <div className="max-w-7xl mx-auto">
                    <Header />
                    <div className="min-h-[calc(100vh-150px)]">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
            {/* <div className=" max-w-7xl mx-auto w-full min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div> */}
        </>
    );
};

export default Root;