import { useState } from "react"
import Form from "./Form"
import Logo from "./Logo"
import PackingList from "./PackingList"
import Stats from "./Stats"
useState


function TravelList() {

  const [items, setItems] = useState([])



  function change(id){
		// e.preventDefault()
    
    setItems(i =>{
     return i.map(item => item.id === id ? {...item, packed: !item.packed} : item)
    })
 
	}

  function handleAddItems(item){  // What we achieve here is getting data from children to the parent state passing this function as props. To PackingList.jsx to Item.jsx
    // setItems([...items, item])
    setItems(items => [...items, item])
	}

  function handleDelete(id){  // What we achieve here is getting data from children to the parent state passing this function as props. To PackingList.jsx to Item.jsx
    const del = items.filter(a => a.id !== id)
    setItems(del)
    // setItems(items => items.filter(a => a.id !== id))
    
  }

  return (
	<div>
    <Logo />
    <Form handleAddItems={handleAddItems}/>
    <PackingList  items={items} handleDelete={handleDelete} change={change}/>
    <Stats items={items}/>
  </div>
  )
}

export default TravelList