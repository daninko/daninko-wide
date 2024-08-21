import React from "react"
import { AnimatePresence } from "framer-motion"
import "./src/styles/global.css"

export const wrapPageElement = ({ element }) => (
	<AnimatePresence mode="wait">{element}</AnimatePresence>
)

export const shouldUpdateScroll = () => {
	return false
  }
