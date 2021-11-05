import { useState } from 'react'
import { Link } from 'react-router-dom'
import JobCard from '../../components/JobCard/JobCard'
import styled from 'styled-components'
import JobCreate from '../../components/JobCreate/JobCreate'
import add from '../../assets/add-icon.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin: 50px;
  padding: 20px;
  width: 90%;
  height: 90%;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
`

const AddIcon = styled.img`
  cursor: pointer;
  width: 25px;
`

export default function Jobs({ user, jobs, newJob }) {

  const [showAddJobModal, setShowAddJobModal] = useState(false)

  const handleAdd = () => {
    setShowAddJobModal(prev => !prev)
  }

  return (
    <Container>
      <div onClick={handleAdd}><AddIcon src={add} alt='add job' /></div>
      <CardContainer>
        {jobs.map(job => {
          return (
            <Link 
              to={`/jobs/${job.id}`} 
              key={job.id}
              style={{textDecoration:'none', color:'#0F3875'}}
            >
              <JobCard job={job} />
            </Link>
          )
        })}
      {showAddJobModal ? 
        <JobCreate 
          user={user} 
          newJob={newJob} 
          setShowModal={setShowAddJobModal}/> : ''}
      </CardContainer>
    </Container>
  )
}
