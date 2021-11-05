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

const Icons = styled.img`
  width: 30px;
`

export default function Navbar({ user, handleLogout }) {
  return (
    <Nav>
      <div>
        <Link to='/jobs/all/board' style={{ textDecoration:'none', color:'white' }}>
          <Icons src={boardIcon} alt='' />
          <LinkName>board</LinkName>
        </Link>
        <Link to='/jobs' style={{ textDecoration:'none', color:'white' }}>
          <Icons src={jobsIcon} alt='' />
          <LinkName>jobs</LinkName>
        </Link>
        <Link to='/jobs/all/contacts' style={{ textDecoration:'none', color:'white' }}>
          <Icons src={contactsIcon} alt='' />
          <LinkName>contacts</LinkName>
        </Link>
      </div>
      <div style={{cursor: 'pointer'}}onClick={handleLogout}>
        <Icons src={accountIcon} alt='' />
        <LinkName>signout</LinkName>
      </div>
    </Nav>
  )
}
