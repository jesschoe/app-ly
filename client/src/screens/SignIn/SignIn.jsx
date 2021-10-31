import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`
export default function SignIn({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <SignInForm onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <label>
          Username:
            <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
            <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
        <Link to="/signup">Create an account</Link>
      </SignInForm>
    </>
  )
}
