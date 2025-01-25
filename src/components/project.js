import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import useThrottle from "../hooks/throttle"
import useSize from "@react-hook/size"
import useScreenSize from "../hooks/useScreenSize"
import Scrl from "scrl"
import { ResponsiveMasonry, Masonry } from "react-responsive-masonry"

import ImgScale from "./portfolio-img"
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"

const Project = ({ byline, children, content }) => {
	const [openItem, setOpen] = useState(false)
	const myRef = useRef(null)
	const thingyRef = useRef(null)
	const screenSize = useScreenSize()

	const [width, height] = useSize(thingyRef)

	const throttledValue = useThrottle(openItem)

	const scrl = new Scrl({ friction: 0.45 })

	const copyEffect = {
		visible: {
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0,
				duration: 1,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				type: "spring",
				bounce: 0,
				duration: 1,
			},
		},
	}

	const items = content.frontmatter.assets.map((i) => {
		const g = getImage(i.src)
		console.log(g)
		return (
			<>
			{/* <StaticImage src="../images/cloud.png" alt="A dinosaur" /> */}
				<GatsbyImage image={g} className="block w-full rounded mb-3" alt="" />
			</>
		)
	})

	const doTheThing = () => {
		if (throttledValue) {
			setOpen(false)
		} else {
			setOpen(true)
			scrl.scrollTo(myRef.current)
		}
	}

	useEffect(() => {}, [])

	return (
		<section className="relative mb-[750px]">
			<div className="grid grid-cols-12 gap-x-3 px-7">
				<div className="col-span-10">
					<h2 className="font-['si'] font-medium mb-16 text-[76px] leading-[1]">
						{content.frontmatter.title}{" "}
						<span className="font-['si'] text-[18px] font-normal tracking-normal">
							{content.frontmatter.project}
						</span>
					</h2>
				</div>
			</div>

			<div className="relative">
				<div
					className="absolute z-30 top-20 right-0 w-[230px] pointer-events-none"
					style={{ height: "calc(100% - 7rem)" }}
				>
					<div className="w-full sticky top-20 left-0 box-border">
						<div className="col-span-1 col-start-12 pl-3">
							<div>
								<button onClick={doTheThing} className="core-button">
									Details{" "}
									<span
										className="pointer-events-none"
										style={{
											transform: !throttledValue
												? "rotate(180deg)"
												: "rotate(0deg)",
										}}
									>
										←
									</span>
								</button>
							</div>
							{content.frontmatter.link !== "none" && (
								<div>
									<a href={content.frontmatter.link} className="core-button">
										See it live ↗
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="h-full w-full grid grid-cols-12 gap-x-3 absolute top-0 right-0">
					<div className="relative col-span-4 col-start-8">
						<div
							className="sticky py-20 pl-10 pr-20"
							style={{ top: (height - screenSize.height) * -1 }}
							ref={thingyRef}
						>
							<motion.div
								variants={copyEffect}
								initial="visible"
								animate={throttledValue ? "visible" : "hidden"}
								dangerouslySetInnerHTML={{ __html: content.body }}
							></motion.div>
						</div>
					</div>
				</div>
				<div className="relative mx-7">
					<motion.div className="relative" animate={throttledValue ? {width:"54vw" } : {width: "calc(100% - 230px)"} } ref={myRef}>
						<div className="z-10 pointer-events-none masonry">
							{items}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Project
