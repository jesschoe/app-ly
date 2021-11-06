import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ContactCard from '../../components/ContactCard/ContactCard'
import JobEdit from '../../components/JobEdit/JobEdit'
import ContactCreate from '../../components/ContactCreate/ContactCreate'
import ContactEdit from '../../components/ContactEdit/ContactEdit'
import DeleteAlert from '../../components/DeleteAlert/DeleteAlert'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'
import add from '../../assets/add-icon.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 5px;
  width: 90vw;
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 70%
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 90%;
  }
`

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 50px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    padding: 10px;
    max-width: 350px;
    margin: 5px;
    align-items: start;
  }
`

const NotesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 20px 0 50px;
  height: 740px;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: cener;
    padding-left: 30px;
  }

  @media (max-width: 375px) {
    padding: 10px;
    width: 100%;
    margin: 5px;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;

  @media (max-width: 375px) {
    padding: 5px;
    width: 90%;
  }
`

const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #FFF4EE;
  border-radius: 5px;
  padding: 20px 20px 0 20px;
  width: 100%;

  
  @media (max-width: 375px) {
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
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    padding: 5px;
    width: 90%;
  }
`

const NotesForm = styled.form`
  display: flex;
  margin: 20px;
`

const NoteInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  border: none;
  autofocus;
  &:focus {
    outline: none;
    border: 1px solid #E94D4D;
  }
`

const DetailsCard = styled.div`
  background-color: #FFFFFF;
  height: 100%;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 10px 10px 20px 10px;
`

const NoteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #FFFFFF;
  margin: 10px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 10px;
`

const Title = styled.h4`
  text-transform: uppercase;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  letter-spacing: .7em;
  align-self: start;
  margin: 5px;

  @media (max-width: 375px) {
    font-size: .9em;
  }
`

const TitleOrange = styled.h5`
  text-transform: uppercase;
  color: #E94D4D;
  letter-spacing: .3em;
  margin: 5px 0 15px 0;

  @media (max-width: 375px) {
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

  @media (max-width: 375px) {
    font-size: .6em;
  }
`

const Icon = styled.img`
  cursor: pointer;  
  width: 20px;
  margin: 0 5px;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  align-self: end;
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

const AddIcon = styled.img`
  cursor: pointer;
  width: 25px;
`

const IconDiv = styled.div`
  justify-self: center;
  margin-top: 5px;
`

const Button = styled.button`
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  font-size: .5em;
  padding: 7px 20px;
  text-transform: uppercase;
  align-self: center;
  margin: 0 0 0 10px;
  cursor: pointer;
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
  const [formData, setFormData] = useState({
    date: new Date(),
    content: '',
    job_id: id
  })
  
  
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
  }))
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
            <div onClick={handleEdit}><Icon src={editIcon} alt='update job' /></div>
            <div onClick={confirmDelete}><Icon src={deleteIcon} alt='delete job' /></div>
          </ButtonDiv>
          <TitleOrange>{job?.company}</TitleOrange>
          <DetailsText><a href={job?.url}>Link to Post</a></DetailsText>
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
          <IconDiv onClick={handleAdd}><AddIcon src={add} alt='add job' /></IconDiv>
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
          <NotesForm onSubmit={e => {
            e.preventDefault()
            newNote(job.id, formData)
            setFormData({    
              date: new Date(),
              content: '',
              job_id: id
            })
          }}>
            <NoteInput type='text' name='content' value={formData.content} onChange={handleChange} />
            <Button type='submit'>add</Button>
          </NotesForm>
          {job?.notes.slice(0).reverse().map(note => {
            return (
              <NoteCard key={note.id}>
                <ButtonDiv onClick={() => handleNoteDelete(note.job_id, note.id)}>
                  <Icon src={deleteIcon} alt='delete note' />
                </ButtonDiv>
                <DateOrange>{note.date}</DateOrange>
                <DetailsText>{note.content}</DetailsText>
              </NoteCard>
            )
          })}
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
