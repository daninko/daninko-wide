import React, { useEffect, useRef } from "react"
import {
	Engine,
	Render,
	Bodies,
	Runner,
	Composite,
	Common,
	Body,
	World,
	Svg,
	Vector,
	Vertices,
	Mouse,
	MouseConstraint,
} from "matter-js"
import { graphql } from "gatsby"
import { motion } from "motion/react"

import "pathseg"
// import "poly-decomp"

import Nav from "../components/nav"
import Footer from "../components/footer"
import Project from "../components/project"
import { Header } from "../components/header"

import LetterA from "../images/a.svg"
import LetterD from "../images/d.svg"
import LetterN from "../images/n.svg"

const Index = ({ data }) => {
	const canvas = useRef() //Your div element
	const THICCNESS = 60
	const SVG_WIDTH_IN_PX = 100
	const SVG_PATH_SELECTOR_D = "#matter-path-d"
	const SVG_PATH_SELECTOR_A = "#matter-path-a"
	const SVG_PATH_SELECTOR_N = "#matter-path-n"
	const SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH = 0.04
	var engine = Engine.create(),
		render

	// Common.setDecomp(require("poly-decomp"))

	useEffect(() => {
		let ground = Bodies.rectangle(
			canvas.current.clientWidth / 2,
			canvas.current.clientHeight + THICCNESS / 2,
			27184,
			THICCNESS,
			{ isStatic: true }
		)

		let leftWall = Bodies.rectangle(
			0 - THICCNESS / 2,
			canvas.current.clientHeight / 2,
			THICCNESS,
			canvas.current.clientHeight * 5,
			{
				isStatic: true,
			}
		)

		let rightWall = Bodies.rectangle(
			canvas.current.clientWidth + THICCNESS / 2,
			canvas.current.clientHeight / 2,
			THICCNESS,
			canvas.current.clientHeight * 5,
			{ isStatic: true }
		)

		render = Render.create({
			element: canvas.current,
			engine: engine,
			options: {
				width: canvas.current.clientWidth,
				height: canvas.current.clientHeight,
				background: "transparent",
				wireframes: false,
				showAngleIndicator: false,
			},
		})

		Composite.add(engine.world, [ground, leftWall, rightWall])

		const mouse = Mouse.create(render.canvas)
		let mouseConstraint = MouseConstraint.create(engine, {
			mouse: mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false,
				},
			},
		})

		// allow scroll through the canvas
		mouseConstraint.mouse.element.removeEventListener(
			"mousewheel",
			mouseConstraint.mouse.mousewheel
		)
		mouseConstraint.mouse.element.removeEventListener(
			"DOMMouseScroll",
			mouseConstraint.mouse.mousewheel
		)

		const createSvgBodiesD = (matterContainer) => {
			// const paths = ["M0 336V0H115.344L155.429 98.88H157.065V0H272V336H157.883L116.571 241.44H114.935V336H0Z"]
			const paths = document.querySelectorAll(SVG_PATH_SELECTOR_D)
			paths.forEach((path, index) => {
				let vertices = Svg.pathToVertices(path)
				let svgBody = Bodies.fromVertices(Math.floor(Math.random() * matterContainer.current.clientWidth), 0, [vertices], {
					friction: 0.3,
					frictionAir: 0.00001,
					restitution: 0.8,
					render: {
						sprite: {
							texture: LetterD
						}
					},
				})
				Composite.add(engine.world, svgBody)
			})
		}

		const createSvgBodiesA = (matterContainer) => {
			// const paths = ["M0 336V0H115.344L155.429 98.88H157.065V0H272V336H157.883L116.571 241.44H114.935V336H0Z"]
			const paths = document.querySelectorAll(SVG_PATH_SELECTOR_A)
			paths.forEach((path, index) => {
				let vertices = Svg.pathToVertices(path)
				// let scaleFactor =
				// 	(matterContainer.current.clientWidth *
				// 		SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
				// 	SVG_WIDTH_IN_PX
				// vertices = Vertices.scale(vertices, scaleFactor, scaleFactor)
				let svgBody = Bodies.fromVertices(Math.floor(Math.random() * matterContainer.current.clientWidth), 0, [vertices], {
					friction: 0.3,
					frictionAir: 0.00001,
					restitution: 0.8,
					render: {
						sprite: {
							texture: LetterA
						}
					},
				})
				Composite.add(engine.world, svgBody)
			})
		}

		const createSvgBodiesN = (matterContainer) => {
			// const paths = ["M0 336V0H115.344L155.429 98.88H157.065V0H272V336H157.883L116.571 241.44H114.935V336H0Z"]
			const paths = document.querySelectorAll(SVG_PATH_SELECTOR_N)
			paths.forEach((path, index) => {
				let vertices = Svg.pathToVertices(path)
				// let scaleFactor =
				// 	(matterContainer.current.clientWidth *
				// 		SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
				// 	SVG_WIDTH_IN_PX
				// vertices = Vertices.scale(vertices, scaleFactor, scaleFactor)
				let svgBody = Bodies.fromVertices(Math.floor(Math.random() * matterContainer.current.clientWidth), 0, [vertices], {
					friction: 0.3,
					frictionAir: 0.00001,
					restitution: 0.8,
					render: {
						sprite: {
							texture: LetterN
						}
					},
				})
				Composite.add(engine.world, svgBody)
			})
		}

		const scaleBodies = (matterContainer) => {
			const allBodies = Composite.allBodies(engine.world)

			allBodies.forEach((body) => {
				if (body.isStatic === true) return // don't scale walls and ground
				const { min, max } = body.bounds
				const bodyWidth = max.x - min.x
				let scaleFactor =
					(matterContainer.current.clientWidth *
						SVG_WIDTH_AS_PERCENT_OF_CONTAINER_WIDTH) /
					bodyWidth

				Body.scale(body, scaleFactor, scaleFactor)
			})
		}

		const handleResize = (matterContainer, rightWall, ground) => {
			// set canvas size to new values
			render.canvas.width = matterContainer.current.clientWidth
			render.canvas.height = matterContainer.current.clientHeight

			// reposition ground
			Body.setPosition(
				ground,
				Vector.create(
					matterContainer.current.clientWidth / 2,
					matterContainer.current.clientHeight + THICCNESS / 2
				)
			)

			// reposition right wall
			Body.setPosition(
				rightWall,
				Vector.create(
					matterContainer.current.clientWidth + THICCNESS / 2,
					matterContainer.current.clientHeight / 2
				)
			)

			scaleBodies(canvas)
		}


		createSvgBodiesD(canvas)
		createSvgBodiesA(canvas)
		createSvgBodiesN(canvas)
		createSvgBodiesD(canvas)
		createSvgBodiesA(canvas)
		createSvgBodiesN(canvas)
		createSvgBodiesD(canvas)
		createSvgBodiesA(canvas)
		createSvgBodiesN(canvas)

		
		Render.run(render)
		// create runner
		var runner = Runner.create()

		// run the engine
		Runner.run(runner, engine)

		window.addEventListener("resize", () => handleResize(canvas, rightWall, ground))

		// scaleBodies(canvas)
	}, [])

	return (
		<>
			<Nav page="/about" isHome={true} data={data} />

			<div className="hidden">
				<svg
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 74.3"
				>
					<path
						id="matter-path-d"
						d="M228.753 31.2062C207.512 10.4021 180.007 0 146.238 0H0V336.067H146.238C179.462 336.067 206.831 325.505 228.344 304.381C249.858 282.936 260.615 251.73 260.615 210.762V124.825C260.615 82.8965 249.994 51.6903 228.753 31.2062Z"
					/>
				</svg>
				<svg
					width="307"
					height="337"
					viewBox="0 0 307 337"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="matter-path-a"
						d="M179.734 336.547L176.467 305.821H121.729L117.644 336.547H0L71.8938 0H232.838L305.957 336.547H179.734Z"
						fill="#F9F9F9"
					/>
				</svg>
				<svg
					width="272"
					height="336"
					viewBox="0 0 272 336"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="matter-path-n"
						d="M0 336V0H115.344L155.429 98.88H157.065V0H272V336H157.883L116.571 241.44H114.935V336H0Z"
						fill="#F9F9F9"
					/>
				</svg>
			</div>

			<main>
				<header className="h-[100vh] relative overflow-hidden">
					<div
						className="h-[100vh] w-[100vw] relative overflow-hidden pointer-events-none"
						ref={canvas}
					></div>
				</header>
				<div className="portfolio-container">
					{data.allMdx.edges.map(({ node }, i) => {
						return <Project content={node} />
					})}
				</div>
			</main>
			<Footer />
		</>
	)
}

export const Head = ({ data }) => {
	return (
		<>
			<Header data={data} />
		</>
	)
}

export const query = graphql`
	query MyQuery {
		site {
			siteMetadata {
				author
				description
				title
				url
				position
				homeHeadline
				contactMethods {
					link
					text
				}
			}
		}
		allMdx(filter: { frontmatter: { collection: { eq: "projects" } } }) {
			edges {
				node {
					body
					frontmatter {
						assets {
							src {
								childImageSharp {
									gatsbyImageData(
										layout: FULL_WIDTH
										formats: WEBP
										webpOptions: { quality: 100 }
									)
								}
							}
							type
						}
						title
						project
						link
					}
				}
			}
		}
		mdx(frontmatter: { collection: { eq: "about" } }) {
			id
			frontmatter {
				content {
					text
				}
			}
		}
	}
`

export default Index
