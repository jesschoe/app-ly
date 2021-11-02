import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import JobEdit from '../../components/JobEdit/JobEdit'

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`
const DetailsContacts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 65%;
  height: 100vh;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  height: 50%;
`
const ContactsList = styled.div`
  display: flex;
  flex-flow: row-wrap;
  flex: 1
  justify-content: center;
  background-color: #FFF4EE;
  border-radius: 5px;
  padding: 20px;
`
const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin: 50px 50px 50px 0;
  padding: 50px;
`

const Card = styled.div`
  background-color: #FFFFFF;
  width: 250px;
  height: 150px;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 10px;
`
const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`

export default function JobDetail({ jobs, user, editJob, deleteJob }) {
  const [job, setJob] = useState({})
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if(jobs.length) {
      const job = jobs.find(job => job.id === Number(id))
      setJob(job)
      console.log('hi',job)
    }
  }, [id])

  const handleEdit = () => {
    setShowModal(prev => !prev)
  }

  return (
    <DetailsContainer>
      <DetailsContacts>
        <Details>
          <h4>{job.company}</h4>
          <DetailsText>location: {job.location}</DetailsText>
          <DetailsText>salary: {job.salary}</DetailsText>
          {/* {job.url} */}
          {/* {job.applied}
          {job.interview}
          {job.offer}
          {job.offerSalary} */}
          <div>
            <button onClick={handleEdit}>
              edit
            </button>
            <button onClick={deleteJob}>
              delete
            </button>
          </div>
        </Details>
        <ContactsList>
          {job.contacts?.map(contact => {
            return (
              <Card>
                <h5>{contact.name}</h5>
                <DetailsText>company: {job.company}</DetailsText>
                <DetailsText>position: {contact.position}</DetailsText>
                <DetailsText>email: {contact.email}</DetailsText>
                <DetailsText>phone: {contact.phone}</DetailsText>
              </Card>
            )
          })}
        </ContactsList>
      </DetailsContacts>
      <NotesList>
        {job.notes?.map(note => {
          return (
            <Card>
              <h5>{note.date}</h5>
              <DetailsText>{note.content}</DetailsText>
            </Card>
          )
        })}
      </NotesList>
      {showModal ? <JobEdit job={job} editJob={editJob} setShowModal={setShowModal}/> : ''}
    </DetailsContainer>
  )
}
