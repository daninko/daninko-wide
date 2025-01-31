import React, { useState, useRef, useEffect } from "react"
import { motion, spring } from "motion/react"
import useThrottle from "../hooks/throttle"
import useSize from "@react-hook/size"
import useScreenSize from "../hooks/useScreenSize"
import Scrl from "scrl"
import { useIsLarge } from "../hooks/responsive"
import { ResponsiveMasonry, Masonry } from "react-responsive-masonry"

import ImgScale from "./portfolio-img"
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"

const Project = ({ byline, children, content }) => {
	const [openItem, setOpen] = useState(false)
	const myRef = useRef(null)
	const thingyRef = useRef(null)
	const screenSize = useScreenSize()

	const very = useIsLarge()

	const [width, height] = useSize(thingyRef)
	const [addClass, setAddClass] = useState("")

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
				<motion.div layout transition={{ type: "spring", bounce: 0, duration: 1 }}>
					<GatsbyImage image={g} className="block w-full rounded mb-3" alt="" />
				</motion.div>
			</>
		)
	})

	const doTheThing = () => {
		myRef.current.classList.add("masonry-transition")
		if (throttledValue) {
			setOpen(false)
			setAddClass("")
		} else {
			setOpen(true)
			setAddClass("masonry-open")
			scrl.scrollTo(myRef.current)
		}
		setTimeout(() => {
			myRef.current.classList.remove("masonry-transition")
		}, 1010)
	}

	useEffect(() => {}, [])

	return (
		<>
		<style>
			{`
			
				.masonry-transition {
					transition: margin-right ${spring(0.45, 0.001)};
				}

				.content-open {
					width: 800px
				}
			
			`}
		</style>
		<section className="relative mb-[500px]">
			<div className="flex items-end px-[12px] md:px-[30px] xl:px-[60px]  pb-[90px]">
				<div className="flex-auto">
					<h2 className="font-['si']">
						{content.frontmatter.title}
					</h2>
				</div>
				<div className="w-40">
				<span className="font-['si'] inline-block font-normal tracking-normal">
							{content.frontmatter.project}
						</span>
				</div>
			</div>

			<div className="relative">
				<div className="h-full project-content absolute top-0 right-[0px]">
					<div
						className="relative h-full pl-[2vw] pr-[4vw]"
						style={{ maxWidth: "50ch", marginLeft: "auto", marginRight: "auto" }}
					>
						<div
							className="sticky py-10 xl:py-12 2xl:py-20"
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
				<div className="relative px-[8px] md:px-[15px] xl:px-[30px]  pointer-events-none ">
					<motion.div
						className={"relative masonry-image-container " + addClass }
						ref={myRef}
					>
						<div className="z-10 pointer-events-none masonry">{items}</div>
					</motion.div>
				</div>
				<div
					className="absolute z-30 top-20 right-0 pointer-events-none"
					style={{ height: "calc(100% - 7rem)", display: "flex" }}
				>
					<div
						className="w-full sticky bottom-12 left-0 mr-[60px] box-border"
						style={{ textAlign: "right", alignSelf: "flex-end" }}
					>
						{content.frontmatter.link !== "none" && (
							<a href={content.frontmatter.link} style={{marginRight: "8px"}} className="core-button">
								See it live ↗
							</a>
						)}
						<button onClick={doTheThing} className="core-button">
							Details{" "}
							<span
								className="pointer-events-none"
								style={{
									transform: !throttledValue ? "rotate(180deg)" : "rotate(0deg)",
								}}
							>
								←
							</span>
						</button>
						
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default Project
