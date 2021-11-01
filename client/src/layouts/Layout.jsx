import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Nav = styled.div`
  display: flex;
  width: 10%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`

export default function Layout({ children, user, handleLogout }) {
  return (
    <Container>
      <Nav>
        <Navbar />
      </Nav>
      <Content>
        <Header user={user} handleLogout={handleLogout}/>
        {children}
      </Content>
      
      
    </Container>
  )
}
