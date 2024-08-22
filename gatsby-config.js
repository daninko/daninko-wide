/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Dan Nanasi, Product Design`,
		author: `Dan Nanasi`,
		email: `dannanasi@gmail.com`,
		type: `website`,
		url: `https://dannanasi.ca`,
		locale: `en_CA`,
		description: `Dan Nanasi is a Product Designer who works with teams in planning and developing innovative digital products and experiences.`,
		position: 'Product Designer at Microsoft',
		homeHeadline: "A strategically-minded designer helping teams plan and build innovative digital products.",
		contactMethods: [
			{
				text: "linkedin/daninko",
				link: "https://linkedin.com/in/daninko"
			},
			{
				text: "hi@dannanasi.ca",
				link: "mailto:hi@dannanasi.ca"
			}
		],
		about: [
			{
				text: "Not just any Dan"
			},
			{
				text: "Musician"
			},
			{
				text: "Gamer"
			},
			{
				text: "Active(ish)"
			},
			{
				text: "Audiophile"
			},
			{
				text: "MK enthusiast"
			},
			{
				text: "Cat dad"
			},
			{
				text: "Deadpan"
			},
			{
				text: "Introvert"
			},
			{
				text: "Tea > coffee"
			},
			{
				text: "Mexican food ❤️"
			},			
		],
		experiences: [
			{
				title: "Strategist → Sr Product Designer",
				date: "2015-23",
				org: "Engine Digital",
			},
			{
				title: "Speaker, w/ Scott Strathern",
				date: "2020",
				org: "Touchpoint Interaction Design Conference",
			},
			{
				title: "Speaker, Designing for People",
				date: "2019",
				org: "Touchpoint Interaction Design Conference",
			},
			{
				title: "Creative Technology Intern",
				date: "Fall 2014",
				org: "AKQA",
			},
			{
				title: "Creative Intern",
				date: "Summer 2014",
				org: "Railyard Lab",
			},
			{
				title: "Guest Critic, Mentor",
				date: "Since 2014",
				org: "School of Interactive Art & Technology",
			},
			{
				title: "Interviewer, Designer",
				date: "Summer 2013",
				org: "Dutch Design Field School",
			},
		],
		expertise: [
			{
				item: "Product strategy & design",
			},
			{
				item: "Interface design",
			},
			{
				item: "Interaction design",
			},
			{
				item: "Rapid ideation & prototyping",
			},
			{
				item: "User research",
			},
			{
				item: "Usability testing",
			},
			{
				item: "Project leadership & mentorship",
			},
			{
				item: "Facilitation",
			},
			{
				item: "Cross-discipline collaboration",
			},
		],
		brands: [
			{
				item: "Adidas",
			},
			{
				item: "Air Jordan",
			},
			{
				item: "Autodesk",
			},
			{
				item: "BC Hydro",
			},
			{
				item: "City of Vancouver",
			},
			{
				item: "Criteo",
			},
			{
				item: "CVS Health",
			},
			{
				item: "DIRECTV",
			},
			{
				item: "Fiserv",
			},
			{
				item: "HP",
			},
			{
				item: "Loloi Rugs",
			},
			{
				item: "Ocean Wise",
			},
			{
				item: "NBA",
			},
			{
				item: "Prophet",
			},
			{
				item: "Roadtrip Nation",
			},
			{
				item: "TELUS",
			},
			{
				item: "TuGo",
			},
		],

	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-plugin-mdx",
			options: {},
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`webp`],
					placeholder: `dominantColor`,
					quality: 100,
					breakpoints: [750, 1080, 1366, 2400],
					backgroundColor: `transparent`,
					blurredOptions: {},
					jpgOptions: {},
					pngOptions: {},
					webpOptions: {},
					avifOptions: {},
				},
			},
		},
		`gatsby-transformer-sharp`, // Needed for dynamic images
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				mdxOptions: {},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 2500,
							linkImagesToOriginal: false,
							withWebp: true,
							loading: "eager",
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				mdxOptions: {},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 2500,
							linkImagesToOriginal: false,
							withWebp: true,
							loading: "eager",
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/content/`,
				name: `content`,
			},
			__key: "content",
		},
		{
			resolve: "gatsby-remark-normalize-paths",
			options: {
				pathFields: ["image"],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: "src/images/icon.png",
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					// without options
					"gatsby-remark-normalize-paths",
					// or
					// with options
					{
						resolve: "gatsby-remark-normalize-paths",
						options: {
							pathFields: ["media"],
						},
					},
					// {
					//     resolve: `gatsby-remark-images`,
					//     options: {
					//       maxWidth: 2500,
					//       linkImagesToOriginal: false,
					//       withWebp: true,
					//     },
					//   },
				],
			},
		},
	],
}
