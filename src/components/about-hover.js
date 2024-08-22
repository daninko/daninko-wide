import React, {useState} from "react"
import { InView } from "react-intersection-observer"
import { motion } from "framer-motion"

const AboutHover = ({ children }) => {
	const [inTarget, setInTarget] = useState(false)
	return (
		<InView
			rootMargin="-50% -50% -50% -50%"
			as="li"
			className=""
			onChange={(inView, entry) => {
				setInTarget(inView)
			}}
		>
			<div className="z-1 pointer-events-none fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
				<motion.div initial={{opacity:0, scale:0, rotate: "25deg"}} exit={{opacity:0, transition: {duration:0.00001}}} animate={inTarget? {opacity: 1, scale: 1, rotate: "0deg"} : {opacity: 0, scale: 0, rotate: "25deg"}} className="rounded-[4px] w-[400px] h-[350px] bg-black"></motion.div>
			</div>
			<motion.span
				className="z-10 relative block"
				initial={{opacity: 0.5, y: "1rem"}}
				animate={{y: "0rem", opacity: inTarget ? 1 : 0.3}}
			>
				{children}
			</motion.span>
		</InView>
	)
}

export default AboutHover
