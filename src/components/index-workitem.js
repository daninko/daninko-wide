import React, { useState } from "react"
import { motion } from "motion/react"
import Slideshow from "./slideshow"

const IndexWorkItem = ({ data }) => {
	const [hover, setHover] = useState(false)

	const inDepth = {
		initial: {
			backgroundColor: "rgba(249,249,249,0)",
		},
		hover: {
			backgroundColor: "rgba(249,249,249,1)",
			color: "#111",
		},
	}

	return (
		<div className="flex flex-nowrap block mr-[30rem]">
			{data.frontmatter.case == "yes" ? (
				<a
					href={"/" + data.frontmatter.slug}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<Slideshow assets={data.frontmatter.assets} />
				</a>
			) : (
				<>
					<Slideshow assets={data.frontmatter.assets} />
				</>
			)}

			<div className="h-[100dvh] ml-[5rem] flex items-end">
				<div className="my-[15dvh]">
					{data.frontmatter.case == "yes" ? (
						<a
							href={"/" + data.frontmatter.slug}
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
						>
							<p className="w-[32ch]">{data.frontmatter.blurb}</p>
							<ul className="text-nowrap">
								<li className="opacity-[0.5]">Outcomes</li>
								{data.frontmatter.results.map((i) => {
									return <li>{i}</li>
								})}
							</ul>
							<p className="-translate-x-[0.5rem]">
								<motion.span
									className="rounded-button"
									variants={inDepth}
									initial="initial"
									animate={hover ? "hover" : "initial"}
									transition={{ duration: 0.15 }}
								>
									<span className="underlined">in depth</span> <span className="text-[0.85em] inline-block -translate-y-[0.1em]">→</span>
								</motion.span>
							</p>
						</a>
					) : (
						<>
							<p className="w-[32ch]">{data.frontmatter.blurb}</p>
							<ul className="text-nowrap">
								<li className="opacity-[0.5]">Outcomes</li>
								{data.frontmatter.results.map((i) => {
									return <li key={"list-" + i}>{i}</li>
								})}
							</ul>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default IndexWorkItem
