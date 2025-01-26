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
			<div className="grid grid-cols-12 gap-x-3 px-[60px] pb-[90px]">
				<div className="col-span-10">
					<h2 className="font-['si'] font-medium text-[80px] leading-[1]">
						{content.frontmatter.title}{" "}
						<span className="font-['si'] text-[18px] font-normal tracking-normal">
							{content.frontmatter.project}
						</span>
					</h2>
				</div>
			</div>

			<div className="relative">
				<div
					className="absolute z-30 top-20 right-0 w-[8vw] pointer-events-none"
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
				<div className="h-full absolute top-0 left-[53.5vw] ">
					<div
						className="relative h-full pl-[5vw] pr-[8vw]"
						style={{ maxWidth: "55ch", marginLeft: "auto", marginRight: "auto" }}
					>
						<div
							className="sticky py-20 pl-10 pr-10"
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
				<div className="relative mx-7 pointer-events-none ">
					<motion.div
						className="relative"
						transition={{
							type: "spring",
							bounce: 0,
						}}
						animate={
							throttledValue ? { width: "53.5vw" } : { width: "calc(100% - 200px)" }
						}
						ref={myRef}
					>
						<div className="z-10 pointer-events-none masonry">{items}</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Project
