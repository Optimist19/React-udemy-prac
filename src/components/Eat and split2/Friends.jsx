// import React from 'react'
import "./index.css";
import { useState } from "react";
import Friend from "./Friend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0
  }
];
function Friends() {
  const [friends, setFriends] = useState(initialFriends);

  const [openModal, setOpenModal] = useState(false);

  const [bill, setBill] = useState({
    billValue: "",
    yourExpense: ""
  });
  const [selectOption, setselectOption] = useState("");

  const [name, setName] = useState("");

  const [outPut, setOutput] = useState("")

  function toggleModal(person) {
    setOpenModal((prev) => {
      return (prev = !prev);
    });
    setName(person);
  }

  function selectOptionFtn(e) {
    setselectOption(e.target.value);
  }

  console.log(selectOption);
  //   console.log(friends)
  console.log(openModal);

  function inputExpense(e) {
    setBill({ ...bill, [e.target.name]: e.target.value });
  }
  console.log(bill);

  function splitBill(balance){
	if(selectOption === name){
		setOutput(`You are owing ${name} $${balance}`)
	}else{
		setOutput(`${name} is owing you $${balance}`)
	}
  }

  return (
    <div className="main-con">
      {/* <h1>Hello</h1> */}
      <div>
        {friends.map((a) => {
          return (
            <Friend
              name={a.name}
              img={a.image}
              id={a.id}
              key={a.id}
              toggleModal={toggleModal}
			  outPut={outPut}
            />
          );
        })}
      </div>
      {openModal && (
        <div className="modal">
          <p>Split a bill with {name}</p>
          <div>
            <div>
              <p>Bill value</p>
              <input
                type="number"
                onChange={inputExpense}
                name="billValue"
                value={bill.billValue}
              />
            </div>
            <div>
              <p>Your expense</p>
              <input
                type="number"
                onChange={inputExpense}
                name="yourExpense"
                value={bill.yourExpense}
              />
            </div>
            <div className="name-expense">
              <p>{name}&apos;s expense: </p>
              <div>{bill.billValue - bill.yourExpense}</div>
            </div>
            <div>
              <p>Who is paying the bill</p>
              <select onClick={selectOptionFtn}>
                <option value="you">You</option>
                <option value={name}>{name}</option>
              </select>
            </div>
            <div>
              <button onClick={()=>splitBill(bill.billValue - bill.yourExpense)}>Split bill</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Friends;
