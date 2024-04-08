import React, {useState, useRef, useEffect} from "react";

const useDetectSticky = (ref, observerSettings = {threshold: [1], rootMargin: '-1px 0px 5000px 0px'}) => {
	const [isSticky, setIsSticky] = useState(false)
	const newRef = useRef()
	ref ||= newRef;
	
	 // mount 
	useEffect(()=>{
	  const cachedRef = ref.current,
			observer = new IntersectionObserver(
			  ([e]) => setIsSticky(e.intersectionRatio < 1),
			  observerSettings
			)
  
	  observer.observe(cachedRef)
	  
	  // unmount
	  return () => {
		observer.unobserve(cachedRef)
	  }
	}, [])
	
	return [isSticky, ref, setIsSticky];
  }

  export default useDetectSticky