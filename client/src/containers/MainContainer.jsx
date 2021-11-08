import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { readAllJobs, createJob, updateJob, destroyJob } from '../services/jobs'
import { createContact, updateContact, createNote, destroyContact, destroyNote } from '../services/contacts'
import Layout from '../layouts/Layout'
import Board from '../screens/Board/Board'
import Contacts from '../screens/Contacts/Contacts'
import JobDetail from '../screens/JobDetail/JobDetail'
import Jobs from '../screens/Jobs/Jobs'

export default function MainContainer({ user, handleLogout }) {
  const [jobs, setJobs] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await readAllJobs(user?.id);
      setJobs(res);
    }
    fetchJobs();
  }, [toggle, user])

  const newJob = async (formData) => {
    const newJob = await createJob(user?.id, formData);
    setJobs(prevState => [...prevState, newJob]);
    setToggle(prev => !prev)
  }

  const editJob = async (id, formData) => {
    await updateJob(user.id, id, formData);
    setToggle(prev => !prev);
  }

  const saveBoard = async (id, formData) => {
    const updatedJob = await updateJob(user?.id, id, formData);
    setJobs(prevState => prevState.map(job => {
      return job.id === Number(id) ? updatedJob : job
    }));
  }

  const deleteJob = async (id) => {
    try {
      await destroyJob(user?.id, id);
      setToggle(prev => !prev)
    } catch(error) {
      console.log(error)
    }
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
      {jobs && (
      <Layout user={user} handleLogout={handleLogout}>
        <Switch>
        <Route path='/jobs/all/board'>
            <Board
              jobs={jobs}
              user={user}
              saveBoard={saveBoard}
              newJob={newJob}
              editJob={editJob}
            />
          </Route>
          <Route path='/jobs/all/contacts'>
            <Contacts
              jobs={jobs}
              user={user}
              deleteContact={deleteContact}
              editContact={editContact}
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
      </Layout> )}
    </div>
  )
}
