import React, { useState } from 'react'
import { PiDotsThreeBold } from "react-icons/pi";
import { BsPlus } from "react-icons/bs";

import styled from "styled-components"
import TodoCart from './TodoCart';
import AddCardModal from '../AddCardModal';
const Todo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [todoList, setTodoList] = useState([
    {
      projectName:"Project A",
      barColor:"#7bc86c"
    },
    {
      projectName:"Project B",
      barColor:"#e6c60d"
    },
    {
      projectName:"Project C",
      barColor:"#cd8de5"
    },
    {
      projectName:"Project M",
      barColor:"#ffaf3f"
    },
    {
      projectName:"Project K",
      barColor:"#29cce5"
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
        <h5>To Do</h5> 
        <PiDotsThreeBold size={20} />
      </div>
      <div>
        {todoList?.map((el,i)=>(

        <TodoCart key={i} projectName={el.projectName} barColor={el.barColor} />
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

export default Todo

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
      /* background-color: red; */
    }
    
`