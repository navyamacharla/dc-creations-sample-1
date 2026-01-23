import { useEffect, useRef, useState } from "react"
import { Search, X } from "lucide-react"
import SearchDropdown from "./SearchDropdown"
import { useNavigate } from "react-router-dom"


export default function NavbarSearch() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
                setValue("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && value.trim()) {
            navigate(`/search?query=${encodeURIComponent(value.trim())}`)
            setOpen(false)
        }
    }


    return (
        <div className="relative" ref={containerRef}>
            {/* Search icon */}
            {!open && <button
                onClick={() => setOpen((p) => !p)}
                className="p-2 rounded-full hover:bg-rosebrown-100 hover:text-rosebrown-800">
                <Search className="h-6 w-6" size={20} />
            </button>
            }
            {open && <button
                onClick={() => { setOpen(false); setValue("") }}
                className="p-2 rounded-full hover:bg-rosebrown-100 hover:text-rosebrown-800">
                <X className="h-6 w-6" size={20} />
            </button>
            }


            {/* Expanding input */}


            <div className={`absolute left-0 md:right-0 md:left-auto transition-all duration-300 ease-out 
                ${open ? "w-80 opacity-100" : "w-0 opacity-0 pointer-events-none"}`}>
                <div className="relative w-full">
                    {/* Search icon inside input */}
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900" />

                    <input
                        autoFocus={true}
                        type="text"
                        value={value}
                        placeholder="Search for dresses, tops, kurtas..."
                        className="w-full pl-9 pr-9 py-2 rounded-full bg-gray-100 text-sm border-2 border-rosebrown-400 focus:outline-none 
                        focus:ring-1 focus:ring-rosebrown-400 placeholder:text-gray-500"
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}

                    />

                    {/* Clear button */}
                    {value && (
                        <button onClick={() => setValue("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 hover:text-gray-600">
                            <X size={16} />
                        </button>
                    )}
                </div>

                <SearchDropdown />

            </div>
        </div>
    )
}
