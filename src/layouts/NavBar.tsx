import { useState } from "react";
import { ShoppingBag, CircleUserRound, Menu, X, ChevronDown, Heart } from "lucide-react";
import { menuCategories } from "../config/menu";
import NavbarSearch from "../components/search/NavbarSearch";
import { Link } from "react-router-dom";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

    return (
        <header className="border-b border-rosebrown-200 bg-rosebrown-50 sticky top-0 z-40">
            <nav className="max-w-7xl mx-auto px-4 md:px-6 md:py-2 h-auto flex items-center justify-between">

                {/* Mobile Menu Button & Search */}
                <div className="flex items-center gap-3 md:hidden">
                    <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                        <Menu className="h-6 w-6" />
                    </button>
                    {/* <Search className="h-5 w-5 cursor-pointer" /> */}
                    <div className="flex items-center gap-4">
                        <NavbarSearch />
                    </div>
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 hidden md:block">
                    <img src={"/dc_creations_logo.png"} alt="DC Creations Logo" className="h-12 w-auto" />
                </Link>
                
                <Link to="/" className="md:hidden text-lg font-bold text-rosebrown-500">
                    <img src={"/dc_creations_logo.png"} alt="DC Creations Logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:flex-wrap md:justify-center md:items-center font-medium gap-x-8 gap-y-4
                text-sm font-medium relative px-4 py-2">
                    {
                        menuCategories.map((category) => {
                            const hasChildren = category.children && category.children.length > 0;
                            return (


                                <li key={category.label} className={`relative cursor-pointer ${hasChildren ? 'group' : ''}`}>
                                    <span className="hover:text-rosebrown-500">{category.label}</span>
                                    {category.label === "New Arrivals" &&
                                        <span className="text-[9px] text-pink-600 font-bold absolute top-[-5px]">NEW</span>
                                    }
                                    <div className="absolute left-0 top-full mt-3 w-48 bg-rosebrown-50 shadow-lg rounded-md 
                                opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible
                                group-hover:translate-y-0 transition-all duration-200 z-10 ease-out">
                                        <ul className="py-2">
                                            {hasChildren && category.children.map((item) => (
                                                <li key={item.label} className="px-4 py-2 hover:text-rosebrown-500">
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            )
                        }

                        )
                    }

                </ul>

                <div className="flex items-center gap-3 md:hidden">
                    <CircleUserRound className="w-5 h-5 cursor-pointer" />
                    <Heart className="w-5 h-5 cursor-pointer" />
                    <ShoppingBag className="w-5 h-5 cursor-pointer" />
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-5">
                    {/* <Search className="h-6 w-6 cursor-pointer" /> */}
                    <div className="flex items-center gap-4">
                        <NavbarSearch />
                    </div>
                    <Heart className="w-6 h-6 cursor-pointer" />
                    <ShoppingBag className="h-6 w-6 cursor-pointer" />
                    <CircleUserRound className="h-6 w-6 cursor-pointer" />
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 bg-black/40 transition-opacity
                 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMenuOpen(false)}></div>

            {/* Mobile Menu */}
            <aside className={`fixed top-0 left-0 h-full w-64 bg-rosebrown-50 shadow-lg flex flex-col 
                    z-50 transition-transform duration-300
                 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 flex items-center justify-between border-b">
                    {/* <span className="text-lg font-bold text-rosebrown-500">DC Creations</span> */}

                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                        <X className="h-7 w-7 text-rosebrown-800" />
                    </button>

                </div>

                {/* Mobile Menu */}
                <div className="flex-1 overflow-y-auto">
                    <ul className="p-4 space-y-2 text-sm font-medium divide-y-2 divide-rosebrown-600">
                        {menuCategories.map((category) => {
                            const toggleCategory = (label: string) => {
                                setOpenCategories((prev) => ({
                                    ...prev,
                                    [label]: !prev[label],
                                }));
                            }

                            const hasChildren = category.children && category.children.length > 0;
                            const isOpen = openCategories[category.label] || false;

                            return (
                                <li key={category.label} className="py-2">

                                    <button className="w-full flex items-center justify-between py-2"
                                        onClick={() => {
                                            if (!hasChildren) return
                                            toggleCategory(category.label)
                                        }}>
                                        <span>{category.label}</span>
                                        {hasChildren && <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500
                                         ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <ul className="pl-4 pt-2 space-y-2 font-regular text-gray-900 tracking-wide font-serif">
                                            {hasChildren && category.children.map((item) => (
                                                <li key={item.label} className="py-1 cursor-pointer">
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </aside>
        </header>
    )
}