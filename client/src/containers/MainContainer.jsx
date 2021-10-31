import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
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
      console.log(jobs)
      setJobs(jobs);
    }
    fetchJobs();
  }, [])

  const newJob = async (formData) => {
    const newJob = await createJob(formData);
    setJobs(prevState => [...prevState, newJob]);
    history.push('/');
  }

  const editJob = async (id, formData) => {
    const updatedJob = await updateJob(id, formData);
    setJobs(prevState => prevState.map(job => {
      return job.id === Number(id) ? updatedJob : job
    }))
    history.push(`/${id}`);
  }

  const deleteJob = async (id) => {
    await destroyJob(id);
    setJobs(prevState => prevState.filter(job => {
      return job.id !== id
    }))
    history.push('/');
  }

  return (
    <div>
      <Layout user={user} handleLogout={handleLogout}>
        <Switch>
          <Route path='/contacts'>
            <Contacts
              newJob={newJob}
            />
          </Route>
          <Route path='/jobs/:id'>
            <JobDetail
              deleteJob={deleteJob}
              user={user}
              editJob={editJob}
              jobs={jobs}
            />
          </Route>
          <Route path='/jobs'>
            <Jobs
              user={user}
              jobs={jobs}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}
