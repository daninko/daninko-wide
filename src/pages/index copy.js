import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"
import { motion } from "motion/react"

import {Swiper, SwiperSlide } from "swiper/react"
import {FreeMode, Scrollbar, Mousewheel, Pagination} from "swiper/modules"

import "swiper/css"
import "swiper/css/bundle"

import Nav from "../components/nav"
import { Header } from "../components/header"

const Index = ({ data }) => {
	return (

		<Swiper
			modules={[FreeMode, Mousewheel]}
			slidesPerView="auto"
			spaceBetween={0}
			freeMode
			mousewheel
		>
			<SwiperSlide>
				<Nav page="/about" isHome={true} data={data} />
			</SwiperSlide>
			<SwiperSlide>
				<div className="flex-[0 0 auto] flex flex-nowrap pl-[500px] pr-[300px]">
					<div className="h-[100dvh] aspect-[1/1.23] bg-cover bg-[url(https://images.unsplash.com/photo-1669997846396-4b48e78f82d5?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
					<div className="h-[100dvh] w-[458px] pl-[50px] flex items-end">
						<div className="my-[200px]">
							<p>
								I led a design team of four in redesigning the NBA’s key fan
								interaction platform, helping drive the league’s most successful
								All-Star weekend to date.
							</p>
							<ul>
								<li>+20% growth in global submissions.</li>
								<li>The premier major league fan voting experience.</li>
								<li>Surge in discussion on social channels.</li>
							</ul>
							<a href="#" className="underline-link">Learn about the project</a>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
		
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
