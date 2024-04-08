/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			spacing: {
				"u-05": "clamp(1rem, 0.8035892323030908rem + 0.7976071784646062vw, 2rem)",
				"u-1": "clamp(2.25rem, 1.9062811565304087rem + 1.3958125623130608vw, 4rem)",
				"u-2": "clamp(4.5rem, 3.8125623130608175rem + 2.7916251246261217vw, 8rem)",
				"u-3": "clamp(6.75rem, 5.718843469591226rem + 4.187437686939182vw, 12rem)",
				"u-4": "clamp(9rem, 7.625124626121635rem + 5.583250249252243vw, 16rem)",
				"u-5": "clamp(11.25rem, 9.531405782652044rem + 6.979062811565304vw, 20rem)",
				"u-6": "clamp(13.5rem, 11.437686939182452rem + 8.374875373878364vw, 24rem)",
				"u-7": "clamp(15.75rem, 13.343968095712862rem + 9.770687936191425vw, 28rem)",
				"u-8": "clamp(18rem, 15.25024925224327rem + 11.166500498504487vw, 32rem)",
				"u-9": "clamp(,,)",
				"u-10": "clamp(,,)",
				"u-11": "clamp(,,)",
				"u-12": "clamp(,,)",
				"p-bottom": "1em"
			},
			colors: {
				"dan-white": "#f9f9f9",
				"dan-silver": "#ededed",
				"dan-black": "#0d0d0d"
			},
			borderRadius: {
				"dan": "clamp(0.5rem, 0.4017946161515454rem + 0.3988035892323031vw, 1rem)",
			},
			height: {
				footer: "50vh"
			},
			maxWidth: {
				full: "2400px",
				logo: "2528px",
				steps: "2000px"
			},
			flex: {
				"xp-sm": "1 auto",
				"xp-lg": "1 100%",
			},
			fontSize: {
				"body-1": "clamp(0.875rem, 0.7788461538461539rem + 0.4807692307692308vw, 1.5rem)",
				"body-2": "clamp(1rem, 0.8076923076923077rem + 0.9615384615384616vw, 2rem)",
				"caption": "clamp(0.875rem, 0.8173076923076923rem + 0.2884615384615385vw, 1.25rem)",
				"headline-1": "clamp(1.25rem, 0.9073243647234679rem + 1.3951170901843546vw, 3rem)",
				"headline-2": "clamp(1.5rem, 0.9107676969092723rem + 2.3928215353938183vw, 4.5rem)",
				"headline-3": "clamp(2rem, 1.214356929212363rem + 3.1904287138584246vw, 6rem)",
				"display-1": "clamp(2.25rem, 1.1240657698056802rem + 4.58395615346288vw, 8rem)",
				"display-2": "clamp(3rem, 1.445721225710015rem + 6.327852516193324vw, 10.9375rem)",
			},
			lineHeight: {
				"0-95": "0.95",
				"1-1": "1.1",
				"1-15": "1.135"
			}
		},
	}, 
	plugins: [],
}