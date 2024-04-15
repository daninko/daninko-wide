import React, { useState, useRef } from "react"
import usePrefersReducedMotion from "../hooks/reducedMotion"

const VideoPlayer = ({ mp4 }) => {
	const useMotion = usePrefersReducedMotion()
	const [playing, setPlaying] = useState(useMotion)
	const vidRef = useRef(null)

	const handlePlaying = () => {
		if (playing) {
			vidRef.current.pause()
			setPlaying(false)
		} else {
			vidRef.current.play()
			setPlaying(true)
		}
	}

	return (
		<div className="video-container">
			<video ref={vidRef} loop autoPlay="true" playsInline muted>
				{/* <source src={webm} type="video/webm" /> */}
				<source src={mp4} type="video/mp4" />
			</video>

			{/* <button className="video-playpause" onClick={handlePlaying}>
				{!playing && (
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.6445 15.6522C21.2708 16.0439 21.2708 16.9561 20.6445 17.3478L14.5303 21.172C13.8642 21.5886 13 21.1098 13 20.3242V12.6758C13 11.8902 13.8642 11.4114 14.5303 11.828L20.6445 15.6522Z"
							fill="#0D0D0D"
						/>
					</svg>
				)}
				{playing && (
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13.5 10C14.0523 10 14.5 10.4477 14.5 11V21C14.5 21.5523 14.0523 22 13.5 22C12.9477 22 12.5 21.5523 12.5 21V11C12.5 10.4477 12.9477 10 13.5 10ZM18.5 10C19.0523 10 19.5 10.4477 19.5 11V21C19.5 21.5523 19.0523 22 18.5 22C17.9477 22 17.5 21.5523 17.5 21V11C17.5 10.4477 17.9477 10 18.5 10Z"
							fill="black"
						/>
					</svg>
				)}
			</button> */}
		</div>
	)
}

export default VideoPlayer