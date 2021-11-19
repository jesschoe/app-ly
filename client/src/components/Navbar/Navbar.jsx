import { Link } from 'react-router-dom'
import styled from "styled-components"
import jobsIcon from '../../assets/jobs-icon.svg'
import contactsIcon from '../../assets/contacts-icon.svg'
import accountIcon from '../../assets/account-icon.svg'
import boardIcon from '../../assets/board-icon.svg'

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


const Nav = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  font-size: .6em;
  justify-content: space-around;
  letter-spacing: .1em;
  text-transform: uppercase;
`
const LinkName = styled.div`
  margin: 5px 4px 30px 4px;
`