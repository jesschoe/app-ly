import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"

export default function Layout({ children, user, handleLogout }) {
  return (
    <div>
      <Header user={user} handleLogout={handleLogout}/>
      <Navbar />
      {children}
    </div>
  )
}
