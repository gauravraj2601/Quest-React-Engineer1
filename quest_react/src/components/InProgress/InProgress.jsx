
import React, { useState } from 'react'
import { PiDotsThreeBold } from "react-icons/pi";
import { BsPlus } from "react-icons/bs";

import styled from "styled-components"
import AddCardModal from '../AddCardModal';
import Cart from '../Cart';
const InProgress = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inprogress, Setinprogress] = useState([
    {
      projectName:"Project G",
      barColor:"#ff8ed4",
      messageCount:"2"
    },
    {
      projectName:"Project P",
      barColor:"#f18677",
      messageCount:""
    },
    {
      projectName:"Project F",
      barColor:"#6deca9",
      messageCount:""
    },
    {
      projectName:"Project Z",
      barColor:"#c0c6d0",
      messageCount:""
    },
  ])
  const addProject=(projectName, messageCount)=>{
    const randomIndex = Math.floor(Math.random() * inprogress.length);
    const randomColor = inprogress[randomIndex].barColor;

    Setinprogress([...inprogress, {projectName,barColor:randomColor, messageCount} ])
  }
  return (
    <DIV>
      <div id='todo-text'>
        <h5>In Progress</h5> 
        <PiDotsThreeBold size={20} />
      </div>
      <div>
        {inprogress?.map((el,i)=>(

        <Cart index={`${i+1}progress`} projectName={el.projectName} barColor={el.barColor} messageCount={el.messageCount} />
        ))}
      </div>
      <div id='add-cart-div'>
      <BsPlus onClick={()=>setIsOpen(true)} size={18} />
      <p onClick={()=>setIsOpen(true)}>Add a card</p>
      </div>
      <AddCardModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} addProject={addProject} />
    </DIV>
  )
}

export default InProgress

const DIV= styled.div`
    width: 24.5%;
    height: 100%;
    min-height: 100px; 
    border-radius: 10px;
    background-color: #f1f2f4;
    #todo-text{
      width: 87%;
      margin: 15px 13px 13px 22px;
      height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 13px;
    }
    #add-cart-div{
      width: 90%;
      height: 20px;
      padding: 12px 12px;
      display: flex;
      gap: 6px;
      align-items: center;
      font-size: 13px;
      font-weight:500;
      color: #7e8798;
    }
    
`