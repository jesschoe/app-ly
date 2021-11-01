import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
      <div>
        {job?.salary}
      </div>
      <div>
        {job?.contacts[0].name}
      </div>
      <div>
        {job?.notes[0].content}
      </div>
    </div>
  )
}
