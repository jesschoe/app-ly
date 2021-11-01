import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
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

export default function ({ user }) {
  return (
    <Container>
      <Logo>
        <Link 
          to='/' 
          style={{ textDecoration: 'none', color: '#E94D4D', display: 'flex' }}
        >
          <div style={{ margin: '0 8px' }}>app</div><Slash></Slash><div>ly</div>
        </Link>
      </Logo>
      <div>
        {user?.username}'s jobs
      </div>
    </Container>
  )
}
