import { Outlet } from "react-router-dom"
import TopHeader from "./TopHeader"
import NavBar from "./NavBar"

const SearchLayout = () => {
    return (
        <>
            <div className="sticky top-0 z-50">
                <TopHeader />
                <NavBar />
            </div>
            <Outlet />
        </>
    )
}

export default SearchLayout
