import { Link } from 'react-router-dom'
import styled from "styled-components"
import jobsIcon from '../../assets/jobs-icon.svg'
import contactsIcon from '../../assets/contacts-icon.svg'
import accountIcon from '../../assets/account-icon.svg'
import boardIcon from '../../assets/board-icon.svg'

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  text-transform: uppercase;
  font-size: .6em;
  letter-spacing: .1em;
`

const LinkName = styled.div`
  margin: 5px 4px 30px 4px;
`

export default function Navbar({ user, handleLogout }) {
  return (
    <Nav>
      <div>
        <Link to='/jobs/all/board' style={{ textDecoration:'none', color:'white' }}>
          <img style={{width:'30px'}} src={boardIcon} alt='' />
          <LinkName>board</LinkName>
        </Link>
        <Link to='/jobs' style={{ textDecoration:'none', color:'white' }}>
          <img style={{width:'30px'}} src={jobsIcon} alt='' />
          <LinkName>jobs</LinkName>
        </Link>
        <Link to='/jobs/all/contacts' style={{ textDecoration:'none', color:'white' }}>
          <img style={{width:'30px'}} src={contactsIcon} alt='' />
          <LinkName>contacts</LinkName>
        </Link>
      </div>
      <div style={{cursor: 'pointer'}}onClick={handleLogout}>
        <img style={{width:'30px'}} src={accountIcon} alt='' />
        <LinkName>signout</LinkName>
      </div>
    </Nav>
  )
}
