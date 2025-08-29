import React, { useEffect, useRef } from "react"

const IndexCarousel = ({ items }) => {
	const ref = useRef(null)

	const FADE_DURATION = 1250 // 1.25 seconds in milliseconds
	const DISPLAY_DURATION = 3000 // 3 seconds in milliseconds
	const TOTAL_DURATION = FADE_DURATION + DISPLAY_DURATION
	const TOTAL_SLIDESHOW_DURATION = TOTAL_DURATION * items.length

	useEffect(() => {
		const startTime = Date.now()
		

		// Show first image
		images[0].classList.add("active")

		// Start slideshow loop
		setInterval(() => {
			// Add fading-out class to current image
			images[currentIndex].classList.add("fading-out")

			// Wait for fade out to complete
			setTimeout(() => {
				// Remove both active and fading-out classes
				images[currentIndex].classList.remove("active", "fading-out")

				// Move to next image
				currentIndex = (currentIndex + 1) % images.length

				// Fade in next image
				images[currentIndex].classList.add("active")
			}, FADE_DURATION)
		}, TOTAL_DURATION)

		const updateProgress = () => {
			const elapsed = Date.now() - startTime
			const progress = ((elapsed % TOTAL_SLIDESHOW_DURATION) / TOTAL_SLIDESHOW_DURATION) * 100
			progressBar.style.width = progress + "%"
			requestAnimationFrame(updateProgress)
		}
		updateProgress()
	}, [])

	return (
		<div ref={ref}>
			<div></div>
			<div className="w-[120px] h-[3px] bg-[rgba(245,245,245,0.1)] mb-[20px] rounded">
				<div className="w-[50%] h-[3px] rounded bg-[#f9f9f9]"></div>
			</div>
		</div>
	)
}

export default IndexCarousel
