import * as React from 'react'

import styled from 'styled-components'

interface NumberAlertProps {
    number: number
}


const Number = styled.div`
position: absolute;
left: 32px;
top: 10px;
display: flex;
align-items: center;
justify-content: center;
width: fit-content;
height: fit-content;
border-radius: 50%;
background-color: springgreen;
border: 1px groove white;
>p {padding-left: 5px;
    padding-right: 5px;
    color:white;
    font-family:Zilla;
    font-size: 0.9rem;
    font-weight: 700;
}

`



const NumberAlert: React.FC<NumberAlertProps> = (props) => {
   
  return (
    <Number><p>{props.number}</p></Number>
  )
}

export default NumberAlert