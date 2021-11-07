import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Wireframe from '../../assets/wireframes.png'

const Container = styled.div`
  align-items: center;
  background-color: #FFF4EE;
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: .7em;
  justify-content: center;
  letter-spacing: 1.5px;
  height: 100vh;
  width: 100vw;

  @media (max-width: 940px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
` 
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const SignUpForm = styled.form`
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #B7B7B7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px 0 10px 0;
  width: 400px;

  @media (max-width: 425px) {
    width: 275px;
  }
`
  const InputGroup = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`
const SignUpInput = styled.input`
  padding: 10px;
  width: 200px;
`
const Button = styled.button`
  align-self: center;
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  margin: 20px;
  padding: 7px 20px;
  text-transform: uppercase;
`
const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 50px 0 50px;
  width: 350px;

  @media (max-width: 425px) {
    width: 275px;
  }
`
const Title = styled.h4`
  align-self: start;
  color: #0F3875;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: .1em;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 24px;
  }
`
const Title2 = styled.h4`
  align-self: start;
  color: #0F3875;
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 0;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 24px;
  }
`
const SmallTitle = styled.div`
  align-self: start;
  color: #0F3875;
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: .2em;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 16px;
    letter-spacing: 0;
  }
`
const FormTitle = styled.div`
  color: #E94D4D;
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: .2em;
  margin: 0 0 10px 0;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 16px;
    letter-spacing: 0;
  }
`
const Logo = styled.div`
  align-self: end;
  color: #E94D4D;
  display: flex;
  font-family: 'Ephesis', cursive;
  font-size: 84px;
  letter-spacing: 0;
  margin: -30px 0 30px 0;
  text-transform: none;
`
const Slash = styled.div`
  border-left: 1px solid #E94D4D;
  height: 80px;
  margin: 10px 0 0 20px;
  transform: skew(-35deg);
`

const ErrorMsg = styled.h4`
  color: #E94D4D;
  font-style: italic;
`

const Image = styled.img`


  @media (max-width: 940px) {
    display: none;
  }
`

export default function SignUp({ handleRegister, renderError }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    errorMsg: ''
  })
  const { username, email, password, confirm_password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Container>
      <LogoDiv>
        <Title2>keep track of your</Title2>
        <Title>job applications</Title>
        <SmallTitle>from start to offer with</SmallTitle>
        <Logo>
          <div>app</div><Slash></Slash><div>ly</div>
        </Logo>
        <Image src={Wireframe} alt="wireframes of app/ly" />
      </LogoDiv>
      <FormContainer>
        <SignUpForm onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }} >
          <FormTitle>
            Create your app/ly account
          </FormTitle>
          <InputGroup>
            <label>Username</label>
            <SignUpInput
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <SignUpInput
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <SignUpInput
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirm_password">Confirm Password</label>
            <SignUpInput
              id="confirm_password"
              name="confirm_password"
              type="password"
              value={confirm_password}
              onChange={handleChange}
            />
          </InputGroup>
          <ErrorMsg>{renderError()}</ErrorMsg>
          <Button>Submit</Button>
        </SignUpForm>
        Already have an account? 
        <Link style={{textDecoration:'none', color:'#E94D4D'}} to="/">Sign In</Link>
      </FormContainer>
    </Container>
  )
}
