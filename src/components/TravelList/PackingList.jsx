import Item from "./Item"

// import React from 'react'
function PackingList(props) {
	console.log(props)
  return (
	<div  className="list">
		<ul>
			{props.items.map(item => <Item item={item} handleDelete={props.handleDelete} change={props.change}/>)}
		</ul>
	</div>
  )
}

export default PackingList