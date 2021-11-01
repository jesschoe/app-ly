import { Link } from 'react-router-dom'
import JobCard from '../../components/JobCard/JobCard'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
`

export default function Jobs({ user, jobs }) {

  return (
    <CardContainer>
      {jobs.map(job => {
        return (
          <div key={job.id}>
            <Link to={`/jobs/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          </div>
        )
      })}
    </CardContainer>
  )
}
