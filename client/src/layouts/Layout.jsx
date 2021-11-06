import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
  font-family: 'Raleway';
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Nav = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0F3875;
  color: white;
  height: 100vh;

  @media (max-width: 375px) {
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
  // justify-content: center;
  // align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: 1.2em;
  letter-spacing: 1.5px;
`

export default function Layout({ children, user, handleLogout }) {
  return (
    <Container>
        <Nav>
          <Navbar user={user} handleLogout={handleLogout}/>
        </Nav>
        <Main>
          <HeaderLinks>
            <Header user={user}/>
          </HeaderLinks>
          <Content>
            {children}
          </Content>
        </Main>
    </Container>
  )
}
