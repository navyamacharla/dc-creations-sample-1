import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { heroSlides } from "../../config/heroSlides"

const INTERVAL = 4000

export default function Hero() {
    const slides = [
        heroSlides[heroSlides.length - 1],
        ...heroSlides,
        heroSlides[0],
    ]

    const [current, setCurrent] = useState(1)
    const [transition, setTransition] = useState(true)
    const [paused, setPaused] = useState(false)
    const startX = useRef<number | null>(null)

    const carouselRef = useRef<HTMLDivElement>(null)

    const activateCarousel = () => {
        carouselRef.current?.focus()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault()
        }

        if (e.key === "ArrowLeft") prevSlide()
        if (e.key === "ArrowRight") nextSlide()
    }


    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)

    useEffect(() => {
        const onResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])


    useEffect(() => {
        const onResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])


    // Auto slide
    useEffect(() => {
        if (paused) return

        const timer = setInterval(() => {
            setCurrent((prev) => prev + 1)
        }, INTERVAL)

        return () => clearInterval(timer)
    }, [paused])

    // Handle infinite loop snap
    useEffect(() => {
        if (current === slides.length - 1) {
            setTimeout(() => {
                setTransition(false)
                setCurrent(1)
            }, 700)
        }

        if (current === 0) {
            setTimeout(() => {
                setTransition(false)
                setCurrent(slides.length - 2)
            }, 700)
        }
    }, [current, slides.length])

    // Re-enable transition after snap
    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => {
                setTransition(true)
            })
        }
    }, [transition])

    const nextSlide = () => setCurrent((prev) => prev + 1)
    const prevSlide = () => setCurrent((prev) => prev - 1)

    // Swipe handlers
    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX
    }

    const onTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return

        const diff = startX.current - e.changedTouches[0].clientX
        if (diff > 50) nextSlide()
        if (diff < -50) prevSlide()

        startX.current = null
    }

    return (
        <div
            ref={carouselRef}
            tabIndex={0}
            onClick={activateCarousel}
            onTouchStart={activateCarousel}
            onKeyDown={handleKeyDown}
            className="focus:outline-none"
        >

            <section
                className="relative w-full overflow-hidden group"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}>
                {/* Slides */}
                <div
                    className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
                    style={{
                        transform: `translateX(-${current * (isDesktop ? 45 : 100)}%)`,
                    }}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="min-w-full md:min-w-[45%] h-[60vh] sm:h-[60vh] relative md:mx-1 cursor-pointer">
                            <img src={slide.image} alt={slide.title} loading="lazy" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/10 md:bg-black/10" />

                        </div>
                    ))}
                </div>

                {/* Arrows */}
                <button onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white text-rosebrown-900 p-2
                    rounded-full hover:bg-white transition md:opacity-0 md:group-hover:opacity-100">
                    <ChevronLeft className="w-7 h-7" />
                </button>

                <button onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-rosebrown-900 p-2 rounded-full
                    hover:bg-white transition md:opacity-0 md:group-hover:opacity-100">
                    <ChevronRight className="w-7 h-7" />
                </button>

                {/* Pagination */}
                <div className="absolute bottom-4 w-full flex justify-center gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index + 1)}
                            className={`h-2 w-2 rounded-full transition-all ${current === index + 1
                                ? "bg-white w-6"
                                : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
