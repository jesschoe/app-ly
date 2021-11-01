import { Link } from 'react-router-dom'
import JobCard from '../../components/JobCard/JobCard'

export default function Jobs({ user, jobs }) {

  return (
    <div>
      {jobs.map(job => {
        return (
          <div key={job.id}>
            <Link to={`/jobs/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
