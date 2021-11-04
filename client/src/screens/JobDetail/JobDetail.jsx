import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ContactCard from '../../components/ContactCard/ContactCard'
import JobEdit from '../../components/JobEdit/JobEdit'
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'


const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 70%
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
`

const NotesColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
  padding: 20px 20px 20px 50px;
  height: 100vh;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
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
`

const ContactsList = styled.div`
  display: flex;
  justify-content: start;
  background-color: #FFF4EE;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  height: 300px;
  overflow-x: auto;
`
const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #FFF4EE;
  border-radius: 5px;
  padding: 20px;
`

const NotesForm = styled.form`

`

const DetailsCard = styled.div`
  background-color: #FFFFFF;
  height: 100%;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 10px;
`

const NoteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #FFFFFF;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 0 20px 20px 20px;
`

const Title = styled.h4`
  text-transform: uppercase;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  letter-spacing: .7em;
  align-self: start;
  margin: 5px;
`

const TitleOrange = styled.h5`
  text-transform: uppercase;
  color: #E94D4D;
  letter-spacing: .3em;
`

const DateOrange = styled.h6`
  color: #E94D4D;
`

const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`

const Icon = styled.img`
  cursor: pointer;  
  width: 20px;
  margin: 0 5px;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  
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

export default function JobDetail({ jobs, user, editJob, deleteJob, newNote, newContact }) {
  const [job, setJob] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const { id } = useParams()
  const [formData, setFormData] = useState({
    date: '',
    content: '',
    job_id: id
  })
  
  useEffect(() => {
    if(jobs.length) {
      const job = jobs.find(job => job.id === Number(id))
      setJob(job)
    }
  }, [jobs, id])

  const handleEdit = () => {
    setShowModal(prev => !prev)
  }

  const handleDelete = () => {
    deleteJob(id)
  }

  const toggleContacts = () => {
    setShowContacts(prev => !prev)
  }

  const toggleNotes = () => {
    setShowNotes(prev => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
  }))
  }

  return (
    <DetailsContainer>
      <DetailsColumn>
        <Title>Job Details</Title>
        <Details>
          <DetailsCard>
          <ButtonDiv>
            <div onClick={handleEdit}><Icon src={editIcon} alt='update contact' /></div>
            <div onClick={handleDelete}><Icon src={deleteIcon} alt='delete contact' /></div>
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
          {console.log(job)}
          </DetailsCard>
        </Details>
        <Title style={{cursor: 'pointer'}} onClick={toggleContacts}>Contacts</Title>
        <ContactsList>
          {job?.contacts.map(contact => {
            return <ContactCard contact={contact} job={job} />
          })}
        </ContactsList>
      </DetailsColumn>
      <NotesColumn>
        <Title style={{cursor: 'pointer'}} onClick={toggleNotes}>Notes</Title>
        <NotesList>
          {job?.notes.map(note => {
            return (
              <NoteCard>
                <DateOrange>{note.date}</DateOrange>
                <DetailsText>{note.content}</DetailsText>
              </NoteCard>
            )
          })}
          <NotesForm onSubmit={e => {
            e.preventDefault()
            newNote(job.id, formData)
          }}>
            <input type='text' name='content' value={formData.content} onChange={handleChange} />
            <button type='submit'>add</button>
          </NotesForm>
        </NotesList> 
      </NotesColumn>
      {showModal ? 
        <>
          <Overlay></Overlay>
          <JobEdit 
            job={job} 
            editJob={editJob} 
            setShowModal={setShowModal}/> 
        </>  : ''}
    </DetailsContainer>
  )
}
