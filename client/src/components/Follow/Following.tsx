import React from 'react'


import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`
const Ul = styled.ul`
  list-style-type: none;
`
const Li = styled.li`
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgba(211,211,211,0.4);
  border-bottom: 1px solid lightgrey;
  border-radius: 3px;
  &:hover {
    background-color: rgb(211,211,211)
  } 
`

const Following:React.FC = () => {
  return (
    <Container>
    <Ul>
      {/* later function to get following people */}
      <Li>Following</Li>
      <Li>Following</Li>
      <Li>Following</Li>
      <Li>Following</Li>
      <Li>Following</Li>
      <Li>Following</Li>
      <Li>Following</Li>
      <Li>Following</Li>
      
    </Ul>
  </Container>
  )
}

export default Following