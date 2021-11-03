import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 90%;
`
const Logo = styled.div`
  font-family: 'Ephesis', cursive;
  font-size: 3.5em;
  color: #E94D4D;
  margin-top: -10px;
  text-transform: none;
  letter-spacing: 0;
`
const Slash = styled.div`
  border-left: 1px solid #E94D4D;
  height: 50px;
  transform: skew(-35deg);
  margin: 10px 0 0 5px;
`
const Title = styled.h4`
  text-transform: uppercase;
  color: #0F3875;
`
export default function Header({ user }) {
  return (
    <Container>
      <Logo>
        <Link 
          to='/jobs' 
          style={{ textDecoration: 'none', color: '#E94D4D', display: 'flex' }}
        >
          <div style={{ margin: '0 8px' }}>app</div><Slash></Slash><div>ly</div>
        </Link>
      </Logo>
      <div>
        <Title>{user?.username}'s jobs</Title>
      </div>
    </Container>
  )
}
