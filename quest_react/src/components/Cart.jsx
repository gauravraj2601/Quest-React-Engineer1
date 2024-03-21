import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { TfiAlignLeft } from "react-icons/tfi";
import { FaRegMessage } from "react-icons/fa6";

const Cart = ({ index, data }) => {
  return (
    <Draggable draggableId={data?.id} index={index}>
      {(provided) => (
        <CART
          barColor={data.barColor}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef} // Assign ref to the outermost element
        >
          <div id="bar"></div>
          <p>{data.projectName}</p>
          <div id="icons">
            <TfiAlignLeft id="tfi" />
            {data.messageCount && (
              <div id="message-div">
                <FaRegMessage style={{ height: "12px", width: "15px" }} />
                <span>{data.messageCount}</span>
              </div>
            )}
          </div>
        </CART>
      )}
    </Draggable>
  );
};

export default Cart;


const CART = styled.div`
  width: 87%;
  height: 60px;
  margin: auto;
  margin-top: 8px;
  /* margin-left:-6%; */
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  padding: 10px;
  &:hover{
    box-shadow: 0 0 5px black;
    transform: scale(1.03);
  }
  #bar {
    width: 15%;
    height: 8px;
    background-color: ${(props) => props.barColor || "green"};
    margin-bottom: -10px;
    border-radius: 5px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  #icons {
    width:57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #message-div{
    display: flex;
    gap: 3px;
    align-items: center;
    color: #6b6969;
    font-weight: 500;
  }
  #message-div span{
    font-size: 10px;
  }
`;
