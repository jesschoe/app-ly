import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>app/ly</Link>
      <div>username's jobs</div>
    </HeaderContainer>
  )
}
