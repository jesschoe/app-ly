import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import ContactCard from '../../components/ContactCard/ContactCard'

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
  width: 55%;
  height: 100vh;
`
const Details = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  height: 60%;
`
const ContactsList = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  background-color: #FFF4EE;
  border-radius: 5px;
  padding: 20px;
  height: 20%;
`
const NotesList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin: 50px 50px 50px 0;
  padding: 50px;

  height: 100%;
`

export default function JobDetail({ jobs, user, editJob, deleteJob }) {
  const [job, setJob] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    if(jobs.length) {
      const job = jobs.find(job => job.id === Number(id))
      setJob(job)
    }
  }, [jobs, id])

  return (
    <DetailsContainer>
      <DetailsContacts>
        <Details>
          {job?.salary}
        </Details>
        <ContactsList>
          <ContactCard job={job}/>
        </ContactsList>
      </DetailsContacts>
      <NotesList>
        <div>
        {job?.notes[0].content}
        </div>
      </NotesList>
    </DetailsContainer>
  )
}
