import React, { useEffect, useState } from "react"
import {StaticImage} from "gatsby-plugin-image"

import Nav from "../components/nav"
import VideoPlayer from "../components/video"

import NbaVideo from "../images/video/video.mp4"

import Cloud from "../images/cloud.png"
import Forest from "../images/forest.png"
import Gold from "../images/gold.png"
import Salmon from "../images/salmon.png"
import Sky from "../images/sky.png"

const Index = () => {


	const pattern = [
		[4, 5, 2, 0, 0],
		[4, 5, 2, 2, 0],
		[0, 3, 2, 3, 0],
		[0, 2, 1, 2, 1],
		[0, 1, 3, 4, 3],
		[0, 0, 2, 3, 4],
	]

	useEffect(() => {

		let timeout
		let index = 0

		const nextSlide = () => {

			// clearTimeout(timeout)
	
			index += 1
			index %= pattern.length

			document.getElementById("slide-container").style.gridTemplateColumns = pattern[index].map((c) => `${c}fr`).join(" ")
			const slides = document.querySelectorAll('.slide-element')
	
			slides.forEach((slide, slideIndex) => {
				if (pattern[index][slideIndex] === 0) {
					slide.classList.add("hide")
				} else {
					slide.classList.remove("hide")
				}
			})

			// timeout = setTimeout(nextSlide, 2000)

		}

		// timeout = setTimeout(nextSlide, 2000)

		document.getElementById("slide-container").addEventListener("click", nextSlide)

	})

	
	return (
		<div className="absolute w-full h-full flex flex-col">
			<Nav></Nav>
			<main className="home-main grow flex items-end">
				<section className="slide-container" id="slide-container">
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">Speaker, Touchpoint 2024</figcaption>
							<StaticImage src="../images/dantouchpoint.jpeg" alt="touchpoint" />
						</figure>
					</div>
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">CVS Kidney Care</figcaption>
							<img src={Forest} />
						</figure>
					</div>
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">NBA Team Sites</figcaption>
							
							<VideoPlayer mp4={NbaVideo} />
						</figure>
					</div>
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">NBA All-Star Vote</figcaption>
							<img src={Gold} />
						</figure>
					</div>
					
					<div className="slide-element">
						<figure className="slide-figure">
							<figcaption className="slide-figure-caption">testing</figcaption>
							<img src={Sky} />
						</figure>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Index
