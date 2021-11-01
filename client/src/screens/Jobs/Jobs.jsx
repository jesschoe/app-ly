import { Link } from 'react-router-dom'
import JobCard from '../../components/JobCard/JobCard'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  background-color: #FFF4EE;
  border-radius: 5px;
  margin: 50px;
  width: 90%;
  height: 90%;

`

export default function Jobs({ user, jobs }) {

  return (
    <CardContainer>
      {jobs.map(job => {
        return (
          <div key={job.id}>
            <Link 
              to={`/jobs/${job.id}`} 
              key={job.id}
              style={{textDecoration:'none', color:'#0F3875'}}
            >
              <JobCard job={job} />
            </Link>
          </div>
        )
      })}
    </CardContainer>
  )
}
