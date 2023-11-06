import { useState } from "react";
import "./index.css"
import Friends from "./Friends";
// import { useEffect } from "react";
// import axios from "axios";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function EatAndSlpit() {

  const [friends, setFriends] = useState(initialFriends)

  const [payer, setPayer] = useState("")

  const [spillBill, setspillBill] = useState({
		bill: "",
		expense: ""
	})

  const [output, setOutput] = useState('')

  function billExpense(e){
		setspillBill({...spillBill, [e.target.name]:e.target.value})
	}


  function selectPayer(e){
		setPayer(e.target.value)
	}
  
  console.log(payer)

  
  
  function payment(name){
		if(payer === name){
			setOutput(`You are owing ${name} ${spillBill.bill - spillBill.expense}`)
			
		}else{
			setOutput(`${name}  is owing you ${spillBill.bill - spillBill.expense}`)
		}
	}

  

  return (


    <div>
      <h1>Eat and Split(<strong>It has bug</strong>)</h1>
      <div>        {
          friends.map(friend =>{
            return (
              <div key={friend.id}>
                <Friends friend={friend} selectPayer={selectPayer} payment={payment} spillBill={spillBill}
billExpense={billExpense} output={output}/>
              </div>
            )
          })
        }
      </div>

      <div>
        <label>Friend name
          <input type="text" />
        </label>
        <label>Image URL
          <input type="text" />
        </label>
      </div>
    </div>
  );
}

export default EatAndSlpit;
