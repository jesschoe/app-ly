import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import styled from 'styled-components'

export default function Layout({ children, user, handleLogout }) {
  return (
    <Container>
        <Nav>
          <Navbar user={user} handleLogout={handleLogout} />
        </Nav>
        <Main>
          <HeaderLinks>
            <Header user={user} handleLogout={handleLogout} />
          </HeaderLinks>
          <Content>
            {children}
          </Content>
        </Main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  width: 100vw;
`
const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const Nav = styled.div`
  background-color: #0F3875;
  color: white;
  display: flex;
  height: 100vh;
  justify-content: center;

  @media (max-width: 425px) {
    display: none;
  }
`
const HeaderLinks = styled.div`
  border-bottom: 1px solid #E94D4D; 
  height: 45px;
  letter-spacing: .5em;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  height: 100vh;
  letter-spacing: 1.5px;
  overflow: hidden;
  width: 100vw;
`

