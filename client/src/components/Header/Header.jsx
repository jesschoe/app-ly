import { Link } from 'react-router-dom'
import styled from 'styled-components'
import accountIcon from '../../assets/account-blue.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 90vw;
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
  font-weight: 300;

  @media (max-width: 425px) {
    display: none;
  }
`

const MobileNav = styled.div`
  display: none;
  align-self: center;

@media (max-width: 425px) {
  display: flex;
}
`

const LinkName = styled.div`
  margin: 5px;
  color: #0F3875;
  letter-spacing: .1em;

  &:hover {color: #E94D4D;
  }
`

const Icon = styled.img`
  width: 25px;
  margin-left: 10px;
  margin-right: -10px;
`


export default function Header({ user, handleLogout }) {
  return (
    <Container>
      <Logo>
        <Link 
          to='/jobs/all/board' 
          style={{ textDecoration: 'none', color: '#E94D4D', display: 'flex' }}
        >
          <div style={{ margin: '0 8px' }}>app</div><Slash></Slash><div>ly</div>
        </Link>
      </Logo>
      <div>
        <Title>{user?.username}'s jobs</Title>
      </div>
      <MobileNav>
        <Link to='/jobs' style={{ textDecoration:'none', color:'white' }}>
          <LinkName>jobs</LinkName>
        </Link>
        <Link to='/jobs/all/contacts' style={{ textDecoration:'none', color:'white' }}>
          <LinkName>contacts</LinkName>
        </Link>
        <div style={{cursor: 'pointer'}}onClick={handleLogout}>
          <Icon src={accountIcon} alt='account icon' />
        </div>
      </MobileNav>
    </Container>
  )
}
