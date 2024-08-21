import React from "react"
import { graphql } from "gatsby"

import Nav from "../components/nav"
import { Header } from "../components/header"
import Footer from "../components/footer"

const About = ({ data }) => {
	return (
		<>
			<div style={{ minHeight: "100vh" }} className="bg-[#51AFE3]">
				<Nav page="/" isHome={false} />
				<main></main>
				<Footer />
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
	query MyQuery {
		site {
			siteMetadata {
				title
				description
				url
				author
			}
		}
	}
`

export default About
