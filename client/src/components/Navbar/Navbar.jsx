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
  font-size: .7em;
`

export default function Navbar({ user, handleLogout }) {
  return (
    <Nav>
      <div>
        <Link to='/jobs' style={{ textDecoration:'none', color:'white' }}>
          <img src={jobsIcon} alt='' />
          <div>jobs</div>
        </Link>
        <Link to='/contacts' style={{ textDecoration:'none', color:'white' }}>
          <img src={contactsIcon} alt='' />
          <div>contacts</div>
        </Link>
      </div>
      <div onClick={handleLogout}>
        <img src={accountIcon} alt='' />
        <div>signout</div>
      </div>
    </Nav>
  )
}
