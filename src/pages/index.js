import React, { useEffect, useRef, useState } from "react"
import { graphql } from "gatsby"
import { motion, useTransform } from "motion/react"

import { ReactLenis } from "lenis/react"

import Nav from "../components/nav"
import { Header } from "../components/header"
import { Foot } from "../components/foot"
import Slideshow from "../components/slideshow"
import IndexWorkItem from "../components/index-workitem"

const Index = ({ data }) => {
	const ref = useRef(null)
	return (
		<div className="flex flex-nowrap" style={{ width: "fit-content" }} ref={ref}>
			<ReactLenis
				root
				options={{
					orientation: "horizontal",
				}}
			/>
			<Nav page="/about" isHome={true} data={data} />
			<div className="min-w-[500px] w-[65dvw]"></div>

			{data.allMdx.edges.map(({ node }, i) => {
				return (
					<>
						<IndexWorkItem data={node} key={"work-item-" + i} />
					</>
				)
			})}

			<div className="flex w-[100dvw] justify-center items-center mr-[300px]">
				<div>
					<p className="big-p font-light">
						I have a decade of experience working innovative digital products for
						enterprise, entertainment, healthcare, fintech, and nonprofit.
						Collaboration, adaptation, and context are my keys to success.
					</p>
					<p className="big-p font-light">
						I also mentor senior design students at SFU's School of Interactive Arts and
						Technology, and have spoken at Touchpoint, an annual interaction design
						conference in Vancouver.
					</p>
				</div>
			</div>

			<div className="project-title flex items-center pl-[100px] pr-[300px] min-w-[100dvw]">
				<h1 className="thanger">
					<span>Let's make</span>
					<span>something great.</span>
				</h1>
			</div>
		</div>
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
						assets 
						title
						project
						link
						case
						blurb
						results
						slug
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

// export const query = graphql`
// 	query MyQuery {
// 		site {
// 			siteMetadata {
// 				author
// 				description
// 				title
// 				url
// 				position
// 				homeHeadline
// 				contactMethods {
// 					link
// 					text
// 				}
// 			}
// 		}
// 		allMdx(filter: { frontmatter: { collection: { eq: "projects" } } }) {
// 			edges {
// 				node {
// 					body
// 					frontmatter {
// 						assets {
// 							src {
// 								childImageSharp {
// 									gatsbyImageData(
// 										layout: FULL_WIDTH
// 										formats: WEBP
// 										webpOptions: { quality: 100 }
// 									)
// 								}
// 							}
// 							type
// 						}
// 						title
// 						project
// 						link
// 						case
// 						blurb
// 						results
// 						slug
// 					}
// 				}
// 			}
// 		}
// 		mdx(frontmatter: { collection: { eq: "about" } }) {
// 			id
// 			frontmatter {
// 				content {
// 					text
// 				}
// 			}
// 		}
// 	}
// `

export default Index
