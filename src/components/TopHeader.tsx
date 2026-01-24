import { useEffect, useState } from "react";
import { offers } from "../config/offers";

const DISPLAY_TIME = 3000; // 2 seconds
const TRANSITION_TIME = 1000; // 0.5 seconds

export default function TopHeader() {

    const [index, setIndex] = useState(0);
    
    const [position, setPosition] = useState<"right" | "center" | "left">("right");
    useEffect(() => {
        let timers: number[] = [];

        timers.push(window.setTimeout(() => setPosition("center"), 100)); // Start transition to center

        timers.push(window.setTimeout(() => {
            setPosition("left"); // Start transition to left
        }, DISPLAY_TIME + 100));

        timers.push(window.setTimeout(() => {
            setIndex((prev) => (prev + 1) % offers.length); // Update offer
            setPosition("right"); // Reset position to right
        }, DISPLAY_TIME + TRANSITION_TIME + 100));

        return () => {
            timers.forEach(clearTimeout);
        }
    }, [index])

    const getTransform = () => {
        console.log(position);
        switch (position) {
            case "right":
                return "translateX(100%)";
            case "center":
                return "translateX(0%)";
            case "left":
                return "translateX(-100%)";
        }
    }

    return (

        <div className="bg-pink-600 text-white overflow-hidden h-9 flex items-center">
            <div className="w-full text-center text-sm font-bold tracking-wide transition-transform duration-1000 ease-in-out"
                style={{ transform: getTransform() }}>
                {offers[index]}
            </div>
        </div>
    );
}