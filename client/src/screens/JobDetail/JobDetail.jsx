import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ContactCard from '../../components/ContactCard/ContactCard'
import ContactCreate from '../../components/ContactCreate/ContactCreate'
import ContactEdit from '../../components/ContactEdit/ContactEdit'
import DeleteAlert from '../../components/DeleteAlert/DeleteAlert'
import JobEdit from '../../components/JobEdit/JobEdit'
import NoteCard from '../../components/NoteCard/NoteCard'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'
import add from '../../assets/add-icon.svg'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const DetailsContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 50% 50%;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 90vw;

  @media (max-width: 1024px) {
    grid-template-columns: 70%
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 90%;
  }
`
const DetailsColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 50px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    align-items: start;
    max-width: 350px;
    margin: 5px;
    padding: 10px;
  }
`
const NotesColumn = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  height: 740px;
  padding: 20px 20px 0 50px;

  @media (max-width: 1024px) {
    align-items: cener;
    padding-left: 30px;
    width: 100%;
  }

  @media (max-width: 425px) {
    margin: 5px;
    padding: 10px;
    width: 100%;
  }
`
const Details = styled.div`
  background-color: #FFF4EE;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 5px;
    width: 90%;
  }
`
const ContactsList = styled.div`
  background-color: #FFF4EE;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px 20px 0 20px;
  width: 100%;

  @media (max-width: 425px) {
    padding: 5px;
    width: 90%;
  }

`
const ContactCards = styled.div`
  display: flex;
  overflow-x: auto;
`
const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #FFF4EE;
  border-radius: 5px;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 5px;
    width: 90%;
  }
`
const DetailsCard = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 2px 2px 3px grey;
  height: 100%;
  margin: 20px;
  padding: 10px 10px 20px 10px;
`
const Title = styled.h4`
  align-self: start;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  letter-spacing: .7em;
  margin: 5px;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: .9em;
  }
`
const TitleOrange = styled.h5`
  color: #E94D4D;
  letter-spacing: .3em;
  margin: 5px 0 15px 0;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: .7em;
  }
`
const DateOrange = styled.h6`
  color: #E94D4D;
  margin: -10px 10px 5px 10px;
`
const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
  margin: 5px 10px;

  @media (max-width: 425px) {
    font-size: .6em;
  }
`
const Icon = styled.img`
  cursor: pointer;  
  margin: 0 5px;
  width: 20px;
`
const ButtonDiv = styled.div`
  align-self: end;
  display: flex;
  justify-content: end;
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
const AddIcon = styled.img`
  cursor: pointer;
  width: 25px;
`
const IconDiv = styled.div`
  justify-self: center;
  margin-top: 5px;
`

export default function JobDetail({ jobs, user, editJob, deleteJob, newNote, deleteNote, newContact, editContact, deleteContact }) {
  const [job, setJob] = useState(null)
  const [showEditJobModal, setShowEditJobModal] = useState(false)
  const [showEditContactModal, setShowEditContactModal] = useState(false)
  const [showAddContactModal, setShowAddContactModal] = useState(false)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [contactId, setContactId] = useState(null)
  const [contact, setContact] = useState(null)
  const { id } = useParams()

  useEffect(() => {
      const job = jobs?.find(job => job.id === Number(id))
      setJob(job)
  }, [jobs, id])

  const handleEdit = () => {
    setShowEditJobModal(prev => !prev)
  }

  const confirmDelete = () => {
    setShowDeleteAlert(prev => !prev)
  }

  const handleContactEdit = (id) => {
    setShowEditContactModal(prev =>! prev)
    setContact((jobs.find(job => {
      return (
        job.contacts.find(contact => contact.id === Number(id))
      )})).contacts.find(contact => contact.id === Number(id))
    )
    setContactId(id)
  }

  const handleAdd = () => {
    setShowAddContactModal(prev => !prev)
  }

  const handleNoteDelete =  (job_id, id) => {
    deleteNote(job_id, id)
  }

  return (
    <Container>
    <DetailsContainer>
      <DetailsColumn>
        <Title>Job Details</Title>
        <Details>
          <DetailsCard>
          <ButtonDiv>
            <div onClick={handleEdit}>
              <Icon src={editIcon} alt='update job' />
            </div>
            <div onClick={confirmDelete}>
              <Icon src={deleteIcon} alt='delete job' />
            </div>
          </ButtonDiv>
          <TitleOrange>{job?.company}</TitleOrange>
          {job?.url.length>1 ? (
            <DetailsText>
              <a 
                href={job?.url} 
                alt={job?.url} 
                target='_blank' 
                rel="noreferrer"
              >Link to Post</a>
            </DetailsText> ) : ''}
          <DetailsText>Location: {job?.location}</DetailsText>
          <DetailsText>Position: {job?.position}</DetailsText>
          <DetailsText>Salary: {job?.salary}</DetailsText>
          <DetailsText>Date Applied: {job?.applied}</DetailsText>
          <DetailsText>Next Interview: {job?.interview}</DetailsText>
          <DetailsText>Date of Offer: {job?.offer}</DetailsText>
          <DetailsText>Salary Offered: {job?.offerSalary}</DetailsText>
          </DetailsCard>
        </Details>
        <Title>Contacts</Title>
        <ContactsList>
          <IconDiv onClick={handleAdd}>
            <AddIcon src={add} alt='add job' />
          </IconDiv>
          <ContactCards>
            {job?.contacts.map(contact => {
              return (
                <ContactCard 
                  key={contact.id}
                  setShowEditContactModal={setShowEditContactModal} 
                  contact={contact} 
                  handleContactEdit={handleContactEdit}
                  deleteContact={deleteContact}
                  job={job} />
              )
            })}
          </ContactCards>
        </ContactsList>
      </DetailsColumn>
      <NotesColumn>
        <Title>Notes</Title>
        <NotesList>
          <NoteCard 
            job={job} 
            handleNoteDelete={handleNoteDelete}
            newNote={newNote}
            DateOrange={DateOrange}
            Icon={Icon}
            ButtonDiv={ButtonDiv}
            id={id} />
        </NotesList> 
      </NotesColumn>
      {showEditJobModal ? 
        <>
          <Overlay></Overlay>
          <JobEdit 
            job={job} 
            editJob={editJob} 
            setShowEditJobModal={setShowEditJobModal}/> 
        </>  : ''}
        {showAddContactModal ? 
        <>
          <Overlay></Overlay>
          <ContactCreate
            job={job} 
            newContact={newContact} 
            setShowAddContactModal={setShowAddContactModal}/> 
        </>  : ''}
        {showEditContactModal ? 
        <>
          <Overlay></Overlay>
          <ContactEdit 
            id={contactId}
            contact={contact}
            user={user} 
            editContact={editContact}
            setShowEditContactModal={setShowEditContactModal}/> 
        </>  : ''}
        {showDeleteAlert ? 
        <>
          <Overlay></Overlay>
          <DeleteAlert 
            job={job}
            deleteJob={deleteJob}
            setShowDeleteAlert={setShowDeleteAlert} />
        </>  : ''}
    </DetailsContainer>
    </Container>
  )
}
