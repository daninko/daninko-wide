import React from "react"
import { motion } from "framer-motion"

const ImgScale = ({ children, size = "100%", value = false, grid= false }) => {
	return (
		<motion.div
			initial={{ maxWidth: size }}
			transition={{
				type: "spring",
				bounce: 0,
			}}
			className={grid ? "grid grid-cols-2 gap-x-3 pointer-events-auto" : "pointer-events-auto"}
			animate={value ? { maxWidth: "54.5454545454%" } : { maxWidth: size }}
		>
			{children}
		</motion.div>
	)
}

export default ImgScale
