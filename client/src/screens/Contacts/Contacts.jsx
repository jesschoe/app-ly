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
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: #0F3875;
  opacity: .5;
`

export default function Contacts({ user, jobs, editContact }) {
  const [showModal, setShowModal] = useState(false)
  const [contactId, setContactId] = useState(null)
  const [contact, setContact] = useState(null)

  const handleEdit = (id) => {
    setShowModal(prev =>! prev)
    setContact((jobs.find(job => {
      return (
        job.contacts.find(contact => contact.id === Number(id))
      )})).contacts.find(contact => contact.id === Number(id))
    )
    setContactId(id)
  }

  
  return (
    <CardContainer>
      {jobs?.map(job => {
        return (
          job.contacts.map(contact => {
            return(
              <div key={contact.id}>
                <ContactCard 
                  job={job} 
                  contact={contact} 
                  handleEdit={handleEdit} />
              </div>
            )
          })
        )
      })}
    {showModal ? 
      <>
        <Overlay></Overlay>
        <ContactEdit 
          id={contactId}
          contact={contact}
          user={user} 
          editContact={editContact}
          setShowModal={setShowModal}/> 
      </> : ''
    }
    </CardContainer>
  )
}
