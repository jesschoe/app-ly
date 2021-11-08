import { useState } from 'react'
import styled from 'styled-components'
import ContactCard from '../../components/ContactCard/ContactCard'
import ContactEdit from '../../components/ContactEdit/ContactEdit'

const Container = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 90%;
  overflow: hidden;
  padding: 20px;
  width: 90%;
`

const CardContainer = styled.div`
  background-color: #FFF4EE;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  overflow-y: auto;
  padding: 20px 0;
  width: 90%;

  @media (max-width: 425px) {
    background-color: #0F3875;
  }
`
const Title = styled.h4`
  align-self: start;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  justify-self: start;
  letter-spacing: .5em;
  margin: 20px 0 0 20px;
  text-transform: uppercase;

  @media (max-width: 425px) {
    margin: 50px 0 0 0 0;
  }
`
const Overlay = styled.div`
  background-color: #0F3875;
  height: 100%;
  left: 0;
  opacity: .5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

export default function Contacts({ user, jobs, editContact, newContact, deleteContact }) {
  const [showEditContactModal, setShowEditContactModal] = useState(false)
  const [contactId, setContactId] = useState(null)
  const [contact, setContact] = useState(null)

  const handleContactEdit = (id) => {
    setShowEditContactModal(prev =>! prev)
    setContact((jobs?.find(job => {
      return (
        job.contacts.find(contact => contact.id === Number(id))
      )})).contacts.find(contact => contact.id === Number(id))
    )
    setContactId(id)
  }
  
  return (
    <>
    {jobs && (
      <>
      <Title>All Contacts</Title>
      <Container>
        <CardContainer>
          {jobs?.map(job => {
            return (
              job?.contacts.map(contact => {
                return(
                  <div key={contact.id}>
                    <ContactCard 
                      job={job} 
                      contact={contact} 
                      handleContactEdit={handleContactEdit}
                      deleteContact={deleteContact} />
                  </div>
                )
              })
            )
          })}
        {showEditContactModal ? 
          <>
            <Overlay></Overlay>
            <ContactEdit 
              id={contactId}
              contact={contact}
              user={user} 
              editContact={editContact}
              setShowEditContactModal={setShowEditContactModal}/> 
          </> : ''
        }
        </CardContainer> 
      </Container>
    </> )}
    </>
  )
}
