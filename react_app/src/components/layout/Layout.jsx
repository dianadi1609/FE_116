import { Outlet } from "react-router-dom";
import Header from "../header/Header";

function Layout () {
    return (
        <>
        <Header />
        <main>
            <div className="main-wrapper container">
                <Outlet />
            </div>
        </main>
        </>
    )
}
export default Layout;