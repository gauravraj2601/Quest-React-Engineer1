import React, { useState } from 'react'
import { PiDotsThreeBold } from "react-icons/pi";
import { BsPlus } from "react-icons/bs";
import styled from "styled-components"
import AddCardModal from '../AddCardModal';
import Cart from '../Cart';
const Done = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [doneList, setDoneList] = useState([
    {
      projectName:"Project D",
      barColor:"#29cce5",
      messageCount:"9"
    },
    {
      projectName:"Project N",
      barColor:"#cd8de5",
      messageCount:"4"
    },
    {
      projectName:"Project X",
      barColor:"#e6c60d",
      messageCount:"24"
    },
    {
      projectName:"Project R",
      barColor:"#c0c6d0",
      messageCount:"2"
    }
  ])
  const addProject=(projectName, messageCount)=>{
    const randomIndex = Math.floor(Math.random() * doneList.length);
    const randomColor = doneList[randomIndex].barColor;

      setDoneList([...doneList, {projectName,barColor:randomColor, messageCount} ])
  }
  return (
    <DIV>
      <div id='done-text'>
        <h5>Done</h5> 
        <PiDotsThreeBold size={20} />
      </div>
      <div>
        {doneList?.map((el,i)=>(

        <Cart index={`${i+1}done`} projectName={el.projectName} barColor={el.barColor} messageCount={el.messageCount} />
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

export default Done

const DIV= styled.div`
    width: 24.5%;
    height: 100%;
    min-height: 100px; 
    border-radius: 10px;
    background-color: #f1f2f4;
    #done-text{
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
      /* background-color: red; */
    }
    
`