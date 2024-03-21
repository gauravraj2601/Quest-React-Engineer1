import React from 'react'
import styled from 'styled-components'

const Done = () => {
  return (
    <DIV>
        Done
        <div style={{width:"100%", height:"300px", backgroundColor:'red'}}></div>
    </DIV>
  )
}

export default Done

const DIV= styled.div`
     width: 24%;
    height: 600px;
    background-color: gray;
`