// import { X } from "lucide-react"
import { Checkbox } from "./Checkbox"
import { FilterSection } from "./FilterSection"

type Props = {
    open: boolean
    onClose: () => void
}

export default function FilterSidebar({ open, onClose }: Props) {
    return (
        <>
            {/* Overlay (mobile) */}
            {/* {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0  z-40 md:hidden"
                />
            )} */}

            <aside className={`fixed top-0 left-0 h-full md:h-auto w-72 z-50 md:z-auto p-4 border-r transform transition-transform duration-300
                     ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                <div className="flex items-center justify-between mb-4 border-b-2 border-gray-200 pb-3">
                    <h3 className="font-semibold text-lg">Filters</h3>

                    {/* <button onClick={onClose} aria-label="Close menu">
                        <X className="h-5 w-5 text-rosebrown-800" />
                    </button> */}
                </div>


                {/* Filters */}
                <div className="border-b-2 border-gray-200 mb-3">
                    <FilterSection title="Category">
                        <Checkbox label="Kurtas" />
                        <Checkbox label="Dresses" />
                        <Checkbox label="Tops" />
                    </FilterSection>
                </div>

                <div className="border-b-2 border-gray-200 mb-3">

                    <FilterSection title="Price">
                        <Checkbox label="Under ₹999" />
                        <Checkbox label="₹1000 - ₹1999" />
                        <Checkbox label="Above ₹2000" />
                    </FilterSection>

                </div>

                <div className="">

                    <FilterSection title="Rating">
                        <Checkbox label="4★ & above" />
                        <Checkbox label="3★ & above" />
                    </FilterSection>
                </div>




            </aside>
        </>
    )
}
