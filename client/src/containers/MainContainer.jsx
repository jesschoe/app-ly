import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { readAllJobs, createJob, updateJob, destroyJob } from '../services/jobs'
import { createContact, updateContact, createNote, destroyContact, destroyNote } from '../services/contacts'
import Layout from '../layouts/Layout'
import Jobs from '../screens/Jobs/Jobs'
import Contacts from '../screens/Contacts/Contacts'
import JobDetail from '../screens/JobDetail/JobDetail'
import Board from '../screens/Board/Board'

export default function MainContainer({ user, handleLogout }) {
  const [jobs, setJobs] = useState([])
  const [toggle, setToggle] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await readAllJobs(1);
      setJobs(jobs);
    }
    fetchJobs();
  }, [toggle])

  const newJob = async (formData) => {
    const newJob = await createJob(user.id, formData);
    setJobs(prevState => [...prevState, newJob]);
    setToggle(prev => !prev)
  }

  const editJob = async (id, formData) => {
    const updatedJob = await updateJob(user.id, id, formData);
    setJobs(prevState => prevState.map(job => {
      return job.id === Number(id) ? updatedJob : job
    }))
    history.push(`/jobs/${id}`);
  }

  const saveBoard = async (id, formData) => {
    const updatedJob = await updateJob(user?.id, id, formData);
    console.log('api', updatedJob)
    setJobs(prevState => prevState.map(job => {
      return job.id === Number(id) ? updatedJob : job
    }))
    history.push(`/jobs/all/board`);
  }

  const deleteJob = async (id) => {
    await destroyJob(user.id, id);
    setToggle(prev => !prev)
    history.push(`/jobs`)
  }

  const newContact = async (job_id, formData) => {
    await createContact(user.id, job_id, formData)
    setToggle(prev => !prev)
  }

  const editContact = async (job_id, id, formData) => {
    await updateContact(user.id, job_id, id, formData)
    setToggle(prev => !prev)
  }

  const deleteContact = async (job_id, id) => {
    await destroyContact(user.id, job_id, id)
    setToggle(prev => !prev)
  }

  const newNote = async (job_id, formData) => {
    await createNote(user.id, job_id, formData)
    setToggle(prev => !prev);
  }

  const deleteNote = async (job_id, id) => {
    await destroyNote(user.id, job_id, id);
    setToggle(prev => !prev)
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
              newJob={newJob}
            />
          </Route>
          <Route path='/jobs/all/contacts'>
            <Contacts
              jobs={jobs}
              user={user}
              editContact={editContact}
              deleteContact={deleteContact}
            />
          </Route>
          <Route path='/jobs/:id'>
            <JobDetail
              jobs={jobs}
              user={user}
              editJob={editJob}
              deleteJob={deleteJob}
              newNote={newNote}
              deleteNote={deleteNote}
              newContact={newContact}
              editContact={editContact}
              deleteContact={deleteContact}
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
