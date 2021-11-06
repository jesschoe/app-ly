import { useState } from 'react'
import { Link } from 'react-router-dom'
import JobCard from '../../components/JobCard/JobCard'
import styled from 'styled-components'
import JobCreate from '../../components/JobCreate/JobCreate'
import add from '../../assets/add-icon.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  width: 90%;
  height: 90%;
  padding: 20px;

  @media (max-width: 375px) {
    padding: 5px;
  }
`

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF4EE;
  border-radius: 5px;
  padding: 20px;
  height: 85%;
  width: 80%;
  margin: 20px;

  @media (max-width: 375px) {
    width: 90%;
    margin: 20px 10px;
    background-color: #0F3875;
    padding: 10px;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
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

const AddIcon = styled.img`
  cursor: pointer;
  width: 25px;
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

export default function Jobs({ user, jobs, newJob }) {

  const [showAddJobModal, setShowAddJobModal] = useState(false)

  const handleAdd = () => {
    setShowAddJobModal(prev => !prev)
  }

  return (
    <>
      <Title>All Jobs</Title>
      <HelperText>click to see details</HelperText>
      <Container>
        
        <CardTop>
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
          {showAddJobModal ? (
            <>
              <Overlay></Overlay>
              <JobCreate 
                user={user} 
                newJob={newJob} 
                setShowAddJobModal={setShowAddJobModal}/> 
            </>): ''}
          </CardContainer>
        </CardTop>
      </Container>
    </>
  )
}
