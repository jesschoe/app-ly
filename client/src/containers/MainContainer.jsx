import { useState, useEffect, useLayoutEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

export default function MainContainer({ user, handleLogout }) {
  const [jobs, setJobs] = useState([])
  const history = useHistory()


  return (
    <div>
      <Layout user={user} handleLogout={handleLogout}>
        <Switch>
          <Route path='/jobs/new'>
            <JobCreate
              newJob={newJob}
            />
          </Route>
          <Route path='/jobs/:id'>
            <JobDetail
              deleteJob={deleteJob}
              currentUser={currentUser}
              editJob={editJob}
              jobs={jobs}
            />
          </Route>
          <Route path='/jobs'>
            <Jobs
              currentUser={currentUser}
              jobs={jobs}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}
