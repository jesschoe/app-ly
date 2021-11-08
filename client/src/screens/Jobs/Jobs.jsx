import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import JobCard from '../../components/JobCard/JobCard'
import JobCreate from '../../components/JobCreate/JobCreate'
import add from '../../assets/add-icon.svg'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-items: center;
  overflow: hidden;
  padding: 20px;
  width: 90%;

  @media (max-width: 425px) {
    padding: 5px;
  }
`
const CardTop = styled.div`
  background-color: #FFF4EE;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 85%;
  margin: 20px;
  padding: 20px;
  width: 80%;

  @media (max-width: 425px) {
    background-color: #0F3875;
    margin: 20px 10px;
    padding: 10px;
    width: 90%;
  }
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
`
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`
const Title = styled.h4`
  align-self: start;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  justify-self: start;
  letter-spacing: .7em;
  margin: 20px 0 0 20px;
  text-transform: uppercase;
`
const HelperText = styled.div`
  color: #0F3875;
  font-size: .7em;
  font-style: italic;
  margin: 20px;

  @media (max-width: 575px) {
    display: none;
  }
`
const AddIcon = styled.img`
  cursor: pointer;
  width: 25px;
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

export default function Jobs({ user, jobs, newJob }) {
  const [showAddJobModal, setShowAddJobModal] = useState(false)

  const handleAdd = () => {
    setShowAddJobModal(prev => !prev)
  }

  return (
    <>
      <TitleDiv>
        <Title>All Jobs</Title>
        <HelperText>click a card to see details</HelperText>
      </TitleDiv>
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
