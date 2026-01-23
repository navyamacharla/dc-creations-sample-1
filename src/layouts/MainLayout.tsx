import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import TopHeader from "./TopHeader"
import NavBar from "./NavBar"

export default function MainLayout() {
    return (
        <>
            <div className="sticky top-0 z-50">
                <TopHeader />
                <NavBar />
            </div>
            <Outlet />
            <Footer />
        </>
    )
}
