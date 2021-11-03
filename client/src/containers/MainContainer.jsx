import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { readAllJobs, createJob, updateJob, destroyJob } from '../services/jobs'
import Layout from '../layouts/Layout'
import Jobs from '../screens/Jobs/Jobs'
import Contacts from '../screens/Contacts/Contacts'
import JobDetail from '../screens/JobDetail/JobDetail'

export default function MainContainer({ user, handleLogout }) {
  const [jobs, setJobs] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await readAllJobs(1);
      setJobs(jobs);
    }
    fetchJobs();
  }, [])

  const newJob = async (formData) => {
    const newJob = await createJob(user.id, formData);
    setJobs(prevState => [...prevState, newJob]);
    history.push('/jobs');
  }

  const editJob = async (id, formData) => {
    const updatedJob = await updateJob(user.id, id, formData);
    setJobs(prevState => prevState.map(job => {
      return job.id === Number(id) ? updatedJob : job
    }))
    history.push(`/jobs/${id}`);
  }

  const deleteJob = async (id) => {
    await destroyJob(user.id, id);
    setJobs(prevState => prevState.filter(job => {
      return job.id !== id
    }))
    history.push('/jobs');
  }

  return (
    <div>
      <Layout user={user} handleLogout={handleLogout}>
        <Switch>
          <Route path='/jobs/all/contacts'>
            <Contacts
              jobs={jobs}
              user={user}
            />
          </Route>
          <Route path='/jobs/:id'>
            <JobDetail
              jobs={jobs}
              user={user}
              editJob={editJob}
              deleteJob={deleteJob}
            />
          </Route>
          <Route exact path='/jobs'>
            <Jobs
              user={user}
              jobs={jobs}
              newJob={newJob}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}
