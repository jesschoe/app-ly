import { Link } from 'react-router-dom'
import styled from "styled-components"
import jobsIcon from '../../assets/jobs-icon.png'
import contactsIcon from '../../assets/contacts-icon.png'
import accountIcon from '../../assets/account-icon.png'

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  text-transform: uppercase;
  font-size: .6em;
`

const LinkName = styled.div`
  margin: 5px 5px 40px 5px;
`

export default function Navbar({ user, handleLogout }) {
  return (
    <Nav>
      <div>
        <Link to='/jobs' style={{ textDecoration:'none', color:'white' }}>
          <img src={jobsIcon} alt='' />
          <LinkName>jobs</LinkName>
        </Link>
        <Link to='/jobs/all/contacts' style={{ textDecoration:'none', color:'white' }}>
          <img src={contactsIcon} alt='' />
          <LinkName>contacts</LinkName>
        </Link>
      </div>
      <div style={{cursor: 'pointer'}}onClick={handleLogout}>
        <img src={accountIcon} alt='' />
        <LinkName>signout</LinkName>
      </div>
    </Nav>
  )
}
