import { Link } from 'react-router-dom'
import styled from 'styled-components'
import accountIcon from '../../assets/account-blue.svg'

const Container = styled.div`
  align-content: start;
  display: flex;
  justify-content: space-between;
  width: 90vw;
`
const Logo = styled.div`
  color: #E94D4D;
  font-family: 'Ephesis', cursive;
  font-size: 3.5em;
  letter-spacing: 0;
  margin-top: -10px;
  text-transform: none;
`
const Slash = styled.div`
  border-left: 1px solid #E94D4D;
  height: 50px;
  margin: 10px 0 0 5px;
  transform: skew(-35deg);
`
const Title = styled.h4`
  color: #0F3875;
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: 425px) {
    display: none;
  }
`
const MobileNav = styled.div`
  align-self: center;
  display: none;

@media (max-width: 425px) {
  display: flex;
}
`
const LinkName = styled.div`
  color: #0F3875;
  margin: 5px;
  letter-spacing: .1em;

  &:hover {color: #E94D4D;
  }
`
const Icon = styled.img`
  margin-left: 10px;
  margin-right: -10px;
  width: 25px;
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
        <Title>Welcome, {user?.username}!</Title>
      </div>
      <MobileNav>
        <Link 
          to='/jobs' 
          style={{ textDecoration:'none', color:'white' }}
        >
          <LinkName>jobs</LinkName>
        </Link>
        <Link 
          to='/jobs/all/contacts' 
          style={{ textDecoration:'none', color:'white' }}
        >
          <LinkName>contacts</LinkName>
        </Link>
        <div style={{cursor: 'pointer'}}onClick={handleLogout}>
          <Icon src={accountIcon} alt='account icon' />
        </div>
      </MobileNav>
    </Container>
  )
}
