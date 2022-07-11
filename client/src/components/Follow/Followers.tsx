
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


const Followers:React.FC = () => {


  return (
    <Container>
      <Ul>
        {/* later function to get the followers */}
        <Li>Follower</Li>
        <Li>Follower</Li>
        <Li>Follower</Li>
        <Li>Follower</Li>
        <Li>Follower</Li>
        <Li>Follower</Li>
        <Li>Follower</Li>
        <Li>Follower</Li>
        
      </Ul>
    </Container>
  )
}

export default Followers