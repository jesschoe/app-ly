import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { readAllJobs, createJob, updateJob, destroyJob } from '../services/jobs'
import { createContact, updateContact } from '../services/contacts'
import Layout from '../layouts/Layout'
import Jobs from '../screens/Jobs/Jobs'
import Contacts from '../screens/Contacts/Contacts'
import JobDetail from '../screens/JobDetail/JobDetail'
import Board from '../screens/Board/Board'

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

  const saveBoard = async (id, formData) => {
    const updatedJob = await updateJob(user.id, id, formData);
    console.log('api', updatedJob)
    setJobs(prevState => prevState.map(job => {
      return job.id === Number(id) ? updatedJob : job
    }))
    history.push(`/jobs/all/board`);
  }

  const deleteJob = async (id) => {
    await destroyJob(user.id, id);
    setJobs(prevState => prevState.filter(job => {
      return job.id !== id
    }))
    history.push('/jobs');
  }

  const editContact = async (job_id, id, formData) => {
    const updatedContact = await updateContact(user.id, job_id, id, formData);
    setJobs(prevState => {
      let job = prevState.find(job => {
      return job.id === Number(job_id)})
      let contact = job.contacts.find(contact => {
        return contact.id === Number(id)})
    })
    history.push(`/jobs/all/contacts`);
  }

  return (
    <div>
      <Layout user={user} handleLogout={handleLogout}>
        <Switch>
        <Route path='/jobs/all/board'>
            <Board
              jobs={jobs}
              user={user}
              saveBoard={saveBoard}
            />
          </Route>
          <Route path='/jobs/all/contacts'>
            <Contacts
              jobs={jobs}
              user={user}
              editContact={editContact}
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
