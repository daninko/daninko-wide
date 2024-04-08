import {useState, useEffect} from "react";

export default function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);
  
	useEffect(() => {
	  const media = window.matchMedia(query);
	  if (media.matches !== matches) {
		setMatches(media.matches);
	  }
  
	  const listener = () => {
		setMatches(media.matches);
	  };
  
	  if (typeof media.addEventListener === "function") {
		media.addEventListener("change", listener);
	  } else {
		media.addListener(listener);
	  }
  
	  return () => {
		if (typeof media.removeEventListener === "function") {
		  media.removeEventListener("change", listener);
		} else {
		  media.removeListener(listener);
		}
	  };
	}, [matches, query]);
  
	return matches;
  }

export const useIsSmall = () => useMediaQuery('(min-width: 720px)');
export const useIsLessSmall = () => useMediaQuery('(min-width: 1024px)');
export const useIsMedium = () => useMediaQuery('(min-width: 1280px)');
export const useIsLarge = () => useMediaQuery('(min-width: 1920px)');
export const useIsExtra = () => useMediaQuery('(min-width: 2200px)');