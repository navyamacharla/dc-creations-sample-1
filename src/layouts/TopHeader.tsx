import { useEffect, useState } from "react"
import { offers } from "../config/offers"

const DISPLAY_TIME = 3000
const TRANSITION_TIME = 1000

export default function TopHeader() {
  const [index, setIndex] = useState(0)
  const [position, setPosition] = useState<"right" | "center" | "left">("right")
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    let timers: number[] = []

    // Step 1: move to center
    timers.push(
      window.setTimeout(() => {
        setAnimate(true)
        setPosition("center")
      }, 50)
    )

    // Step 2: stay in center
    timers.push(
      window.setTimeout(() => {
        setPosition("left")
      }, 50 + DISPLAY_TIME)
    )

    // Step 3: reset instantly & change text
    timers.push(
      window.setTimeout(() => {
        setAnimate(false)
        setPosition("right")
        setIndex((prev) => (prev + 1) % offers.length)
      }, 50 + DISPLAY_TIME + TRANSITION_TIME)
    )

    return () => timers.forEach(clearTimeout)
  }, [index])

  // Re-enable animation after reset
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => {
        setAnimate(true)
      })
    }
  }, [animate])

  const getTransform = () => {
    switch (position) {
      case "right":
        return "translateX(100%)"
      case "center":
        return "translateX(0%)"
      case "left":
        return "translateX(-100%)"
    }
  }

  return (
    <div className="bg-rosebrown-600 text-white overflow-hidden h-9 flex items-center">
      <div
        className={`
          w-full text-center font-bold tracking-wide
          ${animate ? "transition-transform duration-1000 ease-in-out" : ""}
        `}
        style={{ transform: getTransform() }}
      >
        {offers[index]}
      </div>
    </div>
  )
}
