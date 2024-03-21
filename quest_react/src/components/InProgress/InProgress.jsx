
import React, { useState } from 'react'
import { PiDotsThreeBold } from "react-icons/pi";
import { BsPlus } from "react-icons/bs";

import styled from "styled-components"
import InProgressCart from './InProgressCart';
import AddCardModal from '../AddCardModal';
const InProgress = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      projectName:"Project G",
      barColor:"#ff8ed4"
    },
    {
      projectName:"Project P",
      barColor:"#f18677"
    },
    {
      projectName:"Project F",
      barColor:"#6deca9"
    },
    {
      projectName:"Project Z",
      barColor:"#c0c6d0"
    },
  ])
  const addProject=(projectName)=>{
    const randomIndex = Math.floor(Math.random() * todoList.length);
    const randomColor = todoList[randomIndex].barColor;

      setTodoList([...todoList, {projectName,barColor:randomColor} ])
  }
  return (
    <DIV>
      <div id='todo-text'>
        <h5>In Progress</h5> 
        <PiDotsThreeBold size={20} />
      </div>
      <div>
        {todoList?.map((el,i)=>(

        <InProgressCart key={i} projectName={el.projectName} barColor={el.barColor} />
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
    width: 22%;
    height: 100%;
    min-height: 100px; 
    border-radius: 10px;
    background-color: #f1f2f4;
    #todo-text{
      width: 90%;
      margin: 10px 13px 10px 15px;;
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