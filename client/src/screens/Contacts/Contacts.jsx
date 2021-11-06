import { useState } from 'react'
import styled from 'styled-components'
import ContactCard from '../../components/ContactCard/ContactCard'
import ContactEdit from '../../components/ContactEdit/ContactEdit'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow: hidden;
  width: 90%;
  height: 90%;
  padding: 20px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin: 20px;
  width: 90%;
  overflow-y: auto;

  @media (max-width: 375px) {
    background-color: #0F3875;
  }
`
const Title = styled.h4`
  text-transform: uppercase;
  justify-self: start;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  letter-spacing: .7em;
  align-self: start;
  margin: 20px 0 0 20px;
`

const HelperText = styled.div`
  align-self: start;
  font-style: italic;
  font-size: .7em;
  color: #0F3875;
  margin-left: 20px;
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

export default function Contacts({ user, jobs, editContact, newContact, deleteContact }) {
  const [showEditContactModal, setShowEditContactModal] = useState(false)
  const [contactId, setContactId] = useState(null)
  const [contact, setContact] = useState(null)

  const handleContactEdit = (id) => {
    setShowEditContactModal(prev =>! prev)
    setContact((jobs.find(job => {
      return (
        job.contacts.find(contact => contact.id === Number(id))
      )})).contacts.find(contact => contact.id === Number(id))
    )
    setContactId(id)
  }

  
  return (
    <>
      <Title>All Contacts</Title>
      <HelperText>click to see details</HelperText>
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
    </>
  )
}
