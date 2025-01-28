import React from "react"
import { motion } from "motion/react"

const ImgScale = ({ children, size = 100, value = false, grid= false }) => {

	return (
		<motion.div
			initial={{ width: size }}
			transition={{
				type: "spring",
				bounce: 0,
			}}
			className={grid ? "grid grid-cols-2 gap-x-3 pointer-events-auto" : "pointer-events-auto"}
			// animate={value ? { width: "54.5454545454%" } : { width: size + "%" }}
			animate={value ? { width: "54.5454545454%" } : { width: "100%" }}
		>
			{children}
		</motion.div>
	)
}

export default ImgScale
