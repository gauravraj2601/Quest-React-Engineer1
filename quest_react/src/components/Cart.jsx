import React from "react";
import styled from "styled-components";
import { TfiAlignLeft } from "react-icons/tfi";
import { FaRegMessage } from "react-icons/fa6";

const Cart = ({ index, projectName, barColor, messageCount }) => {
    // console.log("index", index)
  return (
    <CART key={index} barColor={barColor}>
      <div id="bar"></div>
      <p>{projectName}</p>
      <div id="icons">
        <TfiAlignLeft id="tfi" />
        {messageCount && (
        <div id="message-div">
          <FaRegMessage style={{ height: "12px", width: "15px" }} />
            <span>{messageCount}</span>
        </div>
        )}
      </div>
    </CART>
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
