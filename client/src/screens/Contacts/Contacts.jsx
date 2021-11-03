import { useState } from 'react'
import styled from 'styled-components'
import ContactCard from '../../components/ContactCard/ContactCard'
import ContactEdit from '../../components/ContactEdit/ContactEdit'

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin: 50px;
  width: 90%;
  height: 90%;
`

export default function Contacts({ user, jobs }) {
  const [showModal, setShowModal] = useState(false)

  const handleAdd = () => {
    setShowModal(prev => !prev)
  }

  return (
    <CardContainer>
      {jobs.map(job => {
        return (
          job.contacts.map(contact => {
            return(
              <ContactCard job={job} contact={contact} />
            )
          })
        )
      })}
    {showModal ? 
      <ContactEdit 
        user={user} 
        setShowModal={setShowModal}/> : ''}
    </CardContainer>
  )
}
