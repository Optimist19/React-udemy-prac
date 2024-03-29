// import React from 'react'

import { useEffect, useRef } from "react"

// import { useState } from "react";
function Search({query, setQuery}) {

	const inputEl = useRef(null)

	useEffect(()=>{
		function callBack(e){
			if(e.code === "Enter"){
				inputEl.current.focus()
				setQuery("")
			}
		}

		document.addEventListener("keydown", callBack)

		return ()=>document.addEventListener("keydown", callBack)

	},[setQuery])

  return (
	<input
	className="search"
	type="text"
	placeholder="Search movies..."
	value={query}
	onChange={(e) => setQuery(e.target.value)}
  />
  )
}

export default Search