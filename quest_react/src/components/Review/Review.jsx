
  import React, { useState } from 'react'
  import { PiDotsThreeBold } from "react-icons/pi";
  import { BsPlus } from "react-icons/bs";
  
  import styled from "styled-components"
  import AddCardModal from '../AddCardModal';
import Cart from '../Cart';
  const Review = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [reviewList, setReviewList] = useState([
      {
        id:"1",
        projectName:"Project W",
        barColor:"#5ba4cf",
        messageCount:"14"
      },
      {
        id:"2",
        projectName:"Project T",
        barColor:"#c0c6d0",
        messageCount:"10"
      },
      {
        id:"3",
        projectName:"Project U",
        barColor:"#7bc86c",
        messageCount:"6"
      },
      {
        id:"4",
        projectName:"Project Q",
        barColor:"#cd8de5",
        messageCount:""
      },
      {
        id:"5",
        projectName:"Project V",
        barColor:"#e6c60d",
        messageCount:"2"
      },
    ])
    const addProject=(projectName, messageCount)=>{
      const randomIndex = Math.floor(Math.random() * reviewList.length);
      const randomColor = reviewList[randomIndex].barColor;
  
      setReviewList([...reviewList, {projectName,barColor:randomColor, messageCount} ])
    }
    return (
      <DIV>
        <div id='todo-text'>
          <h5>Review</h5> 
          <PiDotsThreeBold size={20} />
        </div>
        <div>
          {reviewList?.map((el,i)=>(
  
          <Cart key={el.id} index={i} id={el.id} projectName={el.projectName} barColor={el.barColor} messageCount={el.messageCount} />
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
  
  export default Review
  
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
        /* background-color: red; */
      }
      
  `