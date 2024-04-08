import React from "react";

export const onRenderBody = ({pathname, setHtmlAttributes, setBodyAttributes}) => {

	setHtmlAttributes({ 
		lang: "en" 
	});

	if (pathname === "/") {
		// setBodyAttributes({
		// 	className: "dark-background"
		// })
	}

	
};