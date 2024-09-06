import React from "react"

export const Header = ({ data }) => {
	return (
		<>
			<html lang="en" prefix="og: http://ogp.me/ns#" />
			<title>{data.site.siteMetadata.title}</title>

			<meta name="title" property="og:title" content={data.site.siteMetadata.title} />
			<meta
				name="description"
				property="og:description"
				content={data.site.siteMetadata.description}
			/>

			<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial_scale=1.0" />

			<meta name="og:type" content="website" />
			<meta name="og:url" content={data.site.siteMetadata.url} />
			<meta name="og:locale" content="en_CA" />

			<meta name="twitter:title" content={data.site.siteMetadata.title} />
			<meta name="twitter:site" content="@daninko" />
			<meta name="twitter:site:id" content="6088542" />
			<meta name="twitter:description" content={data.site.siteMetadata.description} />
			<meta name="twitter:card" content="summary_large_image" />

			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
			/>

			
		</>
	)
}
