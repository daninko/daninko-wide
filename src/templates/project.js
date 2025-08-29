import React, { useEffect, useRef, useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { ReactLenis } from "lenis/react"
import { Header } from "../components/header"
import { Foot } from "../components/foot"

const shortcodes = { Foot }

const Post = ({ data, children }) => {
	return (
		<>
			<div className="flex flex-nowrap h-[100dvh]" style={{ width: "fit-content" }}>
				<ReactLenis
					root
					options={{
						orientation: "horizontal",
					}}
				/>
				<div className="project-title flex items-center pl-[100px] pr-[300px] min-w-[100dvw]">
					<h1 className="thanger">
						<span>{data.mdx.frontmatter.client}</span>
						<span>{data.mdx.frontmatter.project}</span>
					</h1>
				</div>
				<MDXProvider components={shortcodes}>{children}</MDXProvider>
				<div className="h-[100dvh] min-w-[100dvw] px-[200px] py-[15dvh] box-border flex items-end justify-center">
					<img
						className="h-full w-auto"
						src="https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
					<div className="w-[30ch] ml-[100px]">
						<p>
							I led a design team of four in redesigning the NBA’s key fan interaction
							platform, helping drive the league’s most successful All-Star weekend to
							date.
						</p>
					</div>
				</div>
				<div className="h-[100dvh] min-w-[100dvw] px-[200px] py-[15dvh] box-border flex items-end justify-center">
					<img
						className="h-full w-auto"
						src="https://images.unsplash.com/photo-1754152728457-902f155ebcae?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
					<div className="w-[30ch] ml-[100px]">
						<p>
							I led a design team of four in redesigning the NBA’s key fan interaction
							platform, helping drive the league’s most successful All-Star weekend to
							date.
						</p>
					</div>
				</div>
				<Foot page="project" />
			</div>
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
	query ($id: String!) {
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
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				client
				project
			}
		}
	}
`

export default Post
