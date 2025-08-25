import React from "react"
import { Link } from "gatsby"
import { motion } from "motion/react"

const Nav = ({ page = "/", isHome = true, data }) => {
	return (
		<nav className="flex h-[100dvh] max-w-[800px] flex-[0 0 auto]">
			<motion.div layout className="w-[400px] bg-[#f9f9f9]" whileHover={{width:"420px"}} style={{cursor: "pointer"}}>
				<div className="my-[15dvh] ml-[50px] text-[#111111]">Dan Nanasi</div>
			</motion.div>
			<motion.div layout className="w-[400px] bg-[#111111]">
				<div className="my-[15dvh] ml-[50px] text-[#f9f9f9]">
					<span className="block">Product Design </span>
					<span className="block opacity-[0.5]">at Microsoft</span>
				</div>
			</motion.div>
		</nav>
	)
}

export default Nav
