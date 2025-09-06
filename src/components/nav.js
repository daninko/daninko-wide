import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { motion } from "motion/react"

const Nav = ({ page = "/", isHome = true, data }) => {
	const [hovering, setHovering] = useState(false)
	const ref = useRef(null)

	const show = {
		initial: {
			opacity: 0,
		},
		visible: {
			opacity: 0.35,
		},
	}

	const hide = {
		initial: {
			opacity: 0.35,
		},
		visible: {
			opacity: 0,
		},
	}

	const hoveringFn = () => {
		setHovering(true)
	}

	const leavingFn = () => {
		setHovering(false)
	}

	return (
		<nav className="flex h-[100dvh] absolute top-[0px] left-[0px] flex-[0 0 auto]">
			<motion.a
				href="/about"
				layout
				className="nav-column bg-[#f9f9f9] flex items-center pr-0"
				whileHover={{ paddingRight: "1rem" }}
				style={{ cursor: "pointer" }}
				ref={ref}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
			>
				<div className="my-[15dvh] ml-[50px] mr-[100px] text-[#111111]">
					<span className="nav-name mr-[2rem]">Dan Nanasi</span>
					<motion.span
						variants={show}
						initial="initial"
						animate={hovering ? "visible" : "initial"}
						className="nav-name"
					>
						about
					</motion.span>
				</div>
			</motion.a>
			<motion.div layout className="nav-column bg-[#111111] flex items-center">
				<div className="my-[15dvh] ml-[50px] text-[#f9f9f9]">
					<span className="nav-name mr-[2rem]">Product Design </span>
					<motion.span
						variants={hide}
						initial="initial"
						animate={hovering ? "visible" : "initial"}
						className="nav-name"
					>
						at Microsoft
					</motion.span>
				</div>
			</motion.div>
		</nav>
	)
}

export default Nav
