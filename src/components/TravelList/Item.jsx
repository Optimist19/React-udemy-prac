// import React from 'react'

function Item({item, handleDelete, change}) {
	// console.log(item)
	console.log(item.quantity)



  return (
	<div>
		<li>
			<input type="checkbox" value={item.packed} onChange={()=> change(item.id)} />
			<span style={item.packed ? {textDecoration : "line-through"} : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={()=>handleDelete(item.id)}>❌</button>
		</li>
	</div>
  )
}

export default Item