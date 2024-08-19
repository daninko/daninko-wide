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
		home: {
			status: `Currently #opentowork`,
			top: `Product Design. UX Strategy.`,
			bottom: `Inquiring. Learning. Iterating. Challenging. Building for people. Making it fun. Inclusive. Purposeful. Impactful.`,
		},
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
		hallmarks: [
			{
				client: "Adidas",
				desc: "Designed a research app to help Adidas' experts better understand the behaviours and patterns of college athletes.",
			},
			{
				client: "Air Jordan",
				desc: "For the Jordan brand's 23rd anniversary, created a prototype dribbling and footwork experience based around the close connection between hip hop and sport.",
			},
			{
				client: "Autodesk",
				desc: "Helped Autodesk understand its customer's behavior and propose what the future of ecommerce could be as part of a new transaction model.",
			},
			{
				client: "CVS Health",
				desc: "Enabled patients to recover quicker with a digital post-acute care recovery solution connecting them with healthcare resources and professionals.",
			},
			{
				client: "NBA Cares",
				desc: "Brought to life the NBA's rich history of social activism through a new online platform.",
				link: "https://cares.nba.com"
			},
			{
				client: "DIRECTV",
				desc: "Created a new shared enter1nment viewing experience putting the ephemerality of live content at the forefront.",
			},
			{
				client: "Ocean Wise",
				desc: "Developed a mobile-first content creation platform with Ocean Wise to help them to connect with the next generation of ocean conservationists.",
				link: "https://ocean.org"
			},
			{
				client: "Roadtrip Nation",
				desc: "Helped career seekers better understand the value proposition of RTN and its career finding tools through a new marketing site.",
				link: "https://roadtripnation.com"
			},
			{
				client: "BC Hydro",
				desc: "Designed and provided ongoing optimization to interactive learning tools for teachers educating their students about energy conservation.",
				link: "https://schools.bchydro.com"
			},
			{
				client: "Fiserv",
				desc: "Redesigned the core card management product for the largest Fintech company you've probably never heard of.",
			},
			{
				client: "Coast Capital Savings",
				desc: "Prototyped a financial planning app to help customers understand their financial status and products available to them.",
			},
			{
				client: "Loloi Rugs",
				desc: "Optimized a unique B2B ecommerce experience to help interior designers find and order expertly crafted rugs.",
				link: "https://loloirugs.com"
			},
		],
		about: {
			top: `Not just any Dan. Bassist. Guitarist. Gamer. Audiophile. Keyboard & SFF nerd. Cat dad. Dry witted. Off-beat. Deadpan. Introvert. Tea drinker. Swimmer. Mexican and Korean cuisine advocate. Hot sauce on everything.`,
			bottom: ``,
		},
		password: `roadtrip-rootbeer`,
		social: [
			{
				platform: "Linkedin",
				url: "https://www.linkedin.com/in/daninko/",
			},
			{
				platform: "Read.cv",
				url: "https://read.cv/dan.nanasi/",
			},
		],
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		'gatsby-plugin-postcss',
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
