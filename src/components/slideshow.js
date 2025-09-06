import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"

const images = [
	"https://images.unsplash.com/photo-1756054271968-726cf7e15ca9?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1756334324139-b1e23f33cc03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1756312827971-e162f92e5588?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
]

const Slideshow = ({ assets }) => {
	const SLIDE_DURATION = 5000 // 5 seconds per slide
	const TOTAL_DURATION = SLIDE_DURATION * assets.length
	const [currentIndex, setCurrentIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const progressRef = useRef()

	useEffect(() => {
		let start
		let interval

		setTimeout(() => {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % assets.length)
			}, SLIDE_DURATION)
		}, Math.round(Math.random() * 3000))

		const animateProgress = (timestamp) => {
			if (!start) start = timestamp
			const elapsed = timestamp - start + currentIndex * SLIDE_DURATION
			const newProgress = Math.min((elapsed / TOTAL_DURATION) * 100, 100)
			setProgress(newProgress)
			if (elapsed < TOTAL_DURATION) {
				progressRef.current = requestAnimationFrame(animateProgress)
			}
		}
		progressRef.current = requestAnimationFrame(animateProgress)
		return () => {
			clearInterval(interval)
			cancelAnimationFrame(progressRef.current)
		}
	}, [currentIndex])

	return (
		<div className="slideshow-container">
			<div className="image-wrapper">
				<AnimatePresence mode="wait">
					<motion.img
						key={assets[currentIndex]}
						src={assets[currentIndex]}
						alt={`Slide ${currentIndex + 1}`}
						initial={{ opacity: 0, y: "0%" }}
						animate={{ opacity: 1, y: "-1%" }}
						exit={{ opacity: 0, y: "-2%" }}
						transition={{ duration: 1 }}
						className="slide-image"
					/>
				</AnimatePresence>
			</div>
			<div className="progress-bar opacity-0">
				<div className="progress-fill" style={{ width: progress + "%", opacity: 0 }}></div>

				{/* <motion.div
					className="progress-fill"
					layout
					initial={{ width: 0 }}
					animate={{ width: `${progress}%` }}
					transition={{ ease: "linear", duration: 0.05 }}
				/> */}
			</div>
		</div>
	)
}

export default Slideshow
