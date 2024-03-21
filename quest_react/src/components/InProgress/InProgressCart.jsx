import React from 'react'
import styled from 'styled-components'
import { TfiAlignLeft } from "react-icons/tfi";

const InProgressCart = ({ key,projectName, barColor}) => {
  return (
    <CART key={key}  barColor={barColor}>
        <div id='bar'></div>
        <p>
            {projectName}
        </p>
        <TfiAlignLeft id='tfi' />

    </CART>
  )
}

export default InProgressCart

const CART= styled.div`
    width: 90%;
    height: 60px;
    margin: auto;
    margin-top: 8px;
    /* margin-left:-6%; */
    display: flex;
    flex-direction: column;
    background-color: #ffff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10px;
    padding: 10px;
    #bar{
        width: 15%;
        height: 8px;
        background-color: ${props=> props.barColor || "green"};
        margin-bottom: -10px;
        border-radius: 5px;
    }

    p{
        font-size: 14px;
        font-weight:500;
        margin-bottom: 10px;
    }


`